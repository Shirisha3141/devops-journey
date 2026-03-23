🔹 VPC (Virtual Private Cloud)

A VPC is your own private network inside the cloud (like AWS). It gives you full control over networking.

Key things you likely learned:
IP Range (CIDR Block)
Example: 10.0.0.0/16 → defines how many IPs your network has
Subnets
Public Subnet → has internet access
Private Subnet → no direct internet access
Internet Gateway (IGW)
Allows communication between VPC and the internet
Route Tables
Controls where traffic goes
Example:
0.0.0.0/0 → IGW (internet access)
Security Groups
Act like a firewall
Example:
Allow port 22 → SSH
Allow port 80 → HTTP
NACL (Network ACL)
Extra layer of security (stateless)
🔹 Cleaning Process (Resource Cleanup)

This is very important in real-world DevOps to avoid unexpected costs 💸.

What cleanup includes:
Terminate EC2 instances
Delete unused volumes (EBS)
Remove unused key pairs
Delete security groups (if not in use)
Delete VPC (after removing dependencies)
🔹 Correct Cleanup Order (Very Important ⚠️)

You cannot delete a VPC directly. Follow this order:

Terminate EC2 instances
Delete Load Balancers (if any)
Delete NAT Gateway
Release Elastic IPs
Delete Subnets
Detach & delete Internet Gateway
Delete Route Tables
Delete Security Groups
Finally, delete VPC
