---
author: "Justin Garrison"
title: "What Is a Virtual Machine Hypervisor?"
description: "Hypervisors are what make virtual machines possible, and they aren’t just for servers"
date: 2016-09-28T11:08:33-04:00
images: [/img/banner11.png]
thumbnail: /img/banner11.png
draft: false
canonical: https://www.howtogeek.com/66734/htg-explains-what-is-a-hypervisor/
---

Hypervisors are what make virtual machines possible, and they aren’t just for servers anymore. You probably use one every day and don’t even know it. If you don’t use one now, you will in the near future.

A hypervisor is software that exists outside of a guest operating system to intercept the commands sent to the computer hardware. The term “hypervisor” comes from the different levels of an [operating systems kernel](https://www.howtogeek.com/31632/what-is-the-linux-kernel-and-what-does-it-do/); it performs actions with more authority than the “supervisor” level, hence, _hyper_\-visor.

Image via [striatic on Flickr](https://www.flickr.com/photos/striatic/)

## Hypervisor Basics

A hypervisor is also known as a Virtual Machine Manager (VMM) and its sole purpose is to allow multiple “machines” to share a single hardware platform. Operating systems are designed so that they have a one-to-one relationship with the hardware they are running on, but with multi-core, multi-threaded processors and ludicrous amounts of RAM, running multiple at once is a breeze.

![](/img/hypervisor-layout.png)

The hypervisor separates the operating system (OS) from the hardware by taking the responsibility of allowing each running OS time with the underlying hardware. It acts as a traffic cop to allow time to use the CPU, memory, GPU, and other hardware. Each operating system controlled by the hypervisor is called a guest OS, and the hypervisor’s operating system, if any, is called the host OS. Because it stands between the guest OS and hardware you can have as many different guest OSs as your system can handle; you can even have different types (e.g. Windows, OS X, Linux).

Separating hardware and software turns out to be good for portability as well. Because the hypervisor acts as the go-between, it is much easier to move from computer to computer without needing to install new drivers or update your guest OS. You may have noticed this if you took your Virtualbox VMs and put them on a different computer. To the guest OS, there is no noticeable change ever though the host OS and hardware could be completely different.

![](/img/mac_os_x.png)

Another major benefit of virtualizing an OS is security. If you want to test software that may be harmful to your computer it is recommended to test it in a virtual machine rather than your host OS. If the guest OS becomes infected and riddled with viruses, it will not affect the files on the host OS, unless shared folders or a network bridge connect the two. The two operating systems exist completely separated from each other and have no knowledge of each others existence, which makes for safe computing.

Some popular hypervisors are VMware ESXi, Xen, Microsoft Hyper-V, VMware Workstation, Oracle Virtualbox, and Microsoft VirtualPC. All of these allow a user to virtualize one or more operating systems on a single piece of hardware.

## Different Hypervisor Types

Hypervisors can be broken up in two major types:

- **Type 1**, a.k.a. bare metal, is a hypervisor that installs directly onto a computer. There is no host OS and the hypervisor has direct access to all hardware and features. The main reasons to install a type 1 hypervisor is to run multiple operating systems on the same computer without the overhead of a host OS or to take advantage of the portability and hardware abstraction. Bare metal is most often used for servers because of their security and portability to move from hardware to hardware in case of a crash. Good examples of type 1 hypervisors are VMware ESXi, Citrix XenServer, and Microsoft Hyper-V.
- **Type 2**, a.k.a. hosted, is what most people are probably familiar with when it comes to virtualizing operating systems. Hosted hypervisors require a host OS and are often treated as installed software inside the host. Type 2 can still run multiple operating systems at a time, but it doesn’t have direct access to the hardware and therefore has more overhead when running a guest. This means that the guest OS will not run at its full potential and if your host crashes, you won’t have access to your guests either. Type 2 hypervisors are the ideal way to go when you need to test multiple operating systems within Windows, OS X, or Linux. Good examples are VMWare Workstation, VMware Parallels, Oracle Virtualbox, and Microsoft VirtualPC.

## Hypervisors of the Future

Most hypervisors today are either used for large scale server deployments or for end users to run legacy apps or try out a different operating system. There has already been some change to this thinking however with current versions of Android and rumors of Windows 8.

![](/img/android-hypervisor.png)

Android uses a Linux kernel for interaction with hardware and background services, and then uses a virtual machine called Dalvik to run software that the user interacts with. Despite not allowing a user to run multiple operating systems at once, Android is very similar to a type 1 hypervisor. The underlying Linux host is completely transparent to the end user, unless you root your phone and want to interact with it.

Windows 8 is rumored to run entirely as a guest OS on top of Microsoft’s Hyper-V. Hyper-V will take the responsibility of managing your hardware and doing background tasks such as backups and file system checks. Similar to Android, this would allow you to have better portability, flexibility, and security within your OS. Not to mention, it would make your Windows 8 installation completely portable so you can take it with you from computer to computer.

Web servers will continue to take advantage of hypervisors to maximize their hardware utilization and keep costs down. If you have shared web hosting through a popular web host you most likely are on a type 1 hypervisor already and didn’t know it. With good server hardware, bare metal hypervisors can push the boundaries from typically just having one operating system installed, to literally thousands available. This not only saves money when it comes to buying hardware, but also cooling and power are reduced to a small fraction what it used to be to run the same amount of machines.
