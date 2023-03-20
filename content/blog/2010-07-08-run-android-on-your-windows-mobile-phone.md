---
author: "Justin Garrison"
title: "Run Android on Your Windows Mobile Phone"
description: "Interested in Android but think you need to buy a new phone to"
date: 2010-07-08
images: [/img/sshot20100707220907.jpg]
thumbnail: /img/sshot20100707220907.jpg
draft: false
canonical: https://www.howtogeek.com/20703/run-android-on-your-windows-mobile-phone/
---

Interested in Android but think you need to buy a new phone to try it out? Actually, your Windows Mobile phone may already have the capability of running Android. Today we show you how and the type of phone you’ll need.

![](/img/sshot20100707220907.jpg)

**Update:** This article was written 5 years ago, and as far as we know this process doesn’t work anymore on modern phones. It’s certainly possible that you can still run Android on a Windows mobile phone, but we don’t have a good solution to give you. We recommend asking about your specific phone model [over on the XDA Developer forums](https://forum.xda-developers.com).

## Installing Android

To run Android you will need a microSD card that is not SDHC (typically a card less than 2GB) and a supported Windows Mobile phone (see below). You can check your microSD card compatibility by looking at the card to see if it shows the “HC” label.

![](/img/02_microsd.png)

The microSD card will need to be formatted in FAT32. Plug the microSD card into the computer and right click on it and choose format.

_Note: Formatting a microSD drive will erase everything on that drive. Make sure you have any important files backed up before you format it._

![](/img/04_windows-formater.png)

Now that the microSD card is formatted, the first step to installing Android is finding the right Android port for your phone (see below). You will need to find the port that works on your phone as well as the version of Android you want to run. Versions start at 1.0 but typically you will find ports for version 1.6 or 2.1.

![](/img/android_skate.png)

Once you have found the right port for your phone and Android version you want to use, extract the files to a folder using [7-zip](https://www.7-zip.org/).

![](/img/01_extract-android.png)

After the files have extracted there should be a folder called “andboot”. Go into the andboot folder and there will be another folder called “startup config” or “startup”. Open this folder and you will need to find the right startup.txt file for your phone. Inside each folder will be a single “startup.txt” file. Copy the file for your phone model to the root of the andboot folder. This file will tell Android what type of hardware you have, how big your screen is, how much RAM your phone has etc. so it is very important to choose the right file. If you are confused on what these phone names are please read below on finding your phone model.

![](/img/05_startups.png)

Once you have moved the correct startup.txt file to the andboot folder, copy the entire andboot folder to the root of your newly formatted microSD card.

Plug the microSD card back in the phone and open the file browser on your phone and browse to the memory card. Make sure the phone is plugged into power before the next few steps because on some phones running on battery may cause the phone to hang.

![](/img/06_andboot.png)

Open the andboot folder and run haret.exe. If the right startup.txt file is in the root of the andboot folder you should be able to click “Run” and you will get a quick loading screen while haret turns off Windows Mobile and starts up Android.

![](/img/07_haret-01.png)

![](/img/08_haret-02.png)

You should get some scrolling text and probably a nice Android logo while the phone boots up the first time.

_Note: The first boot is going to take a considerably longer time than subsequent boots. and you may need to calibrate your screen during the boot process so make sure you keep an eye on it._

![](/img/09_xdandroid-booting.png)

Once the basic Linux settings are done your new “Android” phone will boot to a welcome screen so you can walk through the rest of the settings like setting up your email account.

_*Tip: If you are running Android on a phone that does not have an active data plan but does have wifi, you can get around the startup screen by tapping on the welcome screen in this order: top left corner, \_top right corner,\_ bottom right corner, \_bottom left corner then tap the Android logo. You can then enable wifi and join a network and set up your gmail account manually.*_

![](/img/11_android-welcome.png)

It is usually recommended that you leave your phone alone while it syncs your information for at least 10 minutes. Once the initial syncing is done the phone should start running faster and you can play around with installing apps. If you don’t wait for the phone to fully sync you may have problems with apps crashing prematurely and a force close dialog popping up.

![](/img/12_android-error.png)

Change any settings and install any apps you want, they will be saved to your memory card and ready on next boot. All phones that run Android from the microSD card will automatically boot Windows Mobile when the phone restarts. To run Android again, just open the file browser and run haret.exe again.

![](/img/14_android-home.png)

## Android Ports\*\*

There are a few different Android ports for Windows Mobile devices and each one supports a different family of device; each family of device has a varying amount of hardware support. Most phones will support the touch screen, hardware buttons, cell phone radio, and data connection, but some ports may not support bluetooth, GPS, or power management. This is not a complete list of Android ports available, but it should cover the most popular Windows Mobile phones.

![](/img/13_htc-vogue.png)

Almost all Android development on Windows Mobile phones started with the development on the[HTC Touch](https://forum.xda-developers.com/showthread.php?t=382265) (also known as the HTC Vogue and the Verizon xv6900). The HTC Touch has 100% of the hardware features working and even some features that were not available in official Windows Mobile ROMs. One of the main differences between Android for the Touch and Android for every other phone is the Touch allows for Android to be flashed to the phone’s ROM (NAND memory). This was a big break through for Android development and has increased battery life and speed greatly. Running Android on the Touch can be done following the steps above but it is recommended to run Android by flashing the phones NAND memory. To learn how to do that, start at the Android Touch [FAQ thread](https://forum.xda-developers.com/showthread.php?t=628353) at XDA-Developers.
Android ports for the HTC Touch can also be used on the following phones with varying success.

- HTC Nike (Neon)
- HTC Polaris (Touch Cruise)
- HTC Kaiser (TyTN II)
- HTC Titan (Mogul, xv6800)

_Note: HTC phones all have proper names that come from HTC and in many cases each carrier will give the phone its own branding and rename the phone to something else. For example, the HTC Titan was called the Mogul on Sprint and the xv6800 on Verizon. To find the Android port for your phone, start by finding the proper HTC name of your device. Start on [HTC’s site](https://www.htc.com/www/product.aspx) to discover your device’s official name_.

[XDAndroid](https://xdandroid.com) supports the most popular touch screen HTC Windows Mobile phones and if you bought a touch screen HTC Windows Mobile phone within the past year, most likely this port will support your phone. XDAndroid runs directly from the phones microSD memory card on the following phones:

- Touch Pro (Fuze, RAPH, RAPH800, RAPH500)
- Touch Diamond (DIAMOND, DIAM500)
- Touch HD (BLACKSTONE)
- GSM Touch Pro2 (TILT2,RHODIUM, RHOD400, RHOD500)
- GSM Touch Diamond2 (TOPAZ)

[Andromnia](https://andromnia.net/) is an Android port for Samsung devices. Currently this port is in the pre-alpha stages and things like the headset speaker does not work. But if you want to test it out it supports the following phones:

- Samsung i900 (GSM, supported worldwide)
- Samsung i910 (CDMA, used by Verizon in the US)
- Samsung i780 (Mirage)
- Samsung i907 (AT&T Epix)

[Wing Linux](https://sourceforge.net/apps/trac/wing-linux/wiki) isn’t as quickly developed as XDAndroid but should get the job done if your phone isn’t supported by any other port. Wing Linux supports the following phones to varying degrees:

- HTC Artemis
- HTC Elf, HTC Elfin
- HTC Excalibur, T-Mobile Dash
- HTC Gene, HTC P3400
- HTC Herald, T-Mobile Wing
- HTC Opal, HTC Touch Viva
- HTC Pharos
- HTC Prophet
- HTC Startrek
- HTC Wizard
- Asus P320, Galaxi Mini

You may also want to look at threads for the following phones to check the status of Android on these phones.

[Sony Xperia 1](https://forum.xda-developers.com/showthread.php?p=4206618)

[HTC Leo (HD2)](https://forum.xda-developers.com/showthread.php?p=5969936)

## Extra links\*\*

If you still can’t find what you are looking for I recommend checking out these links for more information.

[XDA-Developers forum](https://forum.xda-developers.com)

[PPCGeeks forum](https://forum.ppcgeeks.com/)

[Connect-UTB](https://www.connect-utb.com/)

[HTC Linux](https://www.htc-linux.org/)
