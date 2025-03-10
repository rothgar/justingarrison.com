---
title: "Get Started With Self-Hosting"
description: "Taking ownership of your data and services"
date: 2025-03-09T21:00:17-07:00
images: [/img/start-self-hosting-banner.png]
thumbnail: /img/start-self-hosting-banner.png
draft: true
---

I've been running a home lab in various states for over 20 years.
I'm not trying to be completely self-reliant and I don't think that SaaS software is bad--although increasingly this is the case.
I just wanted to have some ownership over my data and I didn't have a lot of money to pay for cloud storage or services, but I did have cheap computers and free time.

Twenty years later I have more money than time but I still run a decent amount of hardware for my home lab.
Someone asked me how they should get started with self-hosting so I'm writing it down to share what I've learned after years of changing requirements and multiple hardware iterations.

My advice is to build your home lab in this order:

1. Storage
2. Network
3. Applications

If you have a specific need you should always start there first, but if you're not sure and you want to learn some new things, this is a general road map.

## Storage

Storage always ends up being the most critical piece of infrastructure.
If your applications or network are down you're probably having a bad day.
If you lose your storage you're having a bad month--or more if you don't have backups.

The reason I say to start with storage is it's critical for applications later and it's the easiest to calculate money saved over time.
It also comes in really handy to increase your speed to data and access to data during network outages.

But it's usually not the _only_ storage you need.
I have a lot of local storage but I still end up paying for multiple cloud storage services.
But that's not because I don't have enough storage locally, but rather those services require I use their storage (e.g. gmail).

Over time I plan to replace some of those services that have more flexible storage options, but I don't suspect I'll every be completely free from some amount of cloud storage.

There are a couple different options to run storage locally.
I call these using an appliance or doing it yourself (DIY).

### Appliance

I currently use a Synology NAS.
It's not the most performant and not the cheapest option, but I've had it for almost 10 years and it's still running strong.
Only after I upgraded some of my network equipment to 2.5GiB did I want to upgrade my Synology.

I've had various appliances in the past (e.g. Buffalo, Windows Home Server) and all of them either had hardware failure or stopped receiving software updates.
You don't have to get a Synology, but I've found at a great way to get started.
They have a decent community and apps you can run, and it's more like an appliance than a full computer.

Appliances are good because you don't mess with them too much.
They just do their job and you forget about them.

I know plenty of people have had mixed experiences with different NAS appliances so do a bit of research, figure out what you need, and you'll probably be able to use it for at least 4 years.

### DIY

The build it yourself NAS community has come a long way in the past 8 years.
I've run a few Debian servers with cifs-tools installed and software RAID cards.

They were really cheap to get started but were limited by how much I knew to make them work.
Upgrades were also a lot more time than dedicated distros and appliances.

There are quite a few options for off-the-shelf storage distros which are really powerful and simpler than a general purpose Linux distro.
[Unraid](https://unraid.net), [OpenMediaVault](https://www.openmediavault.org), and [FreeNAS](https://www.truenas.com/freenas/) all look like great options.
I have limited experience with them, but I hear good things from friends.

My problem with any DIY option is I never leave it alone.
Once I know it's a full Linux distro I always make it do more than it should and end up making it hard to maintain.

## Network

I see people build out complex network infrastructure.
This is partially for security reasons and partially for masochistic fun.

Networks are really cool and really powerful.
They also have a few different critical services you can ease yourself into when trying to be more self-reliant.

I usually see network ownership as optional.
I've run Linux servers as routers, re-flashed routers (e.g. OpenWRT), and off-the-shelf hardware.
This depends on how much you want to do and how much performance you need.

I usually swing from completely off-the-shelf to completely DIY depending on how frustrated I am with my current limitations or how much time it's taking me to maintain.

### DHCP

Your DHCP server is something so simple most people don't even think of it as a service.
It's a dumb database that hands out IP addresses.

But it can be very powerful with [DHCP options](https://www.iana.org/assignments/bootp-dhcp-parameters/bootp-dhcp-parameters.xhtml) and controlling access between your devices.

Running your own DHCP server can be an easy evening project or a complex, month-long inventory and isolation adventure.
There is no in between.

### DNS

DNS servers usually get run for their powerful ad blocking abilities.
[Pi hole](https://pi-hole.net), [Adguard](https://adguard.com/) and others make DNS useful and mostly painless.

I have another article that compares DNS servers, but this is one of the critical things people usually want to replace on their networks.

The nice thing about running alternative DNS servers is they can be added on to your network without turning off the default DNS.
This makes it easy to experiment with only a few machines and still have a working fall-back when things break.

### VPN

VPN isn't always a requirement, but once you have it you realize just how useful it is.
It can range from traditional VPN services like [OpenVPN](https://openvpn.net) or newer networking overlays like [Tailscale](https://tailscale.com).

Everyone has a different use case for a VPN, but it's frequently a service more self-hosters are using.

### Networking hardware

This is where it gets really expensive and time consuming.
Some people love it, some people hate it.

You can learn a lot by getting used enterprise equipment and running it for a while.
This can lead to job offers or relationship break-ups at probably the same frequency.

There's also a lot of options like [mikrotik](https://mikrotik.com) and [Unifi](https://www.ui.com) which AFAIK have all the same features as the enterprise gear, but at a more affordable price and smaller scale.

## Applications

This is usually where people try to start and often where they stop.
Running applications is hard.

You directly interact with it and rely on it, but if you don't have any experience in keeping it updated you'll end up with bugs and downtime.
Nobody likes that.

Most applications rely on some amount of stable storage which is why I recommend starting there.

Apps are sometimes background services like [syncthing](https://syncthing.net), or they can be apps you use a web interface or mobile app like [immich](https://immich.app) or [Plex](https://plex.tv).
No matter what, you're going to want to figure out how to run them and how to keep them updated.

Apps usually are the most direct money savings because you can sometimes replace a hosted service like Dropbox directly.
Once you replace 2-3 services you were paying $10/mo for you'll be hooked on running more.

The balance comes from not running too much which requires more maintenance and usually requires occasional debugging.
After trying to fix one too many bugs with software I relied on I've found a decent balance of some things I'm willing to pay for and others I'm willing to run myself.

This is another reason I like Synology because although I don't find any of their applications great, I find a lot of them good enough.
Their upgrade process is usually painless and I appreciate that.

There's a long list of apps your can run yourself and I won't exhaust it here.
But I will recommend sticking with containers where you can.
The portability, testability, and automation aspects alone have been well worth it for me.

## Distributed systems

I'll mention VM management software like [Proxmox](https://www.proxmox.com) and container orchestration like [Kubernetes](https://kubernetes.io) only because they often come up in conversations.

To me, these are advanced topics and nothing above requires these to be useful.
Usually people run an orchastrator or something like Proxmox because they want to learn those tools more than they want to run an application.

This is perfectly fine, it's why I started building home [Kubernetes labs](https://justingarrison.com/cubernetes) and has taught me a lot over the years.

I've run HyperV, ESXi, Proxmox, and various other solutions and I never rely on them for family facing applications (a.k.a. homelab production).
For me those have always been learning playgrounds and not stable platforms.

If you want to throw everything in a Kubernetes cluster on [Talos Linux](https://talos.dev) and manage it all with GitOps, be my guest.
