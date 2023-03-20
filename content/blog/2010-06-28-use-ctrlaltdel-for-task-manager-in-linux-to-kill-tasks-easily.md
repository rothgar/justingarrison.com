---
author: "Justin Garrison"
title: "Use Ctrl+Alt+Del for Task Manager in Linux to Kill Tasks Easily"
description: "In Windows you can easily kill any task by pressing Ctrl+Alt+Del and bringing"
date: 2010-06-28
images: [/img/000_log-out.png]
thumbnail: /img/000_log-out.png
draft: false
canonical: https://www.howtogeek.com/20355/use-ctrlaltdel-for-task-manager-in-linux-to-kill-tasks-easily/
---

In Windows you can easily kill any task by pressing Ctrl+Alt+Del and bringing up the task manager. Linux running the GNOME desktop environment (i.e. Debian, Ubuntu, Linux Mint, etc.) has a similar tool that can be enabled to run exactly the same way.

## Setting up global key bindings

The GNOME desktop environment by default uses the Ctrl+Alt+Del shortcut to bring up the shutdown, logout, restart, and hibernate dialog. This is not useful for users who are used to quick access to a task manager.

![](/img/000_log-out.png)

To change the settings of Ctrl+Alt+Del in GNOME open the keyboard shortcuts preferences. In Ubuntu it is located under System -> Preferences -> Keyboard Shortcuts, and in Linux Mint open the mintMenu -> Control Center -> Keyboard Shortcuts.

![](/img/001_control-panel.png)

The keyboard shortcuts preferences will show all of the shortcuts that the GNOME desktop environment can control.

_Note: Other program specific or Compiz keyboard shortcuts will not show up here. You will need to look in those programs for what shortcuts are available._

![](/img/002_Keyboard-Shortcuts.png)

Adding custom global keyboard shortcuts is as easy as clicking Add.

![](/img/003_new-shortcut.png)

For a Ctrl+Alt+Del replacement we will name the new shortcut “Task Manager” and the command to run is gnome-system-monitor.

![](/img/005_Custom-Shortcut.png)

Click Apply and notice the new keyboard shortcut shows up under Custom Shortcuts but is disabled. ![](/img/006_Keyboard-Shortcuts.png)

Click where it says “Disabled” and then press the new desired keyboard shortcut Ctrl+Alt+Delete. If the keyboard shortcut already exists as another GNOME keyboard shortcut you will be prompted to reassign the keyboard shortcut.

![](/img/010_replacement-warning.png)

Click Reassign and the new keyboard shortcut will now be enabled and will show the keyboard sequence for the command.

![](/img/012_Keyboard-Shortcuts.png)

For an even easier way to kill programs that are not responding, set up one more keyboard shortcut and name it “Kill Window” with the command xkill.

![](/img/013_xkill-shortcut.png)

Click on “Disabled” just as before to set the keyboard shortcut for Kill Window to Ctrl+Delete.

![](/img/014_Keyboard-Shortcuts.png)

## Using System Monitor

To test out the new keyboard shortcuts push Ctrl+Alt+Del. The System Monitor will open and will have a lot of useful information on the System tab. This tab gives you easy access to your Linux distribution and release, current running kernel, GNOME version, and available disk space.

![](/img/015_System-Monitor.png)

The next tab is the Processes tab and is similar to the task manager in Windows. You can sort by CPU usage, memory usage, process name, etc.

![](/img/016_System-Monitor.png)

To kill a process, find the name and click the End Process button. A confirmation will pop-up and you can easily kill the non-responsive process.

![](/img/019_Selection.png)

The Resources tab shows CPU, memory, and network history and is very helpful in troubleshooting system performance. The history is only stored as long as the system monitor is open so make sure you leave it running if you want to view performance while running certain programs.

![](/img/017_System-Monitor.png)

The last tab, File Systems, shows information about local hard disks and partitions. Particularly useful is the device, directory, and used information. The device shows how the system identifies your partition, and directory shows where that partition is mounted or if it is mounted at all.

![](/img/018_System-Monitor.png)

## Using xkill

The last keyboard shortcut that was set up was for a program called xkill. This program doesn’t have a user interface or settings. When you push the keyboard shortcut to run xkill the only thing you will notice is your mouse cursor will change into an X.

![](/img/020_xkill.png)

To kill a process with xkill move the mouse over the window that needs to be killed and left click with the mouse anywhere in the window. The program should instantly disappear along with any sub-windows the process had opened.

If either of these methods are used to kill a process just remember that any unsaved work will be lost because neither of these programs allow the program to save work before closing.
