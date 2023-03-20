---
author: "Justin Garrison"
title: "What is the Linux Kernel and What Does It Do?"
description: "With over 13 million lines of code, the Linux kernel is one of the largest open"
date: 2010-10-26
images: [/img/image324.png]
thumbnail: /img/image324.png
draft: false
canonical: https://www.howtogeek.com/31632/what-is-the-linux-kernel-and-what-does-it-do/
---

With over 13 million lines of code, the Linux kernel is one of the largest open source projects in the world, but what is a kernel and what is it used for?

## So What is the Kernel?

A kernel is the lowest level of easily replaceable software that interfaces with the hardware in your computer. It is responsible for interfacing all of your applications that are running in “user mode” down to the physical hardware, and allowing processes, known as servers, to get information from each other using inter-process communication (IPC).

## Different Types of Kernels

There are, of course, different ways to build a kernel and architectural considerations when building one from scratch. In general, most kernels fall into one of three types: monolithic, microkernel, and hybrid. Linux is a monolithic kernel while OS X (XNU) and Windows 7 use hybrid kernels. Let’s take a quick tour of the three categories so we can go into more detail later.

![](https://www.howtogeek.com/wp-content/uploads/2010/10/popcorn-flavors1.png)
_Image by_ [_uptown popcorn_](https://www.flickr.com/photos/uptownpopcorn/3755041107/)

**Microkernel**
A microkernel takes the approach of only managing what it has to: CPU, memory, and IPC. Pretty much everything else in a computer can be seen as an accessory and can be handled in user mode. Microkernels have a advantage of portability because they don’t have to worry if you change your video card or even your operating system so long as the operating system still tries to access the hardware in the same way. Microkernels also have a very small footprint, for both memory and install space, and they tend to be more secure because only specific processes run in user mode which doesn’t have the high permissions as supervisor mode.

**Pros**

- Portability
- Small install footprint
- Small memory footprint
- Security

**Cons**

- Hardware is more abstracted through drivers
- Hardware may react slower because drivers are in user mode
- Processes have to wait in a queue to get information
- Processes can’t get access to other processes without waiting

**Monolithic Kernel**
Monolithic kernels are the opposite of microkernels because they encompass not only the CPU, memory, and IPC, but they also include things like device drivers, file system management, and system server calls. Monolithic kernels tend to be better at accessing hardware and multitasking because if a program needs to get information from memory or another process running it has a more direct line to access it and doesn’t have to wait in a queue to get things done. This however can cause problems because the more things that run in supervisor mode, the more things that can bring down your system if one doesn’t behave properly.

**Pros**

- More direct access to hardware for programs
- Easier for processes to communicate between eachother
- If your device is supported, it should work with no additional installations
- Processes react faster because there isn’t a queue for processor time

**Cons**

- Large install footprint
- Large memory footprint
- Less secure because everything runs in supervisor mode

![](https://www.howtogeek.com/wp-content/uploads/2010/10/kernel-panic-shadow.png)
Image via [schoschie on Flickr](https://www.flickr.com/photos/schoschie/373227473/)

**Hybrid Kernel**
Hybrid kernels have the ability to pick and choose what they want to run in user mode and what they want to run in supervisor mode. Often times things like device drivers and filesystem I/O will be run in user mode while IPC and server calls will be kept in the supervisor mode. This give the best of both worlds but often will require more work of the hardware manufacturer because all of the driver responsibility is up to them. It also can have some of the latency problems that is inherent with microkernels.

**Pros**

- Developer can pick and choose what runs in user mode and what runs in supervisor mode
- Smaller install footprint than monolithic kernel
- More flexible than other models

**Cons**

- Can suffer from same process lag as microkernel
- Device drivers need to be managed by user (typically)

## Where Are the Linux Kernel Files?

![](https://www.howtogeek.com/wp-content/uploads/2010/10/image325.png)

The kernel file, in Ubuntu, is stored in your /boot folder and is called vmlinuz-_version_. The name vmlinuz comes from the unix world where they used to call their kernels simply “unix” back in the 60’s so Linux started calling their kernel “linux” when it was first developed in the 90’s.

When virtual memory was developed for easier multitasking abilities, “vm” was put at the front of the file to show that the kernel supports virtual memory. For a while the Linux kernel was called vmlinux, but the kernel grew too large to fit in the available boot memory so the kernel image was compressed and the ending x was changed to a z to show it was compressed with zlib compression. This same compression isn’t always used, often replaced with LZMA or BZIP2, and some kernels are simply called zImage.

The version numbering will be in the format A.B.C.D where A.B will probably be 2.6, C will be your version, and D indicates your patches or fixes.

![](https://www.howtogeek.com/wp-content/uploads/2010/10/kernel-files.png)

In the /boot folder there will also be other very important files called initrd.img-version, system.map-version, and config-version. The initrd file is used as a small [RAM disk](https://www.howtogeek.com/devops/how-to-create-a-ram-drive-in-linux/) that extracts and executes the actual kernel file. The system.map file is used for memory management before the kernel fully loads, and the config file tells the kernel what options and modules to load into the kernel image when the it is being compiled.

## Linux Kernel Architecture

Because the Linux kernel is monolithic, it has the largest footprint and the most complexity over the other types of kernels. This was a design feature which was under [quite a bit of debate in the early days of Linux](https://en.wikipedia.org/wiki/Tanenbaum%E2%80%93Torvalds_debate) and still carries some of the same design flaws that monolithic kernels are inherent to have.

One thing that the Linux kernel developers did to get around these flaws was to make kernel modules that could be loaded and unloaded at runtime, meaning you can add or remove features of your kernel on the fly. This can go beyond just adding hardware functionality to the kernel, by including modules that run server processes, like low level virtualization, but it can also allow the entire kernel to be replaced without needing to reboot your computer in some instances.

Imagine if you could upgrade to a Windows service pack without ever needing to reboot…

## Kernel Modules

![](https://www.howtogeek.com/wp-content/uploads/2010/10/image326.png)

What if Windows had every driver available already installed and you just had to turn on the drivers you needed? That is essentially what kernel modules do for Linux. Kernel modules, also known as a loadable kernel module (LKM), are essential to keeping the kernel functioning with all of your hardware without consuming all of your available memory.

A module typically adds functionality to the base kernel for things like devices, file systems, and system calls. LKMs have the file extension .ko and are typically stored in the /lib/modules directory. Because of their modular nature you can easily [customize your kernel](https://www.howtogeek.com/191/how-to-customize-your-ubuntu-kernel/) by setting modules to load, or not load, during startup with the menuconfig command or by editing your /boot/config file, or you can load and unload modules on the fly with the modprobe command.

Third party and closed source modules are available in some distributions, like Ubuntu, and may not be installed by default because the source code for the modules is not available. The developer of the software (i.e. nVidia, ATI, among others) do not provide the source code but rather they build their own modules and compile the needed .ko files for distribution. While these modules are [free as in beer, they are not free as in speech](https://www.howtogeek.com/31717/what-do-the-phrases-free-speech-vs.-free-beer-really-mean/) and thus are not included by some distributions because the maintainers feel it “taints” the kernel by providing non-free software.

A kernel isn’t magic, but it is completely essential to any computer running properly. The Linux kernel is different than OS X and Windows because it includes drivers at the kernel level and makes many things supported “out of the box”. Hopefully you will know a little bit more about how your software and hardware works together and what files you need to boot your computer.

[Kernel.org](https://kernel.org)
_Image by_ [_ingridtaylar_](https://www.flickr.com/photos/taylar/3750949985/)
