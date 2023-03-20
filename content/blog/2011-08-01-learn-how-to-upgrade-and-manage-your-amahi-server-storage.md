---
author: "Justin Garrison"
title: "Learn How to Upgrade and Manage Your Amahi Server Storage"
description: "We have just shown you that you can upgrade your Windows Home Server for free"
date: 2011-08-01
images: [/img/banner3-3.png]
thumbnail: /img/banner3-3.png
draft: false
canonical: https://www.howtogeek.com/69192/learn-how-to-upgrade-and-manage-your-amahi-server-storage/
---

We have just [shown you that you can upgrade your Windows Home Server for free](https://www.howtogeek.com/63253/upgrade-your-windows-home-server-with-amahi/) by choosing the open source Amahi server. Now that it’s installed, here’s how to manage your drives, shares, and storage pool.

## Add Hard Drive

The first step to adding storage is to add more drives. To do that, shutdown the server and plug in the additional hard drives you would like to add.

We will need to format the new drive so make sure you have a backup of anything you may need.

![/img/whs-00.png?trim=1,1&bg-color=000&pad=1,1](/img/whs-00.png?trim=1,1&bg-color=000&pad=1,1)

Power on the Amahi machine and use another computer to SSH to the server.

If you don’t have an SSH client on another computer you can also use [anyterm from the Amahi repository](https://www.amahi.org/apps/ajaxterm).

![/img/ssh-00.png?trim=1,1&bg-color=000&pad=1,1](/img/ssh-00.png?trim=1,1&bg-color=000&pad=1,1)

First, install a few tools so we can mount and format the drive(s). Run this command as root:

> yum -y install pmount fuse fuse-libs ntfs-3g gparted util-linux-ng

![/img/ssh-02.png?trim=1,1&bg-color=000&pad=1,1](/img/ssh-02.png?trim=1,1&bg-color=000&pad=1,1)

Next, check to make sure your hard drive was detected with the command

> ls -l /dev/disk/by-id/ | egrep -v "part|scsi"

You will want to look for something that starts with “ata-” because these are your IDE and SATA drives while something that starts with “usb-” will be a USB hard drive. Make note of the part after the “-> ../../sd” because that corresponds to your hard drive letter in /dev/sdX

![/img/ssh-01.png?trim=1,1&bg-color=000&pad=1,1](/img/ssh-01.png?trim=1,1&bg-color=000&pad=1,1)

Using the drive letter you just got, launch cfdisk from the terminal as root with your new drive as it’s only option.

Make sure this is your new drive and not an existing drive with data. All of the information will be formatted from the drive in this next step. Typically if you only have two hard drives the first will be /dev/sda while the second will be /dev/sdb

In the example above I will launch cfdisk with:

> cfdisk /dev/sdb

If you have partitions already on the drive use up/down to select the partition(s) and left/right to select the delete action at the bottom.

Once all the partitions have been deleted you can then select new, to create a new partition, and then write the new partition table to the drive.

![/img/ssh-03.png?trim=1,1&bg-color=000&pad=1,1](/img/ssh-03.png?trim=1,1&bg-color=000&pad=1,1)

Quite cfdisk when the actions have been completed and then run the command below replacing sdX with your drive letter.

> mkfs.ext4 -j /dev/sdX1

![/img/ssh-04.png?trim=1,1&bg-color=000&pad=1,1](/img/ssh-04.png?trim=1,1&bg-color=000&pad=1,1)

Now the drive has a fresh partition formatted and ready to go. Run the command

> hda-diskmount

as root to automatically mount your new partition.

![/img/ssh-05.png?trim=1,1&bg-color=000&pad=1,1](/img/ssh-05.png?trim=1,1&bg-color=000&pad=1,1)

The hda-diskmount command will also give you the line you need to add to [/etc/fstab](https://www.howtogeek.com/38125/htg-explains-what-is-the-linux-fstab-and-how-does-it-work/) to automatically have the drive mounted every time the server is turned on.Use nano to edit your fstab file as root

> nano /etc/fstab

and add the suggested line from the hda-diskmount command to the bottom of the file.

![/img/ssh-06.png?trim=1,1&bg-color=000&pad=1,1](/img/ssh-06.png?trim=1,1&bg-color=000&pad=1,1)

Reboot the system and when the server is back up go to to the webpanel to verify the hard drive is mounted.

## Manage Storage Pool

Now that the hard drive is formatted and mounted, go to your HDA’s setup page, click on the settings page and then check the box for advanced settings.

![/img/web-00.png?trim=1,1&bg-color=000&pad=1,1](/img/web-00.png?trim=1,1&bg-color=000&pad=1,1)

Now go to the shares -> storage pool tab and check the box next to your new hard drive to use the drive in the greyhole pool.

![/img/web-01.png?trim=1,1&bg-color=000&pad=1,1](/img/web-01.png?trim=1,1&bg-color=000&pad=1,1)

If you want to use the benefits of pooled storage you will need to add more than one hard drive to the pool. Repeat the steps above to add more drives to your HDA and then pool the drives here.

## Create Share

Now that you have more space and the storage is being pooled, click on the shares -> shares tab and click new share.

Give the share a name and select if you want it to be read only and visible.

![/img/web-02.png?trim=1,1&bg-color=000&pad=1,1](/img/web-02.png?trim=1,1&bg-color=000&pad=1,1)

Once the share is created, click on the edit icon next to the share name and check the box to use the storage pool.

If you have more than one hard drive added to the pool you can also select how many copies of the files you would like to store in case hard drives fail.

![/img/web-03.png?trim=1,1&bg-color=000&pad=1,1](/img/web-03.png?trim=1,1&bg-color=000&pad=1,1)

For more information or advanced setup of your storage, check out the Amahi wiki

[Amahi wiki: Adding a Second Hard Drive](https://wiki.amahi.org/index.php/Adding_a_second_hard_drive_to_your_HDA)

[Amahi wiki: Storage Pooling](https://wiki.amahi.org/index.php/Storage_pooling)
