---
author: "Hugo Authors"
title: "Whiteboarding software and hardware"
date: 2021-02-02
description: "Options for personal and shared whiteboarding"
tags: ["shortcodes", "privacy"]
thumbnail: /images/wbo-2.png
---

One of the things I miss most about working in an office is diagramming with coworkers. I’m a very visual learner and drawing what I’m thinking and having others explain their thoughts in picture form help me a lot. If you’ve seen any of my conference talks you’ll also probably know that I like props too!

Let me start with what I’m using and then can explain some other options and trade-offs. Here’s the best option I’ve been using.

## [Whiteboard Online (WBO)](https://wbo.ophir.dev/)

I love how simple it is. No signup, just create a board and share the URL with someone. The board interface is minimal but has *most* everything I want and already has keyboard shortcuts without needing any config.

![img](/images/wbo-1.png)

WBO was the best performing web whiteboard software I tried from an iPad with pencil. It’s not perfect and has some glitching when zooming on a touch device, but the trade-offs have been well worth it for me. The “app” is a web wrapper—with no back or share buttons—but it works when I don’t want to be at my desk.

It’s open source and already packaged in a container so running it in AWS ECS with Fargate or Amazon Lightsail were both easy with no ongoing maintenance. The boards are saved to disk on the server so if you want to keep them around you’ll need to make sure you have persistant storage. I treat it as disposible and always make sure I save a screenshot if I care to have a copy of the board.

Drawing with a mouse is never easy so I would recommend if you want a better experience you’re going to need some way to use a pen/stylus. If you don’t have something with a touch screen there are quite a few cheap convertable chromebooks on the market or [Wacom tablets](https://estore.wacom.com/en-US/tablets.html) range from $60-$200.

![img](/images/whiteboarding-cintiq.jpg)

I was drawing boards from my iPad but recently I bought a Wacom Cintiq 16 tablet which has been great. It has more space than a typical tablet and is more sturdy while sitting on my desk. It’s not a cheap option though so make sure you’ll benefit from the hardware. As an added bonus it makes a great 2nd display and has perfect resolution for sharing my screen in Twitch streams and meetings.

## Other considerations

There are different types of collaborative diagramming people use. Some people prefer building diagrams by themselves in something like [Microsoft Visio](https://www.microsoft.com/en-us/microsoft-365/visio/flowchart-software) or [diagrams.net](https://diagrams.net/) (formally draw.io).

These are great for permanent documentation, slides, or sharing. They’re not great for on the fly collaboration or multi-user editing. In this post I’m specifically looking for software that let’s me learn **with** someone, not **from** someone.

I’ve used [Miro](https://miro.com/) and [Microsoft OneNote](https://www.onenote.com/) but for me these are more like note applications that happen to have drawing. Drawing in them works but is clearly an afterthought and the UI is mainly optimized for mouse/keyboard usage and not pen/stylus input.

I wanted something that is cross platform—macOS, Windows, Linux, and hopefully iOS, Chrome OS, and Android. I don’t know how or where my coworkers want to collaborate so it needed to be something web based.

[Zoom whiteboard](https://support.zoom.us/hc/en-us/articles/205677665-Sharing-a-whiteboard) is really cool and recently got support for other operating systems—not just macOS. I don’t like that I *have* to be in a zoom meeting to use it though. Sometimes I like to draw things I’m thinking about or collaborate asynchronously. [Screen.so](https://screen.so/) has a built in whiteboard app too but has similar limitations.

I used to love the [Microsoft Whiteboard](https://www.microsoft.com/en-us/microsoft-365/microsoft-whiteboard/digital-whiteboard-app) app for iPadOS, but over the years it got more buggy and integrated into Microsoft Teams which I don’t have. Similarly, [Google Jamboard](https://jamboard.google.com/) is really cool but tied to a Google account which I may or may not be able to use for work content. As a bonus, Whiteboard and Jamboard both have physical options if I ever worked from an office again in the future.

I’ve tried a few other open source and proprietary tools like [Openboard](https://openboard.ch/index.en.html) and [Endless Paper](https://www.endlesspaper.app/), but for my use cases never worked out. I really liked the concept of Openboard letting me draw over the top of my screen and no matter what was on it but it was very buggy when I tried it on Ubuntu.

### Honorable mention

[Excalidraw](https://github.com/excalidraw/excalidraw) is a popular alternative to WBO. It has a good drawing interface and adds a lot of features to create structured diagrams too. Every time I use it it feels like much more than a whiteboard which often means I end up hunting and pecking in menues to do exactly the right thing instead of just drawing and letting ideas flow.

[Drawpile](https://drawpile.net/) has some really neat ideas like communities, but the native apps seemed to make it make it harder to develop features and there’s no mobile support. The self hosted server was harder to run than other strictly web based apps.

[Spacedeck](https://github.com/spacedeck/spacedeck-open) was a SaaS offering turned OSS. It looks more like a Miro competitor but still being maintained if that’s what you want.

[Awwapp](https://awwapp.com/#) and [Browserboard](https://browserboard.com/) are simple hosted whiteboards which worked well for me the few times I tried them. They have some paid options which add nice features, but I never stuck with them.

[Vibe](https://app.vibe.us/) has a really nice web app which fixes some of my complaints with WBO. Similar to Jamboard, Vibe also have an optional $3000 “whiteboard” they’ll sell you with their app running full screen for a more traditional whiteboarding experience.
