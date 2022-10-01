---
author: "Hugo Authors"
title: "Devops vs SRE"
date: 2022-08-30
description: "Should you be doing Devops or SRE? The answer is yes!"
tags: ["shortcodes", "privacy"]
thumbnail: /img/devops-vs-sre-banner.jpg
images:
- /img/devops-vs-sre-banner.jpg
---

I hosted a Twitter space to discuss the differences between devops and Site Reliability Engineering (SRE). It was very insightful and I was lucky to have amazing guests [Liz Fong-Jones](https://twitter.com/lizthegrey) and [Emily Freeman](https://twitter.com/lizthegrey) who I learned a lot from.

If you have the time available you should listen to it here. https://twitter.com/i/spaces/1BdGYwZvaByxX

If you don’t have the time, here’s a summary.

My first observation was that devops—in its intended form—required an org chart that was decentralized. SRE took an exact opposite approach and centralized the responsibility of reliability in a role. Sometimes SRE roles work on product teams, but they often report to a central SRE org and not the team manager.

For years the devops community fought, and lost, the battle to keep “devops” out of job titles. It wasn’t a single person’s responsibility to create a culture that fostered learning and full application life cycle responsibility.

Devops requires companies to work inefficiently because you have a lot of role duplication on teams, but you gain in speed and flexibility in team ownership. Devops jobs became new names for sysadmins, Jenkins administers, and occasionally a permanent member of an application team.


{{< twitter_simple user="rothgar" id="1561073602832650241" >}}



Along came SRE—straight out of Google. SRE was easier to adopt for a lot of organizations because the reporting structure and centralization of expertise already existed in most large organizations. It’s harder to restructure an organization to allow self-sustaining, independent teams (i.e. devops) than it is to change the expertise on existing team structures (i.e. SRE).

### Space notes

Liz and Emily both brought up some great questions and observations about each option. Here are some of my highlights from the space.

Shifting things left to be addressed earlier in development doesn’t work for everything. DevSecOps tries to bring security into the early development cycle, but if you shift everything left you just end up with a pile with so much you can’t move forward. You need to be selective with what is important early on.

“Debt is an investment. You take on debt to generate value and when you have sufficient value you begin to pay down the debt.” - Liz

Blurring the line between pre/post production and allowing developers to work more safely in production is a good thing. Don’t spend infinite amount of time or money trying to make test environments look exactly like production.

More teams and roles are having software development problems the more they use software defined infrastructure. Examples of network engineers now deploying VPCs instead of physical switches.

Both structures need to focus on sustainability and need a voice at the executive level. If your company doesn’t have a director or executive level IC path then you won’t be able to help make decisions at that level. The most critical of which is how the org is structured.

Platform teams focus on UX and defaults for development teams. They are centralized for good and bad reasons. It allows for easier sharing between teams, developer on-boarding, and helping teams learn and apply lessons from others. Platform teams need internal developer advocates.

Mandated platforms are not successful.
