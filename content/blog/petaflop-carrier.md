---
title: "PETaflop carrier"
description: "AI can cause back pain."
date: 2025-11-10
images: [/img/petaflop-banner.jpg]
thumbnail: /img/petaflop-banner.jpg
draft: false
---

Instead of going to therapy I built another Kubernetes cluster.

I got a NVIDIA DGX Spark and wanted to see what it's capable of.
Lots of people have done benchmarks and comparisons, but I needed to see what it practically felt like to build something.

Because it's a local, powerful AI computer I had to think of something AI related, and I wanted some way to show it's local.
Of course this could all be faked, but it's a lot more fun to work with constraints.

![A small stack of computers next to a backpack with a clear front](/img/petaflop-assembled.jpg)

## Hardware list

* [NVIDIA DGX Spark](https://www.nvidia.com/en-us/products/workstations/dgx-spark/)
* [LattePanda IOTA (8GB)](https://www.dfrobot.com/product-2989.html) with [m.2 expansion](https://www.dfrobot.com/product-2985.html) and [UPS](https://www.dfrobot.com/product-2983.html)
* [GL.iNet GL-A1300 travel router](https://www.amazon.com/dp/B0B4ZSR2PX)
* [Takki 250W Portable Power Station](https://www.amazon.com/dp/B0DP9GPWZJ)
* [GOTUS LED Sign](https://www.amazon.com/dp/B0FLPWZKVQ)
* [7 inch mini monitor](https://www.amazon.com/dp/B0D53RRHMD)
* [Modular shelves](https://makerworld.com/en/models/120634-modular-stackable-open-shelving-system#profileId-129781) 3D printed
* [Henkelion Cat Backpack Carrier](https://www.amazon.com/dp/B09N94ZTXS)

## Software list

* [Talos Linux](https://talos.dev) with [Omni](https://siderolabs.com/omni)
* [ngrok](https://ngrok.com)
* [ComfyUI](https://www.comfy.org)
* [FLUX.1-schnell model](https://huggingface.co/black-forest-labs/FLUX.1-schnell)

## Architucture

It's a pretty basic software stack.

![A diagram with block components described in the below paragraph](/img/petaflop-software-diagram.png)

The ngrok Kubernetes operator runs inside the cluster and provides an ingress to the workload.
The IOTA runs the Kubernetes control plane, ngrok operator, and application frontend.
The Spark _only_ runs ComfyUI to process the img2img jobs.

I could have run everything on the Spark, but I kept needing to reinstall the Spark for a variety of reasons.
I found it easier just to keep the frontend and Kubernetes on a dedicated system and route to the ComfyUI API on a separate machine.

The frontend app is 100% AI written.
I knew roughly what I wanted with an img2img workflow, but I didn't know how to implement it locally.

I spent the majority of my time learning ComfyUI, finding random models on Huggingface, finding broken links, and watching YouTube tutorials.
The AI ecosystem is a mess.

I got comfortable enough to understand what I needed and then used Claude to help me figure out how to implement it.

## Using the application

I built the backpack so I could use it at Kubecon in Atlanta.
The idea was to just wear it all week and start conversations.

![a screenshot of a webpage with a webcam with me with my thumb up](/img/petaflop-app.png)

I recharged it at the Sidero booth when the battery died, and wore it when it had power.
The Spark draws about 50w at idle so I estimated I would get about 3 hours of battery life.
In reality, I got more than 3 hours of usage and recharging from 30% took almost 2 hours.
During the recharge the Spark had to be turned off.

People could scan the QR code, take a picture, and get a stylized image back.
Because the backpack was on my back I didn't require them to talk to me, but of course there were lots of questions.

The only major problem I ran into was keeping the backpack connected to the internet.
At first I was teathering from my phone hotspot, but it was slow.
I switched to using the conference wifi but it was spotty and frequently disconnected when walking around.
I switched to using USB teathering on my phone and that was much more stable.

The build was a pretty simple 2 node Kubernetes cluster.
The hardest part was finding a backup big enough to show it off.
