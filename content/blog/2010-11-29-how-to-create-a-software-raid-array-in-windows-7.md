---
author: "Justin Garrison"
title: "How to Create a Software RAID Array in Windows 7"
description: "Instead of having a bunch of separate drives to deal with, why not"
date: 2010-11-29
images: [/img/raidarray1.jpg]
thumbnail: /img/raidarray1.jpg
draft: false
canonical: https://www.howtogeek.com/36504/how-to-create-a-software-raid-array-in-windows-7/
---

![](https://www.howtogeek.com/wp-content/uploads/2010/11/raidarray1.jpg)

Instead of having a bunch of separate drives to deal with, why not put them together into one big drive? You can use software RAID to accomplish this, and here’s how to do it.

Windows has built in functionality to set up a software RAID (Redundant Array of Inexpensive Disks) without any additional tools. This makes it easy to turn your existing spare hard drives into massive storage or even redundant backups. In this example we are going to set up a spanned disk that takes three 2 GB disks and creates one 6 GB disk using Windows 7 Professional.

_Editor’s Note:_ For the example in the article, we’re showing how to create a spanned drive, which isn’t technically RAID, but it works similarly and creating a RAID array is exactly the same—you can choose your preferred RAID option from the context menu.

_Image by [carlosgomez](https://www.flickr.com/photos/inknoise/3437544798/in/photostream/)_

## Set Up Your Disks

![](https://www.howtogeek.com/wp-content/uploads/2010/11/explorer-1.png)

The first step you need to do is backup your information on the disks you want to use in the RAID. While it is not required that you format your disks for some of the RAID options, don’t take the chance and make a backup.

Once all of your information is backed up, open your start menu, right click on computer and open manage.

![](https://www.howtogeek.com/wp-content/uploads/2010/11/manage1.png)

When computer management opens click on disk management on the left side. Any disk you want included in your RAID you need to delete them from the top area of disk management.

![](https://www.howtogeek.com/wp-content/uploads/2010/11/disk-mgmt-delete.png)

Once they are deleted you should only be left with disks you do not want included in the RAID. The other disks will still be there but they will show up in the lower pane and show their spaces as unallocated.

![](https://www.howtogeek.com/wp-content/uploads/2010/11/disk-mgmt-c.png)

## Create Your RAID

In Windows they don’t call their [RAID options by the traditional 0, 1, 5, 10](https://www.howtogeek.com/devops/which-type-of-raid-should-you-use-for-your-servers/) etc. Instead they use spanned, striped, and mirrored as the options for creating software RAIDs.

_Note: RAID-5, although one of the options, isn’t actually available in Windows 7 due to licensing issues. Thanks to the commenters for pointing that out._

A spanned volume will create a single partition that will literally span all of the included disks whereas a striped volume will deliberately break up files across multiple disks in an attempt to improve read and write performance. In both cases there is no redundancy so you need to create your own backups.

A mirrored volume and [RAID 5](https://www.howtogeek.com/devops/which-type-of-raid-should-you-use-for-your-servers/) both have some redundancy but you lose storage space to create the parity files needed for recovery. For this example we are going to go with the simplest volume type and create a spanned volume even though it isn’t technically RAID.

Right click on the first disk you want included in your RAID and select new spanned volume.

![](https://www.howtogeek.com/wp-content/uploads/2010/11/disk-mgmt-11.png)

This will open up the New Spanned Volume Wizard in Windows. Click next and then select which disks you want included in your new volume (a.k.a. software RAID).

![](https://www.howtogeek.com/wp-content/uploads/2010/11/raid-1.png)

Assign the new volume a mount letter or mount point.

![](https://www.howtogeek.com/wp-content/uploads/2010/11/raid-2.png)

Name and format the volume and click next.

![](https://www.howtogeek.com/wp-content/uploads/2010/11/raid-3.png)

The final step just reviews all of your settings before the disks are formatted and the new volume is mounted.

![](https://www.howtogeek.com/wp-content/uploads/2010/11/raid-4.png)

You should also receive a warning letting you know that if your operating system is on one of these volumes you won’t be able to use it because the volume is now a dynamic volume instead of a logical volume.

![](https://www.howtogeek.com/wp-content/uploads/2010/11/raid-5.png)

Finally the disks will be formatted and once the drive is mounted you should be welcomed with the familiar AutoPlay prompt.

![](https://www.howtogeek.com/wp-content/uploads/2010/11/raid-6.png)

If you browse to Windows explorer you should also see that the new volume has the combined storage space of the three individual disks used to create it.

![](https://www.howtogeek.com/wp-content/uploads/2010/11/explorer-2.png)
