---
author: "Hugo Authors"
title: "Dvorak: the good, bad, ugly, and recommendations"
date: 2021-02-13
description: "What it's really like to use Dvorak"
tags: ["shortcodes", "privacy"]
thumbnail: /images/bad.jpg
---

Maybe you want to switch your keyboard layout because you hear there are benefits for alternative layouts. Some people do it for speed, others for ergonomics.

![dvorak keyboard layout](/images/dvorak-layout.png)

I learned to touch type with QWERTY and could type 50+ words per minute. I later switched to Dvorak after having wrist pains typing for extended periods of time. I’ve been typing with Dvorak for nearly 20 years and here’s my experience.

## Good

It’s nice that every operating system has Dvorak as an optional layout and there are plenty of learning tools that exist to re-learn how to type. In my experience using Dvorak has allowed me to use my computer for longer periods of time with less wrist pain which was my main goal.

Dvorak is all about efficiency and mostly delivers. Putting the vowels on your home row means your fingers don’t have to move as often and theoretically this translates to faster typing.

Overall I’m very happy I switched and I’m not sure I would be able to do my job today without it. An added benefit is no one will ever want to use your computer.

## Bad

If you use other people’s keyboards often for support or pairing it’s going to take you longer to switch layouts. I frequently used other people’s keyboards when I was learning Dvorak and it took me about 3 months to be able to touch type with Dvorak.

While Dvorak puts commonly use keys on your home row it turns out people have adapted to having inefficient keyboard layouts. Typing English words are much more comfortable in Dvorak, but as an engineer many of my daily tools have worse ergonomics.

CLI commands such as `ls`, `vim`, and `jq` are worse in Dvorak. Thankfully `-` is in a significantly better location and `/` is roughly the same, but the over use of my right hand is noticable.

There are some tools that can help, such as `fasd`, but it doesn’t compensate for defaults. Movement with `jklm` keys are not next to eachother and don’t make logical sense, and common shortcuts for copy, paste, and undo are all over the keyboard.

Programming has partially adapted to QWERTY and `;` is the biggest key placement difference. Depending on what language you use your experience may be different.

After typing with Dvorak for nearly 20 years I don’t type any faster than I did with QWERTY.

## Ugly

It doesn’t happen as often as it used to but there are systems and older remote protocols that don’t support alternate layouts. These would by impossible to type on because local layout was ignored and the keyboard would translate twice producing completely useless output.

If you use embedded systems or modify BIOS screens your likely going to have to hunt and peck for keys. It may also get very confusing during a OS boot not knowing what keyboard layout has loaded yet. This is the worst with password fields that don’t show typing or mask the letters.

If you use a company controlled OS you may not get to set your keyboard layout during installation. This means user logins will be in QWERTY but screen unlocks will be in Dvorak. This is partially bad when resetting a password. Make sure you learn the new password in both layouts so you can type it properly.

## Recommendations

If you have a desktop — or a laptop you never unplug — get a keyboard that you can program to be in Dvorak at a hardware level. Keep the OS in QWERTY and don’t worry about switching in software.

If you’re switching for ergonomic reasons look for a proper ergonomic keyboard first. I got more comfort from a proper ergonomic angle more than switching layouts. I especially like my Ergodox EZ because I can have a programming layer with common brackets and braces in easy to reach locations.

Layouts such as Colemak might be a good alternate to Dvorak because it keeps some of the keyboard shortcuts the same but still puts more commonly used keys on the home row.

![colemak keyboard layout](/images/colemak-layout.png)
