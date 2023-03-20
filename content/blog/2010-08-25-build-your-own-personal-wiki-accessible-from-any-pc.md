---
author: "Justin Garrison"
title: "Build Your Own Personal Wiki Accessible from Any PC"
description: "A personal wiki is an amazing place to store all of your notes, to-do lists"
date: 2010-08-25
images: [/img/tiddly-dl.png]
thumbnail: /img/tiddly-dl.png
draft: false
canonical: https://www.howtogeek.com/26515/build-your-own-personal-wiki-accessible-from-any-pc/
---

A personal wiki is an amazing place to store all of your notes, to-do lists, projects, and links. Traditional wikis are no easy task to set up and typically cost money for web hosting and software licensing. With TiddlyWiki and Dropbox you can set up your own wiki that is easy to use and available from anything with a web browser. Here is how to get started.

## Set Up Your Wiki

TiddlyWiki isn’t like a traditional MediaWiki or Confluence wiki which requires a database server and PHP in order to run. TiddlyWiki is a self contained .html file that you can use in any modern web browser even without internet access.

To get started with TiddlyWiki head over to their website and download TiddlyWiki from their website.

[![](https://www.howtogeek.com/wp-content/uploads/2010/08/tiddly-dl.png)](https://www.howtogeek.com/wp-content/uploads/2010/08/tiddly-dl.png)

Once the file downloads extract it to wherever you’d like.

![](https://www.howtogeek.com/wp-content/uploads/2010/08/tiddly-extract.png)

When the file is extracted open it up to get started.

_Note: You can rename the empty.html file to whatever you’d like. The TiddlySaver.jar file is a helper for certain browsers. If your browser needs TiddlySaver.jar, it will download automatically. Make sure to keep these files together, otherwise saving your wiki may not work.
_

![](https://www.howtogeek.com/wp-content/uploads/2010/08/launch.png)

When you open the .html file you will be greeted with the GettingStarted section that will walk you through the first few steps to set up your new wiki.

![](https://www.howtogeek.com/wp-content/uploads/2010/08/gettingstarted.png)

To change the title and subtitle simply click on the blue link for each item, and then double click on the heading of the new section that appears.

![](https://www.howtogeek.com/wp-content/uploads/2010/08/title.png)

Put your desired text in the field provided and click done.

![](https://www.howtogeek.com/wp-content/uploads/2010/08/title-done.png)

Your new title should show up automatically.

![](https://www.howtogeek.com/wp-content/uploads/2010/08/title-changed.png)

You can then update your settings for the main menu, on the left, and the default tiddlers.

_Note: A tiddler is what TiddlyWiki calls each individual section. You can create as many as you want and each one can contain as much information as you want._

![](https://www.howtogeek.com/wp-content/uploads/2010/08/menu1.png)

Once you have the basics set up you can play around with some of the settings on the right side such as autosave and regular expression searches.

![](https://www.howtogeek.com/wp-content/uploads/2010/08/options-menu.png)

If you want even more settings click on advanced options and you will have plenty of more settings to play with to customize things to your liking.

![](https://www.howtogeek.com/wp-content/uploads/2010/08/advanced-settings.png)

If you still want more options, click on backstage on the top right and you will be able to backup your TiddlyWiki as well as import plugins, upgrade, and more.

![](https://www.howtogeek.com/wp-content/uploads/2010/08/tiddly-backstage.png)

## Syncing Your Wiki with Dropbox

Once your wiki is set up the way you want, you will want to be able to use your wiki wherever you are. To set that up you first need a Dropbox account and you will need to install the Dropbox client on your computer.

![](https://www.howtogeek.com/wp-content/uploads/2010/08/dropbox.png)

Once Dropbox is installed on your computer all you need to do is create a [symbolic link](https://www.howtogeek.com/16226/complete-guide-to-symbolic-links-symlinks-on-windows-or-linux/) to your empty.html file into your Dropbox folder. This will keep your wiki in sync on any computer you have Dropbox installed.

_Note: If you would like to be able to view your wiki from any computer put the the symbolic link in your Dropbox public folder._

![](https://www.howtogeek.com/wp-content/uploads/2010/08/sym-link.png)

If you put your TiddlyWiki file in your public dropbox folder then open up your browser and head over to Dropbox and sign in. Click on your public folder and then your wiki file. You now have a read only version of your wiki from any device, including mobile devices. To make the wiki just a little bit more friendly you may want to shorten your dropbox link to something you will remember.

_Note: Because the file is stored in a public viewable location it will be read only and you won’t be able to edit your wiki from the Dropbox public link._

![](https://www.howtogeek.com/wp-content/uploads/2010/08/url-shorten.png)

## Installing Plugins

In TiddlyWiki you have the ability to extend the basic layout and options by installing tiddlers from other sources. These can be options that simply let you create RSS feeds and calendars, or they can be advanced options that let you upload documents and play minesweeper. To install a new tiddler you will first need to find the tiddler you want to use. Two great sites to check for tiddlers are TiddlyVault and TiddlyTools.

To import the tools just click on the backstage link and then import. Put in the server address for the tiddlers you want and click open.

![](https://www.howtogeek.com/wp-content/uploads/2010/08/import.png)

Scroll down and select all of the tiddlers that you would like to use and then click import at the bottom.

![](https://www.howtogeek.com/wp-content/uploads/2010/08/import-select.png)

Depending on what tiddler you just installed it will be used in different ways. To figure out how to use the plugin you may want to drop down the plugins menu and click on the plugin you just installed.

![](https://www.howtogeek.com/wp-content/uploads/2010/08/calendar-plugin.png)

Clicking on this link will open up the plugin twiddler and you should be able to see how to use the plugin in your wiki.

![](https://www.howtogeek.com/wp-content/uploads/2010/08/calendar.png)

For the calendar plugin the basic usage is just to add `<<calendar>>` to any twiddler. The calendar will automatically be added to the wiki when the twiddler is saved.

![](https://www.howtogeek.com/wp-content/uploads/2010/08/calendar-2.png)

## Using a Free Hosted TiddlyWiki

If managing your wiki file isn’t your cup of tea then you can also check out TiddlySpot which allows you to set up your own fully hosted TiddlyWiki at no cost. You will have the ability to chose from a few different TiddlyWiki variations and even have the ability to download the file for offline use.

![](https://www.howtogeek.com/wp-content/uploads/2010/08/tiddlyspot.png)

TiddlyWiki is extremely flexible and can accommodate many needs with some of the variations available. Before you pay for another note taking program, or if you are unhappy with the one you currently have, download TiddlyWiki for free and see how it can suit your needs.

[Tiddlywiki.com](https://tiddlywiki.com/) – Download the main files and get an introduction to the wiki here.

[Tiddlywiki.org](https://tiddlywiki.org/tiddlers) – In depth information about the wiki and creating your own tiddlers and how to take advantage of TiddlyWiki’s markup language

[Dropbox](https://dropbox.com/) – To keep your TiddlyWiki in sync across computers

[TiddlyVault](https://tiddlyvault.tiddlyspot.com/) – Tiddlers resource site

[TiddlyTools](https://www.tiddlytools.com/) – Tiddlers resource site

[Tiddlyspot](https://tiddlyspot.com/) – Fully hosted TiddlyWiki website
