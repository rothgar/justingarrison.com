---
title: "{{ replaceRE `^[\d]+-[\d]+-[\d]+-` "" .Name | replaceRE `-` " " | title }}"
description: 
date: {{ .Date }}
images: [/img/og-image.png]
thumbnail: /img/og-image.png
draft: true
---

