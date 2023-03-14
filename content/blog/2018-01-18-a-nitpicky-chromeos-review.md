---
author: "Justin Garrison"
title: "A Nitpicky ChromeOS Review"
description: "I've been using a Pixelbook as my main mobile computer for a little over a month now"
date: 2018-01-18
images: [/img/nitpicky-chrome-os-review-1.webp]
thumbnail: /img/nitpicky-chrome-os-review-1.webp
draft: false
---

_TL;DR I'd love if Google made the ChromeOS experience better for professionals but I have little hope they'll figure it out any time soon given the issues I experienced._

I've been using a Pixelbook as my main mobile computer for a little over a month now. I have long wanted to use ChromeOS as my full time OS for a number of years but it always seemed to not be ready. I was finally ready to jump in knowing there would be limitations, but I wasn't prepared for some of the limitations and bugs I found. Here's my experience.

Just a quick note about how I use mobile computing devices. I have always liked small mobile computing devices that are used more as thin clients to a powerful desktop or VM. I have been using computers that way ever since I discovered SSH and RDP. I also had a goal of using ChromeOS without enabling developer mode or installing Linux/Crouton. So far I have managed to get by without developer mode, but I'm not sure how much longer that will last.

## The Good

Let's get this out of the way first. The [Pixelbook hardware](https://store.google.com/us/product/google_pixelbook_specs?hl=en-US) is very premium. The screen has great resolution, the keyboard feels really nice to type on (maybe a little bit too loud), and the trackpad hardware has never let me down. The rubberized palm rests help a lot when using the Pixelbook over an extended period of time.

The Pixelbook pen feels great and drawing on the screen works as well as anything I've tried on an iPad Pro. The replaceable AAAA battery makes the pen heavier then the Apple Pencil and the pen is slightly thicker because of the diameter requirements, but overall the hardware, pressure sensitivity, and angles while drawing work better than I expected. The fact that there's a Google assistant button on the pen is a sign that it's not designed to be a professional tool but rather a casual user gimmick with integrations into Google services.

Some other surprisingly great things are the calculator app, the keyboard shortcuts for switching user accounts (ctrl+alt+.), the application launcher, and the way the UI switches from mouse/keyboard to a touch interface seamlessly.

![](/img/nitpicky-chrome-os-review-2.webp)

Calculator will automatically expand options based on window size

Here's just two example of how the interface changes when you touch the screen. Normally I have the application shelf hidden and docked on the bottom. If you start using the pen to touch the screen or drag a window it will automatically unhide so you don't have to swipe, jab, or poke to reveal it. If you have a lot of tabs open in chrome they will automatically change from tiny little tabs to larger scrollable tabs.

![](/img/nitpicky-chrome-os-review-3.webp)

Standard chrome tabs

![](/img/nitpicky-chrome-os-review-6.webp)

Touch friendly tabs

## The Bad

These are annoyances but not terrible bugs or deal breakers for me using ChromeOS. Some of them may have fixes I'm not aware of; if they have fixes, I could not find them.

It's near impossible to edit pictures in ChromeOS. The fact that I couldn't figure out a way to join the two screenshots above into one picture just goes to show how limited it is. All the apps I tried failed for one reason or another. Many don't run at all.

Screenshots on ChromeOS are fine (image annotations via Google Keep) but there's no native way to record a video or GIF of your screen. There were a [couple](https://chrome.google.com/webstore/detail/screencastify-screen-vide/mmeijimgabbpbgpdklnllpncmdofkcpn?hl=en) [apps](https://chrome.google.com/webstore/detail/loom-video-recorder-scree/liecbddmkiiihnedobmlmillhodjkdmb?hl=en-US) that claimed to work but they all seemed very shady and user data mining treasure troves with near unlimited access to my system I wasn't ready to give them.

Typing emoji is really bad. You have to manually add it as an on-screen keyboard and then using it is very buggy. It doesn't scroll with the trackpad and sometimes doesn't type at all. I really miss [Rocket on MacOS](http://matthewpalmer.net/rocket/) and [emoji selector in GNOME](https://extensions.gnome.org/extension/1162/emoji-selector/).

![](/img/nitpicky-chrome-os-review-4.webp)

Speaking of soft keyboards, I touch type with the Dvorak layout which is very well supported. Unfortunately, Google thinks if you have muscle memory for touch typing that also means you type with an on-screen keyboard with the same layout. For me that's not the case and supporting different layouts for hardware and on-screen keyboards is nonexistent in ChromeOS. What's worse is it is something iOS has supported from the beginning.

How is there no way to see a calendar from the ChromeOS GUI? Windows and GNOME have this as built in functionality and MacOS has a few different menu bar apps. The only way to see a calendar is to open a Chrome tab or SSH into a system and use CLI tools. It's very frustrating when I'm planning something and need to switch tabs to see what day a specific date is.

I don't use windowed applications very often, but when I do I suspect there is a way to set a window to always stay on top of other windows and a way to activate a window without raising it (mouse over focus). Both of these seem impossible on ChromeOS and make it very hard to keep my notes available while typing this article. Scrolling works for windows not in focus but you can't type without raising the window.

It bothers me to no end that electron based apps don't work on ChromeOS. There are [TONS of them](https://electronjs.org/apps) and I would have much preferred support for them instead of Android apps (more on this later). Because I can't run electron apps it means I can't use [code](https://code.visualstudio.com/) as an IDE and end up trying to use pseudo touch interfaces for functionality that seems like it should be available.

Remember how much I said I liked the Pixelbook Pen earlier? It's true the hardware is really good. Unfortunately, there's almost zero software to use it. There's only a couple of apps and some apps just don't support using the pen at all. It's very hit or miss but if you're looking to do any professional drawing you're better off sticking with the Apple Pencil on a supported device with software available.

Some other random things that have held me up include

- Can't install LastPass binary app (used to store pictures in notes)
- No ability to middle click
- Not able to forward X from remote systems
- Cannot manage .ssh/config file for shortcuts and common defaults for domains
- Mosh app is comically bad and the secure shell app doesn't support mosh
- Getting a ssh private/public key onto a Chromebook is ridiculously difficult.
- Tmux panes won't select with trackpad taps (requires full click)
- Copy/paste from terminal only auto-copies text. No ability to use ctrl+shift+c
- No support for java or flash which limits usability when managing some hardware devices

## The Ugly

Here's bugs I found. Some are small and could be fixed, others make me scared to use ChromeOS as my main device.

One of the drawing apps had exported an image to the local pictures folder but after a system update the picture was gone. Losing files is not OK. I know the image was there because I had showed other people the picture after I drew it but I still have yet to find out what happened to it. The promise of having everything remotely synced to the cloud isn't actually true as there is plenty of local storage on devices.

Android apps are possibly the most buggy thing I've ever used. I've only tried a handful but not a single one works well. They either crash, freeze, have UI issues, or a combination of all of those. Not only that but they add confusion as to what you're using/installing because often times apps have chrome versions and android versions. It depends on what icon you clicked or how you installed it. As an example I installed the Cisco Anyconnect chrome app which seemed to work OK at first (more info later) but someone else I was talking to couldn't get it working at all. After some troubleshooting we realized they were running the Android version of the app which looked almost identical but it doesn't work in ChromeOS at all.

Speaking of which, ChromeOS has the idea of a primary user (the first user to ever log into the device). That causes problems when trying to install applications from a secondary ChromeOS account. There's weird things were apps install on the wrong user, won't install at all, and pop-ups show up on different accounts. The primary user is also the only user who's able to launch the Google assistant. That's really bad when my primary account (work) isn't an account I use the the Google assistant with.

![](/img/nitpicky-chrome-os-review-5.webp)

Here's some random bugs I ran into

- Gmail list of labels doesn't scroll with trackpad gesture without expanding the "more labels" button. This works on Chrome on any other OS so I'm not sure why it doesn't here.
- User switch keyboard shortcut doesn't work if the other user doesn't have any apps running. Seriously, close all your apps and then press ctrl+alt+. and nothing will happen.
- Every time I update ChromeOS my VPN profiles disappear. Very annoying and even though the profiles don't exist I somehow have a name collision and I have to uninstall/reinstall the VPN app. This is likely a Cisco app bug but it creates a standard ChromeOS VPN profile which I would assume to be supported.
- I've had multiple times where the laptop resumes from sleep but I can't log in. Not sure why. No error, no info, just denies login until I reboot the system.

## Conclusion

All of the problems above are not things I deal with when using a Linux or Mac laptop. While MacOS seems to get worse with each release, Windows and Linux keep getting better. Some of the problems would be resolved with crouton while others would require installing a full version of Linux. I think I could look past these problems if ChromeOS were a new operating system (it was released in 2011) or if there were noticeable benefits such as better battery life.

So far I'm still using the Pixelbook but I'm not sure if I'll grow tired of these issues and eventually give up. I don't feel like I'm trying to do anything extravagant or I require a local development system with comparable functionality to a full OS laptop. I really hope it'll get better and fix some of these issues but I'm not holding my breath.
