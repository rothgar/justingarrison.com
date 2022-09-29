+++
title = "Speed up Homebrew installs by 80%"
description = "Using a single environment variable increases download speed by as much as 80%"
date = 2022-08-29T01:21:24-07:00
image = "https://justingarrison.com/img/homebrew-banner.jpg"
draft = true
+++

![](../../img/homebrew-banner.jpg)

---

tl;dr if your not developing Homebrew you should set the following environment variable and your initial install download will be up to 90% faster.

```bash
export HOMEBREW_INSTALL_FROM_API=1
```

This setting will likely become the default in a future release.

---

I was setting up a new computer with Ubuntu 22.04 and one of the first things I do is install [Homebrew](https://brew.sh).
As I was installing it it was downloading excrutiating slow.
Specifically, the git clone of the homebrew repo was taking a long time to download.

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

The repo is more than 400 MB in size and downloads were going at less than 50 KiB/s.
I knew it was cloning from GitHub so I figured there was something I could do to make it faster.
