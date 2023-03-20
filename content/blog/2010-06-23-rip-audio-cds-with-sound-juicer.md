---
author: "Justin Garrison"
title: "Rip Audio CDs in Linux with Sound Juicer"
description: "There are a plethora of programs that can rip audio CDs on Linux, but"
date: 2010-06-23
images: [/img/01_software-manager.png]
thumbnail: /img/01_software-manager.png
draft: false
canonical: https://www.howtogeek.com/20126/rip-audio-cds-with-sound-juicer/
---

There are a plethora of programs that can rip audio CDs on Linux, but very few are as simple as Sound Juicer. Sound Juicer is a GUI front-end for the command line only tool cdparanoia, but it adds quite features that make it worth a look.

## Install Sound Juicer

Sound Juicer is not installed by default in a lot of distributions so it may need to be installed from the distribution’s software repository. Start by opening up the software manager that comes with your distribution.

_Note: The screenshots show mintInstall that comes with Linux Mint 9._

![](https://www.howtogeek.com/wp-content/uploads/2010/06/01_software-manager.png)

Search for “sound-juicer” in the software manager. For some reason searching for “juicer” and “sound juicer” did not bring up any results so make sure you include the dash when searching.

![](https://www.howtogeek.com/wp-content/uploads/2010/06/03_sound-juicer-search.png)

Once you find the right program simply click install to download and install the latest version available in your repositories.

![](https://www.howtogeek.com/wp-content/uploads/2010/06/04_sound-juicer-install.png)

## Launch Sound Juicer

Once the software is installed go back to the menu to open the program. In Linux Mint and Ubuntu, Sound Juicer shows up as “Audio CD Extractor”. Search for it in the mintMenu or in Ubuntu find it under Applications -> Sound & Video.

![](https://www.howtogeek.com/wp-content/uploads/2010/06/05_mint-menu-search.png)

If there is no CD in the drive the program won’t have much to look at.

![](https://www.howtogeek.com/wp-content/uploads/2010/06/06_sound-juicer.png)

Once an audio CD is inserted Sound Juicer should automatically detect your CD and fill in the information for title, artist, year, and track information.

![](https://www.howtogeek.com/wp-content/uploads/2010/06/07_sound-juicer.png)

Sound Juicer connects to [MusicBrainz](https://musicbrainz.org/) to determine the CD information. If the CD cannot be found in the MusicBrainz database you will have the option to fill in the CD information manually and submit the album for future users.

![](https://www.howtogeek.com/wp-content/uploads/2010/06/08_unknown-artist.png)

## Customizing CD Rips

If you want to use a different CD drive, change the music folder or naming of your ripped music, or change what format the music is ripped in, click on Edit -> Preferences.

![](https://www.howtogeek.com/wp-content/uploads/2010/06/09_preferences.png)

Click on “Edit Profiles” to change advanced settings about how music is ripped. There are some ripping profiles installed by default and the profiles can easily be added or removed.

![](https://www.howtogeek.com/wp-content/uploads/2010/06/10_sound-profiles.png)

_In Ubuntu, to enable the MP3 and AAC ripping you will need to install the restricted-extras package from the Synaptic Package Manager or it can be installed directly from FireFox using the_ _[Ubuntu community documentation](https://help.ubuntu.com/community/RestrictedFormats#Playing Restricted Formats)\_\_._

Highlight one of the profiles and click “Edit” to change the name, description, and GStreamer command that runs to rip the music.

![](https://www.howtogeek.com/wp-content/uploads/2010/06/11_flac-profile.png)

Once everything is set up, click “Extract” to begin ripping the CD. Depending on the settings, the CD will rip and eject as soon as it is done. Put in the next CD and the computer do all the work!

![](https://www.howtogeek.com/wp-content/uploads/2010/06/12_ripping.png)

If you would like to keep up with Sound Juicer development or make a donation to the developer you can find the website [here](https://burtonini.com/blog/computers/sound-juicer).
