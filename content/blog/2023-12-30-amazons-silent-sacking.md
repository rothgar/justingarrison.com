---
title: "Amazon's Silent Sacking"
description: "Companies are fighting back for quiet quitting and it's having a big impact."
date: 2023-12-30T07:29:31Z
images: [/img/amazons-silent-sacking-banner.jpg]
thumbnail: /img/amazons-silent-sacking-banner.jpg
draft: false
---
*This is not financial advice and I am not an expert.*

Amazon has a stock problem.
It’s not only Amazon, but they have more to lose.
If you’re a customer, that’s going to be bad for your business too.

In 2023 Amazon laid off more than 27,000 people.
While that’s a big number it’s a deceptively small percentage for a company with more than 1.6 million employees (1.7%).

The vast majority of those layoffs happened in retail where a majority of Amazon’s employees work.
When layoffs [hit AWS](https://www.businessinsider.com/amazon-layoffs) it was mostly areas that were not revenue generating or had lower margins.

But publicly laying off 27,000 isn’t good for business–at least not immediately.

![A graph of Amazon's stock price](/img/amazon-stock-graph-2023.jpg)

The low stock at the beginning of the year is before the mass layoffs when operating expenses were high.
Then Andy [announced return to office (RTO) initiatives](https://www.aboutamazon.com/news/company-news/andy-jassy-update-on-amazon-return-to-office), but nothing changed.

I was told repeatedly it wouldn’t affect me or the teams I worked with.
Then in the summer that changed.

The negative press associated with layoffs wasn’t good.
But the most effective way to reduce operational expenses was to get rid of all the expensive people.
How could they force people to leave without severance packages or en masse?
Making them miserable and silently sacking them.

So RTO was enforced.
And people started leaving in droves.
If they weren’t leaving they were looking, or at minimum waiting for their next RSU payout.

In my small sphere of people there wasn’t a single person under an L7 that didn’t want out.
From what I could gather this mostly came down to compensation.

Independent contributors (IC) and managers that are L7 or above generally make $400k-$800k and for that much money they’re willing to put up with some inconveniences.
Since Amazon’s pay is roughly 40% stock, they only make that much money so long as the stock stays up.

If Amazon keeps lowering their operating costs their earnings go up and stock rises.
At the cost of burning out everyone doing the work.

## Welcome to Day 2

As customers are cutting their own costs, $1 spent on AWS is worth less than it was last year.
Every trend line still goes up and to the right, but growth is slowing.

Customers aren’t coming to the cloud for VMs and ludicrously expensive network anymore.
They want higher levels of abstraction that AWS has historically been terrible at delivering.

Couple that with [Amazon trailing in AI](https://www.lastweekinaws.com/blog/aws-degenerative-ai-blunder/) and the most effective way Amazon can grow is by reducing costs.
The biggest cost is people.

Many teams at Amazon have been in a hiring freeze for over a year.
And now they’re chasing away the people they do have.

Amazon has shifted from a leader to a follower.
From my perspective it’s not going well.

Amazon hasn’t put in the decade of AI research Google has.
It doesn’t partner with external companies as good as Microsoft.
The high margin services AWS was built on (e.g. network egress) is being [given away for free](https://www.cloudflare.com/developer-platform/r2/) by competitors.

Amazon is good at identifying real world problems they’ve faced from running an extremely large online store and logistics.
Generative AI hasn’t been a problem Amazon has identified needed to be fixed (or even deeply worked on) until it was costing them business deals.

## No more pizza teams

When I started at Amazon I was impressed that service teams were independent.
It was the [purest implementation of devops](https://martinfowler.com/bliki/TwoPizzaTeam.html) I had never seen before.
Especially at Amazon’s scale.

Then I realized how expensive it is.
There are only a handful of centralized teams at Amazon.
Those are almost all tools and compliance teams.

Pipelines, SDKs, and security are centralized.
All components of a service team are self-contained as part of that team.
It turns out that devops is a very expensive org chart.

Many of the service teams have lost a lot of institutional knowledge as part of RTO.
Teams were lean before 2023, now they’re emaciated.

Teams can’t keep innovating when they’re just trying to keep the lights on.
They can’t maintain on-call schedules without the ability to take vacation or sick days.

The next logical step to reduce costs is to centralize expertise.
It's the reason many large companies have database administration, network engineering, or platform teams.

They’ll have to give up on autonomy to reduce duplication.
Amazon has never had a platform engineering team or site reliability engineers (SRE).
I suspect in 2024 they’ll start to reorg into a more centralized friendly org chart.

They won’t call the teams that because those titles come from Google, but they’ll effectively be the same.
They’ll centralize to create “better collaboration” but in reality it’ll be because they can’t lower margins enough to keep their earnings calls positive.

## Outages ahead

I suspect there’ll be a major AWS outage in 2024.
No amount of multi-region redundancy will protect you.

There has already been [an increase in large scale events (LSE) throughout Amazon](https://www.linkedin.com/posts/brucebawest_the-new-frequency-of-large-scale-events-at-activity-7109656617100484608-uGmJ), but AWS is so big most customers don’t notice.
This is a direct result of RTO and Amazon’s silent sacking of thousands of people.

Amazon isn’t incentivized to publicly share LSEs.
Only outages customers notice are worthy of a dashboard update, but even those are quickly swept under the “all greens” dashboard.

Amazon is an operationally strong company.
Much stronger than any company I’ve worked for before.

But those operational practices depend on people.
When people are eliminated to raise the stock price bar, operational practices suffer.

## Amazon won’t fire me

On September 1st, 2023 I was told by my skip level manager and VP that my team and an adjacent team were being eliminated.
They claimed we all did such good work that they wanted us to remain at Amazon.
"We still have a job, just not a role."

I was skeptical of how it was communicated–or rather not communicated–by management and I asked if severance was an option.
I was repeatedly told it would be once we’d exhausted other options.

They told us our number one priority was to find another job.
Every role we found had significant downsides.
Lower pay, lower title, RTO, or various other things.

It was clear they wanted us to take a different role we could quit later.
My management wanted to retain the headcount, but couldn't do layoffs.

October 16th I asked my VP for the severance I was told would be available.
He let me know HR wasn't aware of what he was doing and he would have to get approval.
It would take some time.

Every week for the next 2 1/2 months I asked for an update on my employment and severance package.
I was either ghosted or given a variety of excuses.
It's now December 30th and I'm currently still employed by Amazon.

It hasn't only been happening to my team.
This has been happening in multiple areas as Amazon silently sacks people without being required to give them severance or announce layoffs.
I've heard similar tactics being used at other companies–mostly large companies–and it'll only continue in 2024 as they make decisions that drive short term profits over all else.
