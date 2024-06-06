---
title: "Ten Years of Kubernetes"
description: "How I got started with Kubernetes and where it has taken me."
date: 2024-06-06T23:41:49-07:00
images: [/img/kubertenes-banner.png]
thumbnail: /img/kubertenes-banner.png
draft: false
---

## My background

In February 2014 I saw a presentation by [Jérôme Petazzoni](http://jpetazzo.github.io) about a new tool called [Docker](https://www.socallinuxexpo.org/sites/default/files/presentations/docker-and-containers-for-development-and-deployment-scale12x.pdf).
I was pretty cautious about adopting a new tool because I was a system administrator and was still in the process of deploying config management in our environment.
That same year I gave a presentation [about Ansible](http://www.socallinuxexpo.org/scale12x/speakers/justin-garrison.html) which was the most recent technology I was abusing.

June 2nd 2014, 4 days before Kubernetes was announced, I started a new role at Disney Animation.
I was blown away by the infrastructure.
All the hard things I was trying to do at my last job were already done.
Puppet was deployed everywhere, OS provisioning was automatic, even PXE booting and DNS were well established and reliable.

Disney is where I first started playing with containers, but my experience was really bad.
We used Red Hat and if you know the history between Docker and Red Hat you'll know it wasn't good.

RHEL 6 had really slow devicemapper storage, an old Linux Kernel--even for 2014 standards--and I didn't see a need for it in our environment.
But in 2015 I attended DockerCon because I was starting to get more interested in use cases.
And saw a lot of cool stuff, including presentations from other Disney employees about using Mesos to scale applications.

That year I also attended Hashiconf where they announced Nomad.
This space was getting interesting fast and I started to see the potential for how containers could be used for things I was working on.

The main thing I wanted to containerize was our render workloads.
It was 99% of what we ran in the studio and it was traditional HPC batch scheduling with a custom scheduler.

I was going down the Mesos path because it had documented custom scheduling interfaces that seemed like a good fit.
It also didn't require workloads to be containerized which would be a good first step for us.

## The Kelsey moment

I met Kelsey Hightower at Hashiconf in 2015 and in early 2016 he was in LA and tweeted he had some time before his flight.
I replied and invited him up to the Disney lot in Burbank and he came.
While showing him around I mentioned I was in the process of deploying Mesos because it had custom scheduling and that's something we needed.

He mentioned Kubernetes allowed for custom scheduling too, but it wasn't well defined yet.
He had just joined Google and was going to be working on Kubernetes more and I invited him to give a Disney wide Kubernetes training in early 2016.

After that training I started digging into the API and controllers more and built [bashScheduler](https://github.com/rothgar/bashScheduler) so I could understand how the scheduling flow worked.

## My first cluster

At this point I had been running containers for some internal workloads still without much success.
The RHEL based platform combined with many other things would cause Docker to crash on an almost weekly basis and I knew the problem lied within the RHEL 6 kernel.
The easiest fix was to move off of RHEL.

Summer of 2016 I took an internal ticket to let our web team self deploy workloads.
They were the easiest to containerize and didn't rely on too much of our internal NFS storage or process.

I went through a lot of internal reviews to get CoreOS, [Alpine Linux](https://gitlab.alpinelinux.org/alpine/aports/-/issues/7423), and various other components working with our provisioning systems.
In about 2 months I had an on-prem, bare metal Kubernetes cluster.
It was integrated into our internal provisioning tools and even had some documentation.

I spent the rest of 2016 working with internal dev teams to migrate applications to containers and talking to partners to help with support, monitoring, etc.
I started the sig-on-prem group within the Kubernetes community and was loved by many startups at the time because I was a customer (even if I wasn't a paying customer yet).

## A Kubernetes break

In 2017 my manager pulled me off of Kubernetes completely.
I changed teams and was now helping with internal initiatives I found extremely boring.

To stay involved with the Kubernetes ecosystem I wrote [Cloud Native infrastructure](https://cnibook.info) with Kris Nóva.
The book came out in the fall of 2017 and it was intentionally not a Kubernetes book.

The main idea in the book was [infrastructure as software](https://justingarrison.com/blog/2022-06-01-infrastructure-as-software/) which is the core idea behind Kubernetes controllers and things like GitOps.

In 2018 I was still not allowed to touch Kubernetes internally and I was getting very anxious.
I wanted to do more cloud things and my manager also did not allow me to be involved with our cloud migration efforts.

I hit a point when I knew I had to leave if I wanted to work on the technologies I was interested in.
In fall of 2018 I moved to Disney Streaming Services because I heard we were making a streaming platform.

When I interviewed, Disney+ was announced but it wasn't until after I started that we knew it was supposed to launch in 2019.
The infrastructure I was responsible for was all AWS based and built entirely on Amazon ECS.

This was great because it was still containers and I figured "how different could it be?"
It turns out it was very different from Kubernetes (especially in 2018).

We couldn't have launched Disney+ without ECS.
Kubernetes would have been the wrong choice at the time because we had a small infrastructure team (at one point only 2 of us), and we needed to offload as much as possible to Amazon.

We stablized and scaled the system for the first half of 2019 and launched Disney+ on November 6.

At that point I was pretty far from Kubernetes.
I didn't pay any attention to it for almost 2 years and outside of playing with it at home didn't know if I would ever go back.

## Amazon

A lot of things happened in my time at Disney Streaming and I left in March of 2020 (2 weeks after our successful UK launch).

I joined Amazon as a developer advocate for conatiners and got to work trying to improve all of our container services.
I started with ECS because that's what I was most familiar with and in 2021 we launched App Runner.

I still enjoyed Kubernetes, but was very disconnected from how it was evolving.

In Summer of 2021 Amazon split the containers developer advocate teams and I was given a choice of continuing to work with ECS or dedicating to EKS.
I decided to go with EKS because it's what I preferred and where I saw the most growth.

I focused mostly on scalability issues customers were having and took over the [Containers from the Couch](https://containersfromthecouch.com/) channel.

Internally I was working with [Karpenter](https://karpenter.sh) and [EKS Anywhere](https://anywhere.eks.amazonaws.com).
Large sale deployments and on-prem were my two passions to help Kubernetes and customers grow.

I learned a lot 2022-2024 and finally had some time to get involved with Kubernetes again.
Amazon has a lot of internal turmoil and focus changed frequently.

I spent the majority of 2023 helping customers understand how to reduce their cloud spend.
Karpenter consolidation was a big win for many of them because it could reduce waste, but it wasn't enough.

I did the math over and over again and realized that the cloud was just too expensive for medium to large scale customers.
Savings plans and reserved instances were still not as cheap or efficient as buying and managing servers.

In mid 2023 Amazon mostly disbanded the EKS Anywhere team.
There was a small group of core developers keeping the lights on for customers, but it was clear they weren't going to invest in it.

From my experience, on-prem is more financially stable than the cloud and it's where I wanted to work again.

## Sidero

I knew about [Talos Linux](https://talos.dev) from when Andrew [announced it in 2019](https://www.reddit.com/r/kubernetes/comments/aqt0u9/talos_a_modern_linux_distribution_for_kubernetes/).
It's the thing I wanted to exist for a Kubernetes Linux distro when I worked at Disney Animation.

I was at Amazon when Bottlerocket was announced and GAd and it felt very clunky compared to Talos.
I had lots of internal feedback for the Bottlerocket team and it was never accepted.

When Sidero launched Omni in 2023 I knew it was a better approach for Kubernetes management.
Everything Kubernetes was too focused on decoupled microservices and Omni was a monolith.

It simplified the operations drastically and I made multiple internal proposals to shift EKS Anywhere into more of a Omni-like platform.
I even proposed that Amazon should buy Sidero labs to repurpose the products and higher the people to jumpstart our products.
Amazon said no and in 2024 I joined Sidero.

I have been in and around Kubernetes for 9 years.
I deployed Kubernetes 1.2-1.5 at Disney and have watched the community and project grow immensely over time.

**Congratulations Kubernetes for making it to 10 years!**

I attribute the longevity to the early community leaders like Sarah Novotny, Joe Beda, and Tim Hockin.
People who I didn't know and didn't know me, but they still would help me figure out the project, community, and my personal career.

People like them are the reason I'm still involved with Kubernetes and their examples are reasons I try to give back my own time for people joining the community or tech in general.

## Congrats

I wanted to share my story for anyone who has been involved with Kubernetes or looking to get involved.
There's still a lot of work to be done and a lot of ideas.

I hope the next 10 years focuses on making Kubernetes easier for everyone to run, not just the cloud providers who have financial investment.
The vast majority of work done in the project is done by people who work at companies that make money directly or indirectly from the project and those incentives hold the project back.
