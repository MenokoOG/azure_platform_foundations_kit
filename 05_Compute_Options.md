# 05 — Compute Options (Where code runs)

## Virtual Machines (IaaS)
You manage OS + patches (unless automated).
Use for:
- full control
- legacy apps
- specialized agents

## App Service (PaaS)
Managed runtime for web apps/APIs.
Use for:
- fast deployments
- minimal ops
- standard web workloads

## Functions (Serverless)
Event-driven compute.
Use for:
- triggers
- glue logic
- background jobs
- lightweight APIs

## Containers
- Azure Container Registry (ACR): store images
- Container Apps: managed containers
- AKS: Kubernetes

## Decision cues
- Need OS control → VM
- Need fastest web hosting → App Service
- Need event-driven + pay-per-use → Functions
- Need portable runtime → Containers
- Need orchestration at scale → AKS
