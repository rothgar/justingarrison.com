---
author: "Justin Garrison"
title: "How-to Debug a Running Docker Container from a Separate Container"
description: "Debugging a stripped down Docker container from a separate container"
date: 2017-02-13
images: [/img/debug-docker-banner.png]
thumbnail: /img/debug-docker-banner.png
draft: false
---

## Alternate title: How-to debug freaking go binary containers

Containers are great for shipping software, but sometimes you can go too far when stripping down your container to make it as small as possible. There’s a fine balance between a “no-frills” image and something impossible to debug (I’m looking at you, single binary go containers).

The normal way I see people debug a running container is to `docker exec -it $CONTAINER sh` and install their debug tools on demand in the container. But what if your container doesn’t have /bin/sh? What if it doesn’t have a package manager? You could copy utilities into the container with `docker cp` and then exec into the running container but that’s also a hassle.

So instead of trying to debug from within the container, a friend recently asked how you could debug from a different container. I’m not that smart so I asked much smarter people online and got a good answer back. Thanks again [Justin Cormack for the reply](https://twitter.com/justincormack/status/829740515679690752).

Let’s create a stripped down container with only [caddy](https://caddyserver.com/).

First download/extract the caddy binary

```
$: curlhttps://getcaddy.com | bash -s personal && mv /usr/local/bin/caddy .
```

Then create a Dockerfile to copy the binary into a scratch container.

```
FROM scratch
ADD caddy /
```

Build the container and run caddy.

```
$: docker build -t caddy .
<output trimmed>
```

Now run the container.

```
$: docker run -d --name caddy -p 2015:2015 caddy /caddy
```

Now caddy is running publishing port 2015 (currently giving a 404 page because there’s no content that but doesn’t matter). How do you debug the container? Not that you’d ever need to, caddy doesn’t have bugs. :) But for hypothetical reasons.

Many people suggested using `--link` but that only puts the containers on the same network. Not the same namespace, but connected to each other on the same virtual network.

```
$: docker run -it --rm --link caddy:caddy alpine sh/ # ping caddy -c 1
PING caddy (172.30.238.2): 56 data bytes
64 bytes from 172.30.238.2: seq=0 ttl=64 time=0.075 ms/ # ps aux
PID   USER     TIME   COMMAND
    1 root       0:00 sh
    8 root       0:00 ps aux
```

Others suggested using `--volumes-from` but that doesn’t let you mount your tools into an existing running container unless that running container is exporting a volume and that volume is already in the `$PATH`.

Instead we’re going to build a separate container with all the tools we need (in this case strace) and run it in the same pid and network namespace as the original container.

First create a debug container with strace

```
FROM alpine
RUN apk update && apk add strace
CMD ["strace", "-p", "1"]
```

Build the container

```
$: docker build -t strace .
<output trimmed>
```

Now run your strace container in the same pid and network namespace.

```
$: docker run -t --pid=container:caddy \
  --net=container:caddy \
  --cap-add sys_admin \
  --cap-add sys_ptrace \
  stracestrace: Process 1 attached
futex(0xd72e90, FUTEX_WAIT, 0, NULL
```

This attached strace to the caddy process and is following it as it executes.

That’s great but we also can get to the root filesystem (not that there’s much of one) of the remote container. This time we’ll just use the alpine image and launch a shell, again in the same pid and network namespace.

```
$: docker run -it --pid=container:caddy \
  --net=container:caddy \
  --cap-add sys_admin \
  alpine sh
```

We can now see caddy running

```
/ # ps aux
PID   USER     TIME   COMMAND
    1 root       0:00 /caddy
   13 root       0:00 strace -p 1
   34 root       0:00 sh
   40 root       0:00 ps aux
```

The caddy container file system is available in /proc/1/root

```
/ # ls -l /proc/1/root/caddy
-rwxr-xr-x    1 root     root      16099400 Jan 24 15:30 /proc/1/root/caddy
```

With this container attached to the original we can do more debugging. You can still debug the network but make sure you use localhost because your new `sh` process is running in the same network namespace

```
/ # apk update && apk add curl lsof
/ # curl localhost:2015
404 Not Found/ # lsof -i TCP
COMMAND PID USER   FD   TYPE    DEVICE SIZE/OFF NODE NAME
caddy     1 root    4u  IPv6 330044347      0t0  TCP *:2015 (LISTEN)
```

All your standard debugging tools should work from this 2nd container without tainting the original container. If you run into errors make sure you check your kernel permissions (notice how strace needed `--cap-add sys_ptrace` but the `sh` container only needed `sys_admin`)

This can obviously be helpful for go containers or any other container that you just need to bring some extra debugging tools into without changing the container itself.

Let me know if you’ve found any other helpful tricks for debugging containers on the fly.

Your best option to get a response or feedback is on twitter. [https://twitter.com/rothgar](https://twitter.com/rothgar)
