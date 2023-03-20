---
author: "Justin Garrison"
title: "Tag and Rename Music with TagScanner"
description: "There are plenty of automatic music organization tools but for those"
date: 2010-07-12
images: [/img/00_tagscanner.png]
thumbnail: /img/00_tagscanner.png
draft: false
canonical: https://www.howtogeek.com/21245/tag-and-rename-music-with-tagscanner/
---

There are plenty of automatic music organization tools but for those who like to do things by hand, TagScanner is a powerful music organization tool that can be run from a USB drive, and it’s free.

## Installation

TagScanner is a native Windows program that runs well under WINE for Linux and OS X; it has support for MP3, OGG, Musepack, Monkey’s Audio, FLAC, AAC, OptimFROG, SPEEX, WavePack, TrueAudio, WMA, and MP4 files.

![](/img/00_tagscanner.png)

TagScanner comes with four main functions, music renamer, tag editor, tag processor, and list maker. Music renamer will rename physical files based on tag information. Tag editor can manually edit any field in a supported tag. Tag processor will automatically fill tag information based on scans from online, the filename, or a text file. List maker will generate playlists in m3u, txt, html, or csv format.

![](/img/01_tagscanner-tabs.png)

## Tagging Music

Open your music folder by selecting the browse button at the bottom of window or push Ctrl+O to open a location.

![](/img/02_open-folder.png)

Depending on how much music you have it may take a little while for TagScanner to read all of the files in the directory. Sit back and give it a few minutes to gather all the information. If your music is wirelessly stored on a NAS and you have 5000+ songs be prepared to give it 15-20 minutes to scan all of the titles and metadata, or if you know the files you want to edit just open those select files to get right to tagging.

![](/img/03_scanning-folder.png)

Once the information loads, click on the tag processor tab at the top. It is easy to start with the automated scanning first and then move to manual fixing where needed.

Select an album or song on the left and then drop down the search window on the right to specify what you want to search for. TagScanner will automatically search freedb.org for album information; you can set which freedb server you want to use from the TagScanner preferences.

![](/img/04_tag-processor-search.png)

Before writing any information to the files click on the gear icon to change settings for embedding cover art and updating the tag information.

![](/img/05_tag-processor-embed.png)

To verify the correct songs are going to be tagged, right click on any file and click play to preview the song with the built in player, or open file location to find the files you are tagging.

![](/img/07_tagscanner-right-click.png)

Select the correct album information on the right and click preview to see how the the file information will change. Any changes that are going to be made will show up in blue. This is the last step before writing changes to disk so make sure the album tag is correct. If you are satisfied with the tag information click save to write the information to the files.

![](/img/06_tag-processor-save.png)

If manual tag information is needed click on the tag editor tab, select the song or album that needs editing, and fill out any desired information on the right in the correct field.

![](/img/08_tag-editor.png)

Depending on what file format the music files are in there will be a load of tag information that can be added to the songs manually.

![](/img/09_tag-editor-list.png)

## Renaming Music

Once all the music is tagged to your satisfaction, click on the music renamer tab and fill out the format exactly how the physical files should be named. Use the legend information for attributes that should be included in the filename and check any boxes in the text transform window to replace special characters like & and %20, move “The” to the end of the band name, or to capitalize the first letter in each word. There are also options to restructure the directory tree based on tag information and trim file name length if your operating system or playback device does not support long filenames.

![](/img/10_renamer-01.png)

When you have the format and transform options set the way you want, click preview to see how the tracks are going to be affected when you rename the files.

![](/img/11_renamer-preview.png)

If everything looks good click rename and an OK status should show up next to each successfully renamed song.

![](/img/12_renamer-02.png)

## List Maker

Once the music is tagged and renamed you can easily select the list maker tab and export the desired music to any playlist format available. Select the files, the type of playlist, and then click export to create the playlist file.

![](/img/13_list-maker.png)

## Conclusion

While manual music organization takes longer than automatic tagging software, you have much more control over how the songs are named and what information is stored in the tag. Manual tagging is also the only way to go if you have obscure artists or remix albums. TagScanner is a powerful tool for the job and is great because it doesn’t try to take over your systems media playback functions or clutter your system with icons, context menus, and background processes.
