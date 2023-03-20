---
author: "Justin Garrison"
title: "How to Create a Wallpaper Slideshow in Ubuntu"
description: "Just like Windows 7 and OS X, Ubuntu has the ability to create a slideshow"
date: 2010-08-16
images: [/img/menu.png]
thumbnail: /img/menu.png
draft: false
canonical: https://www.howtogeek.com/25549/how-to-create-a-wallpaper-slideshow-in-ubuntu/
---

Just like Windows 7 and OS X, Ubuntu has the ability to create a slideshow wallpaper thanks to GNOME 2.28. Here is how you can take control of your wallpaper slideshows with a simple to use GUI tool or a down and dirty text editor.

## The easy way

Let’s start by showing you the easy way to create a slideshow wallpaper using a GUI tool called CreBS (Create Background Slideshow). CreBS is an easy install in Ubuntu. To install the software open up a terminal and type

```
sudo add-apt-repository ppa:crebs/ppa
sudo apt-get update
sudo apt-get install crebs
```

This will install the CreBS repository, update your available packages, and then install CreBS. Once CreBS is installed, head over to your menu and launch CreBS.

![](https://www.howtogeek.com/wp-content/uploads/2010/08/menu.png)

To create your wallpaper slideshow just use the add button and select images to add to the wallpaper. You can also drag and drop your wallpapers to change their order.

![](https://www.howtogeek.com/wp-content/uploads/2010/08/add-images.png)

Once you have all the images you want, change the settings below for the amount of time between slideshow changes and how long you want transitions.
After all the settings are set up the way you want, type in a name at the very bottom and then click the green check to apply and save the desktop wallpaper.

![](https://www.howtogeek.com/wp-content/uploads/2010/08/slideshow-options.png)

If you ever want to apply the theme again later you can right click on the desktop and select change desktop background. If you want to share the wallpaper slideshow with friends you will have to edit the xml manually so I would suggest just sending them the pictures and allowing them to recreate the theme on their system.

![](https://www.howtogeek.com/wp-content/uploads/2010/08/background-select.png)

## The manual way

If GUI’s just aren’t your thing, you can also create a wallpaper slideshow using a text editor. All you need to do is create an XML file with the following sections:

```
<background>
  <starttime>
    <year></year>
    <month></month>
    <day></day>
    <hour></hour>
    <minute></minute>
    <second></second>
  </starttime>
  <static>
    <duration></duration>
    <file></file>
  </static>
  <transition>
    <duration></duration>
    <from></from>
    <to></to>
  </transition>
</background>
```

The `<starttime>` section is just to say when the slideshow is to start. You can either have it start in the future or just set it to a past date and it will start instantly.

You can add as many `<static>` and `<transition>` sections as you’d like.  The `<static>` sections point to the actual wallpaper files and how long to show each image. The `<transition>` sections specify how much time to use to fade from one static image to the next. Unfortunately, you can’t set the images to be displayed randomly. Save your xml file in /usr/share/backgrounds/ to make it available for all users on the system.

## Conclusion

It isn’t hard to create your own wallpaper slideshow in any Linux distribution running the GNOME desktop environment with this simple XML layout and a folder full of images. Enjoy this handy trick to customize your install.

[CreBS](https://www.obfuscatepenguin.net/crebs/)
