---
author: "Justin Garrison"
title: "Disable Scan and Fix for Removable Drives in Windows"
description: "Sometimes you’ll be prompted to scan and fix a removable disk before"
date: 2010-11-26
images: [/img/sshot4cefeb8551f60.jpg]
thumbnail: /img/sshot4cefeb8551f60.jpg
draft: false
canonical: https://www.howtogeek.com/35622/disable-scan-and-fix-for-removable-drives-in-windows/
---

Sometimes you’ll be prompted to scan and fix a removable disk before using it in Windows. The proper way to fix this is to scan for filesystem errors, but here is how you can make the prompt go away permanently.

## What is the Scan and Fix For?

This is caused by Windows detecting errors in the filesystem of the drive, or the drive not being unmounted properly. To never get this prompt you can make sure to use the safely remove option built into Windows before pulling out your drive.

One possible downside to getting rid of the scan and fix prompt is the service that runs to show you scan and fix also shows you AutoPlay. By disabling scan and fix you will also be disabling your AutoPlay functionality.

![](https://www.howtogeek.com/wp-content/uploads/2010/11/autoplay1.png)

## How Do You Disable It?

If you don’t care about AutoPlay, or want to stop it from prompting you too, go to your start menu and search for msconfig.

_Note: You will have to be an administrator on the computer to use msconfig and apply this fix._

![](https://www.howtogeek.com/wp-content/uploads/2010/11/msconfig-1.png)

Click on the services tab and then scroll down to Shell Hardware Detection and uncheck it. This will prevent it from starting up with the computer.

![](https://www.howtogeek.com/wp-content/uploads/2010/11/msconfig-3.png)

To kill the service immediately go back to the start menu and search for services.msc.

_Note: You can optionally just restart you computer and it will automatically make the next changes for you._

![](https://www.howtogeek.com/wp-content/uploads/2010/11/services-1.png)

Find the same Shell Hardware Detection service in the list.

_Note: It was pointed out in the comments that if you use a scanner in Windows you may need this service.  Instead of disabling it completely you can set the service to manual startup for better hardware support._

![](https://www.howtogeek.com/wp-content/uploads/2010/11/services-2.png)

Double click on it and on the general tab click stop.

![](https://www.howtogeek.com/wp-content/uploads/2010/11/services-3.png)

Drop down the startup type option and set it to disabled.

![](https://www.howtogeek.com/wp-content/uploads/2010/11/services-4.png)

Click OK on the service window and then close out services.msc as well.

Plug in a few removable disks to test, but you shouldn’t be prompted to scan and fix another disk ever again.
