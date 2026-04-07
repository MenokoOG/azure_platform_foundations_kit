# 11 — Troubleshooting Playbook

Step 0: Confirm context
- subscription, region, resource group

Step 1: Classify error
- 401/403 → identity/RBAC
- 404 → endpoint/resource mismatch
- timeouts → networking/DNS/NSG/firewall
- quota → SKU/region/quota

Step 2: Check logs
- Activity Log
- Deployments (RG)
- Resource logs / App Insights

Step 3: Validate network path
- public vs private endpoint
- NSG, routes, DNS, firewall

Step 4: Fix + write down root cause
