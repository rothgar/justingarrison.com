---
author: "Justin Garrison"
title: "How to Install Alternate Media Players on Your Apple TV (XBMC, Plex)"
description: "The Apple TV is one of the best media streamers on the market, but if you don’t buy into Apple’s"
date: 2012-02-21T08:00:54-05:00
images: [/img/banner1-1.png]
thumbnail: /img/banner1-1.png
draft: false
canonical: https://www.howtogeek.com/106109/how-to-install-alternate-media-players-on-your-apple-tv-xbmc-plex/
---

The Apple TV is one of the best media streamers on the market, but if you don’t buy into Apple’s ecosystem it lacks functionality. Here’s how to supercharge your Apple TV by installing alternate media players like XBMC and Plex.

The first thing you will need to do is jailbreak your Apple TV. Luckily the process is very easy and [we have already shown you how to do it](https://www.howtogeek.com/106085/how-to-jailbreak-your-2nd-generation-apple-tv/).

The next thing you will need is the ability to SSH into your Apple TV. After the jailbreak, openSSH server is automatically installed and turned on so you’ll just need a client to connect to the device and the IP address to connect to. We have already [shown you how to use SSH in a previous article](https://www.howtogeek.com/68061/setup-ssh-on-your-router-for-secure-web-access-from-anywhere/) if you need to review.

## Install XBMC

To install XBMC first connect to your Apple TV via SSH. The jailbreak will automatically allow the root user to login with the password alpine. Use that username and password for your first connection.

![/img/xbmc-00.png](/img/xbmc-00.png)

It is **highly** recommended that you change your root password on the device. You can do so with the command passwd. Once you’ve changed the password use the new password to connect via SSH in the future.

![/img/xbmc-01.png](/img/xbmc-01.png)

Next there are a few commands you will need to type in one at a time (or copy and past from the list below).

> apt-get install wget

This command will install/update your installation of wget which allows you to download files from the command line.

![/img/xbmc-02.png](/img/xbmc-02.png)

These next commands will add download sources for you to be able to download XBMC. Copy and paste these commands into your SSH client one at a time to avoid miss typing.

```
wget -O- http://apt.awkwardtv.org/awkwardtv.pub | apt-key add -

echo "deb http://apt.awkwardtv.org/ stable main" > /etc/apt/sources.list.d/awkwardtv.list

echo "deb http://mirrors.xbmc.org/apt/atv2 ./" > /etc/apt/sources.list.d/xbmc.list
```

And finally these commands will update your available packages, install the latest available version of XBMC, and reboot your Apple TV to reflect the new software in your menu.

```
apt-get update

apt-get install org.xbmc.xbmc-atv2

reboot
```

![/img/xbmc-03.png](/img/xbmc-03.png)

All of the other functions of XBMC will work just as they do on any other computer. You can start by [installing some addons](https://www.howtogeek.com/76240/the-how-to-geek-guide-to-xbmc-add-ons/), [new skins](https://www.howtogeek.com/67497/how-to-skin-your-xbmc-for-fame-glory-and-best-looking-media-browsing-around/), or [set up a centralized media database](https://www.howtogeek.com/75535/how-to-sync-your-media-across-your-entire-house-with-xbmc/).

If you are already used to XBMC this is a great option. The only downside is the fact that you need to launch a separate app whenever your Apple TV reboots. If you want to use some of the native Apple TV functionality such as Netflix you’ll have to bounce back and forth between the default Apple TV interface and XBMC which may be a hassle. However with the plethora of XBMC addons you may never have to leave.

## Install Plex

Installing Plex is going to be exactly like XBMC except we need to add a different repository first.

SSH into your Apple TV and add the Plex repository with this command.

> echo "deb http://www.ambertation.de ./downloads/PLEX/" > /etc/apt/sources.list.d/plex.list

Update your sources and install Plex

> apt-get update && apt-get install com.plex.client-plugin

Reboot the system with the reboot command and you’ll have a new Plex app in your main menu.

If you already have a Plex media server running on your network, it should be auto-discovered and your media will be available for playback.

![/img/plex.png](/img/plex.png)

If you already use a Plex media server to stream your files then this is a great option for you. The downside to Plex is the need for a Plex server running somewhere on your network to catalog files. One of the benefits is the UI consistency with the Apple TV so you don’t need to bounce back and forth between apps to watch your content or stream Netflix. There are reports of some of Plex’s addons working with the Apple TV but they, along with this app, are not supported so if you have problems your only help will come from other users in the forums.

## Install FireCore’s aTV Flash

FireCore takes a different approach to installation and give you a GUI installer for Windows and OS X. It is also the only 3rd party commercial software available for the Apple TV which means it will cost you $29.95 to purchase. We’ll leave it up to you if you’d like to buy the software, but the installation is dead simple.

Once you buy a copy of aTV Flash (black), download the installer and run it on your computer.

![/img/atv-flash-01.png](/img/atv-flash-01.png)

It will automatically check for a new installer version and then should detect your Apple TV on your network.

![/img/atv-flash-03.png](/img/atv-flash-03.png)

Click next and the installer will copy the necessary files and add the menu items to your Apple TV. If you changed your root password you will be prompted for the new password during installation. Otherwise the installer will automatically use the default alpine password.

![/img/atv-flash-05.png](/img/atv-flash-05.png)

Your Apple TV will reboot and you’ll have a new maintenance option on your menu. Select manage extras and then install the media player.

![/img/atv-flash-screenshot-01.png](/img/atv-flash-screenshot-01.png)

If you haven’t already installed XBMC or Plex you can also install both of them from aTV Flash with just a click.

![/img/atv-flash-screenshot-02.png](/img/atv-flash-screenshot-02.png)

You can get more information about what [aTV Flash can do at their website](https://firecore.com/atvflash-black). Once the media player is installed and sources have been added, it will show up on your home screen just like the other two programs.

![/img/atv-flash-screenshot-03.png](/img/atv-flash-screenshot-03.png)

While aTV Flash costs money, it has the benefit of not needing a media server running like Plex, and it integrates into the default UI unlike XBMC. There are also other added features but we’ll let you decide which media playback software is best for your needs.
