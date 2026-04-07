# Diagrams

Mermaid diagrams. Render in Mermaid-compatible viewers.

## Local render

From the repository root:

```bash
npm install
npm run diagrams:render
```

The command scans `diagrams/*.md`, extracts Mermaid code fences, and writes SVG files to `diagrams/rendered/`.

To render specific files only:

```bash
node scripts/render-mermaid.mjs diagrams/observability.md diagrams/network_basics.md
```
