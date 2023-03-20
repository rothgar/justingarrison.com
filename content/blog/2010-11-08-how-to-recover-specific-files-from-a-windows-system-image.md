---
author: "Justin Garrison"
title: "How to Recover Specific Files from a Windows System Image"
description: "Windows provides a fail safe way of recovering your entire hard drive"
date: 2010-11-08
images: [/img/og-image.png]
thumbnail: /img/2img.png
draft: false
canonical: https://www.howtogeek.com/34630/how-to-recover-specific-files-from-a-windows-system-image/
---

Windows provides a fail safe way of recovering your entire hard drive with system images, but what if you only need to recover certain files from the image instead of restoring your entire hard drive?

Windows Vista and 7 have a few different options for recovering your computer in case of a catastrophe. System protection will allow you to keep a restore point and backup to an existing known good state, and a system image will allow you to reproduce every bit on your hard drive in case of total failure. A system image is more completed but there is no easy way to recover a single file from a system image.

## Create Windows System Image

To get started you first need to make sure you create a [Windows system image backup](https://www.howtogeek.com/4241/how-to-create-a-system-image-in-windows-7/).

![](/img/2img.png?width=1198&trim=1,1&bg-color=000&pad=1,1)

Once your backup has been created you will have a series of files on your external hard drive where you saved your backup. The root folder is called WindowsImageBackup with a folder named your username inside. This is where your backup is stored so we are going to use this to get the files back that we need.

![](/img/backup-folders.png)

## Mount VHD

Open your start menu and right click on computer and then open manage.

![](/img/manage-open.png)

In computer management click on disk management on the left side.

![](/img/manage-disk-mgmt.png)

Open the action menu and select attach VHD.

_Note: It looks like you need Windows Vista Enterprise or Ultimate to have this option available. Check out the link below to mount a VHD in Vista Home or Business. If the attach VHD option is greyed out, click in the blank space where your volumes are listed and it should become selectable._

_![](/img/manage-attach-vhd.png)_

Browse to the VHD file inside the backup folder that was created earlier. If you have two VHD files look at the file size because the smaller one will be your boot partition, and the larger one will be your system (C:) drive.

![](/img/manage-vhd-browse.png)

A new drive should show up in disk management using the next available drive letter.

![](/img/manage-drive-list.png)

## Recover Files

The autoplay prompt will pop up if you have it turned on because we just plugged in a virtual hard drive.

![](/img/autoplay.png)

Browse the files and copy any files you need to recover to your C: drive.

![](/img/file-browser.png)

## Disconnect VHD

When you have the files you need, go back to disk management and right click on the lower window where it says your disk number. Then select detach VHD to unmount your backup file.

![](/img/manage-detach-vhd.png)
Make sure you don’t check the box that asks if you want to delete the VHD when you detach it.
![](/img/manage-detach-vhd-2.png)

## Mount Virtual Hard Drives the Easy Way

If you think opening disk management is a pain you can instead install VHD attach and open your VHD files directly from your right click menu.
![](/img/vhd-attach.png)
VHD files will be attached to a drive letter just as before and you can recover files the same way.

[VHD Attach](https://www.jmedved.com/default.aspx?page=vhdattach&rendering=xhtml)

[Attach VHD files in Windows Vista with a double click](https://blogs.msdn.com/b/cschotte/archive/2008/03/26/how-to-mount-a-vhd-quickly-under-vista-using-your-mouse.aspx)
