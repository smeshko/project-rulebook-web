---
title: Documentation Standards
description: Required standards for all project documentation
author: Documentation Architect
date: 2026-01-25
---

# Documentation Standards

All documentation in this project must follow these standards.

---

## File Structure

### Required Frontmatter

Every markdown file must include YAML frontmatter:

    ```yaml
    ---
    title: Document Title
    description: One-line description
    author: Author Name
    date: YYYY-MM-DD
    ---
    ```

### File Naming

| Type | Convention | Example |
|------|------------|---------|
| General docs | kebab-case | `getting-started.md` |
| Templates | `{name}-template.md` | `component-template.md` |
| Guides | `{topic}-guide.md` | `deployment-guide.md` |

---

## Markdown Standards

### CommonMark Compliance

- **Headers**: ATX-style only (`#`, `##`, `###`)
- **Header spacing**: Single space after `#`
- **No trailing `#`**: Use `# Title` not `# Title #`
- **Hierarchical headers**: Never skip levels (h1 -> h2 -> h3)

### Code Blocks

Always include language identifier:

    ```typescript
    // TypeScript code
    ```

    ```bash
    # Shell commands
    ```

    ```json
    { "json": "data" }
    ```

### Tables

Use for structured data:

    ```markdown
    | Column 1 | Column 2 |
    |----------|----------|
    | Data | Data |
    ```

---

## Content Rules

### Prohibited Content

- **No time estimates**: Never include "this takes 2 hours" or similar
- **No secrets**: Never commit API keys, passwords, credentials
- **No absolute paths**: Use relative paths for internal links
- **No orphan docs**: Every document must be linked from a README

### Required Content

- **Context before detail**: Start with "when to use" or overview
- **Actionable checklists**: Templates must have completion checklists
- **Working links**: All links must resolve to existing files
- **Code examples**: Include copy-paste ready code where applicable

---

## Cross-Referencing

### Internal Links

Use relative paths:

    ```markdown
    [Getting Started](../development/getting-started.md)
    ```

### Section Links

Link to headers:

    ```markdown
    [Component Section](ui-components.md#buttons)
    ```

### Codebase Links

Reference actual implementations:

    ```markdown
    [Button Component](../../src/components/ui/Button.tsx)
    ```

---

## Quality Checklist

Before committing documentation:

- [ ] Frontmatter is complete and accurate
- [ ] All links resolve correctly
- [ ] Code blocks have language identifiers
- [ ] Headers follow hierarchy
- [ ] No time estimates included
- [ ] Document is linked from parent README
- [ ] Spelling and grammar checked
