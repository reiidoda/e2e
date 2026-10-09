---
"e2e": patch
---

`store: false` and a prompt cache key now go only to OpenAI and Azure OpenAI Responses models and to `openai/*` models on the gateway. An OpenAI-compatible provider named `openai` no longer fails with `Unknown parameter: promptCacheKey`.
