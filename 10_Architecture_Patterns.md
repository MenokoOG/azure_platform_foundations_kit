# 10 — Architecture Patterns (Platform level)

## Patterns
1) 3-tier app:
   Frontend (App Service/Static Web Apps)
   API (App Service/Functions)
   DB (Azure SQL/Postgres)
   Storage (Blob)

2) Event-driven:
   Service Bus / Storage Queue / Event Grid + Functions

3) Containers:
   ACR + Container Apps/AKS + Ingress + Observability

4) Hybrid connectivity:
   VPN Gateway / ExpressRoute + private DNS

## Resilience basics
- zones within region
- multi-region strategies (active/passive)
- backups + restore testing
