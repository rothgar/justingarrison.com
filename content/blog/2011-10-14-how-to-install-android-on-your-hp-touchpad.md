---
author: "Justin Garrison"
title: "How to Install Android on Your HP Touchpad"
description: "What’s better than a $100 tablet? A $100 tablet that can"
date: 2011-10-14
images: [/img/banner3-1.png]
thumbnail: /img/banner3-1.png
draft: false
canonical: https://www.howtogeek.com/76960/how-to-install-android-on-your-hp-touchpad/
---

What’s better than a $100 tablet? A $100 tablet that can run two operating systems! The TouchPad was a great bargain and now that you’ve figured out webOS, try Android. Here’s how to install it in 3 easy steps.

While [webOS is not completely dead](https://news.businessweek.com/article.asp?documentKey=1376-LQ73996JTSE801-7R97TJ3TJ99TBQU2SSARHSCKBS) and the TouchPad is still supported by HP for it’s software and hardware, a $100 tablet that can run two operating systems is always better than just one. Ever since HP announced the fire sale, multiple groups vowed to port Android to the discontinued tablet and there was even a $2000 bounty for the first team to successfully do it.

Some things to note before running Android on your HP TouchPad.

1. Doing so will void your warranty
2. This is a multiboot system that will allow you to run webOS or Android by rebooting the device
3. This is an early alpha release of the software (entitled “Lower Your Expectations”) which means there are bugs and you alone are responsible if something breaks
4. There are hardware and software incompatibilities when running Android on the TouchPad
5. This release runs the non-tablet version of Android 2.3 because Google never released the source code for Android 3.0 “Honeycomb.” This means that apps designed for Android 3.0 will not work.

Before you continue, you should check out the [long winded forum thread which explains everything in detail](https://rootzwiki.com/showthread.php?4011-RELEASE-ALPHA-Discussion-CyanogenMod-team-Touchpad-port) and is where you will want to go for support and updates.

**[UPDATE] There has been a newer version posted in the forum link above. Please use that to download the latest release.** **The rest of the how-to will continue as normal.**

## Download Files

First thing you need to do is download the following files to your computer.

Download and install Palm Novacom on your computer. You can download this by installing the webOS SDK free of charge. It runs on Windows, OS X, or Linux. You don’t have to install Virtualbox, or Java so you can just skip straight to the SDK download and install it.

If you do a custom installation, just make sure you install novacom which is also known as the command line interface tool.

![/img/novacom-install-0.png](/img/novacom-install-0.png)

Download [moboot from Google code](https://redirect.viglink.com/?key=e7eab128eb8d1c53e14db14f4c632447&u=http%3A%2F%2Fcode.google.com%2Fp%2Fmoboot%2Fdownloads%2Flist&cuid=xid:fr1679048412aaa). (do not unzip the file)

Download CyanogenMod 7.1.0 ALPHA 1 from the original thread (above) or from our mirror here. (do not unzip the file)

Download Clockwork recovery from the original thread or from our mirror here. (do not unzip the file)

Download ACMEInstaller from the original thread or from our mirror here. (unzip and extract the files in step 3 below)

## Copy Files to the TouchPad

Boot the TouchPad in webOS and plug it into your computer with a microUSB cable. When the TouchPad is plugged in, tap to share device in USB Drive mode.

![/img/webos-usb.png](/img/webos-usb.png)

Once the drive mounts, create a cminstall folder and copy the CyanogenMod zip file, the ClockworkMod zip file, and the moboot zip file into the folder.

![/img/install-2.png](/img/install-2.png)

Before you go any further, make sure you have at minimum 2 GB of space available on your TouchPad’s media drive. CyanogenMod will require 2 GB for system files and will resize your media partition.

Unmount/eject the TouchPad from your computer but leave the USB cable connected.

![/img/eject-touchpad.png](/img/eject-touchpad.png)

## Install Bootloader

Turn off the TouchPad by holding the power button and select power off.

![/img/webos-shutdown.png](/img/webos-shutdown.png)

Next, turn on the TouchPad and immediately push the volume up button until you get a big USB symbol on your screen.

![/img/touchpad-usb.jpg](/img/touchpad-usb.jpg)

Extract the files from the ACMEInstaller.zip into your c:\Program Files\Palm, Inc folder or wherever your novacom executable file installed (Linux and OS X will be different).

![/img/install-3.png](/img/install-3.png)

Open a command prompt on your computer and use the cd command to navigate to the folder you transferred the ACMEInstaller to earlier (C:\Program Files\Palm, Inc for Windows). Then run the command

> novacom.exe boot mem:// < ACMEInstaller

![/img/bootloader-install.png](/img/bootloader-install.png)

Your TouchPad will reboot in a few seconds and you will get a Linux boot screen with our good friend Tux sitting atop scrolling text.

![/img/touchpad-android-boot.jpg](/img/touchpad-android-boot.jpg)

Once the TouchPad boots you will have a fully functional Alpha version of CyanogenMod 7.1

![/img/cyanogenmod.png](/img/cyanogenmod.png)

## Switching Back to webOS

To switch between the two operating systems you can just reboot the device and using the new bootloader, select your desired operating system using the volume keys and home button.

![/img/touchpad-moboot.jpg](/img/touchpad-moboot.jpg)

## Optional – Install Google Market

CyanogyenMod does not come with any official Google apps or access to Google’s market (only sanctioned devices get that privilege). Android may be boring without all of the available apps though, so here is how you can better your Android experience by installing Google’s Market and official apps.

First you need to download the Google Apps package from the [CyanogenMod wiki found here](https://wiki.cyanogenmod.com/index.php?title=Latest_Version/Google_Apps). You will want the pakage for CyanogenMod 7 but don’t extract the files. Plug your TouchPad into your computer and browse to the cminstall folder we created earlier. Copy the gapps…zip file to that folder and reboot the TouchPad.

![/img/gapps-0.jpg](/img/gapps-0.jpg)

When moboot comes up select boot ClockworkMod and push the home button.

![/img/gapps-1.jpg](/img/gapps-1.jpg)

Use the volume buttons to navigate to install zip from SD card and push the home button.

![/img/gapps-2.jpg](/img/gapps-2.jpg)

Select choose zip from SD card and then navigate to the cminstall folder and select the gapps…zip file.

![/img/gapps-3.jpg](/img/gapps-3.jpg)

Navigate back to the home screen and reboot the device. You will need to go through the basic Android setup this time but you will get full access to Google’s available market apps including Google Maps, Gmail, etc.
