---
title: "I Was Wrong About Cloud"
description: "After advocating for cloud and working at Amazon for years I've changed my mind about when the cloud makes sense."
date: 2023-12-09T21:16:44-08:00
images: [/img/og-image.png]
thumbnail: /img/og-image.png
draft: true
---
Ever since I got my first sysadmin role (2012) I was interested in the cloud.
In 2017 I co-authored [Cloud Native Infrastructure](https://cnibook.info) with the main lesson being to use [infrastructure as software](/blog/2022-06-01-infrastructure-as-software/) to actively manage infrastructure and applications.
I was wrong about that too.

After working at Amazon on EKS for the past 3 1/2 years I've seen how mistaken I was.

There are times you should use the cloud, but it's not the sustainable solution they'd like you to believe.

The cloud makes sense for small scale environments, short term usage, or extreme variability.
Anything permanent will cost a lot more and require more maintenance.

All those things you used to do to maintain a data center, the "undifferentiated heavy lifting" becomes "undifferentiated heavy cost optimizing."
The cloud providers play it off as part of doing business, but it's not something you have to put up with.
For years running on-prem infrastructure we never cost optimized anything.
We budgeted up front and increased utilization over time.

When building Disney+, my manager told me something that stuck with me.
Finance doesn't care how much it costs, they just need it to be predictable.

Predictability is a requirement for running any business.
Cloud providers give you predictability at the cost of lock-in.

Whole teams are formed to keep spending under control.
[Entire industries have formed](https://www.duckbillgroup.com/) to help companies understand what they're spending their money on and how to save.

But it doesn't have to be that way.

When writing the [EKS best practices guide for cost optimizations](https://aws.github.io/aws-eks-best-practices/cost_optimization/cost_opt_compute/) it became clear all of the "benefits" to save money we're AWS's leverage to make spending more money the customer's problem.
If you're infrastructure cost too much it was your fault for not optimizing.

But even the cheapest reserved instance prices is only part of the story.
You're paying for things that used to be free.
NAT Gateways, zone transfer fees, AMIs, EBS snapshots, egress didn't cost money on-prem.
Even if you save money on compute, you're paying for it.



