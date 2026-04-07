# 03 — Identity, Access, RBAC (Platform-critical)

## Entra ID (Azure AD)
Identity system for:
- users
- groups
- service principals (apps)
- managed identities (Azure resources)

## RBAC (Role Based Access Control)
You assign roles at a scope:
- subscription
- resource group
- resource

Common roles:
- Reader: can view
- Contributor: can create/modify (not grant permissions)
- Owner: full control including access

## Managed Identity (MI)
An Azure resource can have an identity to access other resources without storing secrets.

Use MI for:
- App Service → Storage
- Function → Key Vault
- VM → Azure SQL / Postgres
- AKS → ACR (container registry)

## “When I see 401/403…”
- Wrong identity (user vs service principal)
- Missing RBAC assignment
- Wrong scope (assigned to RG, but resource is elsewhere)
- Data-plane permission missing (e.g., Storage Blob Data Reader)
