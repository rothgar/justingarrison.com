---
title: "Using an iPad Pro as a Laptop"
description: "What I loved and hated"
date: 2026-06-20
images: [/img/ipad-laptop-banner.png]
thumbnail: /img/ipad-laptop-banner.png
draft: true
---

I really tried to make it work.
I wanted it to work.
But I finally replaced my 11" iPad Pro (4th generation) with a real laptop.

I love small laptops.
Screen size between 10-12 inches (25-30cm) is what I've been using ever since I was able to pick a laptop screen size.
Even 13" laptops feel too big to carry, which leaves me with limited options.
So when I started a new role, I tried an iPad — it seemed to tick all the boxes.

I usually do the majority of my work from a desk with a desktop.
It has a big monitor, ergonomic keyboard and mouse, and treadmill.
I only use laptops at night when I'm consuming content, when I want distraction-free writing, or when I travel.
In every one of those cases I almost always remote into my desktop.

Because of that my requirements for a mobile computing device are:

* Small screen
* Terminal with ssh
* Tailscale
* Large enough keyboard to touch type

If possible, I would also love:

* Davinci Resolve video editing
* Stylus and digitizer for art
* Cellular connectivity

Eighteen months in, I gave up. Here's what worked, what didn't, and what finally pushed me back to a laptop.

## The Good

The 11" iPad Pro screen size was great for me.
It had good resolution and the keyboard was good enough.
It was top heavy when using it in my lap, but the ability to disconnect from the keyboard case made the trade-off worth it.

Procreate is a great tool for drawing and creating the art I typically need (e.g. blog banners).
The Apple Pencil is one of the best styluses I've ever used (except high-end Wacom styluses).

[Blink Shell](https://blink.sh/) is a surprisingly capable terminal on an iPad and worked _almost_ perfectly for my needs.
I happily paid the $20/yr subscription because I found it essential for my workflows.

Cellular connectivity is such a nice feature.
Paired with a Google Fi data-only SIM card, it gave me internet anywhere I traveled.
It was exactly what I wanted.

The webcam for calls was surprisingly good.
This iPad generation still had the camera on the wrong side of the screen, but that didn't matter when on a call.
Unfortunately, the webcam would cut video feed any time I would switch windows, or even push cmd+tab, which was extremely annoying.

## The Bad

Managing files was a struggle.
A lot of what I do requires me to move files around.
The files app seemed to fight me frequently and had poorly-implemented features (e.g. network shares) that weren't reliable.
I tried automated syncing like syncthing, but frequently ended up using [LocalSend](https://localsend.org/) and `tailscale file cp`.

Video editing on the iPad Pro was possible but extremely limited.
The screen size wasn't the only restriction, the software also would only do basic cutting features.
You can enable more features, but those feature pages were even harder to work with on such a small screen.

Video editing and rendering would kill the battery very quickly.
As much as people praise the M series chips and amazing battery life, it would only last a few hours if I tried to do any form of heavy workload.

Apps were always worse than their desktop equivalents.
Slack, Google Docs, and every other app I tried worked worse than the standard web page on a full desktop browser.
Unfortunately, those services aggressively pushed you toward their apps.
Almost no apps work with keyboard shortcuts which just added to the frustrations.

## The Ugly

Browsers were unusable for most things.
I tried Safari, Brave, Edge, and Chrome and none of them could get around the limitations.
Apple has a serious problem.
They've nerfed browsers on every mobile platform because it directly interferes with their hardware business models.
This is a well documented complaint from many people so I don't need to fully re-hash it here.

Due to the nature of my work, I occasionally need to debug lower level hardware and network things.
This would require me to have a handful of tools available on a wired network interface.
The iPad works with USB-C wired network adapters, but there's no local terminal with necessary tools and iPadOS doesn't give you the network access I need.

When Apple updated iPadOS 26 with the new windowed application management they removed the older, tiled window management capability.
On an 11" size screen a tiled window manager worked well for me.
Even the floating windows were useful.

With iPadOS 26 you could either use 1 app at a time, or you could use the new, half-baked idea of running multiple applications at once.
I'm not saying the old system was great, there were a lot of limitations, but it at least made it possible to maximize screen usage with multiple applications.

Removing the ability to use multiple applications without using floating windows was the final straw for me.
I finally switched to a real laptop.
I gave up Procreate, cellular networking, and mobile video editing unless I bring multiple devices.
