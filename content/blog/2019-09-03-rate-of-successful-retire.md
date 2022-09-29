---
author: "Hugo Authors"
title: "Rate of Successful Retire"
date: 2019-05-29
description: "Rate of Successful Retire"
tags: ["shortcodes", "privacy"]
thumbnail: /img/retire-banner.jpg
---

> The only sustainable competitive advantage is an organization’s ability to learn faster than the competition. – Peter Senge

I think about how companies get a competitive advantage a lot. While I agree with the above statement I don’t think it’s enough.

I’ve worked long enough to know learning something isn’t the thing that gives you a competitive advantage. Acting on what you’ve learned is where the real value lies.

I’ve seen organizations learn things at the micro (individuals) and macro (divisions) levels and still fail at executing. Sometimes it doesn’t matter if you know the right thing to do. If you can’t execute on the new thing you’ve learned then it would have been better for you to never know it.

It’s also important to not limit where ideas come from. To quote Ratatouille “Anyone can cook” is the idea that great cooks can come from anywhere, but that’s a story for a different post.

The thing you have learned will be a worm in your brain that will eat away at every decision you make until you can do the right thing.

Rate of new features or time from learning to execution could be a better measurement for innovation at a company, but that incentivizes the wrong things. If you look at “high performers” in the [State of DevOps Report](https://cloud.google.com/devops/) you’ll see time to deployment is only part of the equation. Short mean time to recovery (MTTR) also plays a huge part in what makes a “high performer.”

Measuring how fast you can act on ideas pushes you to learn and produce things as quickly as possible. Throwing things at the wall to see what sticks. Learning from the things that stick and then adding to them.

The problem with this is all the stuff that didn’t stick is going to leave you with a lot of insurmountable crap you have to get over. If you keep throwing things at the wall more and more won’t stick over time.

This is the point where companies pivot and start throwing things at a new wall/industry with a little more knowledge of where to start.

Sometimes that’s okay.

You can just leave all the old stuff behind. Light it on fire and walk away.

This tends to work well for companies that are strictly project based and not product based (usually non-software companies). Companies that make physical products or things like movies can more easily start anew with each endeavor.

Businesses with sustained products don’t have that luxury, nor do companies with recurring, paying customers. They have to support their existing customers on their existing wall even if it’s now 3⁄4 covered with crap that didn’t stick. Disrupting your own customers is the essence of *The Innovator’s Dilemma*.

What could be a better measurement for tracking innovation?

What is actually important is how fast you can clean up all the stuff that didn’t stick. In other words, how fast you can successfully retire things.

Retiring things successfully is a lot of work. You can’t just turn something off or stop supporting it.

To be successful you have to measure usage, update code, or change processes. In most cases (when you have customers) you also need something to replace the old thing.

If you had a process that no longer serves the business needs at its current scale how long will it take you to replace that process with something that is more suitable for your current needs? Even if you have a replacement, how quickly will it be adopted and the old process retired?

What about retiring a v1 API path? How many people do you have to communicate that to? How many clients and lines of code do you have to update before you can delete that path? Do you need to push out code changes to gain insights into usage?

Companies that learn the fastest can move faster than others only up to a point. Sooner or later all the things you’ve learned don’t scale. All the things you’ve learned become a human scaling problem.

You have to shed to scale. The faster you can shed old learnings the faster you can act on new ones.

If you just turn things off you’ll lose trust. You need to make sure people are ready to accept the new things. This means bringing the laggards along with you or forcing them to go somewhere else, if that’s an option.

Being too early is the same thing as being wrong. This is why measuring a “successful retire” is important.

So how can you successfully retire things? There’s only two ways I’ve found.

1. You force people to do work
2. You do the work for them

Users hate number 1. Owners hate number 2.

Doing the work for your users is often faster and makes your users like you more. It also can’t always be done and often leaves systems fragile or unchangable in the future.

Making users do work is slower and cannot be done often. If you keep pushing work onto your users the service/process/thing you offer won’t solve their problems and they’ll leave, assuming they can.

Both approaches need a balance. Knowing which one to choose requires you to learn about your users and the thing you want to retire.

Imagine we want to change a process to request access to cloud resources. Let’s pretend our current process requires opening a Jira ticket with a template and then evaluating and manually acting on that information.

Can you, the owner of the process, do the work for your users? Yes. You could automate the manual work you have to do after a ticket has been opened. This will save you a ton of time and require no work from your users.

Maybe your users want to also save some time so they create a script that opens tickets when new people are hired. Great, but now we have two automated systems using Jira as a queuing system Trust me, this happens.

It would save time on both sides to create a new process and ask users to do work to learn/use it instead. Now that automation exists the process is much harder to change and will require work.

The company who can understand their users and what things no longer serve their purpose the better they will be at innovating. The faster they can get rid of the things holding them back the faster they can move forward.

Balance is important. If you get rid of things too fast you’ll end up with [no customer trust](https://killedbygoogle.com/) and new walls will be incredibly difficult to get things to stick.

The only sustainable way to learn is from data. You can sometimes use existing data, but if you expect to grow you need to change. Change requires new data and new hypotheses.

Measure. Test. Retire. Repeat.

Free yourself from the old things you’ve learned. At some point you have to.

Innovative companies will do this at the right time and in the right way repeatedly. Companies that don’t sunset old services will eventually hit limits (usually with people) and become fragile.

Or maybe we’ll find new ways to organize people and none of this matters.
