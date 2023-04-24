---
title: "Mastodon Is Doomed"
description: "Mastodon's MySpace moment happened before it even got started"
date: 2023-04-04T22:50:52-07:00
images: [/img/mastodon-doomed-banner.png]
thumbnail: /img/mastodon-doomed-banner.png
draft: true
---

Mastodon is a free and open source microblogging software that many people have believed would be the next Twitter.
Because it is open source and built on the ActivityPub protocol you can run your own instance or join one of the existing servers to find your ideal community.
The "fediverse" claims to be community owned, decentralized, and ad-free.
It also lets you "own your own data" in direct oposition to the existing social media platforms.

But none of that actually matters.

All of those "features" come with with a heavy price.
Running your own instance is increadibly time consuming and difficult to understand how to secure and scale.
It also can be quite expensive if it grows to any meaningful amount of use.

Even choosing a server can be a task too difficult for the general public.
Selecting a username can be difficult enough, deciding which community you want as part of your identity—even if it's temporary—is too much for many

Not to mention you may end up on a server that isn't secure, has trouble scaling, or shuts down for a variety of other reasons.
For example [mastodon.technology shut down because of instability](https://ashfurrow.com/blog/mastodon-technology-shutdown/) and mastodon.lol [shut down because of Harry Potter](https://mastodon.lol/@nathan/109836633022272265).

Even one of the best run instances at [hachyderm.io](https://community.hachyderm.io/blog/2022/12/03/leaving-the-basement/) had trouble scaling last year with 30,000 users and over $5000 worth of equipment.
They were able to migrate over a terabyte of data to Digital Ocean and use their CDN at no cost which kept them afloat and not something most other instances will be able to do.
They have been open about their incidents but I wouldn't trust most instances to have similar transparency or good operational hygine.

Beyond scaling concerns is the legal responsibility.
If you host an instance for other people you should be prepared to invest time documenting and training moderators or shut down like [The Financial Times](https://www.techdirt.com/2023/02/01/financial-times-sets-up-mastodon-server-realizes-laws-exist-which-it-was-already-subject-to-pulls-down-mastodon-server/).
As [Nilay Patel](https://www.theverge.com/authors/nilay-patel) from The Verge notes, moderation is the feature social networks sell.

I predict within the next 18 months there will be a remote code execution bug found in Mastodon server code which will leave at least 40% of instances vulnerable to attack.
This will be a wakeup call to administrators that the benefits of ownership are not worth the time investment.
Just like Wordpress from the 2010s, many instances will be abandoned or never upgraded to be taken over by hackers.

Like Wordpress the best way to use Mastodon is to pay a company to run it for you.
And similar to all of the abandoned blogs, Mastodon instances will fail to get updated for months at a time until individuals decide it's not worth the $10 per month.

But of course you can run your own server.
Just like you can run your own email server.
And you will be blocked from the broader public discorse just the same.

The only way I can see running your own server worth while is with a simplified or serverless option like [Cloudflare's Wildebeest](https://github.com/cloudflare/wildebeest).

Mastodon company has roughly 8 employees and is moving the largest mastodon instance (mastodon.social) to Kubernetes https://www.linkedin.com/search/results/people/?currentCompany=%5B%2274177417%22%5D&origin=COMPANY_PAGE_CANNED_SEARCH&sid=mS%29
https://www.theverge.com/23658648/mastodon-ceo-twitter-interview-elon-musk-twitter

