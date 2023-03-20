---
author: "Justin Garrison"
title: "Upgrade your Windows Home Server with Amahi"
description: "Windows Home Server (WHS) is one of the most reliable and feature rich network"
date: 2011-07-25
images: [/img/banner2-1.png]
thumbnail: /img/banner2-1.png
draft: false
canonical: https://www.howtogeek.com/63253/upgrade-your-windows-home-server-with-amahi/
---

Windows Home Server (WHS) is one of the most reliable and feature rich network attached storage devices on the market. However, WHS 2011 removed some key features. If you’re looking for an upgrade without losing features, look no further than Amahi.

A few praised features of Windows Home Server when it launched in 2007 were:

- Drive extender: allows for multi-disk redundancy and combines multiple drives into a single shared space
- Remote access: access to the server from on and off your network
- Add-ins: adds functionality to your WHS without needing to figure out complicated configurations

Windows Home Server 2011 has recently come out but it removes the drive extender feature, requires a 40% faster CPU (1.4 Ghz), and 4 times the RAM (2 GB) as its predecessor. If you’re looking for an upgrade, but don’t want to lose the functionality you have now, the open source project Amahi may be the perfect solution for you.

Amahi is a Linux distribution built on Fedora (an Ubuntu based system is in the works) that makes setting up a home NAS easy. In addition to what other Linux/BSD based NAS distributions give you, Amahi has easy remote access with automatic dynamic DNS updates, drive extender functionality with greyhole, and one click install add-ins via their “[don’t call it an App Store](https://blog.amahi.org/2011/06/21/apple-hits-amahi-with-a-cease-and-desist-wait-what/)” repository.

![/img/Amahi-banner.png?trim=1,1&bg-color=000&pad=1,1](/img/Amahi-banner.png?trim=1,1&bg-color=000&pad=1,1)

We will walk you through the process of installing Amahi using the Express CD on an HP Media Smart Server. You can install Amahi on any spare computer you have, but the express CD is designed to run on headless hardware (a computer without a monitor). Because the HP MediaSmart Server is already a low powered, multi-drive server, it makes a great candidate for a free upgrade. Our next article will show you some of the basics of setting up and using your new Home Digital Assistant (HDA).

## Step 1: Gather Requirements

To perform the install on a MediaSmart Server  you are going to need a few things.

1. An Amahi account: You will need to sign up for an account so you can get an install code that we will use later
2. Express CD iso: download it from the link below
3. A blank CD: Trust us, the USB installation requires [a bit of hacking](https://forums.amahi.org/viewtopic.php?f=9&t=1524&p=7977#p7977) and after 2 installs it still did not work quite the same way as an install from a physical CD.
4. A spare hard drive: This can be as little as 4 GB but we’d recommend more so you can also use it for storage.
5. A spare desktop computer: Despite the express CD being designed for a headless computer, you still need a monitor for the initial installation.

## Step 2: Backup Your Existing NAS

If you are going to be installing Amahi on an existing NAS your first step will be to backup. If you have a Windows Home Server then follow [our guide to backing up all your information to an external hard drive](https://www.howtogeek.com/10797/backup-windows-home-server-folders-to-an-external-hard-drive/).

![/img/10back.png?trim=1,1&bg-color=000&pad=1,1](/img/10back.png?trim=1,1&bg-color=000&pad=1,1)

If you have a different NAS platform, you can either see if your platform has a built in backup system or you can manually copy all of your files to a spare hard drive over the network.

Make sure you have a backup before you start the installation, and if you have enough spare hard drives you should keep your existing NAS in tact in case something goes horribly wrong for you.

## Step 3: Install Amahi

Once you have your iso file burned to a CD, put your spare hard drive into the temporary desktop you are going to do the installation with. The install is going to erase anything on the spare hard drive as well as any other hard drives plugged into the system. So make sure you only have the hard drive you want plugged in.

![/img/hard-drive.png?trim=1,1&bg-color=000&pad=1,1](/img/hard-drive.png?trim=1,1&bg-color=000&pad=1,1)

Picture via [Justin Ruckman](https://www.flickr.com/photos/hieronymus/1480509393/)

Once the correct hard drive is plugged in, boot the system from the installation CD. The first few steps just ask you to select your language, keyboard layout, timezone, and root password so we will just skip over those and assume you know what to do there.

![/img/install-00.png?trim=1,1&bg-color=000&pad=1,1](/img/install-00.png?trim=1,1&bg-color=000&pad=1,1)

While the initial file copy and drive formatting is taking place, go to amahi.org on a different computer and log in with your user account. Once logged in you will be brought to your control panel. Click on “Your HDAs” on the left and then scroll down to the install code that was generated for you.

![/img/control-panel.png?trim=1,1&bg-color=000&pad=1,1](/img/control-panel.png?trim=1,1&bg-color=000&pad=1,1)

After the initial drive format and file copy finishes, put in the install code when prompted.

![/img/install-01.png?trim=1,1&bg-color=000&pad=1,1](/img/install-01.png?trim=1,1&bg-color=000&pad=1,1)

The machine will reboot (make sure you remove the install CD) and bring you back to one more screen to finish the device configuration. After it’s complete your new HDA should automatically reboot and bring to you a login screen.

![/img/install-02.png?trim=1,1&bg-color=000&pad=1,1](/img/install-02.png?trim=1,1&bg-color=000&pad=1,1)

**Optional Step**: There is a [bug currently in the express CD](https://bugs.amahi.org/issues/show/848) which caused my machine to get in a loop repeating the above step over and over. To get past this step, select the option to go to a debug console and run the command ConfigAmahi. The system will finish the HDA configuration and reboot into the final usable state.

## Step 4: Hard Drive Transplant

If you are not using an HP MediaSmart Server or want to keep your HDA in the desktop you just installed on, you do not need to follow the below steps. These only apply if you are moving the HDA to a new machine.

Once the machine reboots, login to the computer with the root user and the password you set up during installation.

![/img/configure-02.png?trim=1,1&bg-color=000&pad=1,1](/img/configure-02.png?trim=1,1&bg-color=000&pad=1,1)

In order to allow Amahi to change physical hardware we just need to configure the machine so that the network works on the new machine. Run the following command from the terminal.

`rm /etc/udev/rules.d/70-persistent-net-rules`

![/img/configure-03.png?trim=1,1&bg-color=000&pad=1,1](/img/configure-03.png?trim=1,1&bg-color=000&pad=1,1)

Then open your eth0 configuration file with the command

`nano /etc/sysconfig/network-scripts/ifcfg-eth0`

Inside the text editor delete the line that starts with HWADDR and change the ONBOOT=no to read ONBOOT=yes.

![/img/configure-04.png?trim=1,1&bg-color=000&pad=1,1](/img/configure-04.png?trim=1,1&bg-color=000&pad=1,1)

The next time your system boots, the wired ethernet adapter will automatically be reconfigured by the system. Shutdown the machine and pull out the hard drive. Remove all of the hard drives from your HP MediaSmart Server and put the new drive in the lowest slot.

![/img/mss-hard-drive.jpg?trim=1,1&bg-color=000&pad=1,1](/img/mss-hard-drive.jpg?trim=1,1&bg-color=000&pad=1,1)

Power on the system, check your router to make sure the device shows up on the network, and from another computer open a web page to configure Amahi.

![/img/configure-05.png?trim=1,1&bg-color=000&pad=1,1](/img/configure-05.png?trim=1,1&bg-color=000&pad=1,1)

Our next article will cover setting up your new HDA with apps, users, additional storage, and all your files.

[Amahi Express CD Download](https://wiki.amahi.org/index.php/Express_CD)
