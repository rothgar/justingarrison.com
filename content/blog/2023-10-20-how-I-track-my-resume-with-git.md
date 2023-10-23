---
title: "How I Track My Resume in Git"
description: "My workflow for resume and application tracking with branches based on roles and companies."
date: 2023-10-20T11:20:57-07:00
images: [/img/git-resume-banner.png]
thumbnail: /img/git-resume-banner.png
draft: false
---

I use Git to track my resume revisions and job applications.
I've been using this method—or variation of it—for over 10 years.
You can see my [system engineer resume](https://justingarrison.com/resume) which is from my role-syseng branch.

I made a video that walks through a couple different examples that you can check out here.

{{< youtube W5pwShuW1yw >}}

## How to track your resume

Here's an example repo that can give you an idea for how to [track your resume in git](<https://github.com/rothgar/track-your-resume-in-git/>).
This is filled with dummy data and commit dates so you can understand what the repo looks like over time.

The repo history and branching looks a bit complex because this is what it looks like over time.
This usually isn't important because I'm only ever dealing with HEAD on each branch, but it's cool to look back on all the roles and resumes I've had.

![a view of multiple branches in the repository](/img/git-resume-branches.png)

**Please make sure you create a private repo for your resume if you are going to have personal information like address, phone number, etc.**

The basic idea for putting your resume in Git is so you can easily make changes to the resume without relying on `resume_company-job-v3_final.pdf` naming.
You don't have to track everything I do, but I have found value in tracking roles, companies, and applications in addition to my resume.

## Branches

My repo heavily uses branches to keep resume format separate based on roles and applications to companies.
I keep track of different application-specific resumes and maintain a main format, which hosts my primary resume.

I don't apply to _that_ many different companies.
When I look in my repo there are dozens, not hundreds over 10 years, and the vast majority of them are only 1 or 2 applications.

Whenever I apply to a new company, I create a branch for that company.
For instance, I might have one for Pixar or Google.

For each specific role type I apply for, such as software engineering or management, I create a branch named `role-`.
I have less than 10 role branches because even new job titles can usually use the content from one of the other roles with minimal modifications.

Each time I apply to a company for a role, I can take the resume from the relevant role branch and copy it to the company branch.
To see an example please watch the video at the top of this post.

## Keep files consistent

I keep file names consistent between branches to make it easier to know what I'm looking for.
In general I have the following files:

1. Working copy of my resume (`Justin Garrison.md`)
1. Artifact copy of the resume (`Justin Garrison.pdf`)
1. `readme.txt` for information about tools used
1. `justfile` for common shortcuts
1. Copy of the job description (`jd.pdf` or `jd.txt`)

All the other context about what company or role I'm working on come from the current Git branch.

Whenever I apply for a job I save a copy of the job description and commit it to the repo with a `Apply: ...` git commit.
This gives me a history of applications and job descriptions with an easy way to search for applications at specific companies based on the branch.

It has been a pain to apply through job portals like LinkedIn that don't let me download the job description.
Usually, I save a link to the role in `jd.txt`, but it's not the best solution.
Please let me know if you know a way to save them to a PDF.

## Conclusion

That's all there is to it.
I started doing this just because I learned how to use Git in 2013 and wanted to use it for something.
10 Years later it has been an invaluable source of remembering just how far I've come in my career and some of the weird places I've applied.

If you use git for tracking your resume and have a workflow you like please let me know by opening an issue on the [example git repo](https://github.com/rothgar/track-your-resume-in-git/).
