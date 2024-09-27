---
title: "21 More AWS Services They Should Cancel"
description: "Please Amazon 🙏 kill these services too."
date: 2024-08-05
images: [/img/aws-cancel-services-banner.png]
thumbnail: /img/aws-cancel-services-banner.png
draft: false
---

AWS has recently been silently removing services for new users.
They claim existing customers will not be affected for many of the services, but it is clear that the company is trying to reduce their overhead and trim some fat.

Since December 2023 they have deprecated 14 services, features, or versions of services.
Of course Amazon doesn't keep track of these changes and until someone makes a [killedbygoogle](https://killedbygoogle.com) for AWS we'll have to [hear about it from other customers](https://github.com/SummitRoute/aws_breaking_changes).
Services include Honeycode, Cloud9, CodeCommit, and a bunch of others you've never heard of.

So here's services I think AWS should cancel.
I'll start with the obvious ones and get more bold down the list.
More cuts are coming.
Be prepared for how you'll migrate.

What would you kill?
Let me know [on bluesky](https://bsky.app/profile/justingarrison.com).
Services crossed out on this list were announced deprecated after writing this post.

1. [Amazon Managed Blockchain](#blockchain)
1. [Amazon Workmail](#workmail)
1. ~[AWS App Mesh](#appmesh)~
1. [AWS Proton](#proton)
1. [AWS Elastic Beanstalk](#beanstalk)
1. [Amazon Lightsail](#lightsail)
1. [Amazon GameLift](#gamelift)
1. [Amazon Bracket](#bracket)
1. [Amazon CodeGuru](#codeguru)
1. ~[AWS Deep Racer](#deepracer)~
1. [Amazon Personalize](#personalize)
1. [Amazon Kendra](#kendra)
1. [AWS App2Container](#app2container)
1. [Amazon TimeStream](#timestream)
1. ~[Amazon RDS on VMware](#rds-on-vmware)~
1. [Bottlerocket](#bottlerocket)
1. [AWS Cloud Control API](#cloud-control-api)
1. [NAT Gateway](#nat-gateway)
1. [Amazon ACK](#ack)
1. [AWS CloudFormation](#cloudformation)
1. [AWS CDK](#cdk)

## Blockchain

I have no idea how this 6 pager was created and passed through the rigorous OP1 process.
Some PM pulled together a bunch of data and lied about it to leadership and they fell for it.

This is the exact thing I was referring to when I wrote about [How to Lie with Data](/blog/2024-08-05-how-to-lie-with-data).
It's a problem at any "data driven company" and when one group of people have all the power it'll happen.

## WorkMail

Even Amazon doesn't use WorkMail.
Why is this being inflicted on customers?

## AppMesh

This is an obvious service that got very little adoption and is already being replaced with VPC Lattice.
It's no surprise that App Mesh should be retired and probably should have been a long time ago.

## Proton

I worked at Amazon when Proton was being developed and all of the OP1 docs and 6 pagers didn't make sense to me.
There was a lot of data arguing for a platform engineering type team that would use it to build abstractions for the rest of the company.

The workflows and use cases were completely contrived and it was a new interface for CloudFormation.
Can we please stop pretending a new interface on top of a terrible service is going to work?

## Beanstalk

Beanstalk was great when it was created and people didn't know how to create CI/CD and there wasn't a proliferation of automated build tools.
In 2024 it's not kept up with best practices and people looking for something simple and automatic should look elsewhere.

It was partially replaced with App Runner and if Beanstalk wasn't so successful, and App Runner so unsuccessful, I'm assuming they would have already killed it.

## Lightsail

I actually really like Lightsail.
It's the simplified version of AWS with simpler pricing and keeps people using fundamentals.
But it'll never succeed at AWS.
There's not enough money or investment in it and it should be retired so someone else can build something better.
This is the only service I want AWS to cancel so it can get better.

## GameLift

The gaming industry has been reducing costs in many different ways and investing in a proprietary game server services is not what they're going to use going forward.
There are much better open source options and no one should tie their game success to something tied to a single vendor.

## Bracket

QLDB is shut down and Bracket isn't helping anyone learn quantum computing.
This is an obvious service to cut for something no one is asking for.

## CodeGuru

I thought this was already being retired.
Why is this still around?
This is obviously going to be replaced with Amazon Q and the longer they keep CodeGuru around the more trust they lose with customers.

## DeepRacer

This was a cool tech demo.
Not a product.

In the beginning this was a [halo product](https://architectelevator.com/cloud/lambda-is-a-halo-product/), like lambda, but now it's kinda embarrassing how little the tools have improved.

## Personalize

If I buy a toaster Amazon's recommendation engine will recommend more toasters.
Anyone that would use a personalization service based on Amazon's recommendation engine hasn't looked at any other options.
It's only a matter of time until this is rebranded under the Q umbrella (`sed 's/ML/AI/g'`) or shut down.

## Kendra

Kendra is already jumping on the LLM train and I know how painful "Enterprise search" can be.
But all of the examples I've seen look like they could use any number of other services or tools.

## App2Container

You created an app and want to run it in containers, but you refuse to learn how to package it.
This isn't going to work out well for you.

I understand enterprise applications are extremely complex, and I also think if you're not going to take the time to understand the platform where it runs you shouldn't be automating the migration.
This is another neat tech demo that somehow wrote enough documents to turn into a product and it should go away.

## Timestream

Timestream was announced and 2 years later came out.
It's a hosted version of InfluxDB.

I don't know if the delay was legal issues or lack of HA options for Influx, but anyone that waited around to realize it's just InfluxDB under the hood--which I think is a good time series database--must have been disappointed.
Influx is one of the easiest databases I've ever run and you don't need to pay Amazon premiums to use it.

## RDS on VMware

Anyone using VMmare an AWS deserves to pay out the nose for licensing.
The same goes for using AWS on VMware.

I have no idea how widely this service is adopted, but I have a feeling more than one DBA team was let go so companies could afford it.

## Bottlerocket

Amazon isn't good at Linux Distros.
If Amazon Linux wasn't the default supported option I doubt it would have ever been used.
A Linux distro that can only be used in one environment, AWS, with less frequent updates and more convoluted packaging options is a bad technology choice.

Bottlerocket takes it one step further by limiting where you can use the OS in AWS.
I am all for API driven Linux--I work at [Sidero Labs](https://siderolabs.com) after all--but this is poorly designed and not well maintained.
It'll also probably get huge adoption once it becomes the default for EKS and Karpenter.

It should be shut down before it causes a lot of pain for customers, or it should be completely re-written to follow an open API spec.

## Cloud Control API

A single, consistent API for all of AWS sounds like a good thing.
Until you realize that API is just a different interface for CloudFormation and is stateful.

I know some tools started adopting this API, but I have no idea where their migration stands and how it's working out for them.

## Nat Gateway

This is possibly the most customer hostile service AWS runs.
It's required for basic functionality and has predatory pricing.
Please, please, please get rid of this service and make it a built in VPC option without the price gauging.

## ACK

Everything should be a Kubernetes CRD has been an idea floating around for a while.
ACK was an attempt to autogenerate Kubernetes controllers from the service SDK's and make the service teams own it.
They didn't want to own it and the API descrepencies between services made a lot of edge cases in the generated code and hard to onboard new services.

If you want this, use Crossplane instead.
It has broader support for infrastructure providers (not just AWS) and has a more flexible way to build "packages" to group infrastructure resources together.
At least CDK doesn't use CloudFormation.

## CloudFormation

There are very few people and companies that I know like CloudFormation.
None more than Amazon.

I think an infrastructure as code service is a good idea, but I think CloudFormation is a terrible interface and should be completely replaced.

## CDK

I know there are some very passionate CDK users, but it's yet another wrapper on top of CloudFormation and if CloudFormation needs to be deprecated then CDK needs to too.
There are [plenty of other people](https://sst.dev/blog/moving-away-from-cdk.html) who are getting disenchanted with it and I think there are other better options that exist.
Maybe the CDK can stay in some form on top of whatever replaces CloudFormation.
