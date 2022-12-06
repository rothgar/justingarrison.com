+++
title = "Mastodon instance with 6 files"
description = "How to make a single user, publish only, mastodon instance with four json files and two pictures"
date = 2022-12-06T07:00:00-07:00
thumbnail = "/img/mastodon-files-banner.png"
images = ["/img/mastodon-files-banner.png"]
draft = false
+++

Mastodon is built on the [ActivityPub](https://activitypub.rocks/) protocol which is based on [Activity Streams](https://www.w3.org/TR/activitystreams-core/) which stores data in [JSON Linked Data (JSON-LD)](https://json-ld.org/primer/latest/).
All that means is Mastodon uses a lot of JSON that references other JSON.
A Mastodon instance can serve those JSON documents any way it wants so long as they are UTF-8 encoded.

## Why would you do this?

There are more than 17,000 Mastodon instances.
Why would you implement one with static files?

The first reason is security.
Ars Technica has a [great article](https://arstechnica.com/information-technology/2022/11/how-secure-a-twitter-replacement-is-mastodon-let-us-count-the-ways/) about some of the concerns with running large scale, multi-user social network servers.
I have a lot of my own concerns about Mastodon that I'll save for a future post.

There are scalability challenges on multiple levels.
The size of databases and uploads is what most admins are concerned with, but number of active users and scale of a single user (e.g. celebrity, company, government) is what will really take down a social network.
An instance with 30,000 active users [costs nearly $1900 per month.](https://hub.fosstodon.org/more-upgrades-twitter-storm/)

If Mastodon is going to be adopted by the critical users it needs to grow, instances—many of which are run by volunteers—would be crushed under the operational and financial responsibility.
Governments and companies aren't going to join shared servers; they're going to run their own instances on the domains they already own.
The best way to scale and maintain a server is to not run one.

## Create a server

If you want to watch how I created these files check out the video.

{{< youtube id="pyB7AFsQoJs" title="Create a Mastodon instance in just 2 files" >}}

So let's create a Mastodon instance using JSON files.
You can see the files on [GitHub.](https://github.com/rothgar/static-mastodon)

The files are hosted at https://mastodon.jgarr.net so you can test this for yourself by searching for the user @justin@mastodon.jgarr.net

You only need 1 file but to make a more complete user we'll use these 6:
* 2 files to create a user
* 2 files to pretend we are popular
* 2 pictures to make it look pretty

The only required file is the user, but I wanted to show how easy it is to lie in the fediverse.

Here are the files we'll be using.

```bash
.
├── .well-known
│  └── webfinger    <- user discovery (optional)
├── banner.png      <- banner image (optional)
├── followers       <- how many followers (optional)
├── following       <- how many following (optional)
├── image.jpg       <- profile image (optional)
└── justin          <- user information
```

Now let's explain what they do.

### User discovery
When you're using Mastodon you can search for a user on any Mastodon instance with `@user@domain`.
This is a short hand format which relies on [webfinger](https://webfinger.net/) to translate a user at a domain into a sandard URL.

When you do this search your Mastodon server will query the external server

```
GET https://server/.well-known/webfinger?resource=acct:user@domain
```

You can bypass webfinger if you know how to fetch the user's information directly.
If you search in Mastodon for `https://mastodon.jgarr.net/justin` you'll get the same user.

<details>
  <summary>Here's the full access log so you can see the request.</summary>

```json
{
  "request": {
    "remote_ip": "127.0.0.1",
    "remote_port": "43636",
    "proto": "HTTP/1.1",
    "method": "GET",
    "host": "mastodon.jgarr.net",
    "uri": "/.well-known/webfinger?resource=acct:justin@mastodon.jgarr.net",
    "headers": {
      "Date": [
        "Wed, 30 Nov 2022 06:00:09 GMT"
      ],
      "X-Forwarded-For": [
        "fd7a:115c:a1e0:ab12:4843:cd96:626f:140a"
      ],
      "User-Agent": [
        "http.rb/5.1.0 (Mastodon/4.0.2; +https://mastodon.social/)"
      ],
      "Accept": [
        "application/jrd+json, application/json"
      ],
      "Accept-Encoding": [
        "gzip"
      ]
    }
  },
  "user_id": "",
  "duration": 0.000258163,
  "size": 203,
  "status": 200,
  "resp_headers": {
    "Accept-Ranges": [
      "bytes"
    ],
    "Content-Length": [
      "203"
    ],
    "Server": [
      "Caddy"
    ],
    "Etag": [
      "\"rm5bpw5n\""
    ],
    "Content-Type": [],
    "Last-Modified": [
      "Wed, 30 Nov 2022 05:39:32 GMT"
    ]
  }
}
```
</details>

The GET request technically uses the parameter `resource=acct:justin@mastodon.jgarr.net` but with this static file example we only have one user on the domain so we'll ignore that part.
If you want to have multiple users on the same domain you will have to handle parameters on the server side.
Meaning, you can't do that with static files.

This request returns the file

```json
{
    "subject": "acct:justin@mastodon.jgarr.net",
    "links": [{
        "rel": "self",
        "type": "application/activity+json",
        "href": "https://mastodon.jgarr.net/justin"
    }]
}
```

This says where to go fetch the next JSON document at the `/justin` path.
Your Mastodon server will then go fetch that object.

```
GET https://server/justin
```

<details>
  <summary>Here's the full access log so you can see the request.</summary>

```json
{
    "request": {
        "remote_ip": "127.0.0.1",
        "remote_port": "43650",
        "proto": "HTTP/1.1",
        "method": "GET",
        "host": "mastodon.jgarr.net",
        "uri": "/justin",
        "headers": {
            "Accept": ["application/activity+json, application/ld+json"],
            "Accept-Encoding": ["gzip"],
            "Date": ["Wed, 30 Nov 2022 06:00:10 GMT"],
            "Signature": ["keyId=\"https://mastodon.social/actor#main-key\",algorithm=\"rsa-sha256\",headers=\"(request-target) host date accept\",signature=\"FIFlf1AqeWuDGqF0lNJy+eRoxsy83dZ44nyhe3O+kEAB4WE8rDNKwhrGrO
                67 GZQin3lbkMZ4BKpj71wAjhNbFW8p7FtdbvGGKPwceRh5gx1hh2iqdd / INw9NZFpRbPG4wq9oHNU4MIMikICcgNDeLzcYYXbUMaDDe9W4eVzExK6SF5ulJDY0tbZchT + kaZKZqGhae25FFLc0gEPEjA3XOiZRhsVU + 7 bGPyX8Lo2g6ebGuIHPynB5WYeOu8u8noEHtbxzx + LIQZJqy1gHDb9zKq09q + f2h6ngaegayxFxZOVLMVEbhpauq1iELxlPCXaWAcwFFmWS7tJZHpqnFBAXKg == \""
            ],
            "X-Forwarded-For": ["fd7a:115c:a1e0:ab12:4843:cd96:626f:140a"],
            "User-Agent": ["http.rb/5.1.0 (Mastodon/4.0.2; +https://mastodon.social/)"]
        }
    },
    "user_id": "",
    "duration": 0.000505261,
    "size": 912,
    "status": 200,
    "resp_headers": {
        "Content-Length": ["912"],
        "Server": ["Caddy"],
        "Etag": ["\"rm5bxppc\""],
        "Content-Type": [],
        "Last-Modified": ["Wed, 30 Nov 2022 05:44:13 GMT"],
        "Accept-Ranges": ["bytes"]
    }
}
```
</details>

If you look at the access log you'll notice the signature in the header.
This uses a keyId `https://mastodon.social/actor#main-key` which is the instance that searched for the user.
There's a signature which can be used to verify the correct server―or user―is making requests.

If you want to you can skip webfinger by searching for a user by their URL directly.
If you search in Mastodon for `https://mastodon.jgarr.net/justin` you'll get the same user.

That means we need 1 less file but it doesn't seem as magical as `@justin@mastodon.jgarr.net`

This returns our actual user document.

```json
{
    "@context": [
        "https://www.w3.org/ns/activitystreams",
        "https://w3id.org/security/v1"
    ],
    "id": "https://mastodon.jgarr.net/justin",
    "type": "Person",
    "following": "https://mastodon.jgarr.net/following",
    "followers": "https://mastodon.jgarr.net/followers",
    "inbox": "https://mastodon.jgarr.net/inbox",
    "preferredUsername": "justin",
    "name": "Justin Garrison",
    "summary": "Static mastodon server example.",
    "url": "https://justingarrison.com",
    "manuallyApprovesFollowers": true,
    "discoverable": true,
    "published": "2000-01-01T00:00:00Z",

    "icon": {
        "type": "Image",
        "mediaType": "image/jpeg",
        "url": "https://mastodon.jgarr.net/icon.jpg"
    },
    "image": {
        "type": "Image",
        "mediaType": "image/jpeg",
        "url": "https://mastodon.jgarr.net/image.png"
    }
}
```
If you want to see your user's JSON document you can append `.json` to your user's URL (e.g. [https://mastodon.social/@jgarr.json](https://mastodon.social/@jgarr.json))

Not everything in this example user document is required, but here's the first place we can lie about our account and make it look more legitimate.

You'll noticed the published date `2000-01-01T00:00:00Z` which means we created an account long before Mastodon existed.
Not a big deal, but it's completely unverified.

We also add an icon and image to the profile so it doesn't have the default image.
The images are completely optional, but it adds legitemacy to a federated account posing as a real user.

Because we own the domain and can lie about the accounts we can use a commonly misspelled domain or unicode to create fake accounts.
We could easily use any domain to make accounts like `@charles@gov.co.uk` or `@tim@apple.ceo` (both of these domains are currently available).

Mastodon puts the zero in zero trust.
In reality, any completely decentralized system—like the internet—only has trust through reputation, but in Mastodon you can fake a repulation.

Here's what the profile looks like.

![a screenshot of my fake user](/img/mastodon-user.png)

After the user is requested your Mastodon instance will automatically fetch `/followers` and `/following`.
Just like other documents these are reference documents to the actual data documents, but the data isn't verified so we can lie again.

You'll notice this account has 1 million followers and follows 1 account.
Both of which are not possible because even if you click the follow button the instance cannot acknowledge your request and this account has no keys so it cannot follow any accounts.

```
GET https://mastodon.jgarr.net/followers
```

<details>
  <summary>Here's the full access log so you can see the request.</summary>

```json
{
    "request": {
        "remote_ip": "127.0.0.1",
        "remote_port": "43692",
        "proto": "HTTP/1.1",
        "method": "GET",
        "host": "mastodon.jgarr.net",
        "uri": "/followers",
        "headers": {
            "User-Agent": ["http.rb/5.1.0 (Mastodon/4.0.2; +http
                s: //mastodon.social/)"], "Accept": ["application/activity+json, application/ld+json"], "Accept-Encoding": ["gzip"], "Date": ["Wed, 30 Nov 2022 06:00:12 GMT"], "Signature": ["keyId=\"https://mastodon.social/actor#main-key\",algorithm=\"rsa-sha256\",headers=\"(request-target) host date
                accept\ ",signature=\"wUAArkeEJh4yXkstcC8IgrnSlsRcledOUjo63nqRZrXI0RtoKo369/+j5K7bEFDoJ8psuCnnY9cW+KDgog7Gg2mQjAb1cZa2ffeqFY3PPXqpO+5entfRkAEyYBsrd3CiVn5wz0LEwbOs3XHe1w2wVgoIbSunCE/DN0Ra5tQLriITzBA5YzI26QuQSJzb5sMmMjiTiVocF/i0djqXfLmnjvhyaxsS0i0O8LfPHVPzSSGFHaqzawIL28MZu8J42ha//baJmP
                ozQQquFHKs7lcDcSSGtrvMGjfJYoFy4cMSsSqLH / 8 VRzNR0nXs47ydDwQ9XRpT55LPWL7uRQoeYBAkwA == \""
            ],
            "X-Forwarded-For": ["fd7a:115c:a1e0:ab12:4843:cd96:626f:140a"]
        }
    },
    "user_id": "",
    "duration": 0.000082826,
    "size": 235,
    "status": 200,
    "resp_headers": {
        "Server": ["Caddy"],
        "Etag": ["\"rm1lyn6j\""],
        "Content-Type": [],
        "Last-Modified": ["Mon, 28 Nov 2022 05:30:23 GMT"],
        "Accept-Ranges": ["bytes"],
        "Content-Length": ["235"]
    }
}
```
</details>

```
GET https://mastodon.jgarr.net/following
```

<details>
  <summary>Here's the full access log so you can see the request.</summary>

```json
{
    "request": {
        "remote_ip": "127.0.0.1",
        "remote_port": "43678",
        "proto": "HTTP/1.1",
        "method": "GET",
        "host": "mastodon.jgarr.net",
        "uri": "/following",
        "headers": {
            "Date": ["Wed, 30 Nov 2022 06:00:11 GMT"],
            "Signatur
            e ": ["
            keyId = \"https://mastodon.social/actor#main-key\",algorithm=\"rsa-sha256\",headers=\"(request-target) host date accept\",signature=\"a3EqAl1mUNhvTQvgWCng44mJpxSNcYo1CnTlUH8qy9i84S3bBSR6tIdHvK1dpoLI2+evgUvyLW0H8l20dG9jzLUIUPoXyTG+TapAKr6Z9i80F20IxoInQzoZVl3ytgkMqGw2EFV0fU2/K18/Z+
            wECJCQoFivt / QcMXPs7ox / EqxikZ + WyKsBX / TprzqFTSfg / ozpEluAxLmfNsN3IxYnb8XAGZlZC2n4Vkg9Ue + LYHH7PhLq3XAdQPgCKSI1IUxZVpeo0WttESxhAmoxVMd5bXSGJTVFInqKSH3J8UyhwbPKcCWm4oFnuVGAeZuL1UwyIQsiFgj53pU6oV + zwzZrJQ == \""],
        "X-Forwarded-For": ["fd7a:115c:a1e0:ab12:4843:cd96:626f:140a"],
        "User-Agent": ["
            http.rb / 5.1 .0(Mastodon / 4.0 .2; + https: //mastodon.social/)"], "Accept": ["application/activity+json, application/ld+json"], "Accept-Encoding": ["gzip"]}}, "user_id": "", "duration": 0.000069315, "size": 230, "status": 200, "resp_headers": {"Last-Modified": ["Mon, 28 Nov 2022 05:30:23 GMT "], "
                Accept - Ranges ": [" bytes "], "
                Content - Length ": [" 230 "], "
                Server ": [" Caddy "], "
                Etag ": ["\"rm1lyn6e\""], "Content-Type": []
        }
    }
```
</details>

/following
```json
{
    "@context": "https://www.w3.org/ns/activitystreams",
    "id": "https://mastodon.jgarr.net/following",
    "type": "OrderedCollection",
    "totalItems": 1,
    "first": "https://mastodon.jgarr.net/following_accts"
}
```
/followers
```json
{
    "@context": "https://www.w3.org/ns/activitystreams",
    "id": "https://mastodon.jgarr.net/followers",
    "type": "OrderedCollection",
    "totalItems": 1000000,
    "first": "https://mastodon.jgarr.net/follower_accts"
}
```
Mastodon never validates the data in `/follower_accts` that we claim holds our 1 million followers so we don't have to create that file.

If you click the follow button your Mastodon instance will send a POST request to `/inbox` with your user's key signature.
```
POST https://mastodon.jgar.net/inbox
```

```json
"request": {
    "remote_ip": "127.0.0.1",
    "remote_port": "42294",
    "proto": "HTTP/1.1",
    "method": "POST",
    "host": "mastodon.jgarr.net",
    "uri": "/inbox",
    "headers": {
        "Content-Type": ["application/activity+json"],
        "Digest": ["SHA-256=8we9H5V74oUdQr8R5vay/dyQEi0I2up5wwI7+9e8T70="],
        "Signature": ["keyId=\"https://mastodon.social/users/jgarr#main-key\",algorithm=\"rsa-sha256\",headers=\"(request-target) host date digest content-type\",signature=\"hx1jRjCGyBfnI/Cak8ujAlfau5G1Ph+9niCFyRdm5J7b9wQGxbk+SbUhG0kV2L7W0h54JBc6htQhR8V+fFqxX+UiLXe1l7jRoBZOYSKq7UKqtogJwLLvS89DeDgWLWDPqbZ6W1FzU9MLUqJLTqFNnhgtOH+m+YhKEfjE35+65d5vmPUNjR8TRDAjXjMugMi3NmeaeA789NV3gs7GaGyfI734kGwvPDHcLp9MyDHqBivdDqmPAzXRP4gyrjqXHQRpxCdX7iinA/aqgnsNf2CoY/uH7M+z+zPWohlTvVDU2L+xeT2N7pXFc6WxREPV4ojZ+VxMzmIuzHkxW8TVpVNwMw==\""],
        "X-Forwarded-For": ["fd7a:115c:a1e0:ab12:4843:cd96:626f:140a"],
        "User-Agent": ["http.rb/5.1.0 (Mastodon/4.0.2; +https://mastodon.social/)"],
        "Content-Length": ["779"],
        "Accept-Encoding": ["gzip"],
        "Date": ["Wed, 30 Nov 2022 07:01:44 GMT"]
    }
}, "user_id": "", "duration": 0.000112712, "size": 0, "status": 404, "resp_headers": {
    "Server": ["Caddy"]
}
```
Unlike the requests before, this request will use the mastodon.social user's signature and key instead of the instance actor account.
My instance _should_ connect back to the mastodon.social server to verify the user's signature, but you'll notice the status 404 because I didn't implement following or create an inbox file.

Even though the status is 404 the requesting server still shows a follow request is sent.
If you cancel the request it will decrement the followers count.

## What doesn't work
Those 6 files is all you need to create a Mastodon user.
Here are some caveats you may have already noticed.

* Following doesn't work
* Posts don't work
* Only 1 user per domain

You _can_ create JSON objects with posts, replies, or anything you'd like, but Mastodon instances don't fetch posts from external users unless someone from that instance follows the user or has reposted one of their posts.
I implemented a single post in the `/outbox` file so if you want to see how they are structured you can browse the [source files](https://github.com/rothgar/static-mastodon/blob/main/docs/outbox).

The instance is supposed to fetch pinned posts, but I couldn't figure out how that is implemented.
If someone knows please reach out and let me know at my real mastodon account [@jgarr@mastodon.social](https://mastodon.social/@jgarr).

Next, we'll give this instance some of the functionality that doesn't work.
We'll allow users to follow the account, and then let it create posts.
