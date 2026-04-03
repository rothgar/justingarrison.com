---
title: "Kubernetes Carrier V2"
description: "New and improved mobile Kubernetes cluster"
date: 2026-04-03T08:08:13-07:00
images: [/img/k8s-carrier-v2.png]
thumbnail: /img/k8s-carrier-v2.png
draft: false
---

In preperation for conferences this year I wanted to update my [PETaflop cluster](./petaflop-cluster) to something that was easier to travel with.
The first version of the cluster was challenging to build mostly because of the limited space and power requirements.
The next version I had some goals.

1. Cut weight significantly
1. Improve power efficiency
1. Make it easier to pack

He're a video version of this post if you want to watch me put it together instead of read the components.

{{< youtube 5-5KAxYpaVU >}}

## Cutting weight

The heaviest thing in v1 of the cluster was [the battery I needed to power the computers](https://www.amazon.com/dp/B0DP9GPWZJ).
It only weight 6lbs but combined with 2 computers, a monitor, network equimpent, etc.
It all ads up.

The battery also wasn't allowed on planes.
Any time I wanted to travel I'd have to buy a battery, ship it to my destination, and then give it away.
That wasn't going to work.

I realized I could get rid of 3 birds with 1 stone by switching the compute to a laptop.
A computer with battery and screen bulit in is a very novel idea.

If I wanted the monitor to be visible I needed a computer with a hinge that would rotate all the way around, 270 degrees.
It also needed to be small because the cat carrier had limited width.
And of course it needed Linux support because I was going to run [Talos Linux](https://talos.dev) on it.

Disclaimer: I work at Sidero Labs.

I found the perfect laptop.

<video lazy="true" loop="true" autoplay preload="auto" src=/video/framework12.mp4></video>

The Framework 12 met all my criteria and they even offered it in bright, fun colors which was an added bonus.
The plastic and slightly rugged case made it perfect for travel so now I just needed to buy one.

I reached out to Framework and asked if they'd be willing to sponsor the build.
I told them my idea, shared the previous build, and they said yes!

I just needed to spec out what I needed and they'd send me one. ❤️
I didn't need anything high performance or a ton of storage, so I went [slightly conservative on the build](https://frame.work/products/laptop12-diy-intel-13gen/configuration/new?token=313358e7af6) hoping it would help save power too.

* i5-1334U
* 16GB RAM
* 500GB storage

## Power

Now I needed to figure out how to power the laptop and accessories for as long as possible.
Because I was only buying this battery pack once I could get the largest one I was able to fly with.

The [Anker Prime Power Bank](https://www.anker.com/products/a110a-anker-prime-26k-300w-power-bank?variant=45569647542422) was perfect.

![](/img/anker-power-bank.png)

It's a bit pricy but it had an awesome, and a bit scary, feature of being able to charge from two outlets at once.
It can take a full 250W input which charges the bank super fast.

I don't have two, 125W power adapters, but even dual 60W adapters helps the bank charge fully in less than 2 hours.
It turns out that amount of time is perfect because the laptop has a 4365mAh battery built in which can run the cluster for about an hour.

This gives about 3 hours of run time powered from the Anker power bank, and 1 hour with the built in battery while the Anker charges.
The full backpack runs off the laptop battery which includes the mobile router, fans, and lights.

## Packing

Switching to a laptop removed a lot of extra exquipment I needed for the old cluster.
The old version had a 3D printed cage, extra computer for control plane, 7" monitor, keyboard, power supplies, and tools to assemble everything at my destination.
I also needed to bring extra bubble wrap to protect the computers and monitor from getting damaged in my suitcase.

The new version just needed the backpack, laptop, and battery.
No tools or external monitor required.

The cat carrier fits inside my carry-on luggage and I'm able to pack it full of clothes.
The extra laptop easily packs and is already protected when closed.

## Future improvements

I don't think the laptop looks as impressive as the old cluster, but it lasts all day and is much easier to package and travel with.
Trade-offs I'm willing to take.

There are a handful of things I want to change in the future.

1. Screen brightness and visibility
1. Interactive application
1. Multi-node

### Screen brightness

The screen worked fine in dark environments but I'd love to find a way to put the screen outside of the carrier or make it brighter.
Making the screen brighter may cause a problem of reflection inside the carrier so I'm looking at possible ways to make the screen sit outside without risking it getting damaged.

### Interactive application

The original application would take a picture and run it through an AI model.
The v2 application would just send a video stream with basic object detection.

It got a lot of smiles but the requirement for internet access made it slow in some environments and didn't give people much to do besides look at themselves.

I'm thinking of ideas to make the cluster work completely offline and give people more to do than just look at a video stream.
Having a live video feed also made me careful about where I brought the carrier (e.g. bathrooms).

### Multi-node

My original goal was to have 3 carriers with a way to interact between them both.
That still requires internet access, but if I don't need to send a video feed it should reduce the bandwidth.

I'm still looking into this and will hopefully have something new at the next conference.
