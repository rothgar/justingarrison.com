+++
title = "Infrastructure as software"
description = "What is beyond infrastructure as code?"
date = 2022-06-01T08:00:00Z
image = "https://justingarrison.com/img/infrastructure-as-software-banner.png"
+++

![A picture of a breadboard with wires and lights](../../img/infrastructure-as-software-banner.png)
Photo by [Victor Aznabaev](https://unsplash.com/@avkshift?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/s/photos/circuit-board?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)

Infrastructure has changed a lot, but the mantra of Infrastructure as Code (IaC) has been the goal for organizations for far too long.
The idea that you can create infrastructure with text was a big shift for the industry 10 years ago, but it hasn't held up to the test of time.

When writing [Cloud Native Infrastructure](https://cnibook.info) the idea of Infrastructure as Software (IaS) was the main takeaway we wanted for readers.
It was the main idea behind what we thought the difference between organizations working with a cloud native mindset and people with an automation mindset.

## What infrastructure as software is not

The term isn't new, but let me say what I _don't_ consider IaS.

* Writing your infrastructure spec in a general purpose coding language (e.g. AWS CDK, Pulumi)
* Infrastructure as data
* Using a managed service to deploy infrastructure without 2-way reconciliation (e.g. AWS CloudFormation)

### Infrastructure as code with software

Writing your IaC code with a general purpose programming language is fine, but it's not much different than using a DSL.
Using a general purpose programming language brings all the benefits and drawbacks of general purpose programming languages.

The biggest benefits for using the AWS CDK or Pulumi is your can have your developers write the code that creates infrastructure, and you can use coding practices to create libraries other people can share.
But, using a general purpose programming language has downsides like runtime version management and non-deterministic outputs.
Once I have the power to generate my code, it's more likely that I'll make a mistake with my assumptions or lack of familiarity with the code generator.

Writing an application with typescript and infrastructure code in typescript means if you want to upgrade your version of typescript you need to upgrade both at the same time.
Keeping your IaC code up to date becomes another maintenance task that can have conflicts with your application code.
Application code changes a lot more frequently than infrastructure code and when your IaC is compiled with a different tool and language you can upgrade them independently.

What if you want to re-write your application in a different language?
You probably want to re-write both even if the infrastructure doesn't require any changes.

What do you do when the organization scales and you need to transition infrastructure ownership to a new team?
Infrastructure engineers are not as familiar with languages like typescript or node and you will likely need to re-write the infrastructure into a language they know instead of train them in a new language and hope they don't make mistakes.

Writing infrastructure as code with general purpose languages also means you can't easily share infrastructure patterns between services that are written in different languages.
With terraform, my HCL modules worked no matter what language the service is written in.
If I write IaC in python and you use typescript we can't integrate our reusable infrastructure modules together.

### Infrastructure as data

Infrastructure as data is all about separating your declarative requirements from the implementation code.

I can write IaC with terraform like this

```
terraform apply
```

Or I can separate out my requirements from the terraform code into variables which represent the unique data for me.

```
terraform apply -vars-file data.tfvars
```

General purpose Infrastructure as Software requires you to separate out your data and code.
Any good software will consume data and do work based on that data.

In the past we used to hard code our database servers and in IaC we would hard code our hostnames and IP addresses too.
Infrastructure as Data relies on general purpose infrastructure reconcilers to create infrastructure.

This is an implementation detail of Infrastructure as Software, but it doesn't explain why IaD works or how you should create your own reconcilers.
For a majority of people using IaD they fall back to combining their data with some form of automation or templating their data into something that can be compiled.
With Kubernetes this is the job of helm charts and kustomize.

### Managed services

Using a managed service to create your infrastructure is fine for IaC, but it falls short from what IaS is capable of.
A managed service like CloudFormation will take in your data (written by hand or generated from CDK) and apply it.

It's an Infrastructure as Data pattern but it's only a 1-way sync (aka automation).
CloudFormation requires you to send it data that it can deploy, but when things change CloudFormation is blissfully ignorant and doesn't correct the discrepency from your desired state and the actual state.

CloudFormation has drift detection but it requires manual interaction to detect drift and then to correct the drift.
Infrastructure as Software does this automatically and continually reconciles your desired state and actual state.
If Cloudformation had an option to continually reconcile state and sync state into the stack then it would be an implementation of Infrastructure as Software.

## Infrastructure as software

So, what is infrastructure as software?
IaS is software that manages your infrastructure continuously.

The difference between code and software is code is just bits on a disk.
Software is bits + electricity.
Software is your code in action.
It's continually running to process data.

Typically, IaC is only applied when code files change.
You update your IaC files, push them to git, and some CD process (usually Jenkins + bash) runs to "apply" your changes.
That's not good enough for larger teams or when a lot of infrastructure is being managed.

Drift happens.
If you've never had to manually repair a terraform state file due to drift that couldn't be reconciled consider yourself lucky.
It's only a matter of time.

Infrastructure as Software reads your data, stores it, reads the infrastructure state, stores it, and then reconciles the two to match.
It's a 2-way reconciler that knows how to imperatively get from one state to another.

Other systems have done this for years.
Git is a commonly used reconciler with files.
When you do a rebase or merge, git can figure out how to get you to a desired state imperatively.

Take that same pattern, apply it to infrastructure APIs, and do it all the time.
IaS watches the infrastructure too, and it runs the reconciler whenever desired or current state changes.
The reconciler runs whenever state changes.
Not just file changes like IaC.

So, what are examples of IaS?
The two best examples I know of are:

* Kubernetes controllers
* GitOps

Kubernetes controllers is what we used as examples in Cloud Native Infrastructure.
While writing the book we found lots of other examples inside companies that did similar things.
The default Kubernetes controllers are very specific to managing Kubernetes resources, but lots of people have been adapting the API and data storage capabilities of Kubernetes for general purpose controllers.

Using Kubernetes CRDs + a controller to manage infrastructure is the idea behind [crossplane](https://crossplane.io/), [AWS Controllers for Kubernetes (ACK)](https://github.com/aws-controllers-k8s/community), and GitOps.
It's also been used for managing state of applications in Kubernetes with [operators](https://kubernetes.io/docs/concepts/extend-kubernetes/operator/).

GitOps is a newer idea for using a general purpose reconciler to manage more resources.
You can manage applications, Kubernetes clusters, or any CRD.
GitOps has some [specific principles](https://opengitops.dev/) that can help you think about what properties your controllers should have.

There are multiple options for controllers that implement GitOps.
[Flux](https://fluxcd.io/) and [Argo](https://argoproj.github.io/) are the two most popular GitOps controllers I know of.
GitOps is an implementation of IaS that is useful for people to transition from IaC.

If you want to hear more I recently just did a talk about Infrastructure as Software and GitOps at GitOpsCon.

{{< youtube hULomz2FU40 >}}

If you'd like to learn more about Infrastructure as Software my co-author [Kris](https://twitter.com/krisnova) has a ton of talks about it too.
Of course you're welcome to read Cloud Native Infrastructure book for the full details.

The infrastructure industry needs to move past Infrastructure as Code.
Instead of creating new practices and tools we need to learn how to manage infrastructure with software practices and lifecycles that are proven to work at scale.

