---
title: "Signal Domain Shortcut"
description: "Send people to your domain to start a Signal chat."
date: 2025-03-31T00:05:05-07:00
images: [/img/signal-domain-redirect-banner.png]
thumbnail: /img/signal-domain-redirect-banner.png
draft: false
---

In an effort to keep using my domain for my identity online I wanted a way for people to start a Signal chat with me without needing to publish my phone number. [Signal usernames](https://signal.org/blog/phone-number-privacy-usernames/) are an answer for this, but there's still friction between telling someone my username and them sending me a message.

Signal has a way to share a QR code to automatically start a chat but that assumes people can scan something with a camera. I was looking for something as easy as typing in a URL.

If you open the Signal app settings you'll see this QR code next to your name.

![Signal settings with my name and a QR code button](/img/signal-settings-qr-1.jpg)

Tap it and it'll open the full QR code, but it also has options at the bottom to share a link.

![Signal QR code with option on the bottom](/img/signal-settings-qr-2.jpg)

If you copy the link then we can make this easier with a 301 redirect.

![Signal URL to my profile](/img/signal-settings-qr-3.jpg)

Depending on where and how you publish your website—or just DNS—there are a lot of ways to redirect a URL.
I'm using hugo on Cloudflare which has a plain text option for URL redirects by placing a file named `_redirects` at the top of my domain. Other static hosting providers have similar options.

All I have to do is put this content in the file.

```
/signal https://signal.me/#...
```

And now anyone who goes to the URL <https://justingarrison.com/signal> will open Signal in a new chat.
And if I ever need to change it or stop doing it I can delete the redirect.
