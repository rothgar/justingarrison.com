---
author: "Justin Garrison"
title: "On-Prem Development Kubernetes Cluster Options"
description: "Kubernetes has a lot of options for running in cloud environments."
date: 2017-01-03
images: [/img/og-image.png]
thumbnail: /img/og-image.png
draft: false
---

Kubernetes has a lot of options for running in cloud environments. If you’ve never experienced the simplicity of starting a cluster in GKE I highly recommend it. But how can you test cluster setups in an on premises environment?

Here are just a few reasons to have your own development cluster

- Node provisioning testing
- Node life cycle management (adding, removing, and maintenance)
- Out-of-cluster storage
- Network overlay/underlay testing
- Load balancing testing

There are plenty of other reasons but these are some that have driven me to find options. Below are some of the best options I found and what I went with.

## Virtual Machines

Virtual machines might be fine in a work environment with OpenStack or VMware but will probably be harder to find resources if you are doing development at home. They also might make testing certain types of development harder depending on what hypervisor you’re using.

[Minikube](https://github.com/kubernetes/minikube) is an obvious choice. It is by far the easiest way to develop against the Kubernetes API but is limited to a single VM and can’t do some things a full multi-VM cluster could do like testing network segmentation, load balancing, distributed storage, or network overlays.

[VMware](http://kubernetes.io/docs/getting-started-guides/vsphere/) is supported and can easily be used for development but it might be too much to manage for a home lab. There are also some options for starting [multi-node clusters with Vagrant](https://medium.com/@zwischenzugs/learn-kubernetes-the-hard-way-the-easy-and-cheap-way-6f82b665ccd9#.t97ddpnyl) which can be used but you will need to make sure your laptop/desktop has enough resources.

## Development Hardware

Here’s where things get tricky. Hardware requires more commitment because you need to order it, maintain it, and pay for running it (power). But this is also where things get fun. Hardware costs more up front and what you order is dependent on your budget and development goals. Let’s look at some options.

## Raspberry Pi

This is an obvious choice. In fact it even had a whole blog series on the [Kubernetes blog](http://blog.kubernetes.io/2015/11/creating-a-Raspberry-Pi-cluster-running-Kubernetes-the-shopping-list-Part-1.html) to explain how to do it.

![](/img/kubernetes-on-premise-1.webp)

It is one of the cheapest clusters you can buy. For a 5 node cluster it will cost you $300-$400. However, if you’ve ever built a Raspberry Pi cluster you’ll quickly notice some limitations.

- ARM architecture limits application availability
- Slow CPU
- Limited RAM (1 GB)

The benefits of Raspberry Pis include ubiquitous platform for development and small footprint.

You can easily search and find dozens of [examples](https://medium.com/google-cloud/everything-you-need-to-know-about-the-kubernetes-raspberry-pi-cluster-2a2413bfa0fa#.sx59jz3g0) for setting up a Raspberry Pi cluster so I wont go into any more details here. You can even get a full kit or pre-assembled cluster from some vendors like [https://www.picocluster.com/](https://www.picocluster.com/).

PINE A64+

![](/img/kubernetes-on-premise-2.webp)

There are [other ARM boards](http://hackerboards.com/ringing-in-2017-with-90-hacker-friendly-single-board-computers/) that are worth looking at but I’m not going to go into them because they all typically have the same limitations as the Pi.

## Beyond the Raspberry Pi

Of course the Raspberry Pi isn’t the only single board computer worthy of a home cluster. Lots of alternatives have shown up in the past year and some of them are very capable. Some benefits of these alternatives are.

- x86 architecture
- More RAM

The obvious downsides being the boards are more expensive. Instead of $35 for a Raspberry Pi you’re probably going to spend $100 per board for 1–2 GB of RAM and $170–$200 per board for 4GB of RAM.

If you have the money here are some great options for you to look at. (click the pictures for links)

- [Minnowboard Turbot](http://wiki.minnowboard.org/MinnowBoard_Turbot): A popular option with existing walk-throughs online.

[Sub-atomic cluster](http://www.projectatomic.io/blog/2016/06/micro-cluster-part-1/)

![](/img/kubernetes-on-premise-3.webp)

- Intel Stick PCs: These come in a lot of different variations but essentially are a small stick powered via USB and with an HDMI port. If you’re lucky some have Ethernet ports which makes clustering them a lot easier.

[https://hackernoon.com/diy-kubernetes-cluster-with-x86-stick-pcs-b0b6b879f8a7#.6eivoptm1](https://hackernoon.com/diy-kubernetes-cluster-with-x86-stick-pcs-b0b6b879f8a7#.6eivoptm1)

![](/img/kubernetes-on-premise-4.webp)

- [UP boards](http://up-shop.org/) are another alternative. They are typically a little faster than the Minnowboards and the new UP boards have 8GB RAM options. I couldn’t find an example cluster with UP boards but if you have one please let me know.

A few more honorable mentions include [LattePanda](http://www.lattepanda.com/), [Kangaroo Desktop Pro](http://www.kangaroo.cc/kangaroo-mobile-desktop-pro/), and the [Udoo](http://www.udoo.org/). Each board would provide compute and RAM for a cluster but vary in price, options, and accessories.

The DIY route for x86 boards is only getting better. Here’s a great example of a nice looking, 5 node cluster [https://hackaday.io/project/27869-kuberdoo](https://hackaday.io/project/27869-kuberdoo).

## Desktop Class Hardware

{{< x user="v1k0d3n" id="733043358663348225" >}}

This last category is going to give you lots of options. You’ll have a relatively powerful cluster (possibly more powerful than many cloud instances) but will cost you. Most of these options will cost you $1500-$2500 for a five node cluster but have a few benefits the others don’t.

- Upgradable hardware: add RAM, GPU, CPU as needed.
- Buy only what you need. Don’t need WiFi or Bluetooth? Don’t pay for them. Want a better GPU, add it when you need it.
- Closer to an on-prem hardware production cluster

Of course downsides include

- Price
- Power requirements
- Noise

One thing to note, just because something is a “desktop” doesn’t mean it has to take up a lot of space.

[DIY nono ITX build](https://www.reddit.com/r/homelab/comments/5j77r1/my_home_development_cluster_build_a_5_node_nano/)

![](/img/kubernetes-on-premise-5.webp)

Typically when people look for a desktop cluster they automatically think of the Intel NUC computers (example NUC cluster [here](https://github.com/aledbf/kubernetes-cluster-intel-nuc)). These are great but are going to be one of the more expensive options. I’d suggest you also look at the DIY route. With a little more time investment you can build something more specialized and cheaper.

The nano ITX build (pictured left) is a great example. In the links there are parts and other options for hardware.

I’d also suggest you look at onboard CPU combos and [PC Part Picker](http://pcpartpicker.com/list/6qPsnn) to find cheap options. Here are some onboard CPU options from Gigabyte for [AMD](http://www.gigabyte.com/products/list.aspx?s=42&jid=0&p=2&v=36) and [Intel](http://www.gigabyte.com/products/list.aspx?s=42&jid=7&p=2&v=30) CPUs. I found multiple options from $60-$90 per node which is a great price if you’re on a budget.

One of the cheapest desktop solutions I found is retired company systems.

You can often find old corporate systems on eBay, local electronics recycling, colleges, or even thrift stores. The benefit to these systems is they are usually enterprise grade hardware, decently spec’d (Intel Core i3/i5 with 4+ GB RAM), and cheaper than other options. You can regularly find desktops in the $40–$80 range. And although they’re bigger and take more power than other options they cost 1/4 of the price and are more easily upgraded. I bought hardware for my 5 node cluster for only $20 per system. That’s 1/2 the price of a Raspberry Pi + case + storage and my systems came with 4GB RAM, 500 GB hard drives, and Dual Core Intel i5 processors.

No matter what you’re building, there are plenty of options available. If you have more examples and resources please leave a comment so others can benefit.
