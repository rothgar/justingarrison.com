---
author: "Justin Garrison"
title: "9 Alternatives for Windows Home Server’s Drive Extender"
description: "Now that Microsoft has officially killed off the best part about Windows"
date: 2010-11-29
images: [/img/sshot4cf30d79118aa.jpg]
thumbnail: /img/sshot4cf30d79118aa.jpg
draft: false
canonical: https://www.howtogeek.com/36458/9-alternatives-for-windows-home-servers-drive-extender/
---

Now that Microsoft has officially killed off the best part about Windows Home Server what can you do? Here are some alternatives for drive extender that you can use if you want to build a WHS of your own.

## So What Is Drive Extender?

The idea of drive extender for Windows Home Server is you can have as many hard drives as you want and they all group together into the same pool of storage. This is similar to a RAID setup but drive extender had a few cards up it’s sleeve that made it invaluable for a NAS appliance.

- No special RAID controller or hardware was needed.
- Hard drives did not have to match in size or manufacturer so you could literally take any hard drive and use it in your pool.
- Hard drives used standard NTFS filesystems. If something bad happened, you could just pull out the drive and plug it into another computer to view and recover files.

There were some downsides to drive extender as well and version 2 for Windows Home Server “Vail” was supposed to fix most of those problems. However Microsoft ran into other problems with v2 and they did not see it in their best interest to continue maintaining the software.

Windows Home Server had a few other benefits as a storage solution over a standard Windows installation but for many people, drive extender was the only reason to use the product. Now that Microsoft has killed it off, let’s look at some alternatives.

![](/img/whs-storage.png)

I am not going to shy away from Linux alternatives in this list because in many cases Linux may be easier and better for the solution you are looking for. Linux has the benefit of being free, has lower hardware requirements, and if you are just looking for shared storage, 100% compatible with samba shares for Windows and OS X.

## Windows Alternatives

**Windows built-in software RAID** – Windows has come with its own software RAID built into the OS since the Windows 2000 days. While this solution may not have the best performance, it doesn’t require any additional software and is supported by Microsoft. If you are looking to set up Windows software RAID check out our how-to article explaining the process.

_Note: Software RAID options may not be available in all versions of Windows._

_![](/img/disk-mgmt-1.png)
_

**disParity** –  [disParity](https://www.vilett.com/disParity/) is a software RAID solution that is very minimalistic. It is completely command line driven which can be very good for some people and very scary for others. It will allow you to set up your data drives and then also keep a parity drive for recovery. It doesn’t quite group drives in a pool of information but more focuses on the recovery aspect of RAID.

![](/img/disparity.png)

**FlexRAID** – [flexRAID](https://www.openegg.org/FlexRAID.curi), similar to disParity, focuses on the recovery abilities of RAID rather than the massive storage pool. It requires a parity drive, just like disParity, but it can be configured from a web page and runs as a Windows service. There are also instructions in their forums on setting up FlexRAID on an existing Windows Home Server if you already have one.

## Linux Alternatives

**Logical Volume Management** – [LVM](https://en.wikipedia.org/wiki/Logical_Volume_Manager_%28Linux%29) provides a management layer to set up multiple disks spanning into one, dynamic resizing of volumes, and even hard drive replacements inside of a volume. As a matter of fact, LVM sounds like the perfect alternative for any Linux based WHS replacement and it comes with every major distribution. Be sure to check out our upcoming how-to on setting it up with Ubuntu Server.

![](/img/lvm.png)

**unRAID** – Lime Tech, the company behind [unRAID](https://www.lime-technology.com/), provides DIY licenses to build your own setup as well as whole servers that can replace your current NAS. The DIY server is designed to run completely from a USB drive and has the flexibility of drive extender while also keeping the data recovery of RAID. The server is free if you have 3 or less hard drives and there are reasonable license costs for more drives. If you are looking for a quick overview on how it works check out [Revision 3’s video](https://revision3.com/systm/unraid).

**MooseFS** – [MooseFS](https://www.moosefs.org/) is a bit more involved than the other solutions but it is much more flexible as well. All of the other solutions have relied on one machine with a lot of hard drives plugged in. MooseFS relies on a couple servers running management with a lot of other computers doing the storage. It is called a distributed filesystem and if you have Linux computers lying around your house this may be your best solution. Otherwise it probably is best to leave it for corporations and businesses.

![](/img/moosefs.png)

**GlusterFS** – [Gluster](https://www.gluster.org/) is a lot like MooseFS above, and Ceph below, and is probably a bit of a bigger solution than you are looking for. Gluster is another distributed file system that doesn’t rely on one computer to do all the storage, but you will need at least one that is on all the time to host the shared volumes to your clients.

![](/img/gluster.png)

## Beta Options

All of the options above are fully stable and at least somewhat mature options. There are a couple more options you may want to look at. Despite being beta releases, they have some features that the others may not incorporate.

**Greyhole** – [Greyhole project](https://redirect.viglink.com/?key=e7eab128eb8d1c53e14db14f4c632447&u=http%3A%2F%2Fcode.google.com%2Fp%2Fgreyhole%2F&cuid=xid:{xid}&___trxnet=vg) employs the JBOD approach to storage but along with local disks you can also mount and use remote filesystems in your storage pool. Unlike some other solutions that only create a storage pool or only focus on redundancy, greyhole can do both and is a great open source alternative to drive extender and folder duplication on WHS.

![](/img/greyhole.png)

**Ceph** – [Ceph](https://ceph.newdream.net/) is a new distributed file system that is just now starting to make its way into the Linux kernel. While it is very similar to MoosFS and Gluster it boasts better performance, is based on BTRFS, and has a cool octopus logo. It is aimed to be use by businesses and isn’t ready for deployment yet, but so was WHS in a sense.

![](/img/ceph.png)
