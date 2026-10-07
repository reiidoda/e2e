---
"e2e": minor
---

Add `cache.replayOnly` and `e2e run --replay-only` for runs that require complete recorded agent actions without resolving models or invoking executors. The mode implies strict and read-only caching, replays on retries, and fails missing or non-replayable recordings and judgment methods with `REPLAY_MISSING`. Use deterministic assertions to verify replayed actions.
