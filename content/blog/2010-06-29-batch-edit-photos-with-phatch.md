---
author: "Justin Garrison"
title: "How to Batch Edit Photos with Phatch"
description: "If you have ever needed to edit a whole folder of photos with the same effect or "
date: 2010-06-29
images: [/img/000_add-action.png]
thumbnail: /img/000_add-action.png
draft: false
canonical: https://www.howtogeek.com/20396/batch-edit-photos-with-phatch/
---

If you have ever needed to edit a whole folder of photos with the same effect or need to repeatedly crop, add watermarks, or drop shadows to images for the web, Phatch is the tool for the job. Phatch is a photo batch editor written in python so it works on any operating system.

## Install Phatch

Phatch is available in the package manager of most Linux distributions. If it is not available you can download installation files from the Phatch website or source code from launchpad. In Windows and OS X things are a bit different and you will need to install all dependencies and launch the phatch.py script manually. _Links and download zip with all dependencies for Windows can be found below._

## Use Phatch to Edit Your Pictures

When Phatch is opened it looks more like a buddy list window than a photo editor. The first thing to do is click on the plus sign to add an action.

![](/img/000_add-action.png)

The first action to add should always be save. It is important to make sure save is on the bottom of the list because actions run in order from top to bottom.

![](/img/001_Phatch-actions.png)

When save has been added to the action list, there will be more options for filename, type, and location. Some file formats will add more options to the save action if they are available.

![](/img/002_save-action.png)

Even if the photo does not need editing, Phatch is still a great conversion tool with a plethora of available file formats it can read and write.

![](/img/003_filetypes.png)

Now that the save action is on the list, click the plus sign again to add more to the action list. Each photo edit is its own action, so if the photo needs a watermark and a drop shadow, separate actions will need to be added.

Use the up and down arrows to change the order the actions will run, and make sure there is at least one save action at the bottom of the list. Phatch also can use external programs such as Blender and Imagemagick if those programs are installed.

![](/img/004_action-list.png)

_Note: If you need multiple copies of the same file (eg. web thumbnail and full size image) you can have multiple save actions anywhere on the list. But remember the action list is processed from top to bottom. So don’t create and save your thumbnail before the full size image._

Click the action list menu to save and easily repeat these steps later on any pictures. Action list are stored in .phatch files which can be opened on any platform to have identical photo edits every time.

If an action needs to be temporarily disabled, right-click on the action item and then disable it. Disabling skips that action when processing the list. This can be helpful if an image already has a watermark or drop shadow and doesn’t need to be processed again.

![](/img/006_howtogeek-Phatch.png)

To run the action list, click on the gears icon or push Ctrl+Return and another dialog will pop up for a location of files or folders and options to overwrite images, include subfolders, and what filetypes to process. Click Batch and the action list will run and save in the location you specified.

![](/img/007_phatch-run.png)

Here is a few examples of photo edits we created quickly with a photo of a friends car.

![](/img/008_lotus.png)

![](/img/008_border.png)

![](/img/008_offset.png)

## Phatch Image Inspector

Phatch also comes with an image inspector which can show the EXIF and IPTC information from the image. To launch the image inspector, click on the magnifying glass in the main Phatch window.

![](/img/009_image-inspector.png)

Drag an image to the window to see its attributes and tag information.

![](/img/010_image-info.png)

Phatch is a powerful photo editing tool that can repeat common photo edits in a snap; it is also free and cross platform which makes it even more valuable when working with the web from multiple machines.

## Link

[Go to Phatch homepage](https://photobatch.wikidot.com/)

[Phatch on launchpad](https://launchpad.net/phatch)

[Download Phatch with dependencies for Windows XP](https://photobatch.wikidot.com/install)
