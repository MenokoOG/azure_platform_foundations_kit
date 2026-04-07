# 06 — Storage & Databases (How data lives)

## Storage
- **Blob**: objects/files (datasets, backups, media)
- **Files**: SMB file shares
- **Disks**: attached to VMs

Storage concepts:
- account → container → blob
- access tiers (hot/cool/archive)
- replication (LRS/ZRS/GRS) affects durability/cost

## Databases (managed)
- Azure SQL (relational)
- Azure Database for PostgreSQL (relational)
- Azure Database for MySQL
- Cosmos DB (NoSQL + global distribution patterns)

Managed means Azure runs the servers; you manage schema + usage.

## Security primitives
- network rules (public/private)
- identity auth where supported
- encryption options (varies by service)
