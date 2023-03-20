---
author: "Justin Garrison"
title: "How to Create a Live Ubuntu USB Drive With Persistent Storage"
description: "A Linux live USB drive is normally a blank slate each time you boot it."
date: 2011-06-13
images: [/img/img_5cd9ff1ceced2.png]
thumbnail: /img/img_5cd9ff1ceced2.png
draft: false
canonical: https://www.howtogeek.com/65888/create-a-persistent-bootable-and-virtualized-linux-usb-drive-with-lili/
---

A [Linux live USB drive](https://www.howtogeek.com/1261/create-a-bootable-ubuntu-usb-flash-drive-the-easy-way/) is normally a blank slate each time you boot it. You can boot it up, install programs, save files, and change settings. But, as soon as you reboot, all your changes are wiped away and you’re back to a fresh system. This can be useful, but if you want a system that picks up where you left off, you can create a live USB with persistent storage.

## How Persistent Storage Works

When you create a USB drive with persistence, you’ll allocate up to 4 GB of the USB drive for a persistent overlay file. Any changes you make to the system—for example, saving a file to your desktop, changing the settings in an application, or installing a program—will be stored in the overlay file. Whenever you boot the USB drive on any computer, your files, settings, and installed programs will be there.

This is an ideal feature if you want to keep a live Linux system on a USB drive and use on different PCs. You won’t have to set up your system up from scratch each time you boot. You *don’t* need persistence if you’re just using a USB drive to install Ubuntu and then running it from your hard drive afterward.

There are a few limitations. You can’t modify system files, like the kernel. You can’t perform major system upgrades. You also can’t install hardware drivers. However, you can install most applications. You can even update most installed applications, so you can be sure your persistent USB drive has the latest version of the web browser you prefer.

Persistence doesn’t work with every Linux distribution. We’ve tested it with the latest versions of Ubuntu—Ubuntu 18.04 LTS and Ubuntu 19.04—and it works. It should also work with Ubuntu-based Linux distributions. In the past, we had luck with Fedora as well. Just download the appropriate ISO file and follow the instructions below.

**Update**: Rufus, which [we recommend for easily creating live USB drives](https://www.howtogeek.com/1261/create-a-bootable-ubuntu-usb-flash-drive-the-easy-way/) on Windows, [now supports persistent storage](https://github.com/pbatard/rufus/releases/tag/v3.7) in its latest versions. Previous versions did not, necessitating the below process. Give Rufus a try if you’re using Windows and want to avoid the Linux command line process below.

**RELATED:** **_[How to Create a Bootable Linux USB Flash Drive, the Easy Way](https://www.howtogeek.com/1261/create-a-bootable-ubuntu-usb-flash-drive-the-easy-way/)_**

## How to Make a Persistent Ubuntu USB Drive on Ubuntu

You’ll need a computer already running Ubuntu to perform this process. You’ll also need a USB drive with enough storage capacity to set up persistence. We used a 16 GB drive, but an 8 GB drive would have worked as well. The bigger the drive, the more persistent storage you can have.

The grub, boot and Ubuntu partitions take up less than 2 GB. The remainder of the space on the USB drive will be used for the `casper-rw` and the `usbdata` partitions.

The `casper-rw` partition is used for persistent storage. For example, software you install and settings files will be stored here.

The `usbdata` partition will be formatted with the NTFS file system. It will be accessible to Linux, Windows, and macOS. This partition is also available from within the live Ubuntu on the USB drive. This means any files copied to the `usbdata` partition from another computer will be accessible to your live Ubuntu.

In other words, the `usbdata` partition acts as a “shared folder” between your live Ubuntu and any other computer you plug your USB drive into. That’s pretty cool.

The below screenshot shows how the resulting partitions looked on our 16 GB drive.

![https://www.howtogeek.com/wp-content/uploads/2019/05/mkusb_25.png?trim=1,1&bg-color=000&pad=1,1](https://www.howtogeek.com/wp-content/uploads/2019/05/mkusb_25.png?trim=1,1&bg-color=000&pad=1,1)

Although a 16 GB USB drive was used for researching this article, an 8 GB drive would work just as well. It would simply have less storage.

First, you’ll have to download the [Ubuntu ISO file](https://www.ubuntu.com/download) you want to place on the USB drive.

_Note_: If you’re creating a live USB drive from a live disk, ensure Ubuntu’s Universe repository is enabled before you continue. You can do that by running the following command:

```
sudo add-apt-repository universe
```

Second, the tool you’re going to use is called `mkusb`. It is not part of the standard Ubuntu installation. You will need to install it. To do so, enter the following three commands. The first command adds the `mkusb` repository so that Ubuntu knows where to install `mkusb` from.

```
sudo add-apt-repository ppa:mkusb/ppa
```

![https://www.howtogeek.com/wp-content/uploads/2019/05/mkusb_01.png?trim=1,1&bg-color=000&pad=1,1](https://www.howtogeek.com/wp-content/uploads/2019/05/mkusb_01.png?trim=1,1&bg-color=000&pad=1,1)

The next command forces Ubuntu to refresh its package lists for the registered repositories.

```
sudo apt-get update
```

![https://www.howtogeek.com/wp-content/uploads/2019/05/mkusb_02.png?trim=1,1&bg-color=000&pad=1,1](https://www.howtogeek.com/wp-content/uploads/2019/05/mkusb_02.png?trim=1,1&bg-color=000&pad=1,1)

We can now proceed to install the `mkusb` package, with this command:

```
sudo apt install --install-recommends mkusb mkusb-nox usb-pack-efi
```

![https://www.howtogeek.com/wp-content/uploads/2019/05/mkusb_03.png?trim=1,1&bg-color=000&pad=1,1](https://www.howtogeek.com/wp-content/uploads/2019/05/mkusb_03.png?trim=1,1&bg-color=000&pad=1,1)

The `mkusb` program does a terrific job of identifying USB drives. That’s great, but there’s nothing like knowing for yourself. When `mkusb` tells you it is going to completely wipe a particular drive, you can be sure it’s the USB drive you are planning on using and not another device on your system.

In a terminal window, type the following command. The `lsblk` command [lists the block devices](https://man7.org/linux/man-pages/man8/lsblk.8.html) on your computer. Each drive has a block device associated with it.

```
lsblk
```

![https://www.howtogeek.com/wp-content/uploads/2019/05/mkusb_04.png?trim=1,1&bg-color=000&pad=1,1](https://www.howtogeek.com/wp-content/uploads/2019/05/mkusb_04.png?trim=1,1&bg-color=000&pad=1,1)

The output from `lsblk` will show the drives currently connected to your computer. There is one internal hard drive on this machine called `sda` and there is one partition on it called `sda1`.

![https://www.howtogeek.com/wp-content/uploads/2019/05/mkusb_05.png?trim=1,1&bg-color=000&pad=1,1](https://www.howtogeek.com/wp-content/uploads/2019/05/mkusb_05.png?trim=1,1&bg-color=000&pad=1,1)

Plug in your USB drive and use the `lsblk` command once more. The output from `lsblk` will have changed. The USB drive will now be listed in the output.

![https://www.howtogeek.com/wp-content/uploads/2019/05/mkusb_06.png?trim=1,1&bg-color=000&pad=1,1](https://www.howtogeek.com/wp-content/uploads/2019/05/mkusb_06.png?trim=1,1&bg-color=000&pad=1,1)

There is a new entry called `sdb` in the list. It has one partition called `sdb1`. That’s the USB drive.

If you have more than one drive in your computer already, the name of your USB drive will be different. Regardless of how it is named, the device that was *not* in the previous `lsblk` listing *must* be the USB drive.

Once you know which device your USB drive is, you can launch `mkusb`. Press the Super (Windows) key and type “mkusb”. The `mkusb` icon will appear. Click the icon or press Enter.

![https://www.howtogeek.com/wp-content/uploads/2019/05/mkusb_6a.png?trim=1,1&bg-color=000&pad=1,1](https://www.howtogeek.com/wp-content/uploads/2019/05/mkusb_6a.png?trim=1,1&bg-color=000&pad=1,1)

A dialog will ask you whether you wish to run the dus (Do USB Stuff) version of `mkusb`. Click the “Yes” button.

![https://www.howtogeek.com/wp-content/uploads/2019/05/mkusb_7.png?trim=1,1&bg-color=000&pad=1,1](https://www.howtogeek.com/wp-content/uploads/2019/05/mkusb_7.png?trim=1,1&bg-color=000&pad=1,1)

A terminal window with a black background will appear and a dialog box will prompt you for your password. Enter your password and click the “OK” button.

![https://www.howtogeek.com/wp-content/uploads/2019/05/mkusb_8.png?trim=1,1&bg-color=000&pad=1,1](https://www.howtogeek.com/wp-content/uploads/2019/05/mkusb_8.png?trim=1,1&bg-color=000&pad=1,1)

**Warning**: This process will wipe the contents of the USB drive!

Click “OK” in the warning dialog to acknowledge you understand this.

![https://www.howtogeek.com/wp-content/uploads/2019/05/mkusb_9.png?trim=1,1&bg-color=000&pad=1,1](https://www.howtogeek.com/wp-content/uploads/2019/05/mkusb_9.png?trim=1,1&bg-color=000&pad=1,1)

Click the “Install (make a boot device)” entry in the list and click the “OK” button.

![https://www.howtogeek.com/wp-content/uploads/2019/05/mkusb_10.png?trim=1,1&bg-color=000&pad=1,1](https://www.howtogeek.com/wp-content/uploads/2019/05/mkusb_10.png?trim=1,1&bg-color=000&pad=1,1)

Select the “‘Persistent live’ – only Debian and Ubuntu” entry in the list and click the “OK” button.

![https://www.howtogeek.com/wp-content/uploads/2019/05/mkusb_13.png?trim=1,1&bg-color=000&pad=1,1](https://www.howtogeek.com/wp-content/uploads/2019/05/mkusb_13.png?trim=1,1&bg-color=000&pad=1,1)

A file browser dialog will appear. Browse to the Ubuntu ISO file you downloaded, select it, and click the green “OK” button.

In the screenshot below, we’re selecting the Ubuntu 19.04 ISO image from the Downloads folder.

![https://www.howtogeek.com/wp-content/uploads/2019/05/mkusb_14.png?trim=1,1&bg-color=000&pad=1,1](https://www.howtogeek.com/wp-content/uploads/2019/05/mkusb_14.png?trim=1,1&bg-color=000&pad=1,1)

You’ll see a list of the USB drives connected to your computer. This allows you to select the appropriate USB drive.

There was only one USB drive connected to the test machine used for this article. As we confirmed above, it is called `sdb`. We’ve confirmed that’s the USB drive we want to use so we can proceed with confidence. Click the “OK” button.

![https://www.howtogeek.com/wp-content/uploads/2019/05/mkusb_15.png?trim=1,1&bg-color=000&pad=1,1](https://www.howtogeek.com/wp-content/uploads/2019/05/mkusb_15.png?trim=1,1&bg-color=000&pad=1,1)

When the dialog shown below appears, select the “usb-pack-efi (default grub from ISO file)” entry in the list and click the “OK” button.

![https://www.howtogeek.com/wp-content/uploads/2019/05/mkusb_16.png?trim=1,1&bg-color=000&pad=1,1](https://www.howtogeek.com/wp-content/uploads/2019/05/mkusb_16.png?trim=1,1&bg-color=000&pad=1,1)

You have one more option to choose. You can select what percentage of the storage space is for persistent storage in the `casper-rw` partition. The remainder will be used for the `usbdata` partition, which has the NTFS file system and can also be accessed from Windows PCs and Macs.

If you’re happy to have the available space on the USB drive shared equally between these two partitions, leave the slider at its default value and click the “OK” button.

![https://www.howtogeek.com/wp-content/uploads/2019/05/mkusb_17.png?trim=1,1&bg-color=000&pad=1,1](https://www.howtogeek.com/wp-content/uploads/2019/05/mkusb_17.png?trim=1,1&bg-color=000&pad=1,1)

Now, we just have to tell `mkusb` that we’re happy with all of our choices and that it should proceed.

To be clear, this is the last point at which you can back out. If you’re certain you wish to proceed, select the “Go” radio button and click the “Go” button.

![https://www.howtogeek.com/wp-content/uploads/2019/05/mkusb_18.png?trim=1,1&bg-color=000&pad=1,1](https://www.howtogeek.com/wp-content/uploads/2019/05/mkusb_18.png?trim=1,1&bg-color=000&pad=1,1)

A progress bar shows you how close the creation process is to completion.

![https://www.howtogeek.com/wp-content/uploads/2019/05/mkusb_20.png?trim=1,1&bg-color=000&pad=1,1](https://www.howtogeek.com/wp-content/uploads/2019/05/mkusb_20.png?trim=1,1&bg-color=000&pad=1,1)

The final stage of the creation is to flush the file system buffers to the USB drive. You are also advised to wait until you see the phrase “Work done”. That will indicate the process has completed.

![https://www.howtogeek.com/wp-content/uploads/2019/05/mkusb_22.png?trim=1,1&bg-color=000&pad=1,1](https://www.howtogeek.com/wp-content/uploads/2019/05/mkusb_22.png?trim=1,1&bg-color=000&pad=1,1)

When the process has completed you will see a dialog with the phrase “Work done” highlighted in green. Click the “OK” button. If any other dialogs appear, close them by clicking on the “Quit” button.

![https://www.howtogeek.com/wp-content/uploads/2019/05/mkusb_23.png?trim=1,1&bg-color=000&pad=1,1](https://www.howtogeek.com/wp-content/uploads/2019/05/mkusb_23.png?trim=1,1&bg-color=000&pad=1,1)

A few more lines of output will scroll through the terminal window. You will be prompted to press “Enter” when you are ready.

![https://www.howtogeek.com/wp-content/uploads/2019/05/mkusb_24.png?trim=1,1&bg-color=000&pad=1,1](https://www.howtogeek.com/wp-content/uploads/2019/05/mkusb_24.png?trim=1,1&bg-color=000&pad=1,1)

When you press “Enter,” the terminal window will close. You can now either reboot your computer and [boot from the USB drive](https://www.howtogeek.com/129815/beginner-geek-how-to-change-the-boot-order-in-your-computers-bios/) or unplug the USB drive, take it to another computer, and boot it there.

**RELATED:** **_[How to Boot Your Computer From a Disc or USB Drive](https://www.howtogeek.com/129815/beginner-geek-how-to-change-the-boot-order-in-your-computers-bios/)_**

## How to Make a Persistent Ubuntu USB Drive on Windows

_Update_: We’ve been told the below method (using Linux Live USB Creator) no longer works with the latest versions of Ubuntu. You’ll need to use the above method instead.

You’ll need a large enough USB drive to set up persistence. Ubuntu itself claims it needs 2 GB of storage on the USB drive, and you’ll also need extra space for the persistent storage. So, if you have a 4 GB USB drive, you can only have 2 GB of persistent storage. To have the maximum amount of persistent storage, you’ll need a USB drive of at least 6 GB in size.

Unfortunately, the Rufus tool that Ubuntu officially recommends for creating live Ubuntu USB drives on Windows doesn’t offer support for creating systems with persistent storage. While we recommend using Rufus to create most Ubuntu live USB drives, we’ll have to use a different tool for this particular job. (**Update**: The latest versions of Rufus now support persistent storage!)

Download [the Ubuntu ISO file](https://www.ubuntu.com/download) you want to place on the USB drive and the [Linux Live USB Creator](https://www.linuxliveusb.com/en/home) application.

Insert the USB drive you want to use into your computer’s USB port and launch the “LiLi USB Creator” application you just installed.

Select the USB drive you want to use in the “Step 1: Choose Your Key” box.

![https://www.howtogeek.com/wp-content/uploads/2016/12/img_58473aac8f2b6.png?trim=1,1&bg-color=000&pad=1,1](https://www.howtogeek.com/wp-content/uploads/2016/12/img_58473aac8f2b6.png?trim=1,1&bg-color=000&pad=1,1)

Provide your downloaded Ubuntu ISO file. Click the “ISO / IMG / ZIP” button under “Step 2: Choose a Source”, browse to the .ISO file on your computer, and double-click it.

![https://www.howtogeek.com/wp-content/uploads/2016/12/img_58473aa48d784.png?trim=1,1&bg-color=000&pad=1,1](https://www.howtogeek.com/wp-content/uploads/2016/12/img_58473aa48d784.png?trim=1,1&bg-color=000&pad=1,1)

Use the options in the “Step 3: Persistence” section to select how much space you want to use for persistent storage on the USB drive. Drag the slider all the way to the right to select the maximum amount of storage.

![https://www.howtogeek.com/wp-content/uploads/2016/12/img_58473a973fc57.png?trim=1,1&bg-color=000&pad=1,1](https://www.howtogeek.com/wp-content/uploads/2016/12/img_58473a973fc57.png?trim=1,1&bg-color=000&pad=1,1)

You’ve now configured all the settings you need to configure. To create your live USB drive with persistent storage, click the lightning icon under “Step 5: Create”.

![https://www.howtogeek.com/wp-content/uploads/2016/12/img_58473ae1b9f75.png?trim=1,1&bg-color=000&pad=1,1](https://www.howtogeek.com/wp-content/uploads/2016/12/img_58473ae1b9f75.png?trim=1,1&bg-color=000&pad=1,1)

Give the tool some time to create the drive. When the process is done, you’ll see a “Your LinuxLive key is now up and ready!” message. You can now either reboot your computer and boot from the USB drive or unplug the USB drive, take it to another computer, and boot it there.

![https://www.howtogeek.com/wp-content/uploads/2016/12/img_58473d89e3cd7.png?trim=1,1&bg-color=000&pad=1,1](https://www.howtogeek.com/wp-content/uploads/2016/12/img_58473d89e3cd7.png?trim=1,1&bg-color=000&pad=1,1)

To confirm that persistent storage is working properly, boot the USB drive and create a folder on the desktop, or save a file to the desktop. Then, shut down your system and boot the live USB drive again. You should see the folder or file you placed on the desktop.
