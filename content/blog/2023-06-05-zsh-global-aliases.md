---
title: "Zsh Global Aliases"
description: "My favorite zsh feature no one uses"
date: 2023-06-05T22:28:41-07:00
images: [/img/global-aliases-banner.jpg]
thumbnail: /img/global-aliases-banner.jpg
draft: false
---

Shell aliases are great, but they have some limitations.
By default they only work at the beginning of your prompt.
The only exception is if there is a trailing space in your alias value the next word is also checked if it is an alias.

That's why if you run

```
alias mydate='date -R'

watch mydate
# sh: line 1: mydate: command not found
```

But if you alias `watch` with a trailing space the following will work

```
alias watch='watch '

watch mydate
# this works
```

Zsh has an additional option called global aliases which are created with `alias -g key=value` and they work anywhere on the command line.
Here's a quick example of how I use them.

<iframe width="315" height="560" src="https://www.youtube.com/embed/zLIMjDkYyOw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

Most of my global aliases are capital letters because it makes it easier for me to remember them.
Here are the ones I use most often.

```
alias -g H='| head'
alias -g L='| less'
alias -g G='| grep'
alias -g W='| wc -l'
alias -g J='| jq .'
alias -g T="| tr -d '\n' "
alias -g C="| xclip -selection clipboard"
```

These all contain a `|` pipe as part of the alias to save additional keystrokes and make them easier to combine together.

It is also helpful to set some of your regular aliases to be global if you frequently use them as part of complex pipelines.
Kubectl is one I often pipe to to apply manifests and `alias -g k=kubectl` allows it to work anywhere in the command.

If you'd like to learn more about zsh aliases or other advanced features of zsh check out my [mastering zsh workshop](https://github.com/rothgar/mastering-zsh/blob/master/docs/helpers/aliases.md)

