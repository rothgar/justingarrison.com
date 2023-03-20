---
author: "Justin Garrison"
title: "How to Use Linux Commands in Windows with Cygwin"
description: "Windows command-line tools have advanced a lot with PowerShell, but Linux"
date: 2011-01-25
images: [/img/sshot4d3e6bef58287.jpg]
thumbnail: /img/sshot4d3e6bef58287.jpg
draft: false
canonical: https://www.howtogeek.com/41382/how-to-use-linux-commands-in-windows-with-cygwin/
---

Windows command-line tools have advanced a lot with PowerShell, but Linux has had a much more usable terminal for many years. Here’s how you can get the best of both worlds with Cygwin, a ‘nix-style terminal for Windows PCs.

In today’s lesson, we’ll explain how to get Cygwin running, but stay tuned for future articles where we’ll explain how to use it for all sorts of different things.

## Install Cygwin

Cygwin comes with a normal setup.exe to install in Windows, but there are a couple steps you will need to pay attention to, so we will walk you through the installation.

![](/img/install-01.png)

To keep the installation small while saving bandwidth for you and Cygwin, the default installer will download only the files you need from the internet.

![](/img/install-02.png)

The default install path is C:\\Cygwin but if you don’t like to have programs installed on the root of your C: drive you can change the path or [make a symbolic link from C:\\Cygwin to your program files](https://www.howtogeek.com/16226/complete-guide-to-symbolic-links-symlinks-on-windows-or-linux/).

![](/img/install-03.png)

Click next until you come to a download mirror selection. Unfortunately, the installer does not say where the mirrors are located so in most cases you might as well just guess which mirror works best.

![](/img/install-06.png)

After you have selected a mirror, the installer will download a list of available packages for you to install. Here is where things get a bit more intimidating.

There will be hundreds of packages available separated by multiple different categories. If you don’t know what the package is you can leave the default selection and install additional packages later by running the installer again.

![](/img/install-08.png)

If you know what package you need, you can search for it and the results will be automatically filtered.

![](/img/install-09.png)

Once you click next, it will take a little while to download all the selected tools and then finish the installation.

## Add Cygwin Path to Windows Environment Variable

After the installation you will have a Cygwin icon on your desktop that you can launch to open the Cygwin terminal.

![](/img/terminal.png)

This terminal starts in the C:\\Cygwin\\home\\<user> folder but that isn’t particularly useful because you probably don’t have any files stored there. You can use all of the basic Linux commands but if you want to get back to your C: drive you have to change directory to /cygdrive/c.

To make Cygwin work in your normal Windows command prompt you need to add Cygwin to your Windows Environment Variables.

Start by opening your system properties with either Win+Pause/Break or right click on computer and select properties.

In the left column click on advanced system settings to open the system properties window we are looking for.

![](/img/system-properties.png)

From the advanced tab, click on environment variables at the bottom.

![](/img/env-var-1.png)

Then in the system variables, locate the path variable and click edit.

![](/img/env-var-2.png)

At the end of the variable value option, add the Cygwin bin location like so.

`;C:\Cygwin\bin`

_Note: Make sure you add a semicolon to separate it from the other values._

_![](/img/env-var-3.png)_

Click OK to close out of the window and then open a command prompt to test out a few Linux commands.

As you can see from the below picture both pwd and ls work in the normal Windows command prompt. You can also see that /cygdrive/c is automatically added to the location.

![](/img/command-prompt.png)

There is a lot more you can do with Cygwin installed and we will show you some more of the useful tools in future articles.

[Cygwin homepage](https://cygwin.com/index.html)
