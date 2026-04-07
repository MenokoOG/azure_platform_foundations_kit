# 01 — Azure Core Mental Model (Must-Know)

## The hierarchy (memorize)
Management Group → Subscription → Resource Group → Resource

- **Subscription**: billing + quotas + access boundary
- **Resource Group**: logical container + lifecycle boundary (deploy/delete together)
- **Resource**: actual service (VM, Storage Account, VNet, App Service, DB)

## Regions & Availability
- **Region**: geographic location of Azure datacenters
- **Availability Zones**: separate datacenters within a region for resilience

## Control planes vs data planes (important)
- **Control plane**: Azure Resource Manager (ARM) — creating/configuring resources
- **Data plane**: using the service (e.g., reading blobs from Storage)

## The “platform loop”
Plan → Provision → Secure → Deploy → Observe → Optimize → Retire

## Default platform checklist
- Naming convention
- Resource groups per project/environment
- Tags for cost/ownership
- RBAC least privilege
- Monitoring enabled
- Delete unused resources
