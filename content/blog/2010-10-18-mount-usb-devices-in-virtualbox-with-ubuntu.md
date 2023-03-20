---
author: "Justin Garrison"
title: "Mount USB Devices in Virtualbox with Ubuntu"
description: "Mounting a USB device inside a virtual machine is often a tool that "
date: 2010-10-18
images: [/img/vm-usb-na.png]
thumbnail: /img/vm-usb-na.png
draft: false
canonical: https://www.howtogeek.com/31726/mount-usb-devices-in-virtualbox-with-ubuntu/
---

Mounting a USB device inside a virtual machine is often a tool that you cannot go without. If you are using Virtualbox in Ubuntu however, you need to take a few extra steps to make it work.

![](/img/vm-usb-na.png)

## Install Virtualbox

The first thing you need to do is install Virtualbox from Oracle’s website. It is different than Virtualbox OSE which is included in the Ubuntu repositories because the Virtualbox from Oracle includes proprietary software which allows you to mount USB devices inside you VM among other things. If you already have Virtualbox OSE installed from the Ubuntu repositories, uninstall it before installing the .deb file from Oracle’s website.

_Note: Any VMs you made with Virtualbox OSE will still work with the standard version of Virtualbox. Uninstall Virtualbox OSE before installing virtualbox from Oracle._

![](/img/vbox-install.png)

## Set up Your Virtual Machine

Install your virtual machine and once the installation is complete install the Virtualbox guest additions into the guest OS from the devices menu.

![](/img/vm-guest-additions-1.png)

Turn the virtual machine off and go to the settings for the VM. Click on USB on the left and check the top two boxes in the window shown.

![](/img/vbox-settings.png)

Along the right hand side there will be a few icons to set up USB filters. These filters are where you can tell Virtualbox what USB devices you want to have available to your guest OS. Plug in your USB device and click on the second icon to view available USB devices that can be mounted into the guest OS.

![](/img/vbox-settings-usb.png)

Select any devices you would like to mount in the guest OS and then close out of the settings window.

![](/img/vbox-usb-enabled.png)

## Set Up Your User Account

The next thing you need to do is add your user to the vboxusers group on your system. Navigate to the System -> Administration -> Users and Groups option and click on manage groups on the left side.

![](/img/user-settings.png)

![](/img/user-settings-2.png)

Scroll down in the group settings and highlight the vboxusers group and then click properties on the right.

![](/img/group-settings.png)

In most cases you probably will only have one user so check the box to include your user in the group; put in your admin password when prompted, and then restart your computer.

![](/img/group-properties.png)

## Mount Your USB Device

Once your computer restarts, log in and start your virtual machine. In the devices menu of the VM, select the USB device you want to mount.

![](/img/vm-mount-usb.png)

Your device should show up automatically in the VM and you can use it the same way you would be able to on the host operating system.

![](/img/usb-device.png)

[Virtualbox Website](https://www.virtualbox.org/)
