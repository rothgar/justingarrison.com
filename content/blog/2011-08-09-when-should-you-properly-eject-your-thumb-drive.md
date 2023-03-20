---
author: "Justin Garrison"
title: "When Should You Properly “Eject” Your Thumb Drive?"
description: "When do you safely remove a device? Some users put caution"
date: 2011-08-09
images: [/img/banner15.png]
thumbnail: /img/banner15.png
draft: false
canonical: https://www.howtogeek.com/69869/when-should-you-properly-eject-your-thumb-drive/
---

When do you safely remove a device? Some users put caution to the wind and yank out any device, while others perform religious rituals every time. Here are some tips and guidelines for practicing safe drive removal.

Removable storage has been around as long as the personal computer and safely removing or “ejecting” drives is something that OS X and Linux users are very familiar with. Whenever an external storage device is plugged into those operating system it becomes mounted to a location, and if you just pull it out without warning your OS, typically you receive a nasty warning saying you may have just lost all your data.

![/img/osx-warning.png](/img/osx-warning.png)

In Windows, however, drive mounting is different. It doesn’t always require you to safely remove a device and rarely does it send out nastygram popups when you remove a device without warning. At most, you may get a popup the next time you plug in the device [asking you to scan and fix the drive](https://www.howtogeek.com/35622/disable-scan-and-fix-for-removable-drives-in-windows/).

So how can you know when you should eject a drive before unplugging it? Here are some never, always, and sometimes situations to consider.

## Never Eject

Let’s start with the easy scenarios first; devices you never need to eject before removing. This includes the following:

![/img/non-eject-drives.png](/img/non-eject-drives.png)

- Read only media like CDs and DVDs as well as write protected USB, CF, or SD cards. When a device is in read only mode there is no way to corrupt the information on the device because Windows does not have the capability of changing information. For USB devices, make sure there is a physical switch on the casing that allows you to switch between read and write modes.
- Network drives stored on a NAS or in “the cloud”. This doesn’t mean the information won’t ever become corrupt by disconnecting your network while writing files, but these drives do not need to be safely removed like other devices because they are not controlled by the same plug n play subsystem.
- Portable devices like media players and cameras connected via USB. These devices hold a special place in Windows and do not need, nor can they be, ejected before removing. For portable devices you won’t see a safely remove option in the menu.
- Devices with ReadyBoost. I know no one uses ReadyBoost anymore, but if you are using a device for a swap space boost, you should always let the operating system know before you remove it. Thanks to the readers below I found that Microsoft does not require ReadyBoost devices to be ejected before being removed. The ReadyBoost files are simply a cache for the real files being written to disk and removing the drive without ejecting does not harm the system.
- There is one more type of device you should never eject and that is a device you have booted an OS from. By “never eject” we mean don’t ever pull the drive out of the system unless the computer is turned off or the entire operating system is loaded into RAM like winPE. Most typical live Linux distributions only load what is needed from the disk when asked for it. Because the OS needs access to the drive to load files and software you should never pull out the boot device while the OS is running. The same goes for your Windows system drive (C:) because technically you could install Windows on a removable device and Windows 8 will have the option for a portable workspace.

## Always Eject

On the other end of the spectrum are storage devices that you should make a habit out of safely ejecting every time you remove it. This includes:

![/img/eject-drives.png](/img/eject-drives.png)

- USB Hard drives that are powered via USB. Spinning disks do not like when power is abruptly cut off from the device, and by ejecting the device first you can allow Windows to park the read/write heads off to the side so no damage occurs.
- Storage devices you have specifically [turned on write cache for better performance](https://www.howtogeek.com/447/speed-up-external-usb-hard-drives-in-windows-vista/). Turning on write cache greatly increases the devices performance, but the downside is you should always use the eject prompt before unplugging the device to prevent file system corruption.
- Drives that are in use. You won’t be able to safely remove these devices until you close all the open files or the read/write operations finish. If you were heavily using the drive, it is good practice to eject the drive first to make sure Windows is still not using the files. Technically you only need to safely remove a drive when you are writing to the drive, but if you have files open you may get a file not found error in the program or crash if the device is no longer available. If you are copying files from the device you will probably end up with corrupted files in your destination which can be just as bad.
- Drives with encrypted files or file systems. If you are decrypting files so you can read them you should always make sure you eject the drive before removing it from the system. This should allow your encryption software to properly re-encrypt any changes you have made before pulling the plug.
- ~~Devices with ReadyBoost. I know no one uses ReadyBoost anymore, but if you are using a device for a swap space boost, you should always let the operating system know before you remove it.~~

Because it is sometimes a pain to eject a drive, here are two how-tos for creating a shortcut or hotkey to quickly eject your drive(s). [Create a shortcut using disk ejector](https://www.howtogeek.com/1062/create-a-shortcut-or-hotkey-to-immediately-eject-a-specific-usb-drive/) or [create a shortcut using built in functionality](https://www.howtogeek.com/1061/create-a-shortcut-or-hotkey-for-the-safely-remove-hardware-dialog/).

## Sometimes Eject

The drives that are left are the typical USB flash drives you probably carry in your pocket all the time. Here are some guidelines and tips to follow before removal.

By default Windows sets removable storage devices to allow for quick removal. This means you should be able to just pull the drive from the system so long as it is not in use. There are still a couple situations you may want to consider though.

![/img/removal-policy.png](/img/removal-policy.png)

- When running portable apps from a USB drive. The software should run completely from memory, but if the software needs to save a configuration file or reload a portion of the program and the drive is not available the program may crash. In this case, ejecting the drive won’t necessarily help, but you should consider closing the programs before removing the drive.
- Devices with CD emulators or launchers like U3. These launchers are just programs that autorun when the device is plugged in which means the program may be running in memory and [prevent you from safely removing the device](https://kb.sandisk.com/app/answers/detail/a_id/1168/kw/Error%20message%20appears%20when%20ejecting%20the%20SanDisk%20Cruzer%20flash%20drive). Of course we’d just [recommend you uninstall the launcher completely](https://kb.sandisk.com/app/answers/detail/a_id/2550/~/removing-u3-launchpad-on-a-pc).
- After writing files to the drive. Even if the light on the drive stops flashing, Windows may still be waiting for the device to become ready or another task to finish first. Any time you write files to a flash drive, ejecting is a good idea or you might get the dreaded “delay write failed” error and have to start your file copy all over again.
- When using file systems with a journal like NTFS and HFS+. A journal helps with errors when power is lost or a drive disconnects allowing the system to continue with its file actions once power is restored. This is great for internal hard drives but can lead to unwanted consequences on a device that plugs into multiple different computers and operating systems. For most removable drives you are probably better off sticking with FAT32 for drives that need to also be used in OS X or Linux or exFAT for drives that are strictly kept to new Windows systems and OS X.
- USB hard drives with external power adapters. USB hard drives are treated different from USB flash drives and even if the drive has external power, it is still a good idea to let Windows park the heads before removing the USB cable from the computer. Windows removal policy will allow the drive to be removed without major reproductions, but larger drives typically hold larger files too (>2 GB) which means you also probably have the drive formatted with NTFS. As we just stated above, ejecting NTFS drives is good practice.
