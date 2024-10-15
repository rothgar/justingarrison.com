---
title: "Kubernetes on Synology NAS"
description: Running a Kubernetes API on a Synology is harder and easier than it sounds
date: 2024-10-14T20:53:31-07:00
images: [/img/k2d-synology-banner.png]
thumbnail: /img/k2d-synology-banner.png
draft: true
---

I use a Synology for my primary home storage.
It's one of the few services in my home lab that I rely on and don't mess with too much.
Having a low powered appliance for storage is a great way to use it for fewer things.

But the downside of having a bespoke, single-purpose appliance is I have bespoke management tools.

I use the Synology for [Kubernetes storage](https://github.com/SynologyOpenSource/synology-csi) from my other clusters, but I also run some containers from the Synology too.
Historically, I've used bash scripts to run and update containers, but this is extremely annoying to SSH in to query and pull updates.

I thought about running the Synology as an exported `DOCKER_HOST` but even on my private network running an unauthenticated root lovel API doesn't seem like a good idea.
The other option of [running k3s](https://github.com/fenio/k3s-synology) on a Synology makes the device even more of a snowflake than it already is.
I want to avoid making it difficult to run OS updates, and manually compiling kernel modules isn't my idea of a good time.

## Kubernetes translation with k2d

[k2d](https://k2d.io) is different than other Kubernetes options.
It runs a Kubernetes-like API on top of Docker.

This translation layer give you enough Kubernetes to remotely manage workloads but doesn't implement everything.
The resources it does implement are:

- Namespaces
- Pods
- Nodes
- Deployments
- Persistent Volumes
- Persistent Volume Claims
- ConfigMaps
- Secrets
- Storage Classes

Which isn't full Kubernetes, but that's excatly the point.
Just enough Kubernetes to make it familiar and useful for my use case.

## Deploy k2d

Because it runs as a container it's extremely easy to deploy.

```bash
IP=$(ip -4 addr show scope global \
    | grep inet | awk '{print $2}' \
    | cut -d/ -f1 | head -n 1)
docker run -d \
  --name k2d-k2d \
  --network host \
  --restart always \
  --env K2D_ADVERTISE_ADDR=$IP \
  --env K2D_SECRET=YOUR_OWN_SECRET \
  --label resource.k2d.io/namespace-name=k2d \
  --label workload.k2d.io/name=k2d \
  --volume /var/run/docker.sock:/var/run/docker.sock \
  --volume /var/lib/k2d:/var/lib/k2d \
  portainer/k2d:1.0.0
```

Next you need to fetch your kubeconfig file from the k2d API.

```bash
curl -H "Authorization: Bearer $(echo -n 'YOUR_OWN_SECRET' | base64)" \
  --insecure https://$IP:6443/k2d/kubeconfig > ~/.kube/k2d
```

Now I have a Kubernetes interface on my Synology from anywhere on my network.

```bash
k get pods -A
NAMESPACE   NAME            READY   STATUS    RESTARTS   AGE
default     ghstats         1/1     Running   0          11h
default     homebridge      1/1     Running   0          36d
default     homeassistant   1/1     Running   0          68d
k2d         k2d             1/1     Running   0          73d
default     vmetrics        1/1     Running   0          307d
default     grafana         1/1     Running   0          441d
```

One thing I love about this approach is of course I can manage the node with `kubectl`, but I can also still use `docker` if I want.

## Improvements

Here are some things I'd love to see in k2d to make it even better.

- Support for `-o wide` [output for resources](https://github.com/portainer/k2d/issues/86).
- Support for [CERT aliases](https://github.com/portainer/k2d/issues/87) so I can use hostname or IP address.
- Support for [resources aliases](https://github.com/portainer/k2d/issues/88) (e.g. `k get po`) which currently is haphazardly supported.
- Support for CronJobs. Jobs has a [long-standing, unmerged PR](https://github.com/portainer/k2d/pull/46).
- [Ingress support](https://github.com/portainer/k2d/issues/16).
- [Metrics support](https://github.com/portainer/k2d/issues/89) so things like `k top pod` work.
- [Selective CRD support](https://github.com/portainer/k2d/issues/90) for things like [cert manager](https://cert-manager.io) and [external DNS](https://github.com/kubernetes-sigs/external-dns).

I still need to test if LoadBalancer services work with something like MetalLB in ARP mode.
It hasn't been a blocker yet, but could replace the need for

k2d isn't an [open source license](https://github.com/portainer/k2d/blob/develop/LICENSE), but that doesn't bother me for my use case.
