---
author: "Justin Garrison"
title: "Install Homebrew Apps in the WebOS Emulator"
description: "After your webOS emulator is set up, it can get boring without any new"
date: 2010-08-18
images: [/img/emulator-2.png]
thumbnail: /img/emulator-2.png
draft: false
canonical: https://www.howtogeek.com/25710/install-homebrew-apps-in-the-webos-emulator/
---

After your webOS emulator is set up, it can get boring without any new apps to play with. The official Palm App Catalog isn’t supported in the emulator but luckily the homebrew Preware app is supported. Here is how to get more apps in your webOS emulator.

We previously covered [how to test drive webOS without a phone on your PC](https://www.howtogeek.com/22681/test-drive-webos-without-buying-a-phone/) via the emulator, but what about adding apps? Preware not only has access to some of the official Palm App Catalog applications, but it also has access to hundreds of third party patches and apps that aren’t available in Palm’s App Catalog.

## Getting Started

First thing you need to do is install the webOS emulator from the link below. Next, download Putty for an SSH client _(link below)_. Now go to your start menu and run palm-emulator.

_Note: If you are using Linux or OS X you can skip installing putty because your terminal already has an SSH client._

![](/img/emulator-2.png?width=1198&trim=1,1&bg-color=000&pad=1,1)

## Installing Preware

Leave the emulator running and start Putty from wherever you downloaded it to. Type in 127.0.0.1 for the hostname and 5522 for the port.

![](/img/putty-connection.png)

The first time you connect you will be prompted to accept the RSA key, click yes and the login teminal will open. Login using root as the username with a blank password (push ‘Enter’ when prompted for the password).

![](/img/putty-terminal-1.png)

Now you are actually remote with the webOS emulator running in virtualbox. To install Preware it is three simple commands. Type these into your terminal to install Preware.

`cd /tmp   wget http://bit.ly/preware-bootstrap   sh preware-bootstrap`

You should get a confirmation once the installation is complete.

![](/img/putty-preware-install.png)

## Installing Apps

You can now close Putty and head back over to your emulator. You should find Preware at the bottom of your first launcher page. Click to launch it and it will automatically update all of the available software.

![](/img/preware-launcher.png)

To disable the apps you won’t be able to install, you will need to click on the Preware menu and then manage feeds.

![](/img/preware-manage-feeds.png)

Because the official Palm App Catalog is not supported in the emulator you will want to make sure palm-catalog, palm-catalog-updates, palm-beta, palm-beta-updates, palm-web, and palm-web-updates are all disabled so you don’t have applications listed that you aren’t able to install.

![](/img/preware-feeds.png)

Once you have turned on (and off) any feeds you want, hit Esc on your keyboard to emulate the “back swipe”. You will be prompted to update your feeds so just click “do it now” and wait for the update to finish. To install apps click available packages and then application. All of the apps will be broken down into categories or you can browse all apps from the list.

![](/img/preware-apps-2.png)

To install apps simply find the one you want and tap on it. All of the information about the app will be shown and the price information will be listed below the description, if the app isn’t free.

![](/img/preware-app-description-2.png)

If you want to search for apps, go to the home screen of Preware and just start typing the app you are looking for. The banner will fill in with your search term and then just hit enter to search. None of the official Palm App Catalog apps will show up in searches unless they have been re-listed in one of the other Preware feeds.

![](/img/preware-search-2.png)

You can also install patches into the emulator. WebOS patches are tweaks to the underlying code of built in programs or how things are displayed. If you search for Glass Effect and install it, the application launcher will have more of a glass background than a cloudy one.

![](/img/preware-patch-install.png)

Install the patch and then restart Luna when prompted.

![](/img/preware-patch-restart.png)

Now your launcher menu will have more of a see through glass effect rather than the original look.

![](/img/preware-glass-launcher.png)

You can install whatever patches you would like but some of them are device specific and you should stay away from kernel patches because the emulator is quite a bit different than the physical hardware.

You can also install extra testing feeds in Preware by opening the menu and going to manage feeds. Scroll to the bottom and fill out this information for emulator testing feeds. Last time I checked there was only one extra application in the testing feed but it still may be helpful for the future.

Name: webos-testing-i686
URL: [http://ipkg.preware.org/feeds/webos-internals/testing/i686](https://ipkg.preware.org/feeds/webos-internals/testing/i686/ "http://ipkg.preware.org/feeds/webos-internals/testing/i686/")

![](/img/preware-testing-feed.png)

Even though the official Palm App Catalog isn’t supported in the emulator there is still a big community surrounding homebrew and patches for webOS. Now you can try out even more with your webOS emulator.

[Install webOS emulator](https://www.howtogeek.com/22681/test-drive-webos-without-buying-a-phone/)
[Putty](https://redirect.viglink.com/?key=e7eab128eb8d1c53e14db14f4c632447&u=http%3A%2F%2Fwww.chiark.greenend.org.uk%2F%7Esgtatham%2Fputty%2Fdownload.html&cuid=xid:{xid}&___trxnet=vg)
[WebOS Internals](https://www.webos-internals.org/wiki/Main_Page)
