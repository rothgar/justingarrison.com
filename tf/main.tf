terraform {
  backend "s3" {
    bucket = "tf.jgarr.net"
    key    = "justingarrison.com"
    region = "us-west-2"
  }

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "4.48.0"
    }
  }
}

provider "aws" {
  profile = "personal"
  region  = "us-west-2"
}

resource "aws_route53_zone" "prod" {
  name = "justingarrison.com"

  tags = {
    Environment = "prod"
  }
}

