---
author: "Justin Garrison"
title: "Manually Restore System Files from Your Windows Installation Media"
description: "If you’ve ever had a missing or corrupt system file in Windows"
date: 2010-11-09
images: [/img/og-image.png]
thumbnail: /img/dll-error.png
draft: false
canonical: https://www.howtogeek.com/34654/manually-restore-system-files-from-your-windows-installation-media/
---

If you’ve ever had a missing or corrupt system file in Windows you sometimes end up in shady parts of the internet downloading files from who knows where. Why not restore the files directly from your installation disks?

![](/img/dll-error.png)

It doesn’t matter if the missing files came from a virus, poorly programmed software, or a family member who didn’t know better. We have all found ourselves in the situation of needing a system file that we can’t find. Luckily if you still have your install disks you can manually restore the system files you need without doing a reinstall.

_Note: Replacing system files can be very dangerous and may break your system even more than it already is. Only do this if you have already made a complete backup of your computer and are willing to do a full re-install if this doesn’t work._

## Install 7-zip

7-zip is an insanely useful tool that no tech support should be without. It can open just about any compressed file including Windows disk image files. Download it from the link below if you don’t already have it installed.

![](/img/7zip-web.png)

## Aquire the Installation Media

If you have an OS upgrade disk, retail copy of your operating system, or sometimes even system restore disks you should be able to get the files you need. All Windows Vista and 7 installations are stored as an install.wim file on the disk. Put in your installation media and browse to the sources directory to find it.

_Note: If you have system restore disks from your computer manufacturer you may have to search for the file but it should still be there._

![](/img/browse-sources.png)

Open the install.wim file with 7-zip.

![](/img/7zip-wim.png)

## Identify the Image You Need

You may see more than just one folder which means your installation media can install more than one version of Windows. To know which folder you need, copy the xml files to your desktop and open them with notepad.

Look for a tag labeled EDITIONID to know which version of Windows corresponds to which folder.

![](/img/editionid.png)

If you are not sure which version of Windows you have installed you can sometimes tell by the sticker that came on your computer, or you can right click on computer and select properties to view your edition and architecture.

![](/img/system-properties.png)

## Extract the Files

You can match the folder inside of 7-zip with the .xml files and then browse the contents for the files you need.

_Note: Most system files will be in the C:\\Windows\\system32 or C:\\Windows\\SysWOW64 so if you don’t know where to look, search there first._

_![](/img/7zip-browse-2.png)_

Copy the files to your hard drive and replace them on your computer. If you cannot access the files because they are in use, try a live Linux disk and copy the files from there.

![](/img/ubuntu-browse.png)

This is the safest way to getting the missing system files back to how they were when you did a fresh install. If you cannot find the files on the installation disk you can also try [restoring the files from a Windows system image](https://www.howtogeek.com/34630/how-to-recover-specific-files-from-a-windows-system-image/) you created in a backup.

[Download 7-zip](https://www.7-zip.org/)
