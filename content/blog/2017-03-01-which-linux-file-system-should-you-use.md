---
author: "Justin Garrison"
title: "Which Linux File System Should You Use?"
description: "If you’re not sure which Linux file system to use, use Ext4"
date: 2017-03-01
images: [/img/linux-file-system-6.png]
thumbnail: /img/linux-file-system-6.png
draft: false
canonical: https://www.howtogeek.com/33552/htg-explains-which-linux-file-system-should-you-choose/
---

When formatting partitions on a Linux PC, you'll see a wide variety of file system options. These options don't need to be overwhelming. If you're not sure which Linux file system to use, there's a simple answer.

## The Quick Answer: Use Ext4 if You're Not Sure

We'll get into the weeds and run down the difference between the various file systems in a moment, but if you aren't sure: Use Ext4.

Ext4 is the default file system on most Linux distributions for a reason. It's an improved version of the older Ext3 file system. It's not the most cutting-edge file system, but that's good: It means Ext4 is rock-solid and stable.

In the future, Linux distributions will gradually shift towards BtrFS. BtrFS is still cutting edge and seeing a lot of development, so you'll want to avoid it on production systems. The risk of data corruption or other problems isn't worth the potential improvement in speed.

Note, though, that this "use Ext4" advice only applies to Linux system partitions and other on-disk partitions only Linux will access. If you're formatting an external drive you want to share with other operating systems, you shouldn't use Ext4 because Windows, macOS, and other devices can't read Ext4 file systems. You'll want to [use exFAT or FAT32](https://www.howtogeek.com/235596/whats-the-difference-between-fat32-exfat-and-ntfs/) when formatting an external drive on Linux.

If you're setting up partitions on your main Linux boot drive, you'll also want to create [a swap partition of at least a few GBs in size](https://www.howtogeek.com/196238/how-big-should-your-page-file-or-swap-partition-be/) when setting up those partitions. This partition is used for "swap space". It's similar to the paging file on Windows. Linux swaps out memory to the swap space when its RAM is full. This partition must be formatted as "swap" instead of with a particular file system.

![Linux file system partitions Screenshot](/img/linux-file-system-2.png)

## What Is Journaling?

One thing you'll notice when choosing between file systems is that some of them are marked as a "journaling" file system and some aren't. This is important.

Journaling is designed to prevent data corruption from crashes and sudden power loss. Let's say your system is partway through writing a file to the disk and it suddenly loses power. Without a journal, your computer would have no idea if the file was completely written to disk. The file would remain there on disk, corrupt.

With a journal, your computer would note that it was going to write a certain file to disk in the journal, write that file to disk, and then remove that job from the journal. If the power went out partway through writing the file, Linux would check the file system's journal when it boots up and resume any partially completed jobs. This prevents data loss and file corruption.

![Journaling file system flow diagram](/img/linux-file-system-6.png)

Journaling does slow disk write performance down a tiny bit, but it's well-worth it on a desktop or laptop. It's not as much overhead as you might think. The full file isn't written to the journal. Instead, only the file metadata, inode, or disk location is recorded in the journal before it's written to disk.

Every modern file system supports journaling, and you'll want to use a file system that supports journaling when setting up a desktop or laptop.

File systems that don't offer journaling are available for use on high-performance servers and other such systems where the administrator wants to squeeze out extra performance. They're also ideal for removable flash drives, where you don't want the higher overhead and additional writes of journaling.

## What's the Difference Between All Those Linux File Systems?

![Ext2, Ext3, and Ext4 illustration](/img/linux-file-system-5.png)

While Microsoft develops Windows and Apple controls macOS, Linux is an open-source project developed by the community. Anyone (or any company) with the skill and time can create a new Linux file system. That's one reason why there are so many options. Here are the differences:

- [Ext](https://en.wikipedia.org/wiki/Extended_file_system) stands for "Extended file system", and was the first created specifically for Linux. It's had four major revisions. "Ext" is the first version of the file system, introduced in 1992. It was a major upgrade from the Minix file system used at the time, but lacks important features. Many Linux distributions no longer support Ext.
- [Ext2](https://en.wikipedia.org/wiki/Ext2) is not a journaling file system. When introduced, it was the first file system to support extended file attributes and 2 terabyte drives. Ext2's lack of a journal means it writes to disk less, which makes it useful for flash memory like USB drives. However, file systems like exFAT and FAT32 also don't use journaling and are more compatible with different operating systems, so we recommend you avoid Ext2 unless you know you need it for some reason.
- [Ext3](https://en.wikipedia.org/wiki/Ext3) is basically just Ext2 with journaling. Ext3 was designed to be backwards compatible with Ext2, allowing partitions to be converted between Ext2 and Ext3 without any formatting required. It's been around longer than Ext4, but Ext4 has been around since 2008 and is widely tested. At this point, you're better off using Ext4.
- [Ext4](https://en.wikipedia.org/wiki/Ext4) was also designed to be backwards compatible. You can mount an Ext4 file system as Ext3, or mount an Ext2 or Ext3 file system as Ext4. It includes newer features that reduce file fragmentation, allows for larger volumes and files, and uses delayed allocation to improve flash memory life. This is the most modern version of the Ext file system and is the default on most Linux distributions.

![BtrFS illustration](/img/linux-file-system-4.png)

- [BtrFS](https://en.wikipedia.org/wiki/Btrfs), pronounced "Butter" or "Better" FS, was originally designed by Oracle. It stands for "B-Tree File System" and allows for drive pooling, on the fly snapshots, transparent compression, and online defragmentation. It shares a number of the same ideas found in ReiserFS, a file system some Linux distributions used to use by default. BtrFS is designed to be a clean break from the Ext series of file sytstems. Ted Ts'o, the maintainer of the Ext4 file system, considers Ext4 a short-term solution and believes [BtrFS is the way forward](https://arstechnica.com/information-technology/2009/04/linux-collaboration-summit-the-kernel-panel/). Expect to see BtrFS become the default in both enterprise server and consumer desktop Linux distributions in the next few years as it's further tested.
- [ReiserFS](https://en.wikipedia.org/wiki/ReiserFS) was a big leap forward for Linux file systems when it was introduced in 2001 and it included many new features Ext would never be able to implement. ReiserFS was replaced by [Reiser4](https://en.wikipedia.org/wiki/Reiser4), which improved on many of the features that were incomplete or lacking in the initial release, in 2004. But Reiser4 development stalled after the main developer, Hans Reiser, was [sent to prison](https://www.sfgate.com/bayarea/article/Reiser-confesses-to-strangling-estranged-wife-3197731.php) in 2008. Reiser4 still isn't in the main Linux kernel and is unlikely to get there. BtrFS is the better long-term choice.

![ZFS linux illustration](/img/linux-file-system-3.png)

- [ZFS](https://en.wikipedia.org/wiki/ZFS) was designed by Sun Microsystems for Solaris and is now owned by Oracle. ZFS supports a lot of advanced features including drive pooling, snapshots, and dynamic disk striping---BtrFS will bring many of these features to Linux by default. Each file has a checksum, so ZFS can tell if a file is corrupted or not. Sun open-sourced ZFS under the Sun CDDL license, which means it can't be included in the Linux kernel. However, you can [install ZFS support](https://zfsonlinux.org/) on any Linux distribution. [Ubuntu now offers official ZFS support starting with Ubuntu 16.04](https://www.howtogeek.com/272220/how-to-install-and-use-zfs-on-ubuntu-and-why-youd-want-to/), too. Ubuntu uses ZFS by default for containers.
- [XFS](https://en.wikipedia.org/wiki/XFS) was developed by Silicon Graphics in 1994 for the SGI IRX operating system, and was ported to Linux in 2001. It's similar to Ext4 in some ways, as it also uses delayed allocation to help with file fragmentation and does not allow for mounted snapshots. It can be enlarged, but not shrunk, on the fly. XFS has good performance when dealing with large files, but has worse performance than other file systems when dealing with many small files. It may be useful for certain types of servers that primarily need to deal with large files.
- [JFS](https://en.wikipedia.org/wiki/JFS_file_system), or "Journaled File System", was developed by IBM for the IBM AIX operating system in 1990 and later ported to Linux. It boasts low CPU usage and good performance for both large and small files. JFS partitions can be dynamically resized, but not shrunk. It was extremely well planned and has support in most every major distribution, however its production testing on Linux servers isn't as extensive as Ext, as it was designed for AIX. Ext4 is more commonly used and is more widely tested.
- Swap is an option when formatting a drive, but isn't an actual file system. It's used as virtual memory and doesn't have a file system structure. You can't mount it to view its contents. Swap is used as "scratch space" by the Linux kernel to temporarily store data that can't fit in RAM. It's also used for hibernating. While Windows stores its paging file as a file on its main system partition, Linux just reserves a separate empty partition for swap space.

- FAT16, FAT32, and exFAT: Microsoft's FAT file systems are often an option when formatting a drive in Linux. These file systems don't include a journal, so they're ideal for external USB drives. They're a de facto standard that every operating system---Windows, macOS, Linux, and other devices---can read. This makes them the ideal file system to use when formatting an external drive you'll want to use with other operating systems. FAT32 is older. exFAT is the ideal option, as it supports files over 4 GB in size and partitions over 8 TB in size, unlike FAT32.

There are other Linux file systems too, including [file systems designed specifically for flash storage](https://en.wikipedia.org/wiki/Flash_file_system#Linux_flash_filesystems) in embedded devices and on SD cards. But these are the options you'll most frequently see when using Linux.
