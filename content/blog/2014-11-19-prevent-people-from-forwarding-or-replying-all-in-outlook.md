---
author: "Justin Garrison"
title: "Prevent People from Forwarding or Replying All in Outlook"
description: "If you frequently send out mass email news letters and keep getting users replying to all recipients, or need to"
date: 2014-11-19T15:30:07-05:00
images: [/img/img_546c0ad49888d.jpg]
thumbnail: /img/img_546c0ad49888d.jpg
draft: false
canonical: https://www.howtogeek.com/28535/prevent-people-from-forwarding-or-replying-all-in-outlook/
---

If you frequently send out mass email news letters and keep getting users replying to all recipients, or need to disable the ability to forward an email, Microsoft Exchange and Outlook have you covered.

Exchange and Outlook enable their own special flags that can disable this functionality and it can be extremely helpful if you need more control over your sent emails. This add-in works in Outlook 2007, Outlook 2010, and Outlook 2013 if you are using an Exchange account.

And again, this will only work if you connect to an Exchange server at work and are sending to people at work. This won’t work if you send to other people on the Internet, even if they are also using Exchange.

## Installing NoReplyAll Add-In

To disable Reply All and Forward on your sent email head over to the link below and [download the NoReplyAll add-in](https://click.linksynergy.com/deeplink?id=2QzUaswX1as&mid=24542&u1=htg/28535|xid:{xid}&murl=http%3A%2F%2Fresearch.microsoft.com%2Fen-us%2Fprojects%2Fresearchdesktop%2Fnoreplyall.aspx&___trxnet=ls).

![](/img/download.png)

Once you have downloaded it, close Outlook and extract the files to run setup.exe.

![](/img/setup.png)

The setup will have you accept a few EULAs and depending on what version of Windows you have installed you may need to reboot once during installation.

![](/img/setup-reboot.png)

If your system does need a reboot, make sure you allow the setup.exe to run after the reboot is complete. This window should pop-up automatically.

![](/img/setup-security.png)

After the setup completes, you will be prompted to install the NoReplyAllAddin into outlook. Click install and then open Outlook.

![](/img/addon-security.png)

## Test the Add-In

Compose a new email and you should see two new options in your ribbon to disable reply all and forward. Click the buttons to disable those features and they will light up indicating that they are enabled.

![](/img/plugin-1.png)

Send a quick test email to yourself and your reply all and forward buttons should now be grayed out.

![](/img/replyall-outlook.png)

If the user tries to forward or reply to all from the quick menu in Outlook they will also get a warning message letting them know the feature isn’t available.

![](/img/not-available.png)

Make a note that if you are sending the email to anyone not on Outlook and Exchange the options will still be enabled for them to reply all and forward whenever they want.

![](/img/replyall-gmail.png)

If the person you are sending the emails to isn’t using Microsoft Exchange or Outlook you may also want to just BCC all of your recipients. This doesn’t stop them from forwarding the email but if they click reply to all it will only send the email back to you instead of spamming the whole list.

## Bonus Features

As a bonus, the NoReplyAll add-in will also detect when you are sending an email without a subject or missing an attachment. A warning for snding emails with a blank subject is built into Outlook 2010 but in Outlook 2007 you will get this warning when trying to send the email.

![](/img/no-subject.png)

A similar warning will pop up when you type the words attachment or attached in a email without having anything attached to the email.

![](/img/no-attachment.png)

If you would like to add more words to the list of words to look for when sending attachments you can add words under the tools -> options menu. You also have the option to exclude certain uses of the words in the bottom window pane. You can type each exclusion if you use any of the words in your signature or predefined replys.

_Note: Each word you want to add needs to be on its own line. Spaces and commas do not separate the key words._

![](/img/no-attachment-options1.png)

For all the features packed into a free add-in you really can’t go wrong. If you are using Outlook and Exchange for all your emailing needs this is a must have add-in.
