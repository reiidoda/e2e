---
"e2e": patch
---

`e2e init` no longer writes an MCP config through a symlink: a `.mcp.json` or `.cursor/mcp.json` reached through a link, or under a linked directory, is skipped with a warning naming the link and its target, the way a linked skill directory already was. Before, the merge read and overwrote the file the link pointed at, which could be a dotfiles repo or a shared config outside the project.
