---
author: "Justin Garrison"
title: "Exposing Services using Ingress with Kubernetes <= 1.5"
description: "This article has not been updated for Kubernetes clusters that use RBAC for API authentication (versions 1.6+)."
date: 2016-06-01
images: [/img/og-image.png]
thumbnail: /img/og-image.png
draft: false
---

NOTE: This article has not been updated for Kubernetes clusters that use RBAC for API authentication (versions 1.6+). I am leaving this article here for reference but you should be aware of the limitations of this guide.

Kubernetes is great and running and maintaining pods. It can schedule fast and has a great API. But getting access to your pods with on-prem installations has been a challenge. In the past people have solved this by manually mapping exposed service ports and essentially keeping a spreadsheet of port conflicts. Then they’d use the [kube-proxy](http://kubernetes.io/docs/admin/kube-proxy/) to make sure their traffic is routed to the right node and pod. But there’s a better way!

I had been struggling with figuring out how to expose kubernetes services with the new [ingress resource](http://kubernetes.io/docs/user-guide/ingress/). I finally have failed enough times I think I can share what I’ve learned with others. The below steps assumes you have at least kubernetes 1.1 installed. It should work equally well with bare metal, VMs, or [localkube](https://github.com/redspread/localkube)/[minikube](https://github.com/kubernetes/minikube).

First create a deployment with

```
kubectl run microbot --image=rothgar/microbot:v1 --port=80
```

This creates a new deployment named microbot. Deployments are great because they’re versioned and can be used later for rolling upgrades. The deployment will create a ReplicaSet (or ReplicaController on 1.1) which will in turn create a pod from the image specified. All we need to do is tell it the image we want to run and what port that container is expecting traffic on.

Check out all the stuff that one command created for you. Notice the ReplicaSet (rs) has a version which makes future upgrades easier.

```
kubectl get deployments,rs,poNAME                     DESIRED CURRENT UP-TO-DATE AVAILABLE AGE
microbot                       1       1          1         1  6s
NAME                     DESIRED CURRENT AGE
microbot-1276362308            1       1  6s
NAME                       READY   STATUS RESTARTS AGE
microbot-1276362308–c255i    1/1  Running        0  6s
```

Ingress maps to stable [service IPs](http://kubernetes.io/docs/user-guide/services/) (not pods) so you’ll want to create a service from your deployment. You can do that by “exposing” the deployment. We need to say what we want to expose (deployment) what port we want the service exposed on (port) and what port it should map to on the pod (target-port). Do that with

```
kubectl expose deployment microbot --port=80 --target-port=80 --type=NodePort
```

On bare metal or on-prem VMs you need to use type [NodePort](http://kubernetes.io/docs/user-guide/services/#type-nodeport). This will expose your service on a high level port of all your nodes (default to 30000–32767). The port will be randomly selected and thanks to ingress pods will be managed so we don’t have to worry about port conflicts or additional ports.

Before we make an ingress controller and mapping lets make sure we can get to the service without it. First find the random port that the service was mapped to.

```
kubectl describe svc microbot | grep NodePortType: NodePort
NodePort: <unset> 31649/TCP
```

Then find the node your pod was scheduled on

```
kubectl describe po microbot-270567491–9jb5e | grep -i nodeNode:      192.168.99.100/192.168.99.100
```

Now check that your service is routing to your pod correctly with curl. You should see the sample output below.

```
curl -L 192.168.99.100:31649<!DOCTYPE html>
<html>
  <style type="text/css">
    .centered
      {
      text-align:center;
      margin-top:0px;
      margin-bottom:0px;
      padding:0px;
      }
  </style>
  <body>
    <p class="centered"><img src="microbot.png" alt="microbot"/></p>
    <p class="centered">Container hostname: microbot-1276362308-c255i</p>
  </body>
</html>
```

Great! Remember you’re curling the **service** port and not the pod port. Only the service is exposed to the outside network. Now that our service and pod are working properly we can create our ingress controller. I’m using [traefik](https://github.com/containous/traefik) but feel free to use [nginx](https://github.com/kubernetes/ingress/tree/master/examples/deployment/nginx) too.

```
kubectl create -fhttps://raw.githubusercontent.com/containous/traefik/master/examples/k8s/traefik-deployment.yaml
```

This creates a Deployment (which creates a pod) using the official traefik image. The pod that is created is where the actual traefik load balancer runs.

Use kubectl -o wide to get the node IP where your new ingress pod is running. I only have 1 node (running minikube) but yours will likely be different.

```
kubectl get po -o wideNAME                           READY  STATUS    RESTARTS   AGE       NODE
microbot-1276362308-c255i        1/1  Running   0          11m       192.168.99.100
traefik-ingress-controller-sum0t 1/1  Running   0          40s       192.168.99.100
```

Now that the pod has started (make sure it says “Running” in the status column) we need to make an ingress rule. This is the part that will say what hostname and path passes traffic to our service.

Here’s an example for the microbot service.

Create the ingress object from the map above with the following command.

```
kubectl create -fhttps://gist.githubusercontent.com/rothgar/a04d6d9bb3faec3d59f36584c3bfc6f2/raw/392a7fdf2ef77241fd2f18a617f70fb803b82891/microbot.ing.yaml
```

This takes anything that’s passed to the ingress pod with the “microbot” hostname on the root path (e.g. http://microbot/) and sends it to the microbot service on port 80 (the port our service is expecting traffic on).

Because our service is on NodePort the traefik pod will match the hostname + path and forward the traffic to 192.168.99.100:31649 automatically. We can verify the mapping with.

```
curl -L --resolve microbot:80:192.168.99.100http://microbot/<!DOCTYPE html>
<html>
  <style type="text/css">
    .centered
      {
      text-align:center;
      margin-top:0px;
      margin-bottom:0px;
      padding:0px;
      }
  </style>
  <body>
    <p class="centered"><img src="microbot.png" alt="microbot"/></p>
    <p class="centered">Container hostname: microbot-1276362308-c255i</p>
  </body>
</html>
```

This command is telling curl to map the hostname “microbot” to it address 192.168.99.100 (like editing /etc/hosts) and then trying to get the URL [http://microbot/](http://microbot/). If you saw the output above then your ingress controller and mapping is working correctly. If not, read below for some more help.

So again just to recap. The bare minimum you need is

- A pod accepting traffic on a port and path
- A service exposed on NodePort sending traffic to the pod
- An ingress pod watching for ingress rules
- An ingress rule to map a hostname and path to a service

## **Tips and Troubleshooting**

If you need to troubleshoot you should check the logs on the ingress pod or use describe on the ingress ReplicationController and ingress pod.

```
kubectl describe po traefik-ingress-controller-sum0t
```

If you want to map ingress rules to services on different namespaces you need to add that to the ingress rules (not ingress pods). As an example, here’s a mapping for the kubernetes dashboard running in the kube-system namespace.

Make sure you expose the kubernetes dashboard service on a NodePort first.

```
apiVersion: extensions/v1beta1
kind: Ingress
metadata:
 name: kubernetes-dashboard-ingress
 namespace: kube-system
spec:
 rules:
   — host: kubernetes
     http:
       paths:
         — path: /
           backend:
             serviceName: kubernetes-dashboard
             servicePort: 80
```

Service ports won’t conflict even if multiple services export port 80. They automatically get remapped to a high port (stated earlier) when exposed as a NodePort. It’s one of the key benefits to giving every pod and service an IP and using network subnets (usually via overlay networks) on each node in the cluster.

Ingress mappings are absolute paths after the given hostname. They also pass the trailing path on to the service so make sure your pod accepts traffic on that path.

An example is below. This would try to forward /ui to the kubernetes dashboard which is not a path the dashboard accepts traffic on so you won’t get what you expect.

```
apiVersion: extensions/v1beta1
kind: Ingress
metadata:
 name: kubernetes-dashboard-ingress
 namespace: kube-system
spec:
 rules:
   — host: kubernetes
     http:
       paths:
         — path: /ui
           backend:
             serviceName: kubernetes-dashboard
             servicePort: 80
```

Path rewrite rules depend on the ingress pod support. Most load balancers have options via rule annotations. [Deis router](https://github.com/deis/router) uses annotations for all load balancer options. [Openshift uses HAproxy](https://github.com/openshift/origin/blob/8c38d317a5ef5346804ee6cc06a37288a6a3efae/docs/routing.md) with custom configuration. Traefik has a StripPrefix option and nginx doesn’t have rewrite rule options yet.

Ingress mappings need to specify if they should recursively map to a service. For example if you have /foo and /bar mapping to service1 and service2 but you also want /foo/_ and /bar/_ to map to the services you need to say so explicitly.

```
apiVersion: extensions/v1beta1
kind: Ingress
metadata:
 name: foo-bar
spec:
 rules:
   — host: myhost
     http:
       paths:
         — path: /foo
           backend:
             serviceName: service1
             servicePort: 80
         — path: /foo/*
           backend:
             serviceName: service1
             servicePort: 80
         — path: /bar
           backend:
             serviceName: service2
             servicePort: 80
         — path: /bar/*
           backend:
             serviceName: service2
             servicePort: 80
```
