---
title: "The State of Immutable Linux"
date: 2026-03-20
description: "Lies, damn lies, and read only filesystems"
images: [/img/immutable-linux-banner.jpg]
thumbnail: /img/immutable-linux-banner.jpg
draft: false
---

I gave a talk at [SoCal Linux Expo](https://socallinuxexpo.org) explaining what an "immutable" OS means and how some of the popular distributions implement immutability.

{{< youtube jvdPuTcdGXs >}}

Linux was never designed to start up and change nothing.
There's no such thing as a 100% immutable.
The problem immutability is trying to solve is preditcable and scoped changes.

Usually, the distribution will market immutability to mean, more secure, more reliable, or the ability to roll back.
These are all things traditional, mutable, distros struggled with and were often causes for outages and toil.

Here's a summary from my talk about how each distribution implements immutability.

## Flatcar Linux

CoreOS, later named Container Linux, was the first distro I was aware of in this space.
Chromebooks originally implemented this update mechanism, called [Omaha](https://github.com/flatcar/nebraska) and later Android adopted it too.
CoreOS, the company, got bought by Red Hat who got bought by IBM.

Omaha is cool and efficient with block level diffs between versions.
If you're upgrading from version 3218 -> 3230 you will download only the blocks that are different as long as that diff has been calculated ahead of time.
This doesn't work for every version change, but it is agnostic to what type of filesystem or files change.

Container Linux under Red Hat was abandoned, abranded?, to rename their [Project Atomic](https://projectatomic.io) to Fedora CoreOS.
There is almost no similarities between the projects except the brand name.

At the time of aquisition, Container Linux was forked into Flatcar Linux which was later bought by Microsoft as part of the Kinvolk aquisition and recently donated to the CNCF.
Flatcar is the real successor to CoreOS Linux imutability implementation.

While most distributions describe their update mechanism as A/B partitions, Flatcar is the only one that has **actual** partitions on disk.
The OS has USR-A and USR-B partitions that write the immutable parts of the distro and boots back and forth between them.
Every other distro has A/B trees of files or images on the same partition.

Flatcar makes the files in those partitions read only and creates overlay mounts for all of the things a user can change.
While you can't change a file in the actual USR partition, you can still change what the OS uses because your changes will get implemnted on top of the base configuration.

Flatcar isn't immutable.
The "immutable" root is the lower directory and you make change in the running system in an upper directory that persists across reboots.
Some of the files can't be changed, but it's more like a Linux distro without a traditional package manager.

Customizations happen via ignition, cloud-init, systemed system extensions, and ssh.
A common pattern for most of these distributions that allow certain changes at different layers of the management cycle.

## Fedora CoreOS

FCOS is the server and Silverblue is the desktop implementation of ostree.
Distros like Bazzite and Bluefin are opinionated builds of Silverblue.
Ostree started with Project Atomic, mentioned above, and is essentially "git for your filesystem."

What if every file was tracked and linked on the filesystem?
And OS versions were distributed as a "commit."
Everyone would get the same tree of files and we could switch between them.

The nice thing is your wouldn't be limited to 2 commits.
You can have more than just an A/B rollback strategy.
The bad thing is this isn't as flexible as Nix or MicroOS.
Nix does tracking at an individual package layer.
There's no single "commit" for Nix like there is for ostree and MicroOS just snapshots the entile filesystem.

Because ostree doesn't have the flexibility for individual packages, they created rpm-ostree which lets you overlay an RPM on top of your base OS.
This defeats the whole purpose of immutability because `rpm-ostree install -A $PACKAGKE` would install `$PACKAGE` on a live system.

But package overlays sometimes break the system.
This is why ~Red Hat~ IBM is trying to encourage people move away from rpm-ostree with bootc, which doesn't support RPM overlays.
A downside of ostree is it has a bespoke toolchain to build and distribute updates.
`bootc` is still ostree under the hood, but it's distributed as a ✨container✨ image instead of files.

Ostree updates in the past were files based.
You only had to download the files you needed to perform the update.
This is simaly to Flatcar's block level updates, but could be more efficient because it would download the contents of the block (a.k.a. a file), not the whole block.

Moving to containers loses this benefit because now all files are obscured into layers and layers are based on build steps, not contents.
So now I can download container layer diffs, but those are much larger and opaque to what I actually need.

The system is customized via ~ignition~ butane and cloud-init, but with bootc you also have to customize the base OS via a Containerfile similar to Kairos below.
You also use cloud-init, ssh, and sysext depending on what you're trying to customize.

At this point, bootc based distributions are the most complicated to manage if you want to customize the distro and dispite personally using them for years, I don't like where it's going.

## Kairos

Kairos is a "meta" distro.
It takes an existing Linux distro and wrap it in immutability.
Kairos lets you keep the distro familiarity while adding ✨immutability✨.
Kairos packages the file system as a .img file and distributes it as a container.

This means you build the distro in a Dockerfile, but on disk it's a similar overlay mounts that Flatcar does.
Instead of two full partitions, Kairos boots from one loopback-mounted image at a time.
Updates overwrite the .img and reboots using it.

Kairos doesn't support ignition for early (pre-systemd) configuration.
Instead, you're expected to rebuild the base container image for base configuration and all customization happens via cloud-init and ssh.
Because you're using tradatition Linux distributions, you still have all the bloat of `apt` and `dnf`, but they don't work because of the read-only folder mounting.

Kairos uses the fact that cloud-init runs at each system boot in its favor.
Some files and folders can be changed in the live system, but they don't persist after reboot.
This forces you to make all changes via cloud-init and re-configure the system each time.

## MicroOS

MicroOS is from openSUSE and it's the most traditional Linux distro on this list.
It still runs and acts like SUSE, but it uses btrfs snapshots to solve the update rollback problem.

Instead of two fixed partitions, you have a chain of snapshots that you can roll back through.
You still end up with an active and a pending state, but the mechanism is more flexible and transparent to the user, and the filesystem isn't polluted with weird mounts or overlay folders.

The mutability story is similar to the others—there are overlays, and parts of the filesystem you can change without rebooting.
But it's not a fundamentally locked-down system, it's a system with structured, rollback-safe update mechanisms.

## NixOS

Nix is not immutable, it's reproducable.

Nix is the most mutable system on this list.
I'd say it's even more mutable (if that's a thing) than traditional Linux distributions.
It tries to make every mutation safe, via nix packaging, which means all changes are isolated and versioned.

What Nix gives you is the guarantee that if you declare something in a flake, you can rebuild it anywhere, any time, identically.
The guarantee is about reproducibility of the build, not immutability of the running system.

The symlinks at the root of a NixOS system point into `/nix/store`, and you can have as many versions installed as you want.
There's only one live view of the base system at a time.

You customize the system via flake and reboot into the new filesystem tree for packages that require reboots to load.
Everything else can be changed live on the system without rebooting.

## Talos Linux

**Disclaimer, I work at Sidero Labs**

Talos is the most important thing to understand about this space, and immutability is not the point.
Immutability is an artifact of how Talos achieves its actual goal: **fully API-driven cluster management**.

Every other distro I've covered manages the system through SSH.
You SSH in, run a command, something happens on the filesystem.
SSH brings a lot of baggage: user accounts, sudoers files, SSH keys, key rotation, audit logs of who ran what.
Talos eliminates all of it.
There's no shell.
No user accounts.
No SSH keys.
No sudoers file.

I made an SSH system extension for Talos to demo what the filesystem actually looks like from inside.
Do not do this in production.
But with it running, I could get a shell on the node and run `touch /host/hello`.
The response: `read only file system`.
For real, not via an overlay trick.

The technical reason is that Talos never finishes the normal Linux boot sequence.
The normal sequence goes: UEFI → bootloader → kernel + initramfs → pivot to real filesystem → PID 1 (systemd).
Talos stops before the pivot.
The entire OS runs inside initramfs, in memory.
There's no writable root filesystem to pivot to.
The init system is about 100 lines of Go.
systemd is roughly 10,000 lines of C.
All system state changes go through a gRPC API.

This was originally built around an idea of running kubelet as PID 1 directly—it didn't work because kubelet isn't designed for that—but the API management shim that emerged from that attempt became the core of what Talos is.
The founder wanted to run the kernel and the kubelet and nothing else.
That's basically what Talos is.

When I first compiled Talos and listed what was in `/usr/bin`, there were 11 unique binaries on the entire system.
A standard Ubuntu or Red Hat install has thousands of executables scattered across the filesystem.
That's part of why traditional distros are hard to upgrade and audit—you don't know what all that stuff does, you don't know where the CVEs live in it, and it takes longer to download and update.
Talos would fit on a mini CD.
Remember the 3.5-inch business card CDs?
100 megabytes.
That's Talos, with room to spare.

Talos is Kubernetes-only.
Every other distro in this list can run containers without Kubernetes, or serve as a general-purpose Linux system.
Talos gives you an etcd endpoint and the Kubernetes API.
Everything else lives in your containers.
As a result, you get rid of the double-accounting problem: OS-level users and SSH keys plus Kubernetes RBAC users and certificates.
On Talos there's no etcd password file, no OS users, nothing to manage at the OS layer.
It disappears.

For debugging, the API does what SSH used to do.
Think about what you're actually doing when you SSH into a machine: you're getting data.
Log files, network state, process lists.
Talos has API endpoints for that.
There's a TCP dump endpoint that streams packet captures back to you—it runs `tcpdump` implemented in Go and streams the data over the API.
Same data, different transport.
In the next version there's also a debug command that downloads an OCI container and drops you into a shell, still over the API, not SSH.

I want more systems to work this way.
The immutability is fine.
The read-only filesystem is fine.
But the API-first management model is the thing I actually care about.
LLMs are terrible at shells but great at APIs.
If you want to automate infrastructure management, having an API spec to hand to an LLM is dramatically better than telling it to SSH somewhere and poke around.

## What's actually different between them

Every one of these distros uses some combination of:
- A/B partitions or images (Flatcar, Kairos)
- Filesystem snapshots (MicroOS via Btrfs)
- Content-addressed packages (NixOS via the Nix store)
- Running entirely in initramfs (Talos)

The overlays are how most of them let you have mutable state at all.
Flatcar and Kairos have an upper directory that persists.
MicroOS has snapshots.
Nix has generations.
Talos has a small set of deliberate mutable areas for data that needs to survive reboots, but the OS itself is entirely in memory.

The real question when picking one is: how much of the system do you want to control, and through what interface?

If you want SSH and a familiar Linux environment without a package manager: **Flatcar** or **Fedora CoreOS**.

If your team knows an existing distro and you want to add immutability without retraining anyone: **Kairos**.

If you want rollback-safe transactional updates with a full-featured Linux system: **MicroOS**.

If you want every system state to be reproducible from a config file and you're willing to learn a new way of thinking about packages: **NixOS**.

If you're running Kubernetes and want the OS to disappear entirely, managed through an API with no SSH, no users, and no filesystem access: **Talos**.

The goal isn't immutability for its own sake.
It's making the OS boring—something you build, deploy, and trust rather than something you administer.
These distros are all moving in that direction at different speeds, with different tradeoffs.

None of them are truly immutable.
All of them are better than what most people were doing before.
