---
title: "Terraform vs. GitOps vs. System Initiative"
description: What are key differences between infrastructure management options in 2023
date: 2023-08-29T22:01:58-07:00
images: [/img/terraform-gitops-si-banner.png]
thumbnail: /img/terraform-gitops-si-banner.png
draft: false
---

Infrastructure has come a long way in the past 5 years, and yet infrastructure as code has been stuck with the same promises and tools for much longer.
The advent of infrastructure APIs was revolutionary and shifted the status quo to writing code to create and maintain infrastructure instead of the manual processes that were widely used just a few years before.

The democratization of containers made the industry forget about measuring sysadmin skills in server uptime and instead move to how quickly and frequently you replaced your infrastructure.
We took declarative configuration management and traded it for user-data bash scripts and pre-baked AMIs.

Servers and configuration management are still thriving, but there's confusion around what infrastructure automation tools you should be using.
Each tool comes with different strengths and weaknesses depending on what you're trying to accomplish.
So let's look at some of the main contenders and determine the appropriate use for each.

## Terraform

Terraform is one of the most commonly used infrastructure management tools.
It has a broad ecosystem of modules—libraries used to provision infrastructure—and a well-known, portable workflow with plan and apply commands.

Terraform uses a domain-specific language (DSL) called Hashicorp Configuration Language (HCL), which is used across the suite of Hashicorp products.
HCL mostly looks and feels like human-friendly JSON when you get started, but after you use it for a while you realize just how different it is.

HCL has loops, conditional statements, and much more that separates it from the humble "configuration" representation.
The language has grown in complexity to cover a variety of use cases in an attempt to keep the user experience simpler with regard to the tools that consume it.

Getting started with Terraform is a great experience.
However, day two activities are difficult because as infrastructure complexity grows, you end up needing to wrap Terraform with tools like Terragrunt to help keep your code DRY.
But wrappers are another tool to keep updated, and as Terraform, HCL, and infrastructure evolves, you have to create a matrix of supported versions and modules just to ensure you're able to keep using Terraform.

Templating infrastructure code isn't enough.
When you have mission-critical production systems, you need more than a plan.
You need real tests and more accurate state representation.

The state of Terraform state management is a thorn you'll have to deal with eventually.
As common as it is to throw the state in s3, you'll soon discover the limits of using a JSON file as a database.
It could be one of a dozen things, but whatever it is, it will stop all deployments until someone goes spelunking through the state file to fix it.
If you've never had to edit a Terraform state file and hope your next apply works during an outage, count your blessings.

Terraform also lacks functionality, such as built in policy enforcement.
If you're a HashiCorp enterprise customer, you may pay for access to Sentinel.
It integrates into the HashiCorp products, but it's clearly an afterthought.
Writing policy in HCL might feel familiar for seasoned Terraform developers, but it lacks the expressiveness of a policy-specific language like Rego or a general purpose programming language.

Terraform is a wonderful Infrastructure-as-Code tool, until it's not.
Ultimately, the complexity of infrastructure will outgrow HCL, or the proliferation of state files will cause headaches as outputs and `terraform_remote_state` data retrieval make you wonder why you can't use a real database.

Terraform is a single-player tool in a multiplayer world.
It's great for infrastructure management when teams are small and complexity is under control.
But once you try to hide complexity in wrappers, abstractions, and deploy pipelines, it's time to look for other options.

AWS CloudFormation isn't much better.
While it does have automatic state management, it's not worth the inferior workflow and slower provisioning performance.
If you manage any infrastructure outside AWS, the CloudFormation extensions are severely lacking.

CloudFormation hides some of the bad syntax authoring with the Cloud Development Kit (CDK), but generating declarative configuration from a general-purpose programming language is not going to solve the complications of StackSets or multi-account, multi-region management.

CloudFormation is wonderful for templates and variables.
If you need 100 independent things that look similar and don't want to think about state files or plan runs, CloudFormation is a great option.

## GitOps

[GitOps](https://opengitops.dev/) tries to eliminate one of the biggest pain points of Terraform by reducing resource drift.
The longer it has been since something was deployed, the more likely what exists in production is not what Terraform thinks exists.

Instead of only updating state when infrastructure is created, GitOps takes the Kubernetes controller approach and does continuous reconciliation.
As the GitOps controller reconciles infrastructure resources with the desired resource declaration, it syncs state back to the Git repository, which now becomes the "source of truth."

I call this method of infrastructure management "infrastructure as software."
But it shouldn't be used for everything and has many shortcomings of its own.
Kubernetes is designed for controllers to work with continuous polling and watching in mind.
Try to scale that approach on any cloud provider's APIs, and you'll learn all about throttling and limits.

The first question with GitOps is, What should be synced to the Git repo?
Should pod replica counts be synced back to the Git repo?
If you run any sort of automatic node or pod scaler, then the answer is certainly no.
You'd end up with hundreds or thousands of Git commits coming from the controller, causing endless rebasing and conflicts.
If not everything is synced back to Git, how much truth is there?

Another problem is GitOps is keenly focused on Kubernetes clusters and resources.
While Kubernetes can create external resources such as load balancers and storage, the experience of provisioning generic infrastructure through tools like Crossplane is far from elegant.
It may be familiar for a Kubernetes administrator, but extending Kubernetes to provision infrastructure in multiple regions, accounts, or clouds will cause cluster proliferation and permissive permissions that no one cares to think about.

GitOps works for Kubernetes, but outside of that ecosystem, you end up writing HCL to manage everything else.
You also have no consistency with outputs to share resource state for in-cluster vs. out-of-cluster infrastructure.
You turn everything into a Kubernetes problem, and everyone who needs infrastructure needs to be a Kubernetes user.

GitOps is fundamentally a single-user experience.
You can separate your users into different clusters or subfolders, and each team can choose their own YAML generation adventure, but is a Git repo better than a JSON file?
Why is infrastructure stuck using tools we'd never use for basic applications with similar complexity and criticality?

You should be using a fully featured database with compatibility for all of your infrastructure.
You can't require Kubernetes to be available to create the rest of your infrastructure.
You will end up with two management systems: the one that creates bootstrap Kubernetes clusters and the one that deploys from Kubernetes.

## System Initiative

[System Initiative (SI)](https://systeminit.com) is a new take on infrastructure management.
Don't be fooled by the screenshots—this isn't your typical diagram-to-infrastructure tool from the past.
The vast majority of those old tools export HCL or CloudFormation and leave all the messy maintenance stuff to you.
They might track some basic deployed state of your infrastructure or allow partial imports from a running system, but they all fundamentally miss the mark in solving ongoing infrastructure management problems.

SI not only provides an understandable user interface for your resources—called assets—but it also stores a representation of those assets in a database.
Not a JSON file nor a Git repo, it is a proper, up-to-date database that can track dependencies and allow safe experimentation across all of your infrastructure.

Terraform plan can be great for an individual's workflow, but making too many changes at once is not the feedback loop it was at the small scale.
Attempting to explain a large change to a coworker asynchronously via a pull request is not going to end with a thorough PR review.

![Cartoon of stick figures playing while terraform plan runs](/img/terraform-plan.png)

System Initiative makes multiplayer infrastructure management safer and part of its core functionality.
If you need to make a change, you create a change set and send a link to a coworker.
It brings pair programming together with visual infrastructure management.

Because SI assets are built with typescript, if you need to extend an asset definition or change validation, it's right there.
Need to add a policy?
You don't need to switch tools, contexts, or even your browser tab.
It can be done while you create your change set.
A typical workflow for updating a core Terraform module or Kubernetes CRD has many more layers and synchronized pull requests just to get back to where you started.

By using modern application architecture and technologies, SI opens the door to more people owning their infrastructure's fate.
It doesn't make application developers learn HCL or Kubernetes, and it improves the UX to not be a third-rate "DevOps" job.

System Initiative has the potential to bring application and infrastructure developers to the same table, speaking the same language and collaborating.
This is what DevOps was meant to be—not automation tools for ops and platforms for devs, but fast, safe, and reliable infrastructure and applications for everyone.

The biggest drawback I see with SI right now is it's not ready.
The ecosystem is small.
It's not stable for production workloads, and many of the ideas are not fully solidified.

So, while Terraform and GitOps have their places, if you are tired of the limits of HCL and JSON state, or the burden of Kubernetes YAML has you down, check out System Initiative.
I hopeful the next wave of DevOps and infrastructure tooling can bring more accurate state representation, easier experimentation, and no more JSON state files.

