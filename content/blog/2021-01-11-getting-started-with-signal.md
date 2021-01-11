---
title: Getting started with signal
date: 2021-01-11T09:00:20.041Z
image: https://justingarrison.com/img/signal-og-banner.png
description: How to take advantage of Signal for secure messages and calls
---
You've discovered that [Signal](https://signal.org/) can provide you with secure communication from your phone that is cross platform and free!

![](/img/signal-og-banner.png)

First of all you may be asking "who makes Signal?"
Signal Messenger LLC. is the company that makes the Signal app.
They are funded by the Signal Foundation which is a non-profit organization that relies on [your donations](https://signal.org/donate/) to make the app free and not have ulterior motives with your data.

The foundation's mission is

> To develop open source privacy technology that protects free expression and enables secure global communication.

The Signal app is all [open source on GitHub](https://github.com/signalapp) and their protocols are well documented and available [on their website](https://signal.org/docs/).

But that's not why you're here.
Let's show you some tips to get the most out of your new secure messaging app.

## Important settings
Signal is great, but there are a few things you may want to change depending on how secure or private you want your communications.

### Notifications.

You can disable what is shown in notifications to help with privacy.
Turn off whatever you don't want shown.

![](/img/signal-notification-content.png)

You may also want to disable the notification you get when one of your contacts join Signal.
Especially ad the rapid pace people are joining.

![](/img/signal-contact-notifications.png)

### Privacy

You can set the Signal app to lock when your phone locks under privacy.
It may also be a good idea to enable incognito keyboard which will ask your keyboard to remove personalization while typing.

![](/img/signal-privacy.png)

You can turn off read receipts, typing indicators, and automatic link previews under the communication settings.
Link previews only work on [sites that use `https://`](https://support.signal.org/hc/en-us/articles/360022474332-Link-Previews)

![](/img/signal-communication-settings.png)

### Chats and media

In chats you can change when to auto-download files.
Some of these can be quite large so it may be a good idea to only automatically download on Wi-Fi.

![](/img/signal-media-download.png)

At the very bottom of Chats and media is a [message backup option](https://support.signal.org/hc/en-us/articles/360007059752-Backup-and-Restore-Messages).
The backup is encrypted and stored locally on your phone.
If you're using a backup service for your phone they will also be backed up to the cloud which you may or may not want (even if it's encrypted).

![](/img/signal-chat-backups.png)

### Linked devices

You can use Signal from another device including tablets and laptops.
Install the Signal app on the other device and it will show a QR code.
Open the linked devices setting and click the + button at the bottom.
Scan the QR code and you're all set.

If you tap on an existing linked device you have the option to remove it from being able to send or receive messages.
Be aware that any existing messages on the device may still be available and cached on the device.
This setting is not a "secure wipe."

## Chats and calls
Signal chats work similarly to traditional SMS messaging apps.
You can send text, emoji, and stickers, or attach pictures, gifs (searched from giphy), files, contacts, or locations.
You can record voice messages by holding the microphone.

![](/img/signal-message-attach.png)

You can also make audio or video calls when you select a contact and click the icons in the top banner.
All calls are encrypted and can optionally go through a relay server so you do not expose your IP address to the recipient.
You can enable the relay server in settings -> privacy -> communication.

A relay is a server that Signal controls that your call will go through.
Similar to a VPN in the way it would expose the server IP to the recipient without exposing your IP.
If you're interested in the Signal server architecture you can check out [this post](https://sorincocorada.ro/signal-messanger-architecture/).

![](/img/signal-relay-calls.png)

A single hallow check box next to a message you sent means your message was sent.
Two check marks means the message was delivered.
Once the recipient reads the message the check marks will fill in.

![](/img/signal-double-checks-hallow.png)
![](/img/signal-doublechecks-filled.png)

If you see a little person icon next to the person's name in chat it means that person is in your contacts.
If you want their name to automatically be filled out you can go into your phone's contacts and add the number to a contact.

![](/img/signal-contact.png)

If you open a chat you can look in settings and enable disappearing messages.
This is super helpful to prevent messages persisting.

![](/img/signal-disappearing.png)

You can—and should—verify a contact to make sure you're really talking to them.
This verifies the encryption keys used at both ends of the conversation.
You can do that manually or automatically by scanning their QR code.

Ideally you will do this verification out-of-band from Signal either in person or through some other video/image sharing service.
Facetime, zoom, etc. are great options if you can't meet in person.

Once you verify a contact you'll see "Verified" text under their name.
If you manually mark the contact as verified it will show a message in the chat that you marked them verified.

### Group messages
You can create a group message from the main screen clicking the pencil and then "New group."

![](/img/signal-new-group.png)

Add contacts to the group and you're ready to go.

You have similar settings to 1:1 chats.
You can have a group video call with up to 8 people and a group chat with up to 150 people—RIP notifications!
If you want to have a group call without video you need to start a video call and disable your camera before you join.

You can change who can invite people to the group or make a group link easier for someone to share if they're not in your contacts.

The links are public but an admin needs to approve members joining the group by default.

![](/img/signal-group-link.png)

Group video calls work the same way as 1:1 calls but groups don't have audio only calls—although you can disable your video in a video call.

## Other things to consider
If you want to use signal without giving out your real phone number you can use a service like twilio that will provide you a forwarding number.

Check out [this great guide](https://mshelton.medium.com/using-signal-without-giving-your-phone-number-3a575580f652) on how to set it up.

### Your safety number has changed
If you see this seemingly scary message don't be alarmed.
It likely just means the [person on the other end of the conversation](https://support.signal.org/hc/en-us/articles/360007060632-What-is-a-safety-number-and-why-do-I-see-that-it-changed-) got a new phone or re-installed Signal.

![](/img/signal-safety-number.png)

You can still verify the persons safety number to make sure there is no man-in-the-middle attacks.
This is distinctly different than how iMessage and Telegram work because in both of those apps they store your private key.

### Pins
Pins are important because they will enable Signal to get rid of phone number requirements.

The [support page](https://support.signal.org/hc/en-us/articles/360007059792-Signal-PIN) says it best

>Your Signal PIN is a code used to support features like non-phone number based identifiers. This means that your PIN can recover your profile, settings, contacts, and who you’ve blocked if you ever lose or switch devices. A PIN can also serve as an optional registration lock to prevent others from registering your number on your behalf.

It hasn't rolled out yet but has been in the works for a while.

If you want to stay up to date on signal news I highly recommend you follow the [Signal blog](https://signal.org/blog/).
They have lots of great technical and non-technical information on new features and news.
