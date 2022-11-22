+++
title = "Hugo RSS Improvements"
description = "Making RSS feeds better for hugo static generated sites"
date = 2022-11-22T12:00:00-07:00
thumbnail = "/img/hugo-rss-banner.png"
images = ["/img/hugo-rss-banner.png"]
draft = false
+++

This site is generated with [hugo](https://gohugo.io/) which I love, but the default RSS template is very basic.
I wanted to make the RSS feed better for people using readers and share what I did.

My goals were:
* Make the RSS feed include the full article text
* Add banner images
* Add a feed thumbnails

The default hugo RSS template is good enough to get started, but didn't have these things and I wanted the experience to be better for the 9 of you who subscribe.

What I ended up with was first adding the `<image>` tag to the template which is a default RSS element and when you load a feed in a reader should fetch the image.

```xml
<image>
    <url>{{ $.Site.BaseURL }}img/profile.png</url>
    <title>{{ if eq  .Title  .Site.Title }}{{ .Site.Title }}{{ else }}{{ with .Title }}{{.}}{{ end }}{{ end }}</title>
    <link>{{ $.Site.BaseURL }}</link>
</image>
```

The frontmatter of my posts all have a `thumbnail` parameter with the main image which shows up at the top of the page and as the open graph image when you share it on social media.
Feedly documentation says it will use an open graph image, but it doesn't appear to be working for my feed so I added the image manually.

```xml
<description>
   {{ printf "<![CDATA[<img src=\"%s\"/> ]]/>" $.Params.thumbnail }}
   {{ .Content | html }}
</description>
```

Now when you read the feed you see thumbnail images and full pictures for each item.

![A picture of my RSS feed in feedly](/img/hugo-rss-feed.png)

Instead of using `{{ .Summary }}` I used `{{ .Content }}` which puts the full article text directly in the feed.

Finally, I found some additional integrations with [Feedly](https://feedly.com/), but I'm not sure how widely they're supported.

```xml
<webfeeds:cover image="{{ $.Site.BaseURL }}img/og-image.png" />
<webfeeds:icon>{{ $.Site.BaseURL }}img/profile.png</webfeeds:icon>
<webfeeds:accentColor>DBEAFE</webfeeds:accentColor>
<webfeeds:related layout="card" target="browser"/>
```

This gave me a nice thumbnail icon for the feed itself.
I haven't noticed the accent color working, but maybe I'm missing something, or it's the fact that I'm color blind.

![A picture of one of my articles in feedly](/img/hugo-rss-feedly-card.png)

I found some of these tips from their article about [improving reader experience](https://blog.feedly.com/10-ways-to-optimize-your-feed-for-feedly/) and if you know about other RSS extensions like webfeeds I'd love to hear about them.

You can check out my full RSS template [here](https://gitlab.com/jgarr/blog/-/blob/main/layouts/_default/rss.xml) and you can subscribe in any RSS reader [here](/index.xml)