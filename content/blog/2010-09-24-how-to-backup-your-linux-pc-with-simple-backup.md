---
author: "Justin Garrison"
title: "How to Backup Your Linux PC with Simple Backup"
description: "It doesn’t matter if you are using Windows, OS X, or Linux, everyone should do"
date: 2010-09-24
images: [/img/install-1.png]
thumbnail: /img/install-1.png
draft: false
canonical: https://www.howtogeek.com/29518/how-to-backup-your-linux-pc-with-simple-backup/
---

It doesn’t matter if you are using Windows, OS X, or Linux, everyone should do regular backups of their information. In Linux one of the easiest ways to do automated backups is with Simple Backup (SBackup). Here is how you can set up SBackup to make sure you have a backup of all your important files.

## Install Simple Backup

To install SBackup open your menu and click on the software center. Search for SBackup and install the software from the search results.

_Note: These screenshots are taken from Linux Mint 9 but the steps will work on Ubuntu and most Ubuntu based distros._

![](/img/install-1.png?width=1198&trim=1,1&bg-color=000&pad=1,1)

## Configure SBackup

SBackup’s recommended settings assumes you have /var/backup pointing to a separate hard drive. That is usually not the case on personal laptops and desktops so it would probably be a better idea to select custom backup settings and change the settings as you need.

![](/img/properties-1.png)

Next click on the include tab and add any files or directories you would like backup up. The backup program runs as root so you are able to backup any directory even if your user does not have access to them.

![](/img/properties-2.png)

The next tab will have settings to exclude directories, file types (based on file extension), a regular expression (regex), or based on file size.

![](/img/properties-3.png)

By default SBackup doesn’t back up most media files, so if you don’t already have a backup of your videos and music you will want to adjust the settings below to include them in the backups. Just make sure your backup hard drive has enough space to store all the media files.

![](/img/properties-filetypes.png)

It would also be recommended to change the max size setting because by default SBackup doesn’t backup anything larger than 95 MB.

![](/img/properties-4.png)

The destination tab will allow you to select your destination folder, hard drive, or remote directory.

![](/img/properties-5.png)

Although the remote directory only shows SSH and FTP, other protocols like SFTP and SMB are also supported. To enter a different protocol simply add the correct information to the beginning of the path and make sure you have the correct username and password in the path as well. The format for a network path is `<protocol>://username:password@server/share`. If you are backing up to a remote server you should also check the box to abort if the destination doesn’t exist otherwise the backup will be stored locally on your hard drive.

![](/img/properties-destination.png)

Alternatively you could also leave out the username:password information in the URI but you will be prompted for your credentials every time the backup starts.

![](/img/authentication.png)

The next tab will allow you to schedule your backups to automatically happen whenever you’d like. The backup uses cron to schedule the jobs so if you know how to use cron you can easily modify the schedule to your liking.

![](/img/properties-7.png)

To prevent your hard drive from filling up, change the settings you want on the purging tab to delete old backups.

![](/img/properties-8.png)

Once all your settings are the way you want, click save to write the changes to the config file.

![](/img/properties-9.png)

Click backup now to test your backup settings and make sure your backup starts.

_Note: In Linux Mint 9 and Ubuntu 10.04 there is a bug with SBackup. To run the backup you will need to open a terminal and run “sudo sbackupd &”. To fix this bug you can either upgrade to Linux Mint 10 or Ubuntu 10.10 or compile SBackup 11.2 from source._

![](/img/backup-start.png)

Always double check that your backup files are writing successfully, the folder will be time stamped with the date, time, and computer name.

![](/img/backup-files.png)

## Restore From a Backup

To restore your files, open Simple Backup Restore and select the backup location and the files you would like to restore from the list.

_Note: In Linux Mint 9 using SBackup 10.5 I was not able to restore files from my remote directory without mounting the share to a local directory. This should be fixed with SBackup 11.2._

![](/img/restore-files.png)

Simple Backup project on [Sourceforge](https://sourceforge.net/projects/sbackup/)
