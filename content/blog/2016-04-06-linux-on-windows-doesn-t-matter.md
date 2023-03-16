---
author: "Justin Garrison"
title: "Linux on Windows Doesn’t Matter"
description: "Microsoft recently announced Windows Subsystem for Linux (WSL) which allows you to run some Linux binaries"
date: 2016-04-06
images: [/img/og-image.png]
thumbnail: /img/og-image.png
draft: false
---

Microsoft recently announced Windows Subsystem for Linux (WSL) which allows you to run some Linux binaries on top of Windows using an API remapping layer to translate Linux API calls to Windows API calls. If you want specifics you should probably ready the [Ars article](http://arstechnica.com/information-technology/2016/04/why-microsoft-needed-to-make-windows-run-linux-software/) because I’m not going to go into the history or reasoning. Instead I want to look into why it doesn’t matter for the future of Windows development.

## What Microsoft Wants

I think it’s obvious that Microsoft is trying to win back, or at least stop losing, developers to OS X and, to a smaller degree, Linux. They need to keep developers because as more of the world is consumed by software there is a greater demand for people to write that software. The people that write the software are often influencers in technology, whether they should be or not, and shape how corporations are built, friends interact, and Thanksgiving support calls are performed. If those people all decide to get Macs then you can bet that even if they’re not Apple zealots they’ll let their friends and family know they should just “get a Mac” when they’re asked for help with any other platform.

Microsoft also needs to keep developers on their Windows because they can’t risk being the minority. If they ever become a minority then the [idiosyncrasies of Windows](https://blogs.msdn.microsoft.com/larryosterman/2005/06/24/why-is-the-dos-path-character/) will become even more evident and they’ll have to conform to majority standards or be left behind. This obviously breaks the ever-so-sacred backwards compatibility that has kept corporations locked to Windows for decades.

## WSL Is Not What Developers Want

1. WSL is an app and not available by default
2. Running Linux on Windows is a solved problem
3. Development environments don’t need Linux anymore

Let’s look at these quickly so I can explain more.

## Bad Developer Experience

WSL is tucked away as a developer feature which then needs to download an Ubuntu image which then allows you to apt-get a package. Who’s idea was that? That sounds like a terrible development workflow. How do you manage the (sub)Linux system? Is there a os -reset option to give you a new clean environment to develop with? Should you apt-get dist-upgrade to a new Linux release? Can you keep multiple installations of different versions?

Sure you can now run that terrible bash script you copy/pasted from Stack Exchange and maybe curl [https://get.rvm.io](https://get.rvm.io/) | bash but those were never good experiences to begin with. This whole process just sounds like it’s going to proliferate the “it worked on my (sub)system” syndrome. With VMs you can at least snapshot the disk or revert back to a known state.

## VMs Are Not the Problem

You know what solved all of those problems a while ago? [Vagrant](https://www.vagrantup.com/) and VMs. Yes, it consumed more resources. Yes, you still needed a hypervisor. But that is still easier than the above scenario. And VMs have amazing abilities to snapshot their state, run any flavor of Linux and even make [environments shareable](http://www.vagrantbox.es/) so you don’t have to do everything yourself. Putting your script in your [local directory](https://www.vagrantup.com/docs/provisioning/shell.html) and running vagrant up and vagrant destroy sounds a lot better then trying to maintain environments on two simultaneous operating systems with no easy way of reverting back to a known state. In the future [Otto](https://www.ottoproject.io/) is going to make this even easier because you can easily deploy your code which both WSL and Vagrant lack.

## Future OSS Development

But none of that really matters because the open source and web development Microsoft is targeting is abstracting away from Linux. A lot of development has moved to PaaS offerings like Heroku and Google App Engine and don’t care about the OS. New stuff is moving to serverless infrastructure like [Google Cloud Functions](https://cloud.google.com/functions/docs) and [Amazon Lambda](https://aws.amazon.com/lambda/) or static binaries written in GO. Everything else is going into containers. These are all better solutions than WSL because they make repeatable, deployable artifacts where the developer doesn’t have to manage a base OS and they don’t have to care about apt-get v dnf.

Luckily for Microsoft, PaaS, serverless, and static binary development all work just fine on Windows. Native [container support](http://www.infoworld.com/article/2973492/application-virtualization/windows-server-containers-arrive-with-docker-support.html) is in the works (which is more than can be said for OS X). It might be interesting if container support comes to non-server Windows distributions and can be run on top of WSL. That way you can use Linux containers in Windows which solves some of the problems.

## What Developers Want

I think it’s too bad Microsoft misses what OSS developers want. Developers want automation and open standards for everything. A proprietary and invisible layer on top of an un-automatable OS is not going to cut it. Developers want dotfile repos, they want text configurations, and they want small and [composable tools](https://en.wikipedia.org/wiki/Unix_philosophy). If something breaks they want the visibility to disappear into source code for 2 days and emerge triumphantly with a bug report and pull request. Microsoft is trying to build that experience with tools and layers when what we really want is the ethos of free (speech) and open (standards).
