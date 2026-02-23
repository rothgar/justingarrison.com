---
title: "Fargate Is Not Firecracker"
description: "A common misconception that AWS never corrected anyone about."
date: 2024-02-08T22:17:30-08:00
images: [/img/fargate-not-firecracker-banner.png]
thumbnail: /img/fargate-not-firecracker-banner.png
draft: false
pinned: true
---

This was the biggest un-truth that I saw while working at AWS on the EKS team.
On an almost weekly basis a customer would want to use AWS Fargate for a variety of reasons and one of them would be because it used Firecracker. For some reason--AWS marketing--that was better than traditional EC2 Xen virtualization.

And no one at AWS would correct them.

There was an unspoken policy to never point out that Fargate didn't actually use Firecracker to create "microVMs" for each container.
Just let customers believe what they wanted to.
Of course all of the documentation and blog posts make it _sound_ like Fargate uses Firecracker, but you have to read between the lines and know how companies push you to believe something that's not true.

Let's look at what [the main documentation page](https://firecracker-microvm.github.io) says (ephasis mine):

> Firecracker was developed...to improve the customer experience of services **like** AWS Lambda and AWS Fargate.

Or how about this blog from 2020 [Under the hood: AWS Fargate data plane](https://aws.amazon.com/blogs/containers/under-the-hood-fargate-data-plane/).
Surely this will tell the truth of what Fargate uses, and it does.
It spends 80% of the article explaining that Fargate has moved away from Docker and now uses containerd, but it has to mention Firecracker even if it's not used.

> Fargate **can** leverage a VM-based runtime for containers such as Firecracker VMM by simply switching containerd’s runtime plugin to firecracker-containerd instead of runC.

Of course it _can_ switch out runC, but that's anything but "simple" at Amazon's scale.
And by "scale" I mean people scale, not technology.
The politics involved would cost a lot more cycles than the technology challenges.

## So what _does_ Fargate use?

Surprisingly, there's information right on the Firecracker documentation page under the "Why did you develop Firecracker?" section.
It's speaking about Lambda but you could see how this could be the same architecture used for Fargate.

> ...we used per-customer EC2 instances to provide strong security and isolation between customers

Does Fargate guarantees hardware isolation between your containers? Nope.

Does Fargate gets rid of "noisy neighbor" problems from EC2? Nope.

Does Fargate have hardware virtualization isolation between you and someone else? Yep, just like EC2.

Does Fargate lower operational burden by never having to worry about an operating system ever again? Nope. The operational burden shifts to other areas like "how do we get EBS volumes or GPUs?" and "how do we shift all our daemons to side cars?" and "why is this costing us so much more money than EC2?".

You spend all that operational time working around Fargate, but at least you don't have any pesky servers. 🙄

## Should I care?

Not really.

If it's been working for you then great!
You're the exact target market they built it for.

People often think that Fargate is magic.
That there's some special technology implementation detail that only Amazon can do.

In reality, AWS builds on AWS with extremely rare cases of behind the scenes special sauce.

Just make sure you're not lying to yourself about how much "heavy lifting" is being removed and how much is being shifted to something else.

Disclaimer: I worked on the containers and EKS team from April 2020 through Janurary 2024. The implementation of Fargate may have changed, but the lies remain the same.
