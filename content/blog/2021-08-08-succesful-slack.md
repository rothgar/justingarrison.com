---
title: Successful Slack
description: Tips for using Slack in a work environment.
date: 2021-08-08T00:15:00-07:00
image: https://justingarrison.com/img/slack-banner.png
---
![a picture with the slack logo](../../img/slack-banner.png)

Slack is a major part of how we communicate at work.
If you still think it's just about chat then chances are you're using it wrong.
Other collaboration tools exist and some have similar features but Slack is the dominant choice.

After using Slack, and similar collaboration focused tools, in multiple jobs here are some practices I've found that will make it better for everyone.
Some of these tips work best in a remote-first, asynchronous environments, but many of them apply to fully co-located teams and companies as well.

There are a lot of different use cases for Slack and these tips aren't for your specific love for IRC or disdain for electron apps.
I'm not going to embark on a "use threads" holy war, but these tips are beneficial for your organization globally and not just you individually.

## How to use Slack

General practices that have helped me

* Close Slack or use `/dnd` if you need to focus
* Don't install it on your phone if you don't have to
* Move to a `/call` as soon as you've spent 10 minutes on a topic or need clarity
* Slack isn't email and shouldn't be used as a replacement for email

Some things need to be agreed upon at a company or team level.
If your team has any of these practices make sure you write them down (outside of slack).
New hires won't know the team norms and a quick wiki entry will help keep expectations consistent.

### Use statuses

If there's one practice you should learn it's to use statuses to provide current, passive information.
**Don't** set an emoji as a permanent status because you like the picture next to your name.
You have no idea how many people will hover over your status only to find it's not useful.
It erodes trust which makes statuses less useful for people who actually use them.
This doesn't apply for a community workspace where expectations are drastically different.

![a status message without any text](../../img/slack-bad-status.png)

A status should be current, passive information for everyone to see.
It's better than sending a message to a team channel because:

* Not everyone will see your message
* Not everyone is in that channel
* People forget what you said and won't scroll back
* Statuses can be seen in all channels, your profile, and the side bar

If you can, automate status messages.
There are [calendar integrations](https://slack.com/slack-tips/sync-your-slack-status-with-your-calendar) and commands like `/call` will automatically set your status while you're on a call.
I've written automation with CLI tools, [Microsoft Power Automate](https://flow.microsoft.com/en-us/) and voice assistant apps via [Voiceflow](https://www.voiceflow.com/) to help with this in the past.

Here are some examples of helpful status messages:

* `/status :palm_tree: on vacation until 8/20`
* `/status :headphones: working with slack closed`
* `/status :airplane: traveling- txt for urgent requests XXX-XXX-XXXX`
* `/status :pizza: lunch until 1300 PT` - I like to set my emoji to whatever I'm eating that day

All of those status messages can give the same type of passive information someone would get if you worked in the same physical office together.
If your company has multiple locations or hybrid work environment I've also had great success with adding custom emoji for each location or special WFH emoji.

You should also use reaction emoji for passive acknowledgement.
A quick :eyes: or :white_check_mark: can help everyone know you're looking into an issue or understand what needs to be done.
You can send an emoji reaction to the last message with `+:emoji:`.

### Set up your profile

At minimum your profile should have your time zone, profile picture, and name.
It's cute to use a handle, but not approachable or friendly for people who don't know you.
Your time zone is needed for functionality like delay send and a time zone will show other people your local time when they click on your profile which will help them know what to expect for a response time.

Even if your company is located in the same time zone it is passive information you can provide that can help as your company grows or when people travel.
Get in the practice of doing these things early.

Profile pictures don't _have_ to be of you.
It is not always comfortable for people to have a picture of themselves in chat or it may not be safe for them to do so.
Having a unique picture of your pet or something you like is still more useful than the randomly generated default avatars.

Seeing a picture of you helps a lot of people know who they're talking to and remember that you're a real person—empathy is easily forgotten.
It also helps for people who have never met you in person because maybe there are two Justin Garrison's at the company and it's hard to track down which one is you in the company directory.
A consistent picture can save people a lot of time.

![slack profile picture for Justin Garrison](../../img/slack-profile.png)

### You are responsible for your notifications

People should not abuse `@here` or `@channel` messages in any large channel.
If it's used too often it becomes useless as people ignore the messages.

However, you're responsible for setting up your notifications for your personal preferences, to effectively let you do your job (e.g. if you're on call), and to keep a healthy work life balance.
If you are able to disable all notifications and still be effective at your job and communicate in a timely manner I highly recommend it.

When your company is large enough there will be someone awake and in Slack 24/7.
Some people are in different time zones and on completely different days.
Other people need to work different hours to take care of sick family or children.

They should be considerate of your local time and use [delay send](https://slack.com/help/articles/1500012915082-Schedule-messages-to-send-later) if possible, but it's still your responsibility to disable push notifications if you don't want to get them.
If the message doesn't require an immediate response it's better to send an email.

If you see a message but cannot respond right now or it doesn't need an immediate reply use [reminders](https://slack.com/help/articles/208423427-Set-a-reminder).
These can be generic reminders to `/remind follow-up with Sarah` or they can be message reminders for specific messages.
The best feature of reminders for me is the fact that you can snooze them for later.
On busy weeks I'll get 5+ reminders Monday morning and I can pick which are urgent and snooze the rest.

### You are responsible for your messages

Slack is not a permanent knowledge repository and you should not assume everyone has seen every one of your messages.
Messages are ephemeral and if you need a permanent record of a decision or want people to think about a topic it should be written down somewhere else.

Email is good for asynchronous, long form communication but it's a terrible permanent record because it's usually not searchable for new hires and company retention policies might be short.
You need another knowledge repository for place where people can think asynchronously and [slowly](https://www.amazon.com/Thinking-Fast-Slow-Daniel-Kahneman/dp/0374533555) and reference it weeks or years later.
I'm a fan of [Hashicorp's RFC process](https://works.hashicorp.com/articles/writing-practices-and-culture).

Yes, Slack has a search and it works.
You cannot expect a new hire to know what to search for or even what channels to be in.

If you ask someone to do something and they do not acknowledge the message it is **your responsibility** to follow up with them and make sure they got the message and understand.

### Channel tips and organization

Channels should be named in a way that make sense to your company.
Team channels, product channels, support channels, and water cooler channels are all pretty normal and you can figure out the best way to name them.

{{< tweet 1296935387399467008 >}}

Make sure each channel has a description of what it is used for.
New people to the channel or new hires don't know the social norms and having a description will quickly let them understand what they should put there instead of watching behavior and trying to figure it out on their own.

You should also pin important channel messages.
Even if you think everyone knows about a link or topic you need to think about the person that starts in 6 months.
I guarantee they won't know and having a few pinned messages can help.

If you need to talk to multiple people try to use relevant public channels first.
You never know who else might be interested or have valuable insights into what you're talking about.
It can also help spread knowledge faster because there's a chance more people have context on what you're saying.

If you need to talk in private try to use a private channel instead of a group DM.
Private channels can `/invite` more people if necessary but group DMs lose chat history as people are added.
Group DMs also cannot be organized and you'll end up with 10 different rooms with ±2 people and it sucks trying to find the right set of people.

Don't flood discussion channels with automated bots or alerts.
There's nothing worse than having an important conversation interrupted with 5 random bot messages.
Keep separate, opt-in channels for bots and automated feeds (e.g. RSS).

## Conclusion

Slack is a tool that can be used very poorly or can help you more effectively communicate with coworkers in the same building or on the other side of the world.
Think about your usage patterns and how they might exclude people unintentionally.
Think about people not online and reading slack right now or people that will start in 6 months.
Think about people who use screen readers or are neurodivergent and how your behavior might impact their effectiveness to work.

If you understand other people have different personal preferences for how they use Slack and set expectations appropriately you can use it much more effectively.

