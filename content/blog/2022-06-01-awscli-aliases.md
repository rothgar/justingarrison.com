---
title: Awscli aliases
description: Enhance your aws cli experience with custom subcommands
date: 2022-03-14T00:15:00-07:00
image: https://justingarrison.com/img/awscli-aliases-banner.png
draft: true
---
![](../../img/awscli-aliases-banner.png)

The AWS CLI is full of features, but not all of them are easy to remember or intuitive.
You often need to add information from other commands before you can run the command you want.

Similar to `git` and `kubectl` custom commands, `aws` allows you to create your own subcommands called aliases.
Instead of the custom command approach by adding a `git-*` command to your $PATH awscli uses a special ~/.aws/cli/alias file.

You can start by creating the file and adding `[toplevel]` to it.

Aliases are similar to shell alias syntax and the one most people start with is

```
whoami = sts get-caller-identity
```

Now when you run `aws whoami` you'll get the output from the regular `aws sts get-caller-identity` command.

The real power comes from making your aliases shell functions.
You can run any shell commands as part of your alias and you can accept arguments with your aliases.

```
hi =
  !f() {
    echo hello $1
  }; f
```
Now if you ran `aws hi justin` the output would be `hello justin`.

## My favorite aliases

Now let's look at some real world useful aliases.
All of these come from the (awscli-aliases)[https://github.com/awslabs/awscli-aliases] repo which you can download and put directly into your aliases file, or use the aliases for ideas for your own commands.

### Running instances

```
running-instances = ec2 describe-instances \
    --filter Name=instance-state-name,Values=running \
    --output table \
    --query 'Reservations[].Instances[].{ID: InstanceId,Hostname: PublicDnsName,Name: Tags[?Key==`Name`].Value | [0],Type: InstanceType, Platform: Platform || `Linux`}'
```

### List AMIs

```
amazon-linux-amis = ec2 describe-images \
    --filter \
      Name=owner-alias,Values=amazon \
      Name=name,Values="amzn-ami-hvm-*" \
      Name=architecture,Values=x86_64 \
      Name=virtualization-type,Values=hvm \
      Name=root-device-type,Values=ebs \
      Name=block-device-mapping.volume-type,Values=gp2 \
    --query "reverse(sort_by(Images, &CreationDate))[*].[ImageId,Name,Description]" \
    --output text
```

### Connect via session manager

```
TBD
```

### Allow your IP address through security group

This also shows that you can use aliases as part of other aliases.

```
myip =
  !f() {
    dig +short myip.opendns.com @resolver1.opendns.com
  }; f

allow-my-ip =
  !f() {
    my_ip=$(aws myip)
    aws ec2 authorize-security-group-ingress --group-name ${1} --protocol ${2} --port ${3} --cidr $my_ip/32
  }; f

allow-my-ip-all =
  !f() {
    aws allow-my-ip ${1} all all
  }; f
```

### ECR login

```
docker-ecr-login =
  !f() {
    region=$(aws configure get region)
    endpoint=$(aws ecr get-authorization-token --region $region --output text --query authorizationData[].proxyEndpoint)
    passwd=$(aws ecr get-authorization-token --region $region --output text --query authorizationData[].authorizationToken | base64 --decode | cut -d: -f2)
    docker login -u AWS -p $passwd $endpoint
  }; f
```
