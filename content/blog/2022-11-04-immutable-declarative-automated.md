+++
title = "Automated, immutable, and declarative"
description = "The infrastructure lies we tell ourselves, and why they're useful."
date = 2022-11-04T01:21:24-07:00
thumbnail = "/img/automated-immutable-declarative-banner.jpg"
images = ["/img/automated-immutable-declarative-banner.jpg"]
draft = false
+++

The goals of infrastructure since I started managing it has been to automate it, make it immutable, and make it declarative.
A good sysadmin never had to do something manually twice.
An SRE doesn't let their infrastructure change.
Platform engineers are imperative allergic.

All of these idealized extremes are guaranteed to waste your time.
They are helpful mechanisms to employ as needed, but without understanding their usefulness can be dangerous traps.

<!--more-->

## Automated
The benefits of speed, consistency, and a deep understanding of the systems you're automating include having more time to automate more things and a fast track to a sysadmin level 2.
Automation can be leveraged thousands of times for thousands of hours or maybe only once a year for a few minutes.

You shouldn't have to manually do something more than twice, but the effort level of automating a system safely may be more than manually doing it 100 times.
It's up to you to determine if the automation is worth it.

How long does it take and how often is the task performed are the usual calculations to see if automation is worth it.
The unknown maintenance, feature additions, documentation, and training may take as much time as the initial efforts.
Not to mention the eventual re-write to rust.

The downsides of automation include―but are not limited to―automation that exits half way and requires manual work to revert.
Accelerating an outage by running automation that assumed a system was healthy.

The key to successful automation is to write the smallest amount of it as necessary.
Have well defined scope to the task your automating, and validations to assure it's run under constrained circumstances.

Automation is great.
The mantra to "Automate all the things!" is scary.

## Immutable
Nothing should ever change in production.
Except for application deployments, logs, memory heaps, and a million other things you don't care about until something breaks.

The need for immutability came from a time when we had physical servers and very little automation.
It was hard to set up a server.
Days of plugging things in, updating firmware, rebooting, installing the OS―usually via physical media―rebooting again, and changing 18 files with the lessons learned from previous outages.

After setup, the easiest thing to do was to not touch it.
Uptime was a source of pride because it was hard to achieve.
Keeping a server powered on for 365+ days was hard work and a badge of honor to show how good you were as a sysadmin.

When we finally started to care about things like security patching, we would do everything to avoid rebooting the system.
So we would mutate them.
Anything short of a kernel update would get `yum update` and a quick `SIGHUP`.

Minimal automation and mutating files on disk didn't scale.
More updates required more mutations.
Operating system, runtimes, and configuration changes required more downtime which was hard to plan for during maintenance windows.

So, the pendulum swung the other way and immutability was the new uptime.
We could automate more things with new tools so everything old was new again.
Don't-call-them-golden-images were all the rage.
Wrap your mutable RPMs in a Dockerfile and even your apps could be golden.

"Infrastructure as cattle" became the goal, and plenty of conference talks proclaimed the enlightenment they had achieved.
The combination of automation and immutability made it so your could take a little bit of bash, terraform, and some artifacts and create a complete environment that never changed.

The golden signal of a good sysadmin―now called SRE―was how fast you could create an environment from scratch.
"I can recreate everything automatically" was the most common lie we told ourselves.
The belief that nothing changed without us knowing was never spoken out loud.
So we called it "immutable".

The truth is, a system that doesn't change isn't useful.
It's a snapshot, not a running system.
Lots of things change, but the things we carefully crafted should change less often or change with intention.

The application configuration doesn't change.
Unless you want to use dynamic feature flags or graceful degradation.
Operating systems never change unless you want fast patch times or need interactive debugging.

The images should be golden, but the complete system cannot be semver'd.
Environments change too frequently.
You can't take a snapshot of everything and re-deploy it exactly how it was.
Data―the thing you care most about―is different.
Tables have changed, APIs have updated, security keys are rotated (or they should be).

There's no such thing as complete immutability, but there is value in knowing which parts of your system should change and which parts shouldn't.
When you evaluate the system you'll find a lot more things mutate than don't.
Hopefully, the pendulum has started to swing back to center and immutability is not the new uptime.

Immutability still doesn't solve problems of deployment.
Things mutate to create artifacts, get pushed to a storage system, and then a Jenkins orchestrated, Rube Goldberg bash script wraps curl, SSH, hopes, and dreams to push out a new version without downtime.

We thought we were creating reproducibility with Dockerfiles, but reality was relying on `:latest` is just as mutatable as `yum update`-ing.
There had to be a better way.

## Declarative
Instead of fixing the problems we created we decided that imperative steps were the problem so we started making things declarative.
`If` statements were unreliable so they were removed.
Loops and logic could not be statically queried and often lead to incorrect assumptions being made during outages.
So they were abandoned for declarative, WET code.

We wrote more HCL and YAML than we ever planned in our pursuit of fully declarative APIs in the same way we chased complete immutability.
Just like immutability, fully declarative systems is a lie.

The parts of your system that are immutable should be declared, but declarative systems are rigid and reliability requires flexibility.
How many replicas does your deployment have right now?
Hopefully, that's not statically declared but dynamically scaled based on need―and limited based on budget.
What are the DNS names of your service load balancers?
It doesn't matter, the Kubernetes service is dynamically provisioned and associated with targets and they're available.

We're all tired of writing WET yaml so let's go back to DRY HCL.
Better still, we can use the power of general purpose programming languages with [Pulumi](https://www.pulumi.com/) or [cdk8s](https://cdke8s.io) to create abstractions on top of the declarative APIs.
Then we transpile it to the verbose, declarative text files we can't be bothered to artisanally hand craft on our Cherry MX switches.

The goal of declarative systems is to reduce error prone, imperative automation.
If we can trust the declarative APIs then we can have some assurances the state of our systems are―or eventually will be―reconciled.

Similar to immutable systems, we want to think we know what's going on.
The best way we can find and fix a problem is to start with the correct assumptions, and ask questions of the running system to be answered―hello observability.

**The goal of all of these mechanisms is reliability.**
Reliability happens with careful planning and understanding when to use―and not use―the mechanisms available.

There will be a new goal, slogan, and unattainable holy grail.
Understanding how and when to implement the tools available for your requirements is the only way to succeed.

