---
author: "Justin Garrison"
title: "Google OnHub Feature Requests"
description: "Large scale DDoS are not rare occasions anymore. What we need to help protect the Internet is to make home routers"
date: 2016-11-07
images: [/img/onhub-wish-banner.jpg]
thumbnail: /img/onhub-wish-banner.jpg
draft: false
---

[Large scale DDoS](http://dyn.com/blog/dyn-statement-on-10212016-ddos-attack/) are not rare occasions anymore. What we need to help protect the Internet is to make home routers smarter. I hope Google can start this trend and maybe it would catch on as standard features.

Here are some feature that (to me) seem reasonable for any modern router to provide.

- Don’t allow source IP spoofing (egress filtering)
- Notify me for large amounts of outbound traffic
- Blacklist known C&C IPs and malicious sites

Egress filtering should be a no-brainer. If my local subnet is 192.168.0.1 don’t allow traffic to leave my network pretending to come from any other subnet not local to my network. This doesn’t solve all DDoS attacks, but it does help with [UDP amplification attacks](https://blog.cloudflare.com/deep-inside-a-dns-amplification-ddos-attack/).

If any of my devices starts sending 1Gb/s or 10,000 requests to an IP address let me know. Maybe it’s legit (e.g. crashplan backup) but maybe it’s not. Just send me an alert on my phone or an email that it’s happening, and tell me which device was sending the traffic. If it’s my light bulb sending the traffic I will promptly throw it away. If lots of OnHubs start seeing similar traffic there should be a way to correlate the data (opt-in) so everyone can know if they may be part of a DDoS attack.

I know command and control IPs change frequently. But there are some IPs that should never be visited. If there is a connection from one of my devices (outbound or inbound) to one of these IPs I’d want to know. I’d also want the option to drop and block the connection from happening again. It may not solve everything, but it would make some things more difficult for attackers.

I’m sure there are some other features people would rather have. But for the protection of the broader Internet I think these are some features that need to be adopted. The sooner the better.
