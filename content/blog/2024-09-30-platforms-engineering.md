---
title: "Platforms Engineering"
description: "The idea that you can build a single platform is making it worse"
date: 2024-09-29
images: [/img/platforms-engineering-banner.png]
thumbnail: /img/platforms-engineering-banner.png
draft: false
---

Platform engineering teams are fooling themselves if they think they can build a single platform that will fit everyone's needs.

Companies want centralized management, reporting, and to "accelerate developer velocity," and platform engineering is the current buzzword selling that snake oil.
But that's not how platforms work, at least not the platforms they think they're building.
What they need is multiple platforms.

The pendulum has swung far away from the idealistic devops approach of giving devs pagers and letting them build whatever they need.
Now we're back to "reducing cognitive load" and specialized teams.

Specialized teams (e.g. DBA and SRE) are organizationally cheaper but procedurally slow.
It's extremely fast to have a "cross functional" team that has all the expertise needed, but that means a lot of duplicated headcount.
If there's one things companies hate right now, it's duplicated headcount.

So they're building central IT with a new title, "Platform Engineering."
And this time it's *powered by Kubernetes*™ so it'll be better.

If you're on a platform team you should ask yourself "who's funding my work?"
Maybe you can look at your org chart, maybe you should look at your backlog.
If your work is being funded by anyone that's not a development team then developers aren't your customers.

Usually platforms get funded by security, infrastructure, or at some level, the CFO.
Those three stakeholders have very different goals than developers and when you need to make decisions about features or capabilities, the people paying your paycheck will have the final say.

If you try to say yes to everyone you're going to build a platform for no one.
Just like Homer Simpson's car, no one asked for it and no one can use it.

It used to be that there was one type of database and applications had to conform to tables and joins if they wanted to store any data reliably.

Then specialized databases came out that allowed different ways for applications to interact with data.
There are SQL, NoSQL, time series, graph, vector, and a lot more.
They all have a focused use case that makes it easier to do something specific.

If you tried to make one database that could solve all of the use cases you'd have an overly complex database that increased cognitive overhead and wasn't particularly good.
Somehow there's still an idea that a platform team can Helm template their way into being the only thing developers need.
Instead we're repeating patterns like a Service Catalog and Enterprise Message Bus with newer technologies.

When building a platform, one of the best things you can do is say "no".
Knowing what you're building and who your building for is the only way to minimize choice and accelerate development (yours and the platform user).

One of the signs I can tell if a company is doing SRE the way Google intended it to be done (based on the SRE book) is if the SRE team has the power to say "no."
The book makes it very clear that SREs are 1) funded by the development team and 2) if the on-call load is too high, then SRE has the option to walk away.

Platform teams need to have a similar political power to identify who their ideal users are, and how they're going to solve their problems.

But saying "no" isn't what your customers (infosec, CFO, etc.) want.
Those customers need centralized reporting and control.
They need everyone using the same tools to make _their_ lives easier.

Platform engineering isn't gluing a bunch of off-the-shelf tools together.
More templates, variables, and YAML isn't going to make it easier for application developers to deploy faster, reduce cognitive load, and still innovate (a topic for another time).
And the CFO isn't going to fund multiple platform teams--at least not part of the same organization.
