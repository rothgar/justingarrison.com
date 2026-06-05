---
title: "Kubernetes Autoscaling"
description: "Workload and node autoscaling in 2026"
date: 2026-05-31
images: [/img/autoscaling-banner.png]
thumbnail: /img/autoscaling-banner.png
draft: true
---

> This post is sponsored by [Cast AI](https://cast.ai), but comes from my real world experiences.

Automatically scaling nodes is a cloud parlor trick you don't get to opt out of.
If you run in a hyperscaler you have to play by their rules weather you need it or not.

Is it useful?
Sometimes.
Is it required?
Yes, to make the economics make sense.
Is it cool?
Absolutely.

Cloud pricing makes static provisioning expensive, so you're forced to dynamically scale.
But autoscaling introduces problems you didn't have on-prem.
Then you spend years turning knobs to make the problems managable.

I've seen many engineers lose months tuning autoscaling when they should be contributing to business initiatives.
The company and engineer moved from a static, on-prem environment and the thing that used to be extremely difficult — adding and removing compute capacity — is now trivial and fun.
So they tune the knobs until they get it _just_ right.
Six months later all of their assumptions were wrong and they either do it again, hand it off to someone else, or automate it.

The video to assist this blog post dives more into autoscaling, my history with it, and what a possible solution could be.

{{< youtube 38r60gJsqLQ >}}

## Stages of autoscaling

Kubernetes adds a workload native, portable API on top of cloud APIs.
While clouds _can_ auto scale, not all clouds are able to scale equally.

This causes a problem for portability because any "enterprise" will use a bit of everything and they'll group similar functions to save money on their org chart.
This creates a centralized team of reliability and scalability to figure out how to handle multiple workloads in multiple clouds with different use cases and constraints.

Naturally, the team will try to make a similar interface to do their job as consistently as possible and they'll use tools they're familiar with.
15 years ago this meant boto3 or ansible.
In 2026 this means Kubernetes.

Teams will start with the [Kubernetes Cluster Autoscaler](https://github.com/kubernetes/autoscaler), maybe try [Karpenter](https://github.com/kubernetes-sigs/karpenter), and if the business or resume requires it, will end up with [KEDA](https://github.com/kedacore/keda).
The addiction of dynamic scaling is never satiated.

## The problems you didn't have on-prem

It feels good to pretend to be a hyperscaler.
You're offering your developers elastic compute, storage, and networking and your company only has to pay for what you use (and all the engineering effort to make sure you don't use too much).

Except, it's not good enough and unless your workloads are very mature, you're going to have problems.

The problems start with eager user-data scripts that assume `apt` repositories are always available.
That you can install packages at runtime and not worry about managaging AMIs ever again.
This line of thinking makes your startup time too slow so you build AMIs to make your provisioning more reliable.

Then you start hitting limits.
Not engineering limits of hardware capacity, but artificial, cloud limits you have to open requests to solve.
If you scale large enough, eventually your instances get iced, meaning you need to request a wider variety of instance types.

After you solve those problems you'll end up with inconsistent performance characteristics and bugs that you're not able to reproduce.
This will push you further down the observability rabbit hole to identify problems sooner and understand them more holistically.

A lot of this is to solve cloud-induced problems.

Are there benefits to better application observability? Absolutely.
Do you need 4 years of 5 second infrastructure granularity? Most certainly not (unless regulations require it).

It's surprising you never had these problems or needed this level of granularity when you were on-prem.
The reason you didn't is because you did most of the work up front with load testing and planning.
Having a static environment is much easier to understand and troubleshoot.
This assumes you have some level of reproducability and auditability of changes.

## The autoscaling tax

One of the problems with the Kubernetes autoscaling options is they fill different needs.
Horizontal Pod Autoscaler (HPA), Vertical Pod Autoscaler (VPA), Event-Driven Autoscaling (KEDA) and others will scale workloads up, down, and sideways.
Cluster Autoscaler (CA) and Karpenter will manage the nodes.

But each of these autoscalers have their own unique idiosyncrasies that require lots of experience to ~~get right~~ not mess up.
And none of them are actually complete for what the business wants.

Sure you can scale things, but business leaders don't look at Grafana, they need a report.
Something in their email that makes them feel smart.
They're not going to get that from GitOps or YAML.

You can't rely on your cloud provider to be the sole source of cost savings because Kubernetes runs a lot more places than a single cloud provider.
And some cloud providers have terrible cost reporting data.

You could build reporting with ~~Kubecost~~ Apptio (an IBM project), but this just turns into another source of questionable alerts.
It _can_ do some automation, but that's not really what it was built for.
I'm sure it's perfectly fine (I've never used it).

Instead you probably need to rely on [OpenCost](https://opencost.io/), but you're back to monitoring disconnected from optimizations.
Karpenter will help make the right decisions when you scale, but Karpenter doesn't do reporting, doesn't work everywhere, and only scales nodes.

You can't opt out of this in the cloud. The economics won't let you treat infrastructure like a static data center, so you'll autoscale, and autoscaling creates demand for the cost reporting and optimization that autoscaling itself can't do. The question is whether you'll run three tools that don't talk to each other or one that does.

This is where [Cast AI](https://cast.ai) comes in.
I've never used it in anger (a.k.a. in production) so I'm not an expert in all the ways it works or doesn't.
I've only used it to learn enough about how it works to feel confident enough to know it does more than Karpenter and OpenCost.

When you combine all this data and control, the sum is greater than the parts.

Cast AI originally asked me to review their platform 3 years ago.
At the time I was working at AWS on Karpenter and Cast AI claimed it worked better than Karpenter with no public data to corroborate their claims.
I said no because I didn't think I could be a unbiased reviewer.

This time, when they reached out, they let me know they built integrations so it works with a cluster already managing autoscaling with Karpenter.
Obviously, the long term goal would be to get rid of Karpenter or the Cluster Autoscaler and only use Cast AI's autoscaling capabilities.
I assume that's where a lot of enterprises will end up.

In the cloud, autoscaling and cost reporting are the same job. The industry calls it FinOps. The pricing model is continuous, so the management is continuous.

On-prem has budgets, not FinOps. Different economics, different tools.

Even so, on-prem Kubernetes clusters end up running cloud autoscaling tools.
Does it make sense?
No — the hardware is already a sunk cost.
Will leadership ask why on-prem clusters don't need it?
No — asking that question admits they don't already know the answer.
Will you install it anyway?
Yes.
