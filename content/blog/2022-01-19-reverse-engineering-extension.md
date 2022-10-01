---
author: "Hugo Authors"
title: "Reverse engineering a chrome extension"
date: 2022-01-19
description: "Finding hidden APIs for fun and flexibility"
tags: ["shortcodes", "privacy"]
thumbnail: /img/revue-banner.png 
images: [/img/revue-banner.png]
---

I’ve been using [Revue](https://www.getrevue.co/) for my [123dev](https://123dev.email/) newsletter and wanted an easier way to save URLs to include in future emails. If you’re not familiar with it, Revue has a chrome extension so you can send URLs to a queue which shows up next to the editor.

![Revue sidebar showing staged links](/img/revue-sidebar.png)

It’s a really handy feature and I wanted to use it without the extension. Ideally, I could send these URL from my phone via a Siri Shortcut (I haven’t figured this part out yet).

The functionality wasn’t exposed in their [API docs](https://www.getrevue.co/api) so I’d have to figure out another way. I learned some new things exploring the extension so I thought I’d share how I did it.

## Reverse engineering the extension

The first thing I needed was to figure out what URLs the extension was calling. I tried watching Chrome dev tools for network calls, watching DNS requests, and tcpdump.

Without having a man in the middle to decode https it wasn’t going to work. Thankfully, someone pointed out the code is available if you have the extension installed.

First, we need to get the extension ID from the [installation URL](https://chrome.google.com/webstore/detail/revue-chrome/fdnhneinocoonabhfbmelgkcmilaokcg).

![img](/img/revue-extension.png)

The long string in the URL `fdnhneinocoonabhfbmelgkcmilaokcg` will be in our home folder with the source code.

On my computer it’s under `$HOME/.config/google-chrome/Default/Extensions/fdnhneinocoonabhfbmelgkcmilaokcg`. I opened the folder in vscode and looked at the `main.*.chunk.js` file.

It was minified so first I had to unminify it as best as possible. Formatting the javascript was as good as I could get it.

From there I looked for `POST` url verbs to see what it was calling. I found this relevant code which looked like what I needed. It’s calling `https://www.getrevue.co/extension/add`.

![img](/img/revue-code.png)

You’ll see from the code the only thing it’s sending is a `POST` with a body. At this point I don’t know what the body should be, but I’ll try to figure that out later.

## Getting session cookie

Now I need to jump over to Chrome to get my session cookie. Open getrevue.co in a tab and open dev tools.

Go to the Application tab and then find Cookie in the left sidebar. Copy the value for _revue_session.

![img](/img/revue-cookie.png)

## Send a curl request

Now we need to send our request and see if it works.

We still don’t know what the body data should look like, but looking at the API objects that are documented I’m going to guess it needs a `title` and `url`.

```bash
export COOKIE="your cookie session here"

curl -X POST -b "_revue_session=$COOKIE" \
    -H "Content-Type: application/json" \
    -d '{"title": "TESTING", "url": "https://justingarrison.com"}' \
    https://www.getrevue.co/extension/add
```

Sure enough that worked!

Here’s a snippet of the response

![img](/img/revue-response.png)

The response gives us a much better idea of the full body data we can use. Adding a description will be a minimal amount of information that would be useful.

Now we can send items from the CLI but what about from iOS?

## [WIP] Siri Shortcut

Siri shortcuts are very powerful but also very cryptic.

I was able to make a shortcut with the “Get contents of URL” function which is able to make a POST call.

![img](/img/revue-shortcut.png)

I can put in the URL, change the method to POST, and add a body with the required title and url variables.

Unfortunately, when I try to use this shortcut from the share sheet I don’t think it uses my session token so I never get authenticated to the API.

If anyone knows a way to either open a Safari page and perform the action or a way to store an authentication token in the shortcut please reach out [on twitter](https://twitter.com/rothgar) and let me know.

*last modified* January 20, 2022
