---
author: "Justin Garrison"
title: "Google Mini Search Appliance Teardown"
description: "Google has search appliances available for enterprise customers to house in their data centers to take"
date: 2012-12-11
images: [/img/1_zSsRXBZVQMoSS4DHmUO66Q.jpeg]
thumbnail: /img/1_zSsRXBZVQMoSS4DHmUO66Q.jpeg
draft: false
---

Google has search appliances available for enterprise customers to house in their data centers to take advantage of Google’s searching and indexing abilities for web services and intranet resources. One such device is called the [Google Mini](http://mini.google.com/). Unfortunately, the Google Mini was also [end of life’d as of July 2012](http://googleblog.blogspot.de/2012/07/spring-cleaning-in-summer.html). No big deal, it was replaced by better and faster appliances. Besides, the Google Mini is now 7 yeas old so it was about time.I happen to come across a Google Mini that was being retired so I took it upon myself to investigate what was inside. I also thought it might be fun to repurpose for a project or two.So let’s take it apart and see what’s inside. So far as I could tell the [EULA didn’t completely forbid this](http://1n73r.net/wp-content/uploads/2012/12/google-mini-eula.pdf) so long as the drive was wiped.

## The Externals

The Google Mini isn’t super special outside from the fact that it’s a 1U server with a big blue sticker on top and the rest of the outside painted blue. There are also a lot of security bits that prevent normal users from opening them up.

The sticker prevents you from opening the lid so we’ll need to peal that back if we want to see what’s inside.

![0_ipRPEvTRCesWp5tE.jpg](/img/0_ipRPEvTRCesWp5tE.jpg)

Here’s one of the security screws

![0*3rQmSDVEvQc48YVU.jpg](/img/0_3rQmSDVEvQc48YVU.jpg)

And here’s the master key we’ll use to get inside.

![0*pubE6kFosBdenzZP.jpg](/img/0_pubE6kFosBdenzZP.jpg)

## The Internals

Once we get past that we can open up the lid by sliding it back and revealing the insides.

![0*9CW_i8ZKkhk1NqRQ.jpg](/img/0_9CW_i8ZKkhk1NqRQ.jpg)

Let’s start by looking at the main components. The CPU heatsink is under the plastic shroud with just a single fan cooling off the entire server. The heatsink below the CPU is for the north bridge which handles communication from the CPU to the RAM. The black heatsink on the top right is for the PCIe controller.

![0*osaKN_yxx3K7qrEM.jpg](/img/0_osaKN_yxx3K7qrEM.jpg)

The ports on the server are pretty standard for any desktop/server. An added benefit being this comes with dual network interface cards (NIC) which can allow for more advanced system management.

![0*iMAGBu_MLrNU64KM.jpg](/img/0_iMAGBu_MLrNU64KM.jpg)

The server comes with 2GB of DDR2 RAM which you can easily see here.

![0*RF0stZoa53gPRbXK.jpg](/img/0_RF0stZoa53gPRbXK.jpg)

The server has 1 PCIe 16x slot and 5 PCI slots. Not that you could use them in a 1U case though.

![0*TTpXkrmxwImI-K2p.jpg](/img/0_TTpXkrmxwImI-K2p.jpg)

It also has 4 SATA controllers, 1 IDE hard drive controller, and a floppy controller. There is also an [IPMI slot](http://en.wikipedia.org/wiki/Intelligent_Platform_Management_Interface) which is used for out of band management (OOBM). The slot is missing the OOB network card. You can also see two headers for optional case-mounted USB and some jumpers labelled JWD which stand for Jumper Watch Dog. These jumpers allow the machine to automatically reboot if a software hang is detected.

You can also see the Intel ICH6R south bridge for communication handling to the accessories. The chip near the top right of the picture contains the BIOS and the two pads on the bottom right of the south bridge allow for clearing the CMOS settings when jumped.

![0*IrXt4h6I-f47PNiW.jpg](/img/0_IrXt4h6I-f47PNiW.jpg)

On the other side of the case are some more jumpers. These are labeled JPWAKE1 and JPUSB1. Both of these pins allow the server to be woken either by USB or PS2 keyboard/mouse input.

![0*Ju1_hhaGkVZYcBoR.jpg](/img/0_Ju1_hhaGkVZYcBoR.jpg)

Along the rear of the case are also the two network controllers for the Broadcom network cards. This picture also shows us that the motherboard is manufactured by Supero and the model is a P8SCT. A quick Google search turned up the [user manual](http://1n73r.net/wp-content/uploads/2012/12/MNL-0776.pdf) which proved to be very helpful when identifying some of the chips and jumpers.

![0__NeSI_hqIkUkAmJ7.jpg](/img/0__NeSI_hqIkUkAmJ7.jpg)

The power supply is standard but to be thorough I might as well take a picture of that too.

![0_IA8ydxZ9E8sVCFqZ.jpg](/img/0_IA8ydxZ9E8sVCFqZ.jpg)

When taking out the hard drive there are 4 screws on the bottom of the case that hold the damper screws to the hard drive. Luckily they’re labeled so it makes finding them easy.

![0_wjzCqmlJUYtr5Ccc.jpg](/img/0_wjzCqmlJUYtr5Ccc.jpg)

Once you take out the screws the hard drive slides out. There is also a little air dam that keeps air flowing over the hard drive on it’s way to cool the CPU.

![0_u5lgk9rKjQ1H1ta3.jpg](/img/0_u5lgk9rKjQ1H1ta3.jpg)

Just to be overly thorough of the motherboard, here’s a component layout from the user manual.

![0_MR0Ys4me7Fm-_fhc.png](/img/0_MR0Ys4me7Fm-_fhc.png)

I hope you enjoyed the teardown. Just for comparison, AnandTech their own [teardown in 2005](http://www.anandtech.com/show/1781/3). The internals on that Google Mini looked quite a bit different.

---

_Originally published at [1n73r.net](http://1n73r.net/2012/12/11/google-mini-search-appliance-teardown/) on December 11, 2012._
