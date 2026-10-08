---
"e2e": patch
---

When the provider package can't read a provider's error body, `MODEL_PROVIDER_FAILED` no longer shows an empty message. One example is the ChatGPT backend's HTTP 400 `{"detail": "Unsupported service_tier: fast"}`. The message and the `--ai-trace` entry now show the HTTP status and the body, with secrets redacted and the body cut at 1 KB. An `agent.act` step that used up its transport retries now names the last attempt's failure, as judgments already did.
