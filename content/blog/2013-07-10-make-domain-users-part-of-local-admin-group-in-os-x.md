---
author: "Justin Garrison"
title: "Make Domain Users Part of Local Admin Group in OS X"
description: "I came across this and thought it may be helpful for someone. OS X only uses the traditional"
date: 2013-07-10
images: [/img/og-image.png]
thumbnail: /img/og-image.png
draft: false
---

I came across this and thought it may be helpful for someone.

OS X only uses the traditional /etc/passwd and /etc/group files when running in single user mode so they are no help. Instead we need to do everything with [dscl](http://developer.apple.com/library/mac/#documentation/Darwin/Reference/ManPages/man1/dscl.1.html).If you want to make a domain user part of the local admin group in OS X without needing them to login first you can use the following command.

```
sudo /usr/sbin/dseditgroup -o edit -a “DOMAIN\Domain Users” -t group admin
```

You can also set individual users as part of the admin group with

```
sudo /usr/sbin/dseditgroup -o edit -a “DOMAIN\user” -t user admin
```

Two important things to note is you need to use the full path to dseditgroup and the domain needs to be capitalized.

You can also view what users are part of a group with

```
sudo dscl . -read /Groups/admin GroupMembership
```

and you can list all group names with

```
dscl . -readall /Groups | grep RecordName
```

Let me know if this helps you in the comments.

_Originally published at [1n73r.net](http://1n73r.net/2013/07/10/make-domain-users-part-of-local-admin-group-in-os-x/) on July 10, 2013._
