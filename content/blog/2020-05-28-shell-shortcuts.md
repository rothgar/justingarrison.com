---
author: "Hugo Authors"
title: "Shell Shortcuts"
date: 2020-05-28
description: "A brief description of Hugo Shortcodes"
tags: ["shortcodes", "privacy"]
thumbnail: /images/prepend-sudo.gif
---

If your an engineer you probably spend a lot of time using a terminal. Some of your best productivity gains will come from understanding it better and making small improvements to repetitive tasks.

Many people know the basics for default shell shortcuts like Ctrl+a and Ctrl+e to go to the begining and end of a line. There are also a few keyboard shortcuts you’ve probably found by accident like Ctrl+s, Ctrl+z, or Ctrl+c.

Here are some keyboard shortcuts I use regularly that you might find helpful too. I’m focusing on zsh because that’s my preferred interactive shell but many of these shortcuts will work in bash or other shells too.

If you want more shell tips, check out my mastering zsh workshop https://github.com/rothgar/mastering-zsh.

We’ll start with some basic keyboard shortcuts and get progressivly more advanced. Many of these shortcuts are default behavior but some will need code added to your configuration to enable them.

### Basics

I’m amazed how long it took me to learn these keybord shortcuts and see that people still don’t know them.

`Ctrl+r`: Reverse search through your command history. Kinda like pushing the up arrow with search.

`Ctrl+c`: kill/interupt the current running process. If you don’t want it to print `^C` every time you press it you can add `set echo-control-characters Off` to your `~/.inputrc` file.

`Ctrl+d`: Close your current terminal. Same as typing `exit` but way shorter.

`Ctrl+l`: clear the screen. Similar, but slightly different, to typing `clear`.

`Ctrl+z`: Suspend process. This is really helpful if you’re in your editor and you need to run a command real quick. Instead of opening a new terminal press `ctrl+z`, run your command, and then type `fg` to bring the command back to the foreground.

### Delete word behind your cursor

If you have a command typed out or selected from your history with Ctrl+r you probably want to change one or two words from it.

First you can move your cursor back a word with `Alt+b`. Press it multiple times to keep moving back.

Once your cursor is at the end of the word you need to change/delete press `Ctrl+w` to delete it. If it doesn’t delete up to the characters you expect try setting your `$WORDCHARS` variable to characters that should be considered part of the word.

### Don’t repeat your whole arguments

If you need to move a file to something like a $FILE.bak you can do that easily with `{,}`.

Don’t do this

```
cp ~/this-is/my-long-file/name.txt ~/this-is/my-long-file/name.txt.bak
```

Do this

```
cp ~/this-is/my-long-file/name.txt{,.bak}
```

It works anywhere in the command too! This will copy name.txt into new-folder (assuming it exists).

```
cp ~/this-is/{my-long-file,new-folder}/name.txt
```

### Enter last argument from previous command(s)

There is a default shell variable `$?` which represents the last argument from the preceeding command (e.g. `echo $?`) `Alt+.` is the keyboard shortcut to do the same thing. Not only is it easier to type but you can push it multiple times to cycle through the last argument from previous commands.

### Prepend sudo

I need this a lot. You type out a command or find it from your history and need to run it with sudo but forgot it at the begining of the line. Normally you would `Ctrl+a` type `sudo` then `Ctrl+e`. This shortcuts does all that with a single shortcut.

Add this code snippet to your .zshrc I prefer `esc, s` for the keyboard shortcut because it works well in vim mode and doesn’t clobber the default `Ctrl+s` shortcut.

```
# add sudo before command with esc, s
function prepend-sudo() {
  [[ -z $BUFFER ]] && zle up-history
  if [[ $BUFFER == sudo\ * ]]; then
    LBUFFER="${LBUFFER#sudo }"
  else
    LBUFFER="sudo $LBUFFER"
  fi
}
zle -N prepend-sudo
# shortcut keys: [Esc] [s]
bindkey "\es" prepend-sudo
```

![img](/images/prepend-sudo.gif)

If you’re using oh-my-zsh you can add the [sudo plugin](https://github.com/ohmyzsh/ohmyzsh/blob/master/plugins/sudo/sudo.plugin.zsh#L32) and the default key binding is `esc, esc`.

### Open command in $EDITOR

There is a really handy command `fc` which will open your last command in your $EDITOR. It’s great for long or multi-line command edits.

There are lots of other ways to accomplish editing the last command you can check out [here](https://github.com/rothgar/mastering-zsh/blob/master/docs/config/history.md#modifying-the-last-command).

To edit your current command in your editor add this snippet to your .zshrc

```
autoload -U edit-command-line
zle -N edit-command-line
# shortcut key: [Esc] [v]
bindkey "\ev" edit-command-line
```

![img](/images/fc-example.gif)

Now next time you copy/paste a multi-line command from somewhere it’ll be easy to edit.

### Cut current line and then paste it on your next prompt

If you need to run a command before the command you currently have typed you can cut/yank it and then paste/pop it at your next prompt with yank-pop. This gif explains it better.

![img](/images/push-input.gif)

In zsh this is called `push-line-or-edit` and it’s a default widget you can enable with.

```
bindkey '^q' push-line-or-edit
```

A bonus feature is your cursor line will be in the same place after the command is pasted to the new prompt.
