---
"e2e": patch
---

Agent steps on Meta's Muse Spark models, through AI Gateway or OpenCode Console, no longer fail with `MODEL_PROVIDER_FAILED: only auto is supported for tool_choice`. The refusal now reads as one, so the step retries with `auto` and the tool-calls-only rule, as it does for Anthropic and DeepSeek.
