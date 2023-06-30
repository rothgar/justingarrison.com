---
title: "Patterns vs Platforms"
description: "You don't have to build a platform."
date: 2023-06-29T21:17:25-07:00
images: [/img/platform-banner.png]
thumbnail: /img/platform-banner.png
draft: true
---

The platform engineering hype wave is almost over—thank you AI, but too many companies are still full steam ahead building one.
Why do companies think they need a platform, and what's another option?

## What are platforms?

Companies believe the way to make more money is to ship code faster.
This means they need to either hire more developers—too expensive—or reduce the time it takes for code to be put into production.

They tried that DevOps thing and now CI/CD has been automated and they've achieved DevOps, and it's not good enough.
So they have to attack the problem from the other side of the Software Development Life Cycle (SDLC) and that means they need to build a platform.

They don't know what they want, but it has to be a platform.
In 2023 this means they usually want something that's declarative, containerized, and Kubernetesed (the past tense verb of Kubernetes).

The old platform they built in 2018 was garbage.
They built it themselves with RPM/DEB/JAR files and it had something to do with immutable.

It was all custom, never fully documented, and never achieved 50% adoption.
But this time it'll be different.
This time we have Kubernetes!

The main goal of platforms—then and now—is to reduce developer overhead.
To let them focus on writing code and not all the messy details about why and where that code runs.
It should hide the complexity to let SRE worry about availability.

Even though we would never claim to "throw code over the wall" anymore, we've somehow recreated the silos from yesteryear.

A "platform" is the production environment where stuff runs.
It's the API that CI/CD calls.
It's the tooling, monitoring, and observability that are combined together that allow things to work.

And it's built by a team of platform engineers.

The platform team is like the database administer (DBA) team.
It's centralized to keep costs low with all the platform expertise in one place.

Centralization is the easiest way to manage this type of function for most orginizations because they can reduce the overhead to a handful of people, they can manage them with a single manager, and they can reduce the inputs and outputs of the team to a single queue.
And just like the DBA team, they will be overrun with requests, they will have an endless backlog, and they'll never get ahead.

Unlike the DBA team, the platform team will fade away after the next migration.

## What came before platforms?

Before we had platforms we had templates.
And by "templates" I mean there was an internal repo with a Jenkinsfile that every time you created a new app you would copy that Jenkinsfile into your new repo and modify it.

That was if you were lucky enough to have a version of Jenkins that used Jenkinsfiles.
Most of the time you had to open the Jenkins web interface and copy a pipeline.
Fully non-declarative and no way to track changes.

Templates were just working patterns.
Someone got it working and everyone else started from that.

In our custom environment, with our requirements and limitations, there were only a handful of known-good patterns.
Everything else had to start there.

Then, someone made a CLI that automatically spit out the Jenkinsfile you wanted with something like

```
repo init
```

Later the init command included other template files for things like a README, a .gitignore, and other boilerplate needed to get started.
It was probably written in bash or node because why not.

As more groups started to experiment with more types of services written in different languages the tool was re-written to accomidate more flags.
This was going to become the ultimate CLI, but the person writing it left, got bored, or got inundated with new features and it was never finished.

And it was never documented.

And then the company had to re-platform.

If there's been one thing that has been constant in my 20+ year in tech, it's that we're always in a state of migration.
It never stops.

So why will it stick this time?

## The Kubernetes platform

Because Kubernetes is extensible it can be used for anything.
So we try to use the "anything API" for everything.

The building blocks are lighter weight because the patterns already exist.

I can create brad new resources with YAML.
I can make those resources do things with a reasonably small amount of code (dozens or hundreds of lines).
I can even make those resources do things to external APIs with open source controllers like [Crossplane](https://www.crossplane.io/).

Then with another few dozen lines of code I can have a custom CLI that used to take 6+ months to build.

This ease of extending gives us an idea that this time the platform will stick.
This time we won't have to migrate.
We can keep extending the platform in new ways and it'll always scale to our needs.

The core Kubernetes resources are good enough and the platform bits we have to build are minimal overhead.

But the reality sinks in that you could end up with dozens or hundreds of Kubernetes clusters.
You won't have time to extend Kubernetes because you'll be upgrading clusters and plugins until the end of time.

You'll spend so much time checking compatability of components you'll build more tooling to manage Kubernetes clusters than extending it.
This is why [GitOps](https://opengitops.dev/) and [Cluster API](https://cluster-api.sigs.k8s.io/) were created.
And the app teams will hate you.

You will either become a bottleneck for functionality they can't have, or you'll be nagging them to migrate to a new cluster, API version, or some other supporting format.

## Other options

It's very refreshing in the serverless/lambda world that there are no platform teams.
Lambda functions and infrastructure is so closely intertwined that you cannot separate them.

They deploy with the same CLI from the same repo.
Application code and infrastructure code co-exist and it makes perfect sense why the [AWS Cloud Development Kit](https://aws.amazon.com/cdk/) is so popular with these developers.

In the Kubernetes world we have Pulumi which is great, but because we have a platform team we tend to separate our application code from our infrastructure code.
When both are managed in the same repo, by the same team, with the same deployment tool the platform fades away.

Tools build barriers and until platforms use the same tools as the applications there will always be silos.

With Lambda there's the [Serverless Framework](https://www.serverless.com/) or [AWS SAM](https://aws.amazon.com/serverless/sam/) and for AWS container services there's [AWS Copilot](https://aws.github.io/copilot-cli/), but I've never found a tool as flexible or complete for Kubernetes.

If Kubernetes is my platform API then all infrastructure I need to provision has to have some CRD representation in the cluster.
You can go the terraform route and define all internal and external resources, but getting application developers to write or care about terraform is not the solution either.

Even if you can declare all of the infrastructure you're still going to be missing external dependencies like PagerDuty schedules, Datadog alerts, and any other resource you depend on.

These tools are not a platform.
In many ways we've tried them in the past and were unsuccessful.
For environments that treat applications and infrastructure the same they were wildly sucessful.

CLI wrappers for application and infrastructure deployments is the sweet spot between patterns and platforms.
Your platform team only has time to manage Kubernetes so let them vend minimal Kubernetes—just like the DBA team does for databases.

If you don't have a Kubernetes based platform then you don't need a team to manage it for everyone.
Application teams are probably capable of managing it for their needs if they deem it necessary.

## What needs to be platformed?

The only things that really need to be centralized are the things you need to audit.

Security and availability should be your only blockers.

When the next CVE comes out you need to have a way to report on what applications are vulnerable.
When the site goes down you have to make sure the problem doesn't repeat itself the same way.

A security platform has multiple layers, but as long as common patterns are followed it can probably stay as a set of auditing tools.
When new technologies are introduced teams can consult with security and added to the patterns for other applications to use.

Reliability needs to be well defined based on business needs and should be visible to everyone.
If only my team ever sees my reliability metrics then dependant teams will have a very difficult job knowing what their SLOs should be.

Don't build a platform because you think you need one.
If you can, let applications manage infrastructure with the same tooling as applications.

If your applications can use Kubernetes basics—compute, load balancer, disk—then by all means use Kubernetes.
But avoid making it the everything API just because you can.

It's a lot of fun, until you have to upgrade it and migrate all applications 3 times a years.
