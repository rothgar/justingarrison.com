---
author: "Hugo Authors"
title: "GitHub URL Hacks"
date: 2021-07-11
description: "A brief description of Hugo Shortcodes"
tags: ["shortcodes", "privacy"]
thumbnail: https://picsum.photos/id/1002/400/250
---

![3d printed GitHub Octocat](https://d33wubrfki0l68.cloudfront.net/c29d0c185426842fa27bca13dee75c2c4457f9a8/ff26b/img/octocat-banner.jpg)

Photo by [Roman Synkevych](https://unsplash.com/@synkevych?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/s/photos/github?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)

GitHub’s UI has improved a lot over the years but sometimes you just need quick access without clicking. Here are a few GitHub URL tips to get you data you want faster. One cool thing is all of these tips give raw text output so they work great with `curl` and other CLI tools.

## Public SSH keys

If you want to get a users public ssh keys you can add `.keys` to the end of their user profile URL. Here’s mine.

https://github.com/rothgar.keys

## Profile image

If you want to get a user’s profile picture you can add `.png` to the end of their user profile URL.

https://github.com/rothgar.png

## Public GPG keys

If you want to get gpg public keys you can add `.gpg` to the end of their user profile URL. I don’t actually have any gpg keys so you can see what it looks like if a user doesn’t have them with my profile.

https://github.com/rothgar.gpg

## RSS feeds

There are lots of different feeds you can subscribe to.

Repo commits

https://github.com/$USER/$REPO/commits.atom

Repo releases

https://github.com/$USER/$REPO/releases.atom

Repo tags

https://github.com/$USER/$REPO/tags.atom

### User feeds

Public RSS feed will show public user activity. Repo stars, releases, etc.

https://github.com/rothgar.atom

There’s also a private user feed which is great if you don’t log into GitHub often.

It requires you to click in the UI, but I still find it incredibly useful. Log in to your account and on your dashboard scroll all the way to the bottom and click “Subscribe to your news feed”. This will generate a private token automatically and send you to `https://github.com/$USER.private.atom?token=...`

You can plug this directly into an RSS reader and it’ll include everything that normally shows up on your private dashboard feed. Repos and users you follow, project releases, and more.

![picture of subscribe button](https://d33wubrfki0l68.cloudfront.net/80cacff1e588cd472671763c07ec7c5ea0856e45/cab08/img/github-private-feed.png)

### Security advisories

This is a public RSS feed for GitHub security advisories.

https://github.com/security-advisories.atom

### Global timeline

https://github.com/timeline

## Diffs

You can diff branches in a repo by adding `/compare/[fork-user:]$BRANCH...$BRANCH` to the end of a repo url.

If you want to compare a `dev` branch to the `main` branch for my bashScheduler you can check out.

https://github.com/rothgar/bashScheduler/compare/main...dev

If you had a fork of the repo you could add your username before `main` like this.

https://github.com/rothgar/bashScheduler/compare/$USER:main...dev

The cool thing is you can get a raw patch or diff output using the same url and adding `.patch` and `.diff` to the end.

https://github.com/rothgar/bashScheduler/compare/main...dev.patch

https://github.com/rothgar/bashScheduler/compare/main...dev.diff

If I missed any cool URL tricks please let me know on [Twitter](https://twitter.com/rothgar). You can find a ton of other cool GitHub tricks in this [github-cheat-sheet repo](https://github.com/tiimgreen/github-cheat-sheet).
