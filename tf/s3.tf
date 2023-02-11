resource "aws_s3_bucket" "followers" {
  bucket = "followers.jgarr.net"

  tags = {
    Name        = "Mastodon Followers"
    Environment = "prod"
  }
}

resource "aws_s3_bucket_public_access_block" "private" {
  bucket = aws_s3_bucket.followers.id

  block_public_acls       = true
  block_public_policy     = true
  ignore_public_acls      = true
  restrict_public_buckets = true
}
