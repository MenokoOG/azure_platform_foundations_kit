```mermaid
flowchart LR
  App[App/Service] --> Metrics[Azure Monitor Metrics]
  App --> Logs[Diagnostic Logs]
  Logs --> LA[Log Analytics]
  App --> AI[App Insights]
  Metrics --> Alerts[Alerts]
  LA --> Alerts
  AI --> Alerts
```
