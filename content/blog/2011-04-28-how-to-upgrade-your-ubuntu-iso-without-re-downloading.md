---
author: "Justin Garrison"
title: "How to Upgrade your Ubuntu ISO Without Re-downloading"
description: "Ubuntu 11.04 is finally here and you can’t wait to download it"
date: 2011-04-28
images: [/img/banner10.png]
thumbnail: /img/banner10.png
draft: false
canonical: https://www.howtogeek.com/60406/how-to-upgrade-your-ubuntu-iso-without-re-downloading/
---

Ubuntu 11.04 is finally here and you can’t wait to download it, but as is typical on any Ubuntu release day, the mirrors are crawling. Luckily if you have an old Ubuntu .iso you can update it easily with zsync.

Zsync is a Linux command that allows you to compare an existing .iso with an up-to-date zsync meta file to download only the missing or out of date parts. Combine those parts with your existing file and what you are left with is a completely up to date iso without spending the time to download the entire file.

Just how much bandwidth can this save? In our testing, upgrading an iso from Ubuntu 10.04.2 to 11.04 Beta 2 needed to download about 89% of the original file and 10.10 to 11.04 Beta 2 needed 84%. Obviously the more current the original file is, the less you will need to download.

## Install zsync

Although zsync is a native Linux command it still works just as well under Windows with the help of Cygwin. If you need help [installing Cygwin in Windows, check out our walk through](https://www.howtogeek.com/41382/how-to-use-linux-commands-in-windows-with-cygwin/).

While you are installing Cygwin you will want to make sure you search for zsync on the select packages step.

![](/img/cygwin-install.png)

Zsync is available in the universe repo all the way back to Karmic Koala. So if you are currently using Ubuntu you can install zsync with the normal apt-get command.

> sudo apt-get install zsync

## Update ISO image

To update your old Ubuntu .iso image, open a command prompt and issue the following command with similar options.

> zsync -i /path/to/old/ubuntu.iso http://Path-to-Ubuntu.iso.zsync

This will compare your existing file with the new iso available online, download the missing parts from your current iso, and give you a fully up-to-date new file. Here is an example that lets us update our Ubuntu 10.04.2 image to the latest Ubuntu 11.04.

_Note: Using the below command will keep your original Ubuntu 10.04.2 .iso in tact and will create a new Ubuntu 11.04 .iso file._

> zsync -i ./ubuntu-10.04.2-desktop-i386.iso http://releases.ubuntu.com/natty/ubuntu-11.04-desktop-i386.iso.zsync

![](/img/zsync-01.png)

As you can see from the screenshot below, the file we updated with zsync (left) is exactly the same as the original file we downloaded directly (right).

![](/img/hash-properties.png)

Use the links below for the different zsync files available.

**Ubuntu live desktop (with installer) x86 and x86_64**

> http://releases.ubuntu.com/natty/ubuntu-11.04-desktop-i386.iso.zsync > http://releases.ubuntu.com/natty/ubuntu-11.04-desktop-amd64.iso.zsync

**Ubuntu alternate installer x86 and x86_64**

> http://releases.ubuntu.com/natty/ubuntu-11.04-alternate-i386.iso.zsync > http://releases.ubuntu.com/natty/ubuntu-11.04-alternate-amd64.iso.zsync

**Ubuntu server x86 and x86_64**

> http://releases.ubuntu.com/natty/ubuntu-11.04-server-i386.iso.zsync > http://releases.ubuntu.com/natty/ubuntu-11.04-server-amd64.iso.zsync

You can also use zsync to change between Ubuntu distributions. Use any of these links for the popular downloads of different Ubuntu flavors.

From our testing, changing from Ubuntu 10.10 to Xubuntu 10.10 required us to download less than half (42%) of the full Xubuntu file.

**Kubuntu live desktop (with installer) x86**

_Note: Kubuntu is only available in DVD form so you will be downloading a significant portion of the DVD image._

> http://cdimage.ubuntu.com/kubuntu/releases/11.04/release/kubuntu-11.04-dvd-i386.iso.zsync

**Xubuntu live desktop (with installer) x86**

> http://cdimage.ubuntu.com/xubuntu/releases/11.04/release/xubuntu-11.04-desktop-i386.iso.zsync

**Ubuntu Studio live desktop (with installer) x86**

> http://cdimage.ubuntu.com/ubuntustudio/releases/11.04/release/ubuntustudio-11.04-desktop-i386.iso.zsync
