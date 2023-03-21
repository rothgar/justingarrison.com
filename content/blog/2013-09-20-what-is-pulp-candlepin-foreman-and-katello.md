---
author: "Justin Garrison"
title: "What is Pulp, Candlepin, Foreman, and Katello"
description: "I have been working with some of the above products at work for the past couple of weeks and I just cam"
date: 2013-09-20
images: [/img/foreman-banner.jpg]
thumbnail: /img/foreman-banner.jpg
draft: false
---

I have been working with some of the above products at work for the past couple of weeks and I just came across the most succinct and straightforward answer to what each product is and what it is used for so I wanted to share.

This all comes from [Mike McCune](https://twitter.com/mccun934) who explained this so nicely in the #Pulp channel of irc.freenode.net

First, I did not realize that all of the products are Red Hat products. They are open source projects, but RH is the biggest contributor in each case.

Second, all of the products are designed to replace/succeed [Spacewalk](http://spacewalk.redhat.com/). Spacewalk is the upstream application to RH Satellite which basically lets you inventory and manage your systems. It has features for pushing updates, packaging rpms, and creating kickstart files for provisioning. While Spacewalk still works, new features/development is focusing on the new individual products.

So what does each product do?

**[Foreman](http://theforeman.org/):** Provisioning and Configuration Management

**[Pulp](http://www.pulpproject.org/):** Patch and Content Management

**[Candlepin](http://www.candlepinproject.org/):** Subscription and Entitlement Management

**[Katello](http://www.katello.org/):** Unified workflow and webUI for content (Pulp) and subscriptions (Candlepin).

Katello does integrate with Foreman, but from what I can tell that is only for patch and content deployments and not provisioning/config management.

I hope this helps anyone else trying to manage Linux servers.

---

_Originally published at [1n73r.net](http://1n73r.net/2013/09/20/what-is-pulp-candlepin-foreman-and-katello/) on September 20, 2013._
