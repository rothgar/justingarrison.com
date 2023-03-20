---
author: "Justin Garrison"
title: "How to Crack Your Forgotten Windows Password"
description: "Here at How-To Geek, we’ve covered many different ways to reset your password"
date: 2010-09-28
images: [/img/image241.png]
thumbnail: /img/image241.png
draft: false
canonical: https://www.howtogeek.com/29694/how-to-crack-your-forgotten-windows-password/
---

Here at How-To Geek, we’ve covered many different ways to reset your password for Windows—but what if you can’t reset your password? Or what if you’re using drive encryption that would wipe out your files if you changed the password? It’s time to crack the password instead.

To accomplish this, we’ll use a tool called Ophcrack that can crack your password so you can login without having to change it.

## Download Ophcrack

The first thing we will need to do is download the CD image from Ophcrack’s website. There are two options to download, XP or Vista, so make sure you grab the right one. The Vista download works with Windows Vista or Windows 7, and the only difference between XP and Vista is the “tables” Ophcrack uses to determine the password.

![](/img/iso-download-2.png)

Once the .iso file is downloaded, burn it to a CD using the guide below.

![](/img/6imgburn.png)

If you are going to be cracking your password on something that doesn’t have a CD drive, such as a netbook, download the universal USB creator from PenDrive Linux (_Link Below_). A USB drive will not only run faster but you can also use a single USB drive for Windows XP, Vista, and 7 if you copy the needed tables to the drive.

![](/img/usb-creator.png)

To create a USB drive that works with all versions of Windows, download the free password tables from Ophcrack’s website.

_Note: There are free tables available on Ophcrack’s website and there are paid tables, the paid tables will typically get the job done faster and will be able to crack more complex passwords but the paid tables may not fit on a USB drive because they range in size from 3 GB to 135 GB._

![](/img/vista-tables-1.png)

Now extract the tables to \\tables\\vista_free on the USB drive and they will be used automatically by Ophcrack.

![](/img/vista-tables-2.png)

## Boot from CD/USB

Boot the computer from the CD or USB drive that you created.

_Note: On some computers you may have to go into the BIOS settings to change the boot order or push a key to show the boot menu._

![](/img/image242.png)

Once the disk is done booting, Ophcrack should start automatically and will begin cracking the passwords for all of the users on your computer.

_Note: If the computer boots and you only have a blank screen or Ophcrack doesn’t start, try restarting the computer and selecting manual or low RAM options on the live CD boot menu._

![](/img/ophcrack-1.png)

If you have a complex password it will take a lot longer than simple passwords, and with the free tables your password may never be cracked. Once the crack is done you will see the password in plain text, write it down and reboot the machine to login. If your password isn’t cracked, you can also log in as one of the other users with admin rights and then change your password from within Windows.

![](/img/ophcrack-finished.png)

With the free tables available you will not be able to crack every password, but the paid tables range from $100 to $1000 so you may be better off just resetting your password with on of these tutorials:

- [Reset password with Ubuntu live CD](https://www.howtogeek.com/14369/change-or-reset-windows-password-from-a-ubuntu-live-cd/)
- [Change password with Linux System Rescue CD](https://www.howtogeek.com/1300/change-your-forgotten-windows-password-with-the-linux-system-rescue-cd/)
- [Reset password with Ultimate Boot CD](https://www.howtogeek.com/1295/reset-your-forgotten-password-the-easy-way-using-the-ultimate-boot-cd-for-windows/)
- [Reset password with password reset disk](https://www.howtogeek.com/1312/how-to-create-and-use-a-password-reset-disk-in-windows-vista/)

You can get all of the software needed for password cracking from these links.

- [Ophcrack homepage](https://ophcrack.sourceforge.net/)
- [Burn an iso file to disc](https://www.howtogeek.com/14183/beginner-geek-how-to-burn-an-iso-image-to-a-disc/)
- [Pendrive Linux Universal USB creator](https://www.pendrivelinux.com/universal-usb-installer-easy-as-1-2-3/)

If you aren’t using drive encryption and you’ve got a tough password, it’s usually much faster to reset the password using one of the tools above, but we like to show you all the different techniques that you can use.
