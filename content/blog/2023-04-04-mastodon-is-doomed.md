---
title: "Mastodon Is Doomed"
description: "Mastodon's MySpace moment happened before it even got started"
date: 2023-04-04T22:50:52-07:00
images: [/img/mastodon-doomed-banner.png]
thumbnail: /img/mastodon-doomed-banner.png
draft: true
---

Mastodon is free and open source microblogging software that many people believe will be the next Twitter.
Because it is open source and built on the [ActivityPub protocol](https://activitypub.rocks/) you can run your own instance or join one of the existing servers to find your community.
The "fediverse" claims to be community owned, decentralized, and ad-free.
It also lets you "own your own data" in direct oposition to the existing social media platforms.

But none of that actually matters.

All of those "features" come with with a heavy price—responsibility.
Running your own instance is increadibly time consuming and difficult to understand how to secure and scale.
It also can be quite expensive if it grows to any meaningful amount of use.

Selecting a username can be difficult enough, deciding which community you want as part of your identity—even if you can change it—is too much for many
The act of choosing a server has kept more than a few people away from Mastodon.

Hopefully you don't end up on a server that isn't secure, has trouble scaling, or shuts down for a variety of other reasons.
For example [mastodon.technology shut down because of instability](https://ashfurrow.com/blog/mastodon-technology-shutdown/) and mastodon.lol [shut down because of Harry Potter](https://mastodon.lol/@nathan/109836633022272265).
One thing to know about ActivityPub is if you want to move your data to a new instance, the old one has to exist.

Even one of the best run instances at [hachyderm.io](https://community.hachyderm.io/blog/2022/12/03/leaving-the-basement/) had trouble scaling last year with 30,000 users and over $5000 worth of equipment.
They were able to migrate over a terabyte of data to Digital Ocean which kept them afloat, but at a cost not many can afford.

Beyond scaling concerns is the legal responsibility.
If you host an instance for other people you should be prepared to invest time documenting and training moderators or shut down like [The Financial Times](https://www.techdirt.com/2023/02/01/financial-times-sets-up-mastodon-server-realizes-laws-exist-which-it-was-already-subject-to-pulls-down-mastodon-server/).
As [Nilay Patel](https://www.theverge.com/authors/nilay-patel) from The Verge notes, [moderation is the feature social networks sell](https://www.theverge.com/2023/4/20/23689570/activitypub-protocol-standard-social-network).

It's only a matter of time until there will be a CVE found in the official Mastodon server which will leave a vast majority of instances vulnerable.
This will be a wakeup call to administrators that the benefits of ownership are not worth the time investment.
Even for single user instances.

Administrators are not paid for their work, and very few instances have plans to continue operating if a single person leaves, runs out of money, or loses interest.
Just like Wordpress from the 2010s, many instances will be abandoned or never upgraded to be taken over by hackers.

Like Wordpress, the best way to use Mastodon is to pay a company to run it for you.
And similar to all of the abandoned blogs, Mastodon instances will fail to get updated for months at a time until individuals decide it's not worth the $10 per month.

I [asked some of the largest instance admins](https://mastodon.social/@jgarr/110232731615869211) to share how much it cost to run their instances on a per account and per monthly active user (MAU) basis.
On average it cost $.0076 per registered account and $.041 per MAU.
That may seem cheap, but if Mastodon ever hopes to grow into the millions of MAU or have any celebrities join their platforms admins are going to be paying thousands or tens of thousands per month.
As volunteers.
With no income potential.
They also will be trusted with user's private keys and unencrypted DMs.

The financial and trust models of Mastodon just don't add up.

You can, of course, run your own server.
Just like you can run your own email server.
And you will be blocked from the broader public discorse just the same.
There will be no way for large instances to trust and allow every individual instance.
The moderation work will be too much and they'll end up trusting only other large instances.

If you've never had the pleasure of running a ruby on rails app with Postgres database I'm sure you'll learn a lot about running apps from 10 years ago.
It makes me miss the sidekick phone from 20 years ago.

The only way I would suggest running a server is with a serverless option like [Cloudflare's Wildebeest](https://github.com/cloudflare/wildebeest).
It's not without problems, but I bet the MAU cost and ongoing maintenance is much lower.

To me, the final nail in the Mastodon coffin came from a [Decoder podcast interview](https://www.theverge.com/23658648/mastodon-ceo-twitter-interview-elon-musk-twitter) with Eugen Rochko, the CEO of Mastodon.
Throughout the interview it's clear that Eugen has no plans for monotization and  

Mastodon company has roughly 8 employees and is moving the largest mastodon instance (mastodon.social) to Kubernetes https://www.linkedin.com/search/results/people/?currentCompany=%5B%2274177417%22%5D&origin=COMPANY_PAGE_CANNED_SEARCH&sid=mS%29


