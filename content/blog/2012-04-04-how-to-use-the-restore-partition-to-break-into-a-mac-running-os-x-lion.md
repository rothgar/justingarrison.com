---
author: "Justin Garrison"
title: "How To Use the Restore Partition to Break Into a Mac Running OS X Lion"
description: "It’s trivial to break into a Mac using an OS X boot disk, but new Macs use a restore"
date: 2012-04-04T04:00:58-04:00
images: [/img/banner.jpg]
thumbnail: /img/banner.jpg
draft: false
canonical: https://www.howtogeek.com/109582/how-to-use-the-restore-partition-to-break-into-a-mac-running-os-x-lion/
---

It’s trivial to break into a Mac [using an OS X boot disk](https://www.howtogeek.com/30983/how-to-reset-your-forgotten-mac-os-x-password/), but new Macs use a restore partition for OS installations. Here’s how you can use that partition to reset a user password and break into a Mac.

All laptops that come with OS X 10.7 “Lion” or laptops that were upgraded to Lion have a restore partition for easy OS recovery. This easy-to-use recovery partition also opens up hackers to break into your Mac without needing any additional tools.

To reset a user password on a Mac with Lion you first need to restart the computer and hold the Command+R (⌘+R) keys. When the gray Apple logo shows up on the screen you can release the keys. Your computer should automatically boot into the recovery partition.

Start by selecting your language and then go to Utilities -> Terminal in the menu.

![/img/resetpassword-1.jpg](/img/resetpassword-1.jpg)

When the terminal opens, type the command

> resetpassword

and the password reset utility will automatically start.

![/img/resetpassword-2.jpg](/img/resetpassword-2.jpg)

Once the tool opens, select the user you want to reset the password for and enter a new password (or nothing to blank the password).

![/img/resetpassword-3.jpg](/img/resetpassword-3.jpg)

Reboot the computer and you can log into the account with the new password.

The only way for a Mac user to protect themselves from this attack is to either set a firmware password or encrypt their hard drive. Even if the recovery partition is erased from the hard drive a hacker can automatically restore the partition by using Apple’s internet recovery feature. Look for more details on these options in future articles.
