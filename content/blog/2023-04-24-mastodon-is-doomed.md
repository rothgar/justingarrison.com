---
title: "Mastodon Is Doomed"
description: "Mastodon won't be the next Twitter, and it's not because of Bluesky. The ideals and execution won't scale."
date: 2023-04-24T00:00:00
images: [/img/mastodon-doomed-banner.png]
thumbnail: /img/mastodon-doomed-banner.png
draft: false
---

Mastodon is free and open source microblogging software that many people believe will be the next Twitter.
Because it is open source and built on the [ActivityPub protocol](https://activitypub.rocks/) you can run your own instance or join one of the existing servers to find your community.
The "fediverse" claims to be community owned, decentralized, and ad-free.
It also lets you "own your own data" in direct opposition to the existing social media platforms.

The fediverse recently crossed [1,000,000,000 posts](https://fediverse.observer/stats)—more than 75% of which comes from Mastodon.

![graph of toots going up and to the right](/img/mastodon-toot-graph.png)

But none of that actually matters.

In an ideal fediverse world, people would run personal servers or a community would run a server for members.
The reality is people don't want to pick their favorite community, running an instance is expensive and complicated, and owning your data isn't a product feature.

All of those "features" come with with a heavy price—responsibility.
Running your own instance is increadibly time consuming and difficult to understand how to secure and scale.
It also can be quite expensive if it grows to any meaningful amount of use.
Even if you're not a heavy poster, the way relays work consume a lot of storage to follow hashtags and users from different instances.

Communities are not siloed independent bubbles.
People are Venn diagrams of lots of communities and interests.
Selecting a username can be difficult, deciding which community you want as part of your identity—even if you can change it—is too much.
The act of choosing a server has kept more than a few people away from Mastodon.

Hopefully, you don't end up on a server that isn't secure, has trouble scaling, or shuts down for a variety of other reasons.
For example [mastodon.technology shut down because of instability](https://ashfurrow.com/blog/mastodon-technology-shutdown/) and mastodon.lol [shut down because of Harry Potter](https://mastodon.lol/@nathan/109836633022272265).
One thing to know about ActivityPub is if you want to move your data to a new instance, the old one has to exist.
If the old one is compromised or unavailable, too bad.

Even one of the best run instances at [hachyderm.io](https://community.hachyderm.io/blog/2022/12/03/leaving-the-basement/) had trouble scaling last year with 30,000 users and over $5000 worth of equipment.
They were able to migrate over a terabyte of data to Digital Ocean which kept them afloat, but at a cost not many can afford—more than $1000/mo.

Beyond scaling concerns is the legal responsibility.
If you host an instance for other people you should be prepared to invest time documenting and training moderators or shut down like [The Financial Times](https://www.techdirt.com/2023/02/01/financial-times-sets-up-mastodon-server-realizes-laws-exist-which-it-was-already-subject-to-pulls-down-mastodon-server/).
As [Nilay Patel](https://www.theverge.com/authors/nilay-patel) from The Verge notes, [moderation is the feature social networks sell](https://www.theverge.com/2023/4/20/23689570/activitypub-protocol-standard-social-network), and Mastodon has no plans for better moderation tools besides leaving it up to independent server admins.

It's only a matter of time until there will be a CVE found in the official Mastodon software which will leave a vast majority of instances vulnerable.
This will be a wakeup call to administrators that the benefits of ownership are not worth the time investment.
Even for single user instances.

If the instance you're on is compromised you will lose your identity because private keys are stored as part of the instance.
No private keys, no identity, no portability.

Administrators are not paid for their work, and very few instances have plans to continue operating if a single person leaves, runs out of money, or loses interest.
I can imagine the headline now where someone offers to help run an instance, but in reality they only want access to user DMs and private keys.
Just like Wordpress from the 2010s, many instances will be abandoned and never upgraded.

Like Wordpress, the best way to use Mastodon is to pay a company to run it for you.
Mastodon instances will fail to get updated for months at a time until individuals decide it's not worth their time or $10 per month.

I [asked some of the largest instance admins](https://mastodon.social/@jgarr/110232731615869211) to share how much it cost to run their instances on a per account and per monthly active user (MAU) basis.
On average it cost $.0085 per registered account and $.041 per MAU.
That may seem cheap, but if Mastodon ever hopes to grow into the millions of MAU or have any celebrities join their platforms admins are going to be paying thousands or tens of thousands per month.
As volunteers.
With no income potential.
They also will be trusted with user's private keys and unencrypted DMs.

The financial and trust models of Mastodon just don't add up.

You can, of course, run your own server.
Just like you can run your own email server.
And you will be blocked from the broader public discourse just the same.
There will be no way for large instances to trust and allow every individual instance.
The moderation work will be too much and they'll end up trusting only large, established instances.

If you've never had the pleasure of running a ruby on rails app with Postgres database I'm sure you'll learn a lot about running apps from 10+ years ago.
If you don't know what PgBouncer or Sidekiq are in 2023 I wouldn't invest a ton of time in learning them now.

The only way I would suggest running an instance is with a managed services option like [Cloudflare Wildebeest](https://github.com/cloudflare/wildebeest).
It's not without problems (I run an instance), but the MAU cost and ongoing maintenance should be much lower for a multi-user instance.

For me, the final nail in the Mastodon coffin came from a [Decoder podcast interview](https://www.theverge.com/23658648/mastodon-ceo-twitter-interview-elon-musk-twitter) with [Eugen Rochko](https://mastodon.social/@Gargron), the CEO of Mastodon.
Throughout the interview it's clear that Eugen has no plans for monetization beyond donations and running instances for interested users.
While I highly respect Eugen's technical abilities and drive and determination to build such an ambitious product on top of ActivityPub, I believe the vision is flawed.

If mastodon is to be the poster child of the fediverse it needs to drastically simplify the requirements to run and maintain an instance.
There should be a single binary, self-updating, single-user instance.

Instead Mastodon is going in the exact opposite direction.
The Mastodon company has fewer than 10 employees and is moving the largest mastodon instance to Kubernetes.
They claim this will solve their scaling problems, maybe it will; but I would argue it will make the ability to run your own instance much harder—and I've been working with Kubernetes for 8 years.

There are a few community run instances that run on Kubernetes already, but only because the admins were already familiar with it.
If you want people to run their own instances it needs to be App Store simple.

Will there be simpler and cheaper options?
I don't think so.
Mastodon growth is already starting to plateau.
All of the 3rd party integrations are happening with ActivityPub, not Mastodon. 

There are lots of companies investing time to integrate with ActivityPub.
But almost every integration is a status/blog/picture update mechanism.
It's a more expensive and questionably better RSS.

Is Tumblr going to save Mastodon? No.
But Tumblr posts and comments will be consumable at toots.

It has nothing to do with data ownership, identity portability, or federated networks.
The ideals of Mastodon and the fediverse will be lost once established products use it.

The Mastodon people hoped for is doomed.

---

Mastodon will continue as a niche community and it will have lots of happy users.
I'm greatful for the admins that have dedicated so much of their time running instances, and thank you to the admins who shared their instance financial information.

If you love Mastodon I'm happy for you.
The internet needs bold bets and people to invest in them.
