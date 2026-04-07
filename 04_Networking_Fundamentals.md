# 04 — Networking Fundamentals (Must understand)

## Core pieces
- **VNet**: private network in Azure
- **Subnet**: segment inside a VNet
- **NSG**: Network Security Group (firewall rules)
- **Public IP**: internet address
- **NIC**: network interface attached to a VM

## Load balancing / gateways
- **Azure Load Balancer (L4)**: TCP/UDP balancing
- **Application Gateway (L7)**: HTTP(S), routing, WAF options
- **Front Door**: global edge routing + acceleration

## Private access patterns
- **Private Endpoint**: map a service into your VNet privately
- **Service Endpoints**: secure access from a subnet (often replaced by private endpoints)

## DNS basics
- Azure-provided DNS for VNets by default
- Private DNS Zones often used with Private Endpoints

## “Why can’t it connect?” checklist
- Same VNet / peered VNets?
- NSG blocking?
- Route table forcing traffic?
- Destination firewall enabled?
- Private endpoint but missing private DNS?
