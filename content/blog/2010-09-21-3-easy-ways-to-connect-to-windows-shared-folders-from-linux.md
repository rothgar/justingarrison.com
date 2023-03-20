---
author: "Justin Garrison"
title: "3 Easy Ways to Connect to Windows Shared Folders from Linux"
description: "Connecting to file servers is something most people do on a daily basis"
date: 2010-09-21
images: [/img/run-application-2.png]
thumbnail: /img/run-application-2.png
draft: false
canonical: https://www.howtogeek.com/29167/3-easy-ways-to-connect-to-windows-shared-folders-from-linux/
---

Connecting to file servers is something most people do on a daily basis even without thinking about it. In Linux, it may not be intuitive how to quickly connect to a samba or ftp server without a separate program. Here are a few different ways to connect to a remote file server without needing to touch a terminal.

## Using Keyboard Shortcut

You can connect to a server by opening the run application window with the Alt+F2 keyboard shortcut. You will just need to specify the server type by adding the protocol at the beginning of the command. For example smb:// will connect to a samba share; other supported protocols are ssh, ftp, sftp, http, and https.

_Note: In the example below my server name is playground and the shared folder is called music._

![](/img/run-application-2.png)

If your server requires a password to connect, fill out the next window that pops up and select how long you would like it to store your password.

![](/img/connect-to-server-3.png)

A Nautilus window will automatically open with the server you just connected to, and you should have a shortcut under places on the left side and a shortcut on your desktop.

![](/img/nautilus-1.png)

## From GNOME Menu

If you are using Ubuntu, and many other GNOME based distributions, you will have a places menu on your top menu bar. Open that menu and click connect to server.

![](/img/places-menu.png)

A new window will open up with a drop down so you can select what type of server you are connecting to.

![](/img/connect-to-server-1.png)

For a samba/cifs server select Windows share and fill out the required information.

_Note: Unlike the run application window, you do not need the slashes to connect here._

![](/img/connect-to-server-2.png)

Alternatively, you can also get to the connect to server window from Nautilus’ file menu.

![](/img/nautilus-2.png)

## With a Shortcut

If you would like instant access to the connect to server window from your GNOME menu bar right click on the menu you would like to add the shortcut to and click add to panel.

![](/img/shortcut-1.png)

In the window that pops up, search for “connect” and connect to server should be one of the results. Highlight the shortcut and click add at the bottom of the window.

![](/img/shortcut-2.png)

Now you will have an additional shortcut on your GNOME bar for easy access.

![](/img/shortcut-3.png)
