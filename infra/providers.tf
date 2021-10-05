terraform {
  required_version = ">= 1.0.7"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 3.60"
    }
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
