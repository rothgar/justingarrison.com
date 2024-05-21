---
title: "How to Grow Your Infrastructure"
description: The progression of how applications and infrastructure change from 0 to millions of users.
date: 2024-05-20T20:59:09-07:00
images: [/img/og-image.png]
thumbnail: /img/og-image.png
draft: true
---

This topic has come up often over the years so I'm writing it down to express my current opinion of how your application and infrastructure should grow over time.
I've roughly had the same opinion since working at Disney+ and moving to AWS and watching applications and infrastructure scale.

Every application and environment is unique so no one will be able to follow this progression exactly.
But generally this is how I start anything I build, and how I recommend applications to grow.

### Start with serverless

This is a reasonable place to start for a few reasons.

1. You probably don't know exactly what your building
1. Operational overhead will be low
1. You can scale bad code with responsive infrastructure
1. You can offload functionality to services

I don't mean you have to start with Lambda, but you should start with something that helps you figure out what your building and offload the things you don't know early.
If my company is using AWS then Lambda is fine.
In GCP I like cloud run.
Personal projects I usually use Cloudflare workers.

Any other get-out-of-my-way platform is a good option too.
Wasm, render, fly, they're all great.
They meet the criteria of getting out of the way and helping you focus on figuring out what you're building.

The infrastructure is going to be part of your application in a very critical way in this early stage.
Embrace it.
Use the k/v store even if you don't think it's going to scale long term.

### Servers/containers

At some point the serverless option is going to get either too expensive or too cumbersome.
All the things that helped the platform get out of your way in the beginning suddenly get in your way when you scale out the features, the amount of people on the team, or lots of other reasons.

When serverless gets in the way a lot of people will try to make it better by putting more tooling around it, adding templates, running locally, mocking services.
I know those things can work to a degree, but I've never seen them work long term as the application or team scales.
At some point you need to build a monolith.

That's where containers and servers are great!
You may still be building a microservice, but it's going to be bigger and architecturally simpler than the 10 functions, 3 queues, and a database were before.

This is the point where you decide which components should be part of the infrastructure and which should be part of your application.
A message queue is great, but if one function can fork a thread instead of going over the network it's going to be easier to run locally, easier to reason about failures, easier to stablize for the second evolution of your app.

I usually recommend people build their Lambda functions with containers to start.
It's slower than native runtimes but it's more consistent as the size of the functions grow and it's easier to transition out of Lambda when the time comes.

Be careful not to over complicate this step.
It's easy to think container == Kubernetes, and that's not at all what I'm saying.
Keep the infrastructure as simple as you can because you need to figure out what the application needs.

You're going to be writing more code in this phase because you shouldn't be relying on the infrastructure to be a core of a component of your application.
Put your application in a container and run it in one of many container services, or stick it on a VM in an auto scaling group and don't think about it until the next phase.

## Multiple containers

This is the 3rd phase of your application's evolution.
This is the first time you should even think about owning any part of the orchestration.
Everything before this should be as serverless or off-the-shelf as possible.
Many applications don't even make it to this point.

Now is the first time you probably need to make some hard scaling challenges.
Your application is probably split into a few different containers, a database, and at least 2 supporting infrastructure components (e.g. cache).

This is where you can start to optimize code paths, re-write core functionality, and write that medium post about garbage collection.

Your app doesn't fit on a single, reasonably size cloud instance so now you need to add coordination for your deployments.
That is probably going to come through some form of orchestration.

Lots of enterprises start at this level.
Either because they don't have offerings for 1-2 or they have so many applications they have to build a platform team and try to build 1-2 themselves.

The problem for most platform teams is it's harder to simplify something complex than complexifying something simple.
It is a lot harder to hide something like Kubernetes than it is to build cloud native cgi-bin on top of a pool of VMs.

## BYO Cloud

Here's where the real pain begins.
Your application, or at least the code you wrote, has room to grow so you get a little more relaxed about how it should grow.
It's easier to make more services within the confines of your orchestrator so that's obviously what happens.

The hard part is you begin to adopt external services as part of the application again.
But now these external services have very specific requirements because you know what performance you expect from them.
Each external service needs to have your features or you have to run it yourself, creating more responsibility.

At this point in your application and company's growth you're not the only application at this size.
This is big enterprise problems and now you have multiple platform teams, a cloud team, and a team team just to make sure all your bases are covered.

Your company is multi-cloud and there's a cloud team building an "abstraction" (a.k.a. terraform template) in the stratosphere.
It's called "ozone" because they think they're clever.

They need to control every aspect of your self-service experience and all the benefits of the cloud have been whittled away in appsec and SRE scoping.
At this point the application makes money.
Not a little bit of "that's cool" money, like a lot of money.
Enough money to fund the next 3 quarters of AI tomfoolery without affecting your bottom line.

## Reduce spend

If you've made it this far your application is officially Legacy with a capital "L".
Not legacy because you don't want to write apps in Ruby any more, but Legacy because the documentation and decisions you made will long out live the team who built it.

The next, and final, cycle of application evolution is to make it run bug complete with as minimal changes required and as minimal spend as possible.
This is where most companies will buy 3 years of reserved instances and say that's the cheapest they can make it.

Maybe they'll put it in its own Kubernetes cluster just so it doesn't interfere with the other workloads and quarterly Kubernetes upgrades can be handled separately.
It will likely never have another major refactor, and anyone who's onboarding to the stack at this point will be the caregiver, not the doctor.

Here's where I would recommend moving the application out of the cloud.
Unless your application has a recurring 10x surge (e.g. Black Friday), most of the benefits of the cloud won't outweigh the simplicity and cost effectiveness of static infrastructure.

Elastic scaling is cool, but it takes engineering effort and scaling rented computers up and down is still not as cheap as buying servers for 4+ years.
Plus more things can, and will, go wrong when things shift around to try and optimize the last few dollars.

Put the stable, Legacy applications in a space where they can retire and let them.
Don't optimize them to death.
Move on to the next wave of excited opportunities.
