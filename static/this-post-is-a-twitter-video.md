+++
title = "This post is a Twitter video"
description = "If you share this post on Twitter it will show up as an embedded video"
tags = ["development"]
categories = ["Development"]
date = 2021-06-10T23:14:34-07:00
+++

If you tweet this page it will show up in Twitter as an embedded player with this gif.

<video width="100%" muted autoplay loop playsinline>
    <source src="../img/gif-sharing.mp4" >
    <img src="../img/gif-sharing.mp4" >
    <img src="../img/gif-sharing.gif" >
</video>

<p><a href="https://twitter.com/intent/tweet?via=rothgar&url=https://justingarrison.com/blog/2021-06-14-this-post-is-a-twitter-video" target="_blank" rel="noopener" title="twitter" ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg> Share this page</a></p>

Here's how it works so you can do it too.
There are a few alternative options at the end of this post so you can implement it different ways depending on your needs.
If you want to see how to use embedded videos or want to see how I got this to work with `hugo` check out [this post first](https://www.justingarrison.com/blog/2021-06-04-making-123dev-website/).

Subscribe to my newsletter if you like content like this.

<form style="text-align: center;" action="https://buttondown.email/api/emails/embed-subscribe/123dev"
method="POST" target="popwindow">
<input type="email" id="bd-email" placeholder="you@email.pizza" name="email" required>
<input type="submit" value="Subscribe">
</form>

## How twitter player cards work

First we need to explain how a [Twitter player card](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/player-card) works.
When you share a link on Twitter it has a bot that crawls the page and looks for specific `<meta name="twitter:...">` tags.
Depending on which tags it find it knows how to display the content.
There are differences for how each platform and app display player cards so read the docs.

The required tags are

```
<meta name="twitter:card" content="player" />
<meta name="twitter:site" content="@rothgar" />
<meta name="twitter:title" content="This post is a Twitter video" />
<meta name="twitter:player" content="https://justingarrison.com/blog/this-post-is-a-twitter-video" />
<meta name="twitter:player:width" content="960" />
<meta name="twitter:player:height" content="540" />
<meta name="twitter:image" content="https://justingarrison.com/img/gif-sharing.gif" />
```

When a Twitter user clicks the play button on your tweet the user's browser will make a request to the `twitter:player` page with the parameters `auto_play=1` and `autoplay=true` appended to the URL.
Twitter then uses an iframe to embed your page in the users timeline at the width and height you specified (square or 16:9 dimensions work best).
If the user clicks on the link in the tweet the URL is followed without the added parameters.

With that in mind we know can make dynamic content show up under the following conditions.

1. If a user browses a link normally without parameters we should show the full webpage
1. If something accesses the page with the useragent Twitterbot we should show the player meta tags
1. If anyone accesses the page with `auto_play` or `autoplay` parameters we should show the embeded video

Thankfully the bot that crawls the page (User-Agent Twitterbot) doesn't render javascript.
So what we can do is make the default page content have the required tags and media we want and then we can render the "full" page content for normal users who access the page without parameters.

To do that all we need is to combine the meta tags above with a media player that takes up 100% of the page and autoplays without sound.

```
<video width="100%" muted autoplay loop playsinline>
    <source src="../img/gif-sharing.mp4" >
    <img src="../img/gif-sharing.mp4" >
    <img src="../img/gif-sharing.gif" >
</video>
```

Now we need a little bit of javascript that will redirect a normal user to replace the video page content with this page.
This is accomplished with `XMLHttpRequest` which is a common AJAX call.

```
<script language="javascript">
  // get parameters sent to the page
  var queryDict = {}
  location.search.substr(1).split("&").forEach(function(item) {
    queryDict[item.split("=")[0]] = item.split("=")[1]});

  // check if autoplay is one of the parameters
  // we could check the value of autoplay but it doesn't really matter
  if (!("autoplay" in queryDict)) {
    var xhr = new XMLHttpRequest();
    // wait until the page loads and then execute this function
    xhr.onload = function() {
      if (this.readyState == 4 && this.status == 200) {
        // replace all the information inside the <content> tags
        document.getElementById("content").innerHTML =
        this.responseText;
      }
    };
    // fetch the page we want
    xhr.open("GET", "../twitter-embed-content.html", true);
    xhr.send();
  };
</script>
```

You can verify this is how this page works by adding `?autoplay=1` to the URL on this page.
You'll see the content is going to be a full width video player and if you inspect the source you'll see the javascript we used.

Finally, you need to create a content page and put it somewhere the javascript can fetch (this should be a relative path to the existing page).
In the code above we put the content directly at the root of the website and access it via ../../twitter-embed-content.html.

When a user loads the page they'll first load the embedded video page, but quickly the content will be replaced with the text you're reading (assuming they have javascript enabled).
That's all there is to it.

## Alternative methods

Knowing how this works we can implement it a couple different ways.
Javascript works great for static sites, but you get a flash of the video while your browser fetches the new page content.

### Redirects

You can also achieve the same goal by putting something in front of your website (e.g. a lambda function or nginx config) which 301 redirects to different pages depending on the user agent or parameters.
I did it with [CloudFlare workers](https://github.com/rothgar/123dev-workers/blob/main/index.js) but I had issues with CloudFlare Pages and embedded video files so I stopped using it.

Using redirects is also kinda ugly because the URL changes.
In my example I had to add `/embed/` to the URL for Twitter player pages and remove `/embed/` for regular users.
Users shouldn't ever see it but I still didn't like it.

The benefits to using lambda is your can still host the content on a static site and route requests through something cheap or free for content routing.

### Custom web server

If you want to go a more active route you can also implement this functionality fairly easy in a custom web server.
I wrote this one in go and you could host it directly in something like [AWS App Runner](https://aws.amazon.com/apprunner/).

```
package main

import (
	"net/http"
	"os"
	"strings"

	log "github.com/sirupsen/logrus"
)

func init() {

	log.SetFormatter(&log.JSONFormatter{})

	// Output to stdout instead of the default stderr
	log.SetOutput(os.Stdout)

	// Only log the warning severity or above.
	log.SetLevel(log.DebugLevel)
}

func main() {
	port := getEnv("PORT", "8080")
	log.Info("Now Listening on " + port)
	http.HandleFunc("/", serveFiles)
	log.Fatal(http.ListenAndServe(":"+port, nil))
}

func serveFiles(w http.ResponseWriter, r *http.Request) {
	userAgent := r.UserAgent()

	log.WithFields(log.Fields{
		"REQUEST":   r.URL.RequestURI(),
		"USERAGENT": userAgent,
		"QUERY":     r.URL.RawQuery}).Info()
	p := "." + r.URL.Path
	if (strings.Contains(userAgent, "Twitterbot") &&
		strings.Contains(p, "posts") &&
		!strings.Contains(p, "embed")) ||
		(r.URL.Query().Get("autoplay") == "1") {

		p = strings.Replace(p, "posts", "embed/posts", 1)
		log.Debug("Returning embed page " + p)
	}
	if p == "./" {
		p = "./index.html"
	}
	http.ServeFile(w, r, p)
}

func getEnv(key, fallback string) string {
	if value, ok := os.LookupEnv(key); ok {
		return value
	}
	return fallback
}
```

I was using this as the webserver for content rendered with hugo.
I still relied on hugo to dump out all my static HTML files in `/public` and then fetched different folders depending on how the content was requested.

You could also change the code to host this directly with something like Lambda.
The benefits of a custom web server is you don't get any redirects or content flashes for normal users.
The downside is it's code you have to maintain and run somewhere instead of hosting on a static site.

## Conclusion

I'm happy I figured out a solution that worked for me and every post at [123dev.email](https://123dev.email) is an embeddable twitter player.
If you'd like to get more content like this then please subscribe.


