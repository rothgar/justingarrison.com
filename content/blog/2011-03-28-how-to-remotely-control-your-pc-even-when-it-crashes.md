---
author: "Justin Garrison"
title: "How to Remotely Control Your PC (Even When it Crashes)"
description: "Being able to remotely control your computer is an age old geek trick."
date: 2011-03-28
images: [/img/banner21.png]
thumbnail: /img/banner21.png
draft: false
canonical: https://www.howtogeek.com/56538/how-to-remotely-control-your-pc-even-when-it-crashes/
---

Being able to remotely control your computer is an age old geek trick. But what about changing BIOS settings or installing an operating system remotely? With Intel AMT KMS this is within reach for any geek with the right hardware.

Intel vPro is a management platform built into Intel processors and other hardware that allows companies to manage their desktops and laptops out-of-band (OOB). That means the computers can be managed no matter if the computer in on or off, and even if the operating system has failed or there is no hard drive present.

With Core processors Intel introduced Active Management Technology (AMT) 6.0 which [introduced a slew of new features including Keyboard Video Mouse (KVM) Remote Control](https://redirect.viglink.com/?key=e7eab128eb8d1c53e14db14f4c632447&u=http%3A%2F%2Fcommunities.intel.com%2Fcommunity%2Fopenportit%2Fvproexpert%2Fblog%2F2010%2F02%2F04%2Fintel-amt-60-new-features&cuid=xid:{xid}&___trxnet=vg). This means that with the right hardware configuration you have full remote access to your computer no matter what state it’s in.

Most geeks are familiar with VNC software that runs inside your operating system, but Intel AMT KVM runs at a hardware level which allows you to go remote with your computer in the case of a total system failure or even without an operating system installed. Let’s get started and set up Intel AMT KVM so you can go remote with your computer.

## Determine if Your Computer Supports Intel AMT KVM

Because vPro is designed for business use, not every Intel processor supports Intel AMT KVM. Specifically what you want to look for is a vPro logo somewhere on your computer.

_Note: Only some Core i5 and i7 processors support vPro. Intel does not currently make an i3 processor with vPro._

![](/img/vpro-logo.png?trim=1,1&bg-color=000&pad=1,1)

If you cannot find a logo on your computer, or you built the computer yourself, you can [check to see if you have one of the following Intel Core processors](https://redirect.viglink.com/?key=e7eab128eb8d1c53e14db14f4c632447&u=http%3A%2F%2Fwww.intel.com%2Fsupport%2Fvpro%2Fsb%2FCS-030703.htm&cuid=xid:{xid}&___trxnet=vg). If you do, you may be able to turn on KVM so long as you have a few other requirements.

Along with the supported processor you will also need to be using Intel’s embedded video and Intel network card. Both of these are required because in order to allow out-of-band communication, the KVM server needs direct access to the network interface as well and display to be able to show the connected machine exactly what is being displayed.

If you have all of the requirements above, continue on to configure Intel AMT KVM.

## Enable Hardware KVM

The first thing you will need to do is turn on BIOS verbosity. Reboot your computer and enter your BIOS configuration. Look for something labeled firmware verbosity or boot verbosity and make sure it is turned on. Likewise, if there is an option for an AMT setup prompt make sure that is turned on as well.

![](/img/boot-verbosity.png?trim=1,1&bg-color=000&pad=1,1)

Restart your computer and just after the BIOS splash screen you should see a second setup screen that looks something like the image below. Push Ctrl+P at this screen to enter the Management Engine BIOS Extension (MBEx) to configure Intel AMT.

![](/img/mebx-01.png?trim=1,1&bg-color=000&pad=1,1)

If AMT has never been set up on your computer you will be prompted for a password. Enter “admin” for the default password and you will be prompted automatically to create a new password. The new password has to have be exactly 8 characters and contain one upper case letter, one lower case letter, one number, and one symbol. Enter the new password twice to continue.

_Note: If “admin” does not work as the default password you can also try “P@ssw0rd” because that is the default password in Intel’s configuration documentation._

![](/img/mebx-02.png?trim=1,1&bg-color=000&pad=1,1)

Once you are logged into the MEBx, go to Intel Management Engine and then select activate network access.

![](/img/mebx-04.png?trim=1,1&bg-color=000&pad=1,1)

Type Y to accept the warning that pops up about activating the ME network interface.

![](/img/mebx-05.png?trim=1,1&bg-color=000&pad=1,1)

Next select network setup and then Intel(R) ME Network Name Settings.

![](/img/mebx-06.png?trim=1,1&bg-color=000&pad=1,1)

Select host name and put in your computers name. You technically could put in anything you want here but it may cause problems with DNS if the Intel AMT name is different from your computer’s name.

![](/img/mebx-07.png?trim=1,1&bg-color=000&pad=1,1)

Return to the main menu using the escape key and then go to manageability feature selection. Push Y to continue past the caution message.

Verify that the manageability feature selection is enabled in the lower window and then select SOL/IDER.

![](/img/mebx-08.png?trim=1,1&bg-color=000&pad=1,1)

From here verify that SOL, IDER, and Legacy Redirection Mode are all enabled.

![](/img/mebx-09.png?trim=1,1&bg-color=000&pad=1,1)

Return to the previous menu and then select KVM Configuration.  Make sure KVM Feature Selection is enabled.

![](/img/mebx-10.png?trim=1,1&bg-color=000&pad=1,1)

From here change User Opt-in so that user consent is not required for KVM session.

![](/img/mebx-11.png?trim=1,1&bg-color=000&pad=1,1)

Then enable remote control of Opt-in policy.

![](/img/mebx-12.png?trim=1,1&bg-color=000&pad=1,1)

Push escape three times to exit the MEBx menu and push Y when prompted if you are sure you want to leave.

## Connect to vPro Machine

Now that KVM is all set up on the target machine we just need to install software to let us connect. There are a few different tools that will let you do this but let’s start with a free option.

Intel makes the Management Command Tool for just this occasion, find it in the link below. Download and install the software on the computer you want to connect with.

_Note: For the purposes of this how-to the remote computer will need to be plugged into the network with ethernet and also plugged into power to go remote. There are options to set up wireless but we will not be going into those options here._

![](/img/mct-download.png?trim=1,1&bg-color=000&pad=1,1)

After the software is installed, select add known computer.

![](/img/mct-00.png?trim=1,1&bg-color=000&pad=1,1)

Enter the information for the remote computer.

![](/img/mct-01.png?trim=1,1&bg-color=000&pad=1,1)

After the machine is added, select it from the left panel and then click connect.

![](/img/mct-02.png?trim=1,1&bg-color=000&pad=1,1)

After a connection is made select the remote control tab and then click on the arrow to open the options for Remote KVM Settings.

![](/img/mct-04.png?trim=1,1&bg-color=000&pad=1,1)

From the new window that will open drop down the list for KVM state and select enable all ports.

_Note: Enabling all ports allows us to connect with the free version of RealVNC Viewer but you will lose some functionality like encrypted connections._

_![](/img/mct-05.png?trim=1,1&bg-color=000&pad=1,1)_

Click OK and from the main window select “KVM Viwer Standard Port” to test and make sure the connection can be made.

A new window will open with the remote computer in the window. This will work but will have a RealVNC branding logo that cannot be removed.

![](/img/mct-06.png?trim=1,1&bg-color=000&pad=1,1)

To get rid of the RealVNC branding install the standalone RealVNC viewer from the link below.

Once you have the standalone viewer installed, or the portable version extracted, run the program and connect just like you normally would to any VNC server.

![](/img/realvnc-free-00.png?trim=1,1&bg-color=000&pad=1,1)

You will be prompted for your Intel AMT KVM password.

![](/img/realvnc-free-01.png?trim=1,1&bg-color=000&pad=1,1)

And a VNC connection will be established with the AMT KVM server.

![](/img/realvnc-free-02.png?trim=1,1&bg-color=000&pad=1,1)

You will know that you are connected to the hardware based KVM server because there will be a flashing icon in the top right corner of the screen and a thin red boarder on both the remote viewer and the local client.

![](/img/realvnc-free-03.png?trim=1,1&bg-color=000&pad=1,1)

The free viewer will work for most remote purposes but you will lose some functionality like IDE redirect, encryption, and the ability to power the machine on and off. If you want to take advantage of more features you are going to need to pay for the RealVNC Viewer Plus ($99).

Before connecting with RealVNC Viewer Plus go back to the Intel Manageability Commander Tool and change the KVM State back to Redirection Port Only.

![](/img/mct-07.png?trim=1,1&bg-color=000&pad=1,1)

Open RealVNC Plus and connect to the remote machine.

![](/img/realvnc-00.png?trim=1,1&bg-color=000&pad=1,1)

Accept the prompt to confirm you are connecting to the right machine.

![](/img/realvnc-01.png?trim=1,1&bg-color=000&pad=1,1)

Then enter your AMT password when prompted.

![](/img/realvnc-03.png?trim=1,1&bg-color=000&pad=1,1)

Once the username and password are verified a remote window should open and there will be a banner across the top with some added functionality.

![](/img/realvnc-06.png?trim=1,1&bg-color=000&pad=1,1)

We won’t show all the added benefits of RealVNC Plus in this article but it will allow you to do things like reboot directly to the BIOS and mount an .iso file to install a whole operating system remotely.

With a hardware based KVM available on standard hardware it really opens up more options for what you can do when you’re not at your computer.

[Intel Manageability Developer Toolkit](https://redirect.viglink.com/?key=e7eab128eb8d1c53e14db14f4c632447&u=http%3A%2F%2Fsoftware.intel.com%2Fen-us%2Farticles%2Fdownload-the-latest-version-of-manageability-developer-tool-kit%2F&cuid=xid:{xid}&___trxnet=vg)

[RealVNC Free Edition Viewer](https://www.realvnc.com/products/free/4.1/index.html)
