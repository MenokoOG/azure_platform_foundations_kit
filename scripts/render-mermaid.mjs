#!/usr/bin/env node

import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { basename, join } from "node:path";
import { tmpdir } from "node:os";

const ROOT = process.cwd();
const DIAGRAMS_DIR = join(ROOT, "diagrams");
const OUTPUT_DIR = join(DIAGRAMS_DIR, "rendered");
const MERMAID_REGEX = /```mermaid\s*\n([\s\S]*?)```/g;

function resolveInputFiles() {
  const requested = process.argv.slice(2);
  if (requested.length > 0) return requested;
  return readdirSync(DIAGRAMS_DIR)
    .filter((name) => name.endsWith(".md"))
    .map((name) => join("diagrams", name));
}

function runMmdc(inputPath, outputPath) {
  const localCli = join(ROOT, "node_modules", ".bin", "mmdc");
  if (existsSync(localCli)) {
    execFileSync(localCli, ["-i", inputPath, "-o", outputPath], { stdio: "inherit" });
    return;
  }

  try {
    execFileSync("npx", ["-y", "@mermaid-js/mermaid-cli", "-i", inputPath, "-o", outputPath], {
      stdio: "inherit"
    });
  } catch {
    throw new Error(
      "Mermaid CLI is not available. Run `npm install` (with internet access) and retry."
    );
  }
}

function renderFile(filePath) {
  const content = readFileSync(join(ROOT, filePath), "utf8");
  const matches = [...content.matchAll(MERMAID_REGEX)];
  if (matches.length === 0) {
    return { filePath, rendered: 0 };
  }

  const base = basename(filePath, ".md");
  let rendered = 0;

  matches.forEach((match, index) => {
    const diagram = match[1].trim();
    const tempFile = join(tmpdir(), `mermaid-${base}-${index + 1}-${Date.now()}.mmd`);
    const outName = matches.length === 1 ? `${base}.svg` : `${base}-${index + 1}.svg`;
    const outFile = join(OUTPUT_DIR, outName);

    writeFileSync(tempFile, diagram);
    try {
      runMmdc(tempFile, outFile);
      rendered += 1;
    } finally {
      rmSync(tempFile, { force: true });
    }
  });

  return { filePath, rendered };
}

function main() {
  mkdirSync(OUTPUT_DIR, { recursive: true });
  const files = resolveInputFiles();

  if (files.length === 0) {
    console.log("No markdown files found.");
    return;
  }

  let total = 0;
  for (const file of files) {
    try {
      const result = renderFile(file);
      total += result.rendered;
      console.log(`${result.filePath}: rendered ${result.rendered} diagram(s)`);
    } catch (error) {
      console.error(`${file}: ${error.message}`);
      process.exitCode = 1;
      return;
    }
  }

  if (total === 0) {
    console.log("No Mermaid code fences were found.");
    return;
  }

  console.log(`Rendered ${total} diagram(s) to ${OUTPUT_DIR}`);
}

main();
