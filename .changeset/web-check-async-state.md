---
"@e2e-dev/web": patch
---

`check()`, `uncheck()`, and the agent's `check` verb wait until the action timeout for the control's checked state to change after the click, so a controlled checkbox or switch that updates asynchronously passes instead of failing with `ACTION_FAILED`.
