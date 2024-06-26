---
title: "Launch Flatpak apps easily from your terminal"
description: "How to make it easier to launch command line utilities and GUI applications installed with flatpak"
date: 2023-03-19T21:53:18-07:00
images: [/img/flatpak-terminal-banner.jpg]
thumbnail: /img/flatpak-terminal-banner.jpg
draft: false
---
Flatpak might be a great portable, secure packaging format, but it's not the most user friendly tool.
There are plenty of downsides to flatpak apps, but it is increasingly the most ubiquitous Linux packaging format.

One thing that is difficult with flatpack is launching applications from the terminal.
Currently the only official way to launch an app is with:

```
flatpak run APP_FQDN
```

Application fully qualified names are usually some form of a reverse domain name where the application is hosted or the developer who created it.
Examples include:

* com.spotify.Client
* org.kde.krita
* com.visualstudio.code

And they're never memorable.

There is a [feature request](https://github.com/flatpak/flatpak/issues/4109) to make apps easier to launch from a terminal.
Unfortunately, flatpak ideals often get in the way of user friendliness.

To make launching the latest version of apps easier you can add `/var/lib/flatpak/exports/bin` to your `PATH` but then you still need to remember the full application name.
You can `alias spotify='com.spotify.Client'` but if the Spotify client isn't installed your command will give an error.

```
no such file or directory: /var/lib/flatpak/exports/bin/com.spotify.Client
```

An easier way to create a shortcut is to symlink the desired command name to the flatpak export.
Create the symlink in a folder already in your `PATH` to avoid getting tab completions with a bunch of `org` and `com` commands.

```
ln -s /var/lib/flatpak/exports/bin/com.visualstudio.com $HOME/.local/bin/code
```

The symlink can always exist, but if the target file does not exist your shell should be smart enough to not execute or tab complete it.

