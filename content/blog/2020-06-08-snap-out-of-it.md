---
author: "Hugo Authors"
title: "Snap out of it"
date: 2020-06-08
description: "How to uninstall and block snapd on Ubuntu"
tags: ["shortcodes", "privacy"]
thumbnail: /img/snap-banner.jpg 
images: [/img/snap-banner.jpg]
---

There has been a lot of bad news about snap recently. I’m not a fan, and it looks like [other people](https://jatan.blog/2020/05/02/ubuntu-snap-obsession-has-snapped-me-off-of-it/) are [speaking out](https://techtudor.blogspot.com/2020/06/four-reasons-why-snaps-are-anti-pattern.html) too. Linux Mint has even decided to [drop snap](https://www.zdnet.com/article/linux-mint-dumps-ubuntu-snap/) altogether.

If you’re looking to drop snap here’s how to make sure it stays off your system.

First check if you have any snaps installed. If you do you should write them down and try installing them with apt.

```
snap list
No snaps are installed yet. Try 'snap install hello-world'.
```

Now you’re ready to remove snapd

```
sudo apt remove --purge snapd gnome-software-plugin-snap
```

Once it’s removed you can block it from being reinstalled via apt.

```
sudo cat << EOF > /etc/apt/preferences.d/snapd
Package: snapd
Pin: origin *
Pin-Priority: -1
EOF
```

After you have blocked it if you try to install it again (or another package tries to install it via a dependency) you’ll see the following message.

```
sudo apt install snapd               
Reading package lists... Done
Building dependency tree       
Reading state information... Done
Package snapd is not available, but is referred to by another package.
This may mean that the package is missing, has been obsoleted, or
is only available from another source

E: Package 'snapd' has no installation candidate
```

Ubuntu devs, please remove snapd from being installed by default and let users opt-in to using it if they want. Don’t play tricks with empty packages to drive adoption of your proprietary technology, or require users to [use debian repos to install packages without snapd](https://askubuntu.com/a/1206502).
