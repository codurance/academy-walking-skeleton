resource "aws_instance" "walking_skeleton" {
  ami                    = data.aws_ami.ubuntu.id
  key_name               = var.keypair_name
  instance_type          = var.instance_type
  vpc_security_group_ids = [data.aws_security_groups.http.ids[0], data.aws_security_groups.http.ids[1]]

  tags = merge(local.common_tags)

  user_data = <<EOF
#!/bin/bash
echo "CORS_URL=$(curl -s http://169.254.169.254/latest/meta-data/public-ipv4)" >> /home/ubuntu/.env
apt update
apt install -y docker.io
systemctl enable --now docker
usermod -aG docker ubuntu
curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
chmod +x /usr/local/bin/docker-compose
curl -L "https://raw.githubusercontent.com/niall-bambury-codurance/academy-walking-skeleton/main/docker-compose.yaml" -o /home/ubuntu/docker-compose.yaml
chown ubuntu:ubuntu /home/ubuntu/docker-compose.yaml
docker-compose -f /home/ubuntu/docker-compose.yaml up -d
EOF
}
