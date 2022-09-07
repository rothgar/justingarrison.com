---
author: "Hugo Authors"
title: "Making 123dev Website"
date: 2021-06-04
description: "A brief description of Hugo Shortcodes"
tags: ["shortcodes", "privacy"]
thumbnail: https://picsum.photos/id/1002/400/250
---

![screenshot of 123dev.email home page](https://d33wubrfki0l68.cloudfront.net/c7cea1e4be9fd5c6c8d0be2e1eb39f7952f900ba/45bd6/img/123dev-post-banner.png)

I wanted a landing page for the [123dev newsletter](https://123dev.email/) and it was the perfect opportunity to try a few new things.

I have static sites on GitHub, Gitlab, Netlify, and Amplify. They’re all great options for static site hosting but I was missing a few to fill out a complete bingo card.

### Goals

My main goals were to have a simple layout that highlights the weekly gifs and is easy for people to share. I really wanted a way to embed the gifs into Twitter if someone shared a link on there. I didn’t know how I wanted to accomplish that and it turns out there are multiple options.

To keep things simple I’m using [hugo](https://gohugo.io/) for a static site generator and I’m using a modified [hello-friend-ng](https://github.com/rhazdon/hugo-theme-hello-friend-ng) theme. I tried other static site generators like [eleventy](https://www.11ty.dev/) but after spending a night trying to figure it out I went back to hugo.

I also wanted to give [CloudFlare Pages](https://pages.cloudflare.com/) and [Workers](https://workers.cloudflare.com/) a try so I started there.

### Using video for gifs

My first problem was getting gifs to show up inline efficiently. I knew I could use gifs but they’re really big which takes a while to load. All of the gifs are under 5MB but if I wanted to have a list of posts that could easily make a page >20MB.

In-line videos is the obvious choice but I didn’t know how to make it work. Turns out it’s not too difficult. Because all of my posts and media files have the same naming scheme I can use the following template in hugo.

```
<video width="100%" muted autoplay loop playsinline>
    <source src="{{ $.Site.BaseURL }}/media/{{ with .File }}{{ .TranslationBaseName }}{{ end }}.mp4" >
    <img src="{{ $.Site.BaseURL }}/media/{{ with .File }}{{ .TranslationBaseName }}{{ end }}.mp4" >
    <img src="{{ $.Site.BaseURL }}/media/{{ with .File }}{{ .TranslationBaseName }}{{ end }}.gif" >
</video>
```

And then I just need to make sure each post has a gif and mp4 video. The gifs are usually smaller dimensions and worse quality but they work inline in emails so I still use them.

This worked for desktop browsers but I quickly found that the videos didn’t play on mobile devices. Turns out CloudFlare doesn’t cache the media files with which was causing them not to load. It took me [3 days to find this](https://community.cloudflare.com/t/mp4-wont-load-in-safari-using-cloudflare/10587/24).

I added a page rule in CF for

```
*123dev.email/media/*
Browser Cache TTL: a day, Cache Level: Cache Everything, Edge Cache TTL: a month
```

Once I got the files cached everything on mobile worked for a day and then it broke again. :( I tried getting this to work in multiple other static hosting sites and the only one that worked out of the box was [Vercel](http://vercel.com/).

Vercel has a ton of extra features I currently don’t use but I appreciate how seemlessly it has handled the media files so I’m still using it.

### Hugo outputs

The next project was to make [Twitter player cards](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/player-card) work whenever someone shared the link on twitter. This was more complex than I expected so I’m going to write another blog post with all the things I tried and what I ended up with.

The first thing to figure out was how to make hugo output two different pages for each content page. I also wanted to avoid forking the theme so I needed to figure out how to make the changes locally in my repo instead of editing the theme directly. To make hugo render content pages twice you need to create a [custom output format](https://gohugo.io/templates/output-formats/).

I added the following config to my config.toml file which tells hugo to generate HTML pages and also a new “FULL” format type. FULL is still an html page but it uses a different default template for the content.

```
[outputs]
  page = ["HTML", "FULL"]

[outputFormats]
  [outputFormats.full]
    name = "full"
    mediaType = "text/html"
    path = "full"
    isHTML = true
```

Now I created two template files and put them in `./layouts/partials/twitter-vid.html` and `./layouts/posts/single.full.html`

```
├── layouts
│  ├── partials
│  │  ├── twitter-vid-home.html
│  │  └── twitter-vid.html
│  └── posts
│     ├── single-baseof.full.html
│     └── single.full.html
```

twitter-vid.html is a templated `<head>` section for all of the twitter player metadata. The twitter-vid-home.html file is a special version of the header for the home page. The single-baseof.full.html is used to combine the twitter-vid.html with the single.full.html template.

```
<!DOCTYPE html>
<html lang="{{ .Site.Language }}">
<head>
  {{ block "title" . }}
  {{ end }}
  {{ partial "head.html" . }}
  {{ partial "twitter-vid.html" . }}
</head>
<body class="{{ if ne $.Site.Params.defaultTheme "light" -}} dark-theme {{- end -}}">

  {{ block "main" . }}
  {{ end }}

</body>
</html>
```

Now whenever I run `hugo` I get all of my standard posts in `/posts/` and I get a separate “full” page at `/full/posts/`. Now I just needed a way to make routing dynamic based on how they’re shared.

### Subscription sign up

The only other thing I wanted on the homepage was a subscribe button. I’m currently using [Buttondown](https://buttondown.email/) for organizing and sending the email.

They have a way to embed their signup form in an iframe which is nice but all you really need is the action link. Here’s what I’m using. It works, but I want to make a couple changes and style updates.

```
<form style="text-align: center;" action="https://buttondown.email/api/emails/embed-subscribe/123dev" method="POST" target="popwindow">
<input type="email" id="bd-email" name="email" required>
<input type="submit" value="Subscribe">
</form>
```

### Misc

I made a bunch of other theme edits for things like posts lists and all of my pages get more “front matter” so that I can render the variables in the page. One of the main things I needed was the height and width of each video because it’s required for twitter’s player metadata.

```
altext: "a cat waving at something"
attribution_site: "reddit"
attribution: "https://www.reddit.com/r/gifs/comments/k3bjan/cat_trying_to_learn_a_new_tik_tok_dance/"
cover: "4"
width: "640"
height: "1352"
```

I currently get the inforamiton from `ffprobe`

```
ffprobe -v quiet -print_format json -show_format -show_streams ./static/media/${POST}.mp4 | jq '.streams[0] |.width,.height'
```

The final thing to update was I wanted the original signup form at [justingarrison.com/newsletter](https://www.justingarrison.com/blog/2021-06-04-making-123dev-website/justingarrison.com/newsletter) to forward to the new website. That was easy to do by just updating the hugo page to contain a client side redirect with

```
<head> 
<meta http-equiv="refresh" content="0; url=https://123dev.email" />
</head>
```

Like any good side project I’ve learned a lot and the more I learn the more I want to try new things. If you’d like to come learn with me please feel free to subscribe to the newsletter.
