---
author: "Justin Garrison"
title: "Cleanup Your Windows 7 Login Screen and Remove Unwanted Logon Items"
description: "Windows 7 adds functionality to your login screen to give you additional logon options"
date: 2011-06-01
images: [/img/banner4.png]
thumbnail: /img/banner4.png
draft: false
canonical: https://www.howtogeek.com/64927/cleanup-your-windows-7-login-screen-and-remove-unwanted-logon-items/
---

Windows 7 adds functionality to your login screen to give you additional logon options. If you want to lose the clutter, here is how to disable some or all of your credential providers.

Whether it was installed from the factory or add-on software you installed, these registry settings will disable the unwanted credential providers at your login screen.

> `HKLM\Software\Microsoft\Windows\CurrentVersion\Authentication\Credential Providers`

It will not be obvious what some of the providers are but you should be able to determine which one goes to which provider by looking at the value of the (Default) DWORD inside each key.

![](/img/registry-00.png)

The screenshot below references the fingerprint scanner on my system but yours may be different.

![](/img/registry-01.png)

To disable each of the items, create a DWORD value named “Disable” with a value of 1. For each key you disable it will be removed from your login screen.

![](/img/registry-02.png)

Be careful which items you disable or you may not be able to log in with your password either. Only disable the items you know you won’t need and disable them one at a time. This should stop you from disabling too many items and not allowing you to login to your computer.

If you accidentally disable too many items, restart your machine in safe mode and set the disable key to 0 for the providers you need.

Once you have found all the correct keys your new login screen should show only the items you want.

![](/img/logon_screen_01.png)
