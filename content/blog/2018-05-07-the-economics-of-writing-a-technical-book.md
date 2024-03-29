---
author: "Justin Garrison"
title: "The Economics of Writing a Technical Book"
description: "What I learnt as a co-author of the book 'Cloud Native Infrastructure' for O’Reilly Media."
date: 2018-05-07
images: [/img/book-economics-banner.jpg]
thumbnail: /img/book-economics-banner.jpg
draft: false
---

I am not an expert. I have co-authored a single book in 2017 called *[Cloud Native Infrastructure](http://www.cnibook.info/)* for O’Reilly Media. Many people have asked me what it was like so I will attempt to explain the process, time investment, and financial incentive here.

This was **my** experience. If you have written a book, or would like to, I promise your experience will be different. Nonetheless, I hope you can learn something from the things I learned.

## Process

The process was about what I expected. I was introduced to Brian, our first of three editors, from someone I knew who was already writing their third book. They thought I might be a good fit for what they were looking for so they made the introduction.

![Writing technical book](/img/writing-technical-book-1.webp)

I thought about it for a couple weeks and then submitted a formal book proposal which entailed filling out a Word document template and emailing it to the editor. I didn’t hear back for about 3 weeks and then, after a follow-up email, heard the proposal was approved. After a kick-off call it was suggested that I find a co-author to help write the book. I had a week to find one and then needed to sign a contract with O’Reilly for dates and deliverables. I interviewed a few people and

[Kris Nova](https://medium.com/u/158602cec861?source=post_page-----689d0c12fe39--------------------------------)

and I complemented each others skills perfectly for the content we wanted to cover in the book. She agreed it sounded like a good topic and she was excited to take on the challenge.

The contract seemed fairly standard and focused around content ownership and royalties split. The default split between authors is 50/50 which we stuck with. The contract stipulated that Kris and I own the copyright for the content, but O’Reilly has exclusive rights to use the content any way they see fit throughout the world now and in the future for the duration of the copyright.

Once the contract was signed there was a steady pace of work as we both figured out how to lay out content and what we should write about. O’Reilly provides a platform called Atlas for writing which is quite good. You write in plain text [AsciiDoc](http://asciidoc.org/) and then O’Reilly’s Atlas platform can generate a PDF, or other formats, via the web interface or API. We both used [atlas-cli](https://github.com/odewahn/atlas-cli) to generate PDFs as we wrote. Generating the PDFs was a good feedback loop on the content. It helped make sure formatting was right and also allowed us to take a step back to read what we wrote.

Atlas works as a remote git repo but Kris and I chose to mostly work out of a private GitHub repo. We originally envisioned making pull requests to collaborate on each other's content but that didn’t happen as much as expected. Atlas has editing tools and some additional features available but we mostly just used it as a git remote URL.

On March 1st we were assigned our cover animal which Kris and I named Andy O’Connor the [Andean Condor](https://en.wikipedia.org/wiki/Andean_condor). We were pretty excited to see the cover for the first time even if the subtitle went through multiple revisions. We didn’t get to pick the animal or the picture. We were told up front we wouldn’t get to pick the animal so we knew what to expect. We were also told that Tyrannosaurus Rex and unicorns are not allowed.

![Writing technical book](/img/writing-technical-book-2.webp)

We kept writing until the 1/2 draft was due in early June. We turned it in and got less feedback than we expected, but it was still good to have a fresh set of eyes looking at it. We didn’t like what we had created. We had written almost 6 chapters and threw away 3 of them. The first two were heavily edited and the remaining chapter was trimmed down significantly and turned into an appendix.

We had some more planning meetings and came up with a revised outline that we submitted to our editor for review. By this time we were on our 2nd editor who wasn’t very familiar with the project so we got very little feedback and went with what we had.

We kept writing with minimal interactions with our editor until we were really close to needing the full draft due. I had sent select chapters to friends to look at and tried to incorporate the changes they suggested.

The first Tuesday of September the full draft was due and then went into a review process. There were technical reviewers we were able to suggest but mostly O’Reilly pulled from a pool of their trusted reviewers. We got minimal feedback from most of them (a survey form) and one returned notes on the PDF. We had a week to make edits. During this time the draft was made available as a preview on Safari books. In retrospect I wish we had posted preview chapters sooner which was something our first editor suggested, but we were both too embarrassed to follow through.

It wasn’t enough feedback for me so I reached out to more people and sent them chapters looking for someone to tell me it sucks and why. Luckily, I found someone who would give me the harsh feedback I wanted and I had about 3 days to incorporate their changes into the book before it went off to post production.

The last push was very difficult and stressful. There were a lot of big changes on the last weekend which was a risk, but I think in the end made the book better. The final weekend we moved some chapters around and wrote a chapter from scratch for content we felt was missing.

Post production was handled by non-technical, professional editors for grammar, spelling, and general readability. I believe the first PDF came back with more than 1300 edits. Overall there were more than 2000 changes made during post. I later found out this amount of edits is fairly standard for our book length. We had about 3 weeks of emailing large, heavily notated PDFs back and forth which was no fun compared to the plain text git workflow of writing.

Post production took about a month to complete and then the book went off for printing. At the same time it was posted on Safari Books Online and immediately available. We each received 6 copies of the book in the mail shortly after it was available for sale.

All in all I worked from Feb — Oct for roughly 5 nights a week at 2–3 hours per night. I also worked about 3 weekends non-stop when a draft or final edits were due. Roughly I’d say I worked about 500 hours total. That was only my time and doesn’t include Kris’. I was lucky to have a co-author to share the load.

Some people have asked how I found motivation to keep writing. I’m a fairly driven individual and the deadlines in the contract were enough for me to put in time most nights. I wasn’t motivated enough to meet the original 250 page goal, but I was happy with the content we were able to cover and how much we accomplished.

![Writing technical book](/img/writing-technical-book-3.webp)

Not a perfect depiction of work done but shows when activity happened

Kris had a different creative process than I did. She was better at mulling over a topic in her head and putting it all down in one sitting; often the week before one of the deadlines. This made me nervous on multiple occasions and was probably the biggest thing I stressed about. Everything was submitted and completed on time, but I would suggest you have a sense for how you and your co-author work together at the beginning instead of the week before a project deadline.

Throughout the writing process I felt like I finished writing multiple times. Once when the final draft was due, once when technical reviewer’s feedback was incorporated, and once at the end of the post editing process. In each case it meant we got to take a break from writing while we waited for feedback.

At the end of final edits I was done (contractually and mentally). I had read through the entire book at least three times and much of the content was starting to lose meaning. After sending the final edited PDF I wanted to stress about missing an edit before going to bed, but I was too tired to care.

## Marketing and Affiliate Links

O’Reilly provides an [affiliate program](http://www.cj.com/) which was terrible to set up and in the end hardly worth the time. You get a cut from all sales that go through your link but I have never received any money from affiliate book sales. The only money I got was when someone used my link and then bought a ticket to an O’Reilly conference. To date only one person has done that and I received $200. If anyone is looking to buy tickets to Velocity or OSCON feel free to click the O’Reilly book links at [www.cnibook.info](http://www.cnibook.info./) and then buy a conference ticket. 😊

I attempted to set up an affiliate program for Amazon but my application was denied. Amazon offers an author central site to create a 1998 inspired [author profile page](https://authorcentral.amazon.com/gp/profile) and an out of date book sale statistics and rankings. I’m really not sure the point of creating the Amazon author information outside of claiming the book(s) you author and confirming that you have a terrible book rank.

While setting up these accounts is when I created the cnibook.info website and @cnibook twitter handle. Luckily the website is a static page hosted on GitHub so there is no recurring costs. The twitter account I still maintain but has minimal interactions.

![Writing technical book](/img/writing-technical-book-4.webp)

Google Analytics for cnibook.info

The landing page was a valuable use of my time as it gave a URL to point people to for anyone searching for the book or wanting more information. I would suggest anyone writing a book spend a night to register a domain and set one up. I launched it on August 31, 2017 and it has over 4,600 visits which is terrible by most website standards but good as a place to funnel users for info.

During AWS Re:Invent I decided it would be fun to try a Twitter campaign to try and get some interest in the book. I set a limit of $50 which bought 7,648 impressions (people saw the tweet). This includes 161 engagements (clicked on the tweet, RT’d, or favorited), and 37 clicks (clicked the link). I promoted the tweet above and I don’t think it was worth the money. I don’t believe it generated any sales and cost $.31 per engagement. After that campaign I had another tweet that was retweeted by a friend (I didn’t ask them to do it) with a lot of followers and it had more engagements than the paid for, promoted tweet.

![Writing technical book](/img/writing-technical-book-5.webp)

Twitter campaign breakdown

## Sales and Royalties

The book was originally supposed to be 250 pages and would have cost $59.99. Instead it was only 160 pages and cost $39.99. Because we co-authored the book we each got 5% of revenue for physical books and 12.5% for ebooks and digital access (10% and 25% for individual authors).

This breaks down to we each get $.99 for a physical book and $.46 for an ebook. Safari Books Online (SBO) pays based on how many pages are viewed and how many people have added the book to their personal bookshelf (I never knew before why that was a thing). So far I have received $539 over 5 months for SBO.

The payments come on the last day of the month after the month when O’Reilly receives payment for the sale. If you bought a book on February 1st, $.99 was added to the check I received on March 31st.

From December through March the book has sold **1337** copies. I have no idea how well other books in this category sell. This total also includes 2 book signings at conferences that were sponsored by the [CNCF](https://cncf.io/) (Thank you!) which was roughly 150 physical books total. On average, the book has sold 222 copies per month which is greatly skewed by the first month which had 930 sales. The last month (March) had 34 physical book sales. I suspect that number will go down even more over the next few months.

Sponsorships was an unexpected source of income. We have been lucky enough to have 3 sponsors so far. The sponsor pays O’Reilly for exclusive rights to provide a PDF and optional print version of the book. The company gets to put a forward in the book that Kris, me, and an O’Reilly editor approve. Once the sponsor completes their contract with O’Reilly they can do whatever they want with the books. Usually, the PDF gets put behind a web form so you fill out your email address and the company uses it for marketing services and getting customer leads. Physical books are usually given away at conferences where they can scan badges.

I have no idea if this model is financially viable for the companies but I would assume so. I’ve asked for download numbers but was never provided any and the sponsors are not contractually obligated to give numbers. I’m not sure how many books get sponsors, but it helps a lot with raising awareness of the book because companies have more of a presence on social media and have budgets for advertising.

Each full book sponsorship for one month nets me $3,705 and partial sponsorships give an amount based on percentage of the book sponsored (e.g. 5 chapters in a 10 chapter book is 50% sponsored). That’s much better than I expected because a one month full sponsorship is more than all other sales combined. I’m not going to say exactly what percentage I get from the sponsorship simply because I don’t want to disclose how much any of these 3rd parties pay and their finances are not my business to disclose.

There are also some other sponsorships that I think count as ebook sales but I never got a clear answer how royalties work for those. Book licensing incurs a small payment but I’m unclear how that is used. From my statements, three people have licensed the book or excerpts from it which has netted me $2.37.

{{< tweet user="thecloudcastnet" id="931584990718189568" >}}

My April 2018 statement (sales from December — March) says I’ve made $11,554.15 which roughly breaks down to $23 per hour for the estimated 500 hours of work. Without the three sponsorships that would have been $5.29 per hour. Luckily that number only gets better with time. I’ve heard 2nd editions are a better rate per hour because they have less time investment with similar sales as the original, but I don’t have any experience.

Going into this project I had a rough estimate in my head to make about $2000–3000 so this is much better than I expected. Set your expectations accordingly.

## Outcomes

I’m extremely happy with the how things have turned out. We’ve got a lot of great feedback and some average reviews on [Amazon](https://www.amazon.com/Cloud-Native-Infrastructure-Applications-Environment/dp/1491984309) (please leave us a review!). I’m grateful that people are reading it and I hope it’s helping them in some way. We worked hard and wanted to help engineers get better at running infrastructure.

I learned that you can’t just write a book and expect it to sell. There needs to be a lot of effort (a.k.a. budget and time) in marketing and it takes more than just individuals with twitter accounts to get the word out. It has been humbling to have friends and organizations help us promote the book and even pay to put the book in people’s hands.

So far I know of only one grammatical mistake, which is a win in my book (pun intended).

The book has provided a few other opportunities that I probably wouldn’t have had. So far I’ve done a couple podcast interviews, spoken at a few events, did one webinar, and have had a few opportunities for more writing projects with O’Reilly (some of which I’ve taken).

Would I write another book? Not for the foreseeable future. I would like to update *Cloud Native Infrastructure* to keep it fresh with current industry trends, but another book from scratch is not a year long project I’d be looking forward to at this time.

I’m very proud of the work we accomplished and glad we wrote it. I can’t think of anything else I would have done with that time that would have been better spent.

I’d love it if you bought a copy of the book using the affiliate links at [www.cnibook.info](https://www.cnibook.info/) and if you’ve already read it please let us know what you think. We’re available on twitter [rothgar](http://twitter.com/rothgar) and [krisnova](http://twitter.com/krisnova). We also love pictures of the book with your pets. It makes us smile. 😄

I hope this has given you some insights into what it takes to write a book and what you can expect if you do it.

## More where this came from

This story is published in [Noteworthy](http://blog.usejournal.com/), where thousands come every day to learn about the people & ideas shaping the products we love.

Follow our publication to see more product & design stories featured by the [Journal](https://usejournal.com/?/utm_source=usejournal.com&utm_medium=blog&utm_campaign=guest_post) team.
