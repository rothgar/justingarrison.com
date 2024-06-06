---
title: "Kubernetes 2.0"
description: "Breaking changes I would like to see in Kubernetes 2.0"
date: 2024-06-06T12:00:00Z
images: [/img/k8s-2.0-banner.png]
thumbnail: /img/k8s-2.0-banner.png
draft: false
---

I just wrote about [my path with Kubernetes]({{< relref "2024-06-06-ten-years-of-kubernetes" >}}) and how I've seen the project grow.
It's probably a good time to talk about what could be next.

## Kubernetes 2.0

I would love to see some breaking changes in Kubernetes.
If we were building a Kubernetes 2.0, the top 4 things I would want to see changed are:

1. Optional etcd
1. Versionless
1. More monoliths
1. K8sfile

### etcd

Kubernetes is an etcd API.
It was a great idea to make Kubernetes use a key value store instead of a traditional relational database or something like GraphQL.

But etcd has consistently been a bottleneck for the project and a hindrance for operationalizing Kubernetes.
It is inentional complexity to sell cloud services and it should be removed.

The only thing that really prevents people from self hosting Kubernetes is etcd.
They don't have the operational knowledge to run it on their own and it's a niche database that they won't hire experts to gain that knowledge.
So they outsource that knowledge to cloud providers.

But companies like Google don't use etcd.
They can shim the etcd API to whatever bespoke, internal key value storage system they _do_ have experties in.

In my opinion Kubernetes should make a local database like SQlite the default database.
Make it simple to operate, understandable to backup and restore, and remove power from the cloud providers who can operate bespoke databases.

[Kine](https://github.com/k3s-io/kine) has proven that it can work without breaking changes but it should be the default.
Almost every customer I worked with at AWS gained no benefits of etcd being the data store behind Kubernetes.

A single node SQlite with EBS snapshots or HA RDS instance would have served them better.
It will be easier to operate and from people I've talked to, will provide better scaling numbers.

I'm happy to be shown why I'm wrong from people who know more of the details.

### Versionless

The best feature about ECS is the API is completely versionless.
As a user you never have to upgrade it.
If you want to stay on an old version you can.
If you need new features, you upgrade your agent and the ECS API updates with you.

I've pitched this idea at every company I've worked for.
Base infrastructure should not have versions.

DNS, DHCP, NFS have all been extremely stable interfaces that we are able to build on top of without worrying about the API changing.
Even NFS, which has versions, could use the older API with configuration.

Kubernetes has been around long enough that we should have a versionless, stable-only API.
The only changes that happen are new features.
No v1alpha1, no beta, just stable APIs that can be supported going forward.

Kubernetes long term support isn't the solution.
That only lets users delay the pain.
We need a way in Kubernetes to configure only v2 API options and let the Kubelet version determine the version in use.

If etcd is why users moved to cloud hosted Kubernetes, upgrades is what keeps them there.
Doing Kubernetes upgrades 3x per year is hard for home lab users.
It's impossible for large companies with millions of dollars riding on top of a moving target.

Versionless Kubernetes would make Kubernetes easier to operate.
Combined with SQlite by default it would be an extremely stable foundation for even more workloads in the future.

### More monoliths

The project has grown by splitting ownership of components and building loosely coupled controllers that coordinate through the API.
This has added an extreme amount of flexibility at the cost of complexity.

Microservices are harder to operate than a monolith and the vast majority of Kubernetes users don't need the independent scaling abilities of microservices.
The project optimized for developer ownership at the cost of user ergonomics.

Kubernetes started as a monolith and was broken up over time because there were too many features and extensions that couldn't be owned by the core project.
We have learned a lot about where extension should and should not exist.
Taking what we've learned and closing off some unmaintainable extensions could be a great first step.

I also would like to see more monoliths for managing Kubernetes.
Projects like Cluster API went with microservices by default and the usability of that project shows.
It's too complex unless you're going to be selling it.
It's not for end users.

We should also have more monolithic resources.
The deployment + service combination shouldn't exist in Kubernetes 2.0.
Most of the successful internal platform solutions I've seen have a single resource that couples together multiple Kubernetes resources.
Just like "containers" are a combination of 10+ Linux kernel features, Kubernetes needs more, monolithic, top level resources.

Monolithic resources would be more adaptable to unexpected workloads.
Kubernetes is good at stateless, web-based workloads today but current trends for more HPC/AI workloads is showing we need to adapt faster to what users want.

### K8sfile

I want Kubernetes to have an easier way to deploy a complete cluster as an artifact, and a way to reuse those artifacts with changes.

Just like the Dockerfile allows a `FROM` command there should be a way for Kubernetes clusters to share configuration and holistically know a spec for what's deployed.
I want to be able to do something like:

```bash
FROM google/gke:v1.30.1

ADD intuit/argocd.chart
INSTALL helm/k8s.io/metric-server
INSTALL helm/k8s.io/autoscaling/karpenter
```

Then build and release an artifact that lets me run deploy that in multiple environments.
Ideally with optional defaults for things like the operating system and it should work outside of the cloud.

Multiple provisioning systems (including cloud providers) could support the API that injests this artifact and it could make trying new things and moving clusters easier.
It also helps the community share a simplified spec without needing to learn the implementation details.

I believe the main reason Docker has been successful has been the container registry.
Being able to start from examples and share your own implementation makes it so much easier to learn.
