---
author: "Justin Garrison"
title: "How to Search for Text Inside of Any File Using Windows Search"
description: "Many of us rely on Windows Search to find files and launch programs, but"
date: 2011-12-05T06:00:09-05:00
images: [/img/sif_top.png]
thumbnail: /img/sif_top.png
draft: false
canonical: https://www.howtogeek.com/99406/how-to-search-for-text-inside-of-any-file-using-windows-search/
---

Many of us rely on Windows Search to find files and launch programs, but searching for text within files is limited to specific file types by default. Here’s how you can expand your search to include other text-based files.

We have shown you some [advanced search operators using Windows Search](https://www.howtogeek.com/73065/learn-the-advanced-search-operators-in-windows-7/) before and even how to change [which files are indexed and how to rebuild your search index](https://www.howtogeek.com/73376/learn-even-more-windows-7-search-tricks-to-find-files-easier/). But what about searching for text inside of .html, .php, .js, and other text-based web and scripting files? Windows search allows you to include other file extensions in its index with a few simple clicks.

This technique works in Windows 10, 8, 7, or even Vista. The screens might look a little different, but it’s the same basic process on all versions.

Hit Start, type “index,” and then click the “Indexing Options” result.

![/img/sif_1.png](/img/sif_1.png)

In the “Indexing Options” window, click the “Advanced” button.

![/img/sif_2.png](/img/sif_2.png)

In the “Advanced Options” window, switch to the “File Types” tab. Select the extension for the file type you would like to include in content searches, and then select the “Index Properties and File Contents” option under the list. The text in the “Filter Description” column should change to reflect whatever filter is used to open that file type by default. In our example, we’re selecting the BAT extension, so the filter type changes to “Plain Text Filter.”

![/img/sif_3.png](/img/sif_3.png)

If you don’t find file type you’re looking for on the list, it means no app is set as the default handler for that file type. To add the file type, type the extension in the “Add New Extension to List” box and then click the “Add” button. By default, Windows Search will use a plain text filter to search the contents of those types of files, since another app is not associated.

![/img/sif_4.png](/img/sif_4.png)

After the index is rebuilt, searching for text inside one of the new file types should now show results.

![/img/sif_5.png](/img/sif_5.png)

If you’d like to always search within file contents for a specific folder, navigate to that folder in File Explorer and open the “Folder and Search Options.”

![/img/sif_6.png](/img/sif_6.png)

On the “Search” tab, select the “Always search file names and contents” option.

![/img/sif_7.png](/img/sif_7.png)

After the index rebuilds, searches in that folder will automatically include file contents.
