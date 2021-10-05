data "aws_ami" "ubuntu" {
  most_recent = true

  filter {
    name   = "name"
    values = ["ubuntu/images/hvm-ssd/ubuntu-focal-20.04-amd64-server-*"]
  }

  filter {
    name   = "virtualization-type"
    values = ["hvm"]
  }

  owners = ["099720109477"] # Canonical
}

data "aws_vpc" "default" {
  default = true
}

data "aws_security_groups" "http" {
  filter {
    name   = "vpc-id"
    values = [data.aws_vpc.default.id]
  }

  filter {
    name   = "ip-permission.from-port"
    values = var.sg_http_ports
  }

  filter {
    name   = "ip-permission.protocol"
    values = ["tcp"]
  }

  filter {
    name   = "ip-permission.cidr"
    values = var.allowed_cidr_blocks
  }
}
