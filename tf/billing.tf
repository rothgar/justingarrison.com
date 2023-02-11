module "billing_alert" {
  source = "binbashar/cost-billing-alarm/aws"

  aws_env = "prod"
  aws_account_id = 117168623505
  monthly_billing_threshold = 25
  currency = "USD"
}

output "sns_topic_arn" {
  value = "${module.billing_alert.sns_topic_arn}"
}
