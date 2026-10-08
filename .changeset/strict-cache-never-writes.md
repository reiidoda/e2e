---
"e2e": patch
---

`--strict-cache` (and `cache.strict`) never writes or deletes a cache entry, even in `read-write` mode, and retries replay like the first attempt. Before, a retry skipped replay, called the model, and overwrote the committed entry, and a failed attempt could evict it.
