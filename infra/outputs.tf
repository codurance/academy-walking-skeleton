output "app_url" {
  value = "http://${aws_instance.walking_skeleton.public_ip}:3000"
}

output "ssh_connection" {
  value = "ssh -i ~/.ssh/${var.keypair_name}.pem ubuntu@${aws_instance.walking_skeleton.public_ip}"
}
