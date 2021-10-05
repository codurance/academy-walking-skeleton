terraform {
  required_version = ">= 1.0.7"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 3.60"
    }
  }

  backend "s3" {
    bucket         = "terraform-remote-state-codurance-us-east-1"
    key            = "academy-walking-skeleton-sept-2021/terraform.tfstate"
    region         = "us-east-1"
    encrypt        = true
    dynamodb_table = "academy-walking-skeleton-sept-2021-tf-state-lock"
  }
}

provider "aws" {
  region              = var.aws_region
  allowed_account_ids = [var.playground_account_id]

  default_tags {
    tags = {
      Project = "Academy September 2021"
    }
  }
}
