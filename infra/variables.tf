variable "aws_region" {
  type        = string
  description = "AWS region to deploy to"

  validation {
    condition     = can(regex("(us(-gov)?|ap|ca|cn|eu|sa)-(central|(north|south)?(east|west)?)-\\d", var.aws_region))
    error_message = "AWS region provided is not valid."
  }
}

variable "playground_account_id" {
  type        = string
  description = "AWS account ID to deploy to"

  validation {
    condition     = (can(regex("[[:digit:]]", var.playground_account_id)) && length(var.playground_account_id) == 12)
    error_message = "AWS account ID must contain 12 digits."
  }
}

variable "sg_http_ports" {
  type        = list(number)
  description = "Allowed HTTP ports"
  default     = [3000, 8080]
}

variable "allowed_cidr_blocks" {
  type        = list(string)
  description = "Allowed C.I.D.R. blocks"
  default     = ["0.0.0.0/0"]
}

variable "keypair_name" {
  type        = string
  description = "Key-pair to use for SSH connection"
  default     = "academy-walking-skeleton"
}

variable "instance_type" {
  type        = string
  description = "AWS EC2 instance type"
  default     = "t3.micro"
}

locals {
  common_tags = {
    Name = "Walking Skeleton"
  }
}