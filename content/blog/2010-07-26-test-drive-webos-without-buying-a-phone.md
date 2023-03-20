---
author: "Justin Garrison"
title: "Test Drive webOS Without Buying a Phone"
description: "With all the new mobile operating systems how do you to know which"
date: 2010-07-26
images: [/img/java-check.png]
thumbnail: /img/java-check.png
draft: false
canonical: https://www.howtogeek.com/22681/test-drive-webos-without-buying-a-phone/
---

With all the new mobile operating systems how do you to know which one to pick? Like Android, Palm has a webOS emulator to allow developers to test applications without physical hardware. Here is how you can test drive webOS on your computer for free.

## Getting Started

The Palm webOS SDK/PDK requires that you have Java installed for the developer tools as well as VirtualBox 3.2.6 or higher.

The first step is to install Java Runtime Environment (JRE). You may already have JRE installed and you can verify if it is installed by opening a command prompt and typing in the command _java -version._ You should get a output just like the one below. If you get this output you already have Java installed and you can skip to installing VirtualBox.

![](/img/java-check.png)

If you get an error that Java is not a recognized command then you need to install the Java Runtime Environment. If after you install JRE you still get an error, install the Java Development Kit and then try again (see links below).

![](/img/java-jdk-download.png)

Install Java like you normally would from Oracle’s website.

![](/img/image159.png)

Make sure you avoid any crapware they bundle with the installation like the worthless Yahoo Toolbar.

![](/img/sshot201007121946591.png)

## Install VirtualBox

If you don’t already have VirtualBox, and you should, you can download it from Oracle’s website (link below). Pick the host OS that you are using and download the installer.

![](/img/virtualbox-download.png)

Install VirtualBox and start the program so it can create the default .virtualbox folders.

![](/img/virtualbox-install.png)

## Install Palm SDK

Now we can install the actual Palm SDK tools which will install the webOS emulator for us. Go to Palm’s developer site (link below) and download the latest SDK.

![](/img/download-website.png)

Install the software by clicking next a few times to accept the default settings.

![](/img/installing-00.png)

After the install, go to your start menu (Applications folder in OS X and menu in Linux) and launch the Palm Emulator.

![](/img/sshot20100723221538.png)

You will get a pop-up asking which screen resolution you would like to use.

_Note: I would suggest using the highest resolution possible since your computer resolution will still easily be able to fit the resolution._

![](/img/start-emulator.png)

The command will create a virtual machine inside VirtualBox first.

![](/img/emulator-loading.png)

VirtualBox will automatically start the virtual machine once it has been created.

![](/img/emulator.png)

Once the emulator finishes booting you will be able to play with the emulator just like the real phone.

![](/img/emulator-2.png)

You can click on the “screen” and launch apps just like the real phone.

![](/img/emulator-1.png)

Load up a website and then hit the Home button on your keyboard to launch a second application. Swipe left and right to change applications and swipe the card up to close the application.

\__Note: While using the emulator the Esc key will simulate the “back” swipe_ and the tab key will open the menu. The left and right arrows will simulate long swipes on the gesture area and End will simulate pushing the center “button” in the gesture area.\_

![](/img/emulator-4.png)

Some features may not work, such as screen rotation, multitouch, and GPS but the main OS features will at least let you try it out.

If you want to get a feel for how webOS works with your email you can launch the mail application and set up your accounts.

_![](/img/emulator-email.png)_

## Launching the Emulator

If you want to open the virtual machine later you can open VirtualBox and just launch the VM directly from the menu.

![](/img/emulator-6.png)

Highlight the VM and click on settings to rename the VM to something that makes more sense to you. I simply named mine “webOS”.

![](/img/emulator-settings.png)

You can also make a shortcut to launch the VM directly. Right click on your desktop and create a new shortcut. In the location of item field browse to your VBoxManage executable. In most cases it will be in your main Program Files under the Oracle\\VirtualBox folder. Then type in _startvm webOS_ (or whatever you named your VM).

![](/img/emulator-shortcut.png)

## Conclusion

If you are in the market for a new Smartphone, the hardware and carrier is only half the choice. You want to make sure you know what you are getting into when you pick a mobile OS and virtual machines are a great way to get to know your software before deciding with your wallet. Playing with the VM should give you a good chance to know what the OS is like and what you can do with it. Not only is the SDK completely free but so are developer accounts and application submissions to the catalog.

If you want to test out Android then check out our article on [how to test drive Android on your PC](https://www.howtogeek.com/21831/how-to-test-drive-google-android-on-your-pc-without-buying-a-phone/).

## Links

[Java Runtime Environment (JRE) and Java Development Kit (JDK) can be downloaded from here.](https://redirect.viglink.com/?key=e7eab128eb8d1c53e14db14f4c632447&u=http%3A%2F%2Fjava.sun.com%2Fjavase%2Fdownloads%2Findex.jsp&cuid=xid:{xid}&___trxnet=vg)

[Download VirtualBox](https://www.virtualbox.org/wiki/Downloads)

Palm SDK download
