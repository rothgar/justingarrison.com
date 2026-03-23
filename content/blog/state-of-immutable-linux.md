---
title: "The State of Immutable Linux"
date: 2026-03-20
description: "Lies, damn lies, and read only filesystems"
images: [/img/immutable-linux-banner.jpg]
thumbnail: /img/immutable-linux-banner.jpg
draft: false
---

I gave a talk at [SoCal Linux Expo](https://socallinuxexpo.org) explaining what an "immutable" OS means and how some of the popular distributions implement immutability.
The talk is a lot more fun than this blog post and has props to visualize what's happening.

{{< youtube jvdPuTcdGXs >}}

Linux was never designed to start up and change nothing.
There's no such thing as a 100% immutable.
The problem immutability is trying to solve is preditcable and scoped changes.

Usually, the distribution will market immutability to mean, more secure, more reliable, or the ability to roll back.
These are all things traditional, mutable, distros struggled with and were often causes for outages and toil.

Here's a summary from my talk about how each distribution implements immutability.

## Flatcar Linux

![](/img/flatcar.jpg)

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

Customizations happen via ignition, cloud-init, systemed system extensions (distributed as raw disk images), and ssh.
A common pattern for most of these distributions that allow certain changes at different layers of the management cycle.

## Fedora CoreOS

![](/img/fcos.jpg)

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

At this point, bootc based distributions are the most complicated to manage if you want to customize the distro and dispite personally using them for years, I don't like where they're going.

## Kairos

![](/img/kairos.jpg)

Kairos is a "meta" distro.
Kairos takes an existing distro while adding ✨immutability✨.
Kairos packages the file system as a .img file and distributes it as a container.

This means you build the distro in a Dockerfile, but on disk it has overlay mounts like Flatcar does.
Instead of two full partitions, Kairos boots from one loopback-mounted image at a time.
Updates overwrite the .img and updates grub.

Kairos doesn't support ignition for early (pre-systemd) configuration.
Instead, you're expected to rebuild the base container image for base configuration (like bootc) and all customization happens via cloud-init and ssh.
Because you're repackaging tradatitional Linux distributions, you still have all the bloat of `apt` and `dnf`, but they don't work because of the read-only folder mounting.
This is probably why they're building Hadron to have some more control over the base distro.

Kairos uses the fact that cloud-init runs at each system boot in its favor.
Some files and folders can be changed in the live system, but they don't persist after reboot.
This forces you to make all changes via cloud-init and re-configure the system each time.

## MicroOS

![](/img/microos.jpg)

MicroOS is from openSUSE and it's the most traditional Linux distro on this list.
It still runs and acts like SUSE, but it uses btrfs snapshots to solve the update rollback problem.

Instead of two fixed partitions, you have a chain of snapshots that you can roll back through.
You still end up with an active and a pending state, but the mechanism is more flexible and transparent to the user, and the filesystem isn't polluted with weird mounts or overlay folders.

The mutability story is similar to the others—there are overlays, and parts of the filesystem you can change without rebooting.
But it's not a fundamentally locked-down system, it's a system with structured, rollback-safe update mechanisms.

## Bottlerocket

![](/img/bottlerocket.jpg)

Bottlerocket is an AWS Linux distribution for running containers.
It has an "API" and dosent' have SSH.

On paper it sounds a lot like Talos.
In practice it's nothing like it.
I wrote a [blog post about this](https://www.siderolabs.com/blog/bottlerocket-vs-talos/) so you should read that if you're interested.

Bottlerocket will become the default container OS in AWS just like [Container-optimized OS](https://docs.cloud.google.com/container-optimized-os/docs) is the default for GCP.
Don't bother looking at it if you're not in AWS.

## NixOS

![](/img/nixos.jpg)

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

![](/img/talos.jpg)

**Disclaimer, I work at Sidero Labs**

For Talos, immutability is not the point.
Immutability is an artifact of how Talos achieves its actual goal of API-driven management.

Talos never finishes the normal Linux boot sequence.
The normal sequence for Linux is: UEFI → bootloader → kernel + initramfs → pivot to the "real" filesystem → PID 1.
Talos runs entire OS inside initramfs via a [Unified Kernel Image (UKI)](https://uapi-group.org/specifications/specs/unified_kernel_image/).
There's no root filesystem on disk to pivot to.

Talos is packaged and distributed as a container image and also has a concept of system extensions (also packaged as containers).
System extensions are overlayed on the root filesystem to bring additional packages, drivers, and services.

There are mutable files on disk such as container images and a state partition, but the actual OS is running immutability in memory.
Changes are not persisted across reboots, similar to Kairos.
At boot Talos reads the declarative state from the and makes changes.
This is similar and different from cloud-init which is sometimes declarative and sometimes an imparitive bash script.

Customizations to the base system are done via "[packages](https://github.com/siderolabs/pkgs)" which are combined into a containerized "installer" image.
The installer image is what writes the UKI bundle to disk and also formats a disk during installation.

In practice Talos has A/B booting, reads from a desired state configuration, and applies cloud-init-like configuration to the system.
It seems very similar to other distros.
There is no butane/ignition stage because they're not needed.
Customizations of the base OS require custom builds.

The real difference is the long term maintenance of using an API instead of SSH for upgrades and management.
All of the other systems rely on systemd for services which force certain behaviors for how and when services get run.
Talos runs everything as containers, even system services, so things like etcd and the kubelet can be switched on-the-fly.

## Conclusion

None of these distributinos are immutable.
They all have different implementations of similar ideas.
Most of them require reboots for applying changes, and all of them have some form of run-time customization option.

It's 2026, if you're not using something immutable (or at least reproducable) you're doing more maintenance work than you should.
