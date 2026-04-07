```mermaid
flowchart LR
  Internet --> PIP[Public IP]
  PIP --> LB[Load Balancer]
  LB --> VM1[VM 1]
  LB --> VM2[VM 2]
  subgraph VNet
    VM1
    VM2
    NSG[NSG Rules]
  end
```
