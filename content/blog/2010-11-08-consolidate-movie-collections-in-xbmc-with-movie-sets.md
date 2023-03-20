---
author: "Justin Garrison"
title: "Consolidate Movie Collections in XBMC with Movie Sets"
description: "XBMC already has an advanced movie library that can gather fan art"
date: 2010-11-08
images: [/img/og-image.png]
thumbnail: /img/HP-collection-0.png
draft: false
canonical: https://www.howtogeek.com/33873/consolidate-movie-collections-in-xbmc-with-movie-sets/
---

XBMC already has an advanced movie library that can gather fan art, movie posters, and cast information all with a simple scan. With XBMC 10.0 you can also combine movie collections into a single entry in your library.

_Note_: XBMC has been replaced by Kodi. We have an updated guide to [using movie sets in Kodi](https://www.howtogeek.com/345269/consolidate-movie-collections-in-kodi-with-movie-sets/).

![](/img/HP-collection-0.png)

Despite if you think the second two Matrix movies should be included in the trilogy or not, combining movie collections and being able to reorder the movies in the order they were released is a much needed feature in any movie library. In XBMC there are a couple of ways to set up this feature, and if you prefer using a text editor check out the link below. We will set up the same feature using the XBMC web server and a custom web skin.

To get started you need to make sure you have XBMC 10.0 Dharma installed. If you don’t have it installed you can get it for Windows, Linux, OS X, AppleTV, or as a live CD from the link below. Once you have it installed you need to add a movie source and then scan the source into your library.

![](/img/library-scan.png)

While your movie files are being scanned into the library go to the XBMC network settings and enable the web interface.

![](/img/web-interface-enable.png)

If you are using Windows you will probably be prompted to add an exception to the firewall so accept the prompt and the port will be opened automatically.

![](/img/web-firewall.png)

Scroll down and click on web interface to change it from the default interface. When the option to select your interface comes up, select get more in the bottom left corner.

![](/img/web-interface-get-more.png)

Next install the XBMC Web Media Manager (XWMM) web interface.

![](/img/xwmm-install.png)

Once it is installed select it as your active web interface.

![](/img/xwmm-enable.png)

Once the XWMM interface is enabled open up your browser and go to the IP address of your computer. If you see a web interface that looks like the picture below then your settings haven’t been applied and you should try restarting XBMC.

_Note: If you are running XBMC from the same computer you can use the loopback address 127.0.0.1 in your browser._

_![](/img/web-default.png)_

Instead you should see the XWMM interface like the screenshot below.

![](/img/web-xwmm.png)

The first thing you will want to do is create all of the movie collections that you have. To do that go to Tools -> manage movie sets.

![](/img/xwmm-manage-sets.png)

Click add and then update for each movie collection you have. Don’t worry about adding movies to the collections yet, that will come in a later step.

![](/img/xwmm-collection-manager.png)

Close the movie set manager and browse to a movie you want to add to one of the sets you just created.

![](/img/HP-collection-1.png)

In the movie details area at the top, fill out the sort title to reflect which number the movie is in the collection. You can do this by either the number it is in the series, or by the date the movie was released. The idea is to keep the movies in release order instead of the default alphabetical order.

![](/img/HP-collection-2.png)

On the right hand side of the same window select other details and then drop down the set menu to add the movie to one of the sets you created earlier.

![](/img/HP-collection-3.png)

To double check that all the movies are added correctly you can go back to the movie set manager and check that your movies show up under the right set.

_Note: Don’t worry about the sort order here, that will only be reflected in the library view of XBMC._

![](/img/HP-collection-4.png)

If everything is correct, go back to XBMC and browse the movie library. You should see your new collection when you sort the library by movie title. Highlight the movieset and open the menu to set a thumbnail that is relevant to the entire collection.

![](/img/HP-collection-5.png)

Browse to the picture you want to use and hit OK to use it as the movieset thumb.

![](/img/HP-collection-6.png)

Now you movieset will have a better thumbnail that reflect the entire collection rather than just one movie.

![](/img/HP-collection-71.png)

If you select the collection you should see all of the movies you added in the order you gave them, rather than alphabetical order. Cover art, fan art, and movie information will still be there for the individual titles as well.

![](/img/HP-collection-8.png)

Once you are all done you can set your web interface back to the default and enjoy having your movie collections sorted in a logical manner.

There is one small problem with the sets showing up in the default web interface and not showing any movies within the set, but hopefully that is an acceptable trade off for having the movies sorted within XBMC properly.

![](/img/HP-collection-9.png)

[How to set up movie sets with NFO files](https://wiki.xbmc.org/index.php?title=Movie_Sets)

[XBMC download](https://xbmc.org/download/)
