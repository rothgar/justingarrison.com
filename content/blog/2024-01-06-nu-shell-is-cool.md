---
title: "Nu Shell Is Cool"
description: "Converting a file is a common task and nu shell was the most intuitive way to do it."
date: 2024-01-06T10:49:06-08:00
images: [/img/nu-way-banner.png]
thumbnail: /img/u-way-banner.png
draft: false
---

I had a csv file with data that looked like this.

```csv
email,date
me@example.com,Mon Jan 01 2024 15:59:34 GMT+0000
you@this.com,Wed Nov 01 2023 23:20:09 GMT+0000
```

And I needed to convert the date field into this:

```csv
email,date
me@example.com,2024-01-01
you@this.com,2023-11-01
```

I tried to do this with `awk` first because it seemed like it would be a good fit.
I'm sure it's possible but the syntax is obscure and I couldn't figure it out.

I ended up with something like this (not working):

```bash
awk -F',' '{ $1, system("/bin/date -d " %2 " +%Y-%m-%d")}' file.csv
```

When I can't get something in a single for loop or a few pipes I'll reach for a general purpose programming language.
So I fired up iPython and wrote this to convert the file.

```python
import csv
import datetime
from dateutil import parser

with open('file.csv') as f:
    reader = csv.reader(f)
    with open('file2.csv', "w") as f2:
        writer = csv.writer(f2, delimiter=",")
        for row in reader:
            dt = dateparser.parse(row[1])
            if type(dt) == datetime.datetime:
                line = row[0] + datetime.datetime.strftime(dt, '%Y-%m-%d')
                writer.writerow([row[0], datetime.datetime.strftime(dt, '%Y-%m-%d')])
            else:
                writer.writerow(row)
```

This works but it was more verbose than I wanted.
I'm sure there's other ways to do it, but it felt like something I should be able to do in my shell.

Finally, I tried it with [nu](https://nushell.sh):

```bash
open file.csv \
| update date {|row| $row.date | into datetime | format date "%F"} \
| save file2.csv
```

It was a more elegant and readable solution.
I'm very impressed with how far nu has come and thankful for their [helpful community](https://discord.gg/NtAbbGn) who helped me quickly figure this out.
