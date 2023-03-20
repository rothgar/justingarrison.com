---
author: "Justin Garrison"
title: "What Kind of Ethernet (Cat5, Cat5e, Cat6, Cat6a) Cable Should I Use?"
description: "Not all Ethernet cable is created equally. What’s the "
date: 2016-12-13T11:55:01-05:00
images: [/img/banner9.jpg]
thumbnail: /img/banner9.jpg
draft: false
canonical: https://www.howtogeek.com/70494/what-kind-of-ethernet-cat-5e6a-cable-should-i-use/
---

Not all Ethernet cable is created equally. What’s the difference, and how do you know which you should use? Let’s look at the technical and physical differences in Ethernet cable categories to help us decide.

Ethernet cables are grouped into sequentially numbered categories (“cat”) based on different specifications; sometimes the category is updated with further clarification or testing standards (e.g. 5e, 6a). These categories are how we can easily know what type of cable we need for a specific application. Manufacturers are required to adhere to the standards, which makes our lives easier.

What are the differences between the categories and how can you know when to use unshielded, shielded, stranded, or solid cable? Keep reading for “cat”-like enlightenment.

## Technical differences

The differences in cable specifications is not as easy to see as physical changes; so let’s look at what each category does and does not support. Below is a chart for reference when picking cable for your application based on the standards for that category.

![](https://www.howtogeek.com/wp-content/uploads/2011/08/spec-chart.png)

As the category number gets higher, so does the speed and Mhz of the wire. This is not a coincidence, because each category brings more stringent testing for eliminating crosstalk (XT) and adding isolation between the wires.

This does not mean your experiences have been the same. Physically you can use Cat-5 cable for 1 Gb speeds, and I have personally used cable longer than 100 meters, but because the standard has not been tested for it, you’ll probably have mixed results. Just because you have Cat-6 cable, doesn’t mean you have  1 Gb network speeds either. Every connection in your network needs to support the 1 Gb speed and in some cases, the connection will need to be told in software to use the available speed.

Category 5 cable was revised, and mostly replaced with, Category 5 Enhanced ([Cat-5e](https://www.amazon.com/Mediabridge-Cat5e-Ethernet-Patch-Cable/dp/B001W26TIW/ref=sr_1_2?ie=UTF8&qid=1443404381&sr=8-2&keywords=Cat-5e&tag=lsmedia-4694-20&asc_refurl=https://www.howtogeek.com/70494/what-kind-of-ethernet-cat-5e6a-cable-should-i-use/)) cable which did not change anything physically in the cable, but instead applied more stringent testing standards for crosstalk.

Category 6 was revised with Augmented Category 6 ([Cat-6a](https://www.amazon.com/Cable-Matters®-Snagless-Shielded-Ethernet/dp/B00HEM4ZX0/ref=sr_1_1?ie=UTF8&qid=1443404348&sr=8-1&keywords=Cat-6a&tag=lsmedia-4694-20&asc_refurl=https://www.howtogeek.com/70494/what-kind-of-ethernet-cat-5e6a-cable-should-i-use/)) which provided testing for 500 Mhz communication (compared to Cat-6’s 250 Mhz). The higher communication frequency eliminated alien crosstalk (AXT) which allows for longer range at 10 Gb/s.

## Physical Differences

So how does a physical cable eliminate interference and allow for faster speeds? It does it through wire twisting and isolation. Cable twisting was invented by Alexander Graham Bell in 1881 for use on telephone wires that were run along side power lines. He discovered that by twisting the cable every 3-4 utility poles, it reduced the interference and increased the range. Twisted pair became the basis for all Ethernet cables to eliminate interference between internal wires (XT), and external wires (AXT).

There are two main physical differences between Cat-5 and Cat-6 cables, the number of twists per cm in the wire, and sheath thickness.

![](https://www.howtogeek.com/wp-content/uploads/2011/08/twist-comparison.png)

Cable twisting length is not standardized, but typically there are 1.5-2 twists per cm in Cat-5(e) and 2+ twists per cm in Cat-6. Within a single cable, each colored pair will also have different twist lengths based on prime numbers so that no two twists ever align. The amount of twists per pair is usually unique for each cable manufacturer. As you can see in the above picture, no two pairs have the same amount of twists per inch.

Many Cat-6 cables also include a nylon spline which helps eliminate crosstalk. Although the spline is not required in Cat-5 cable, some manufactures include it anyway. In Cat-6 cable, the spline is not required either as long as the cable tests according to the standard. In the picture above, the Cat-5e cable is the only one with a spline.

While the nylon spline helps reduce crosstalk in the wire, the thicker sheath protects against near end crosstalk (NEXT) and alien crosstalk (AXT) which both occur more often as the frequency (Mhz) increases. In this picture the Cat-5e cable has the thinnest sheath, but it also was the only one with the nylon spline.

![](https://www.howtogeek.com/wp-content/uploads/2011/08/sheath-thickness.png)

### Shielded (STP) vs. Unshielded (UTP)

Because all Ethernet cables are twisted, manufactures use shielding to further protect the cable from interference. Unshielded twisted pair can easily be used for cables between your computer and the wall, but you will want to use shielded cable for areas with high interference and running cables outdoors or inside walls.

![](https://www.howtogeek.com/wp-content/uploads/2011/08/utp-stp.png)

There are different ways to shield an Ethernet cable, but typically it involves putting a shield around each pair of wire in the cable. This protects the pairs from crosstalk internally. Manufactures can further protect cables from alien crosstalk but screening UTP or STP cables. Technically the picture above shows a Screened STP cable (S/STP).

![](https://www.howtogeek.com/wp-content/uploads/2011/08/stp-udp.png)

### Solid vs. Stranded

Solid and stranded Ethernet cables refer to the actual copper conductor in the pairs. Solid cable uses a single piece of copper for the electrical conductor while stranded uses a series of copper cables twisted together. There are many different applications for each type of conductor, but there are two main applications for each type you should know about.

![](https://www.howtogeek.com/wp-content/uploads/2011/08/solid-stranded.png)

Stranded cable is more flexible and should be used at your desk or anywhere you may be moving the cable around often.

Solid cable is not as flexible but it is also more durable which makes it ideal for permanent installations as well as outdoor and in walls.

Now that you know which type of cable you should use, [have a look at our guide to making your own Ethernet cable](https://www.howtogeek.com/60486/how-to-make-your-own-custom-length-network-cables/).
