---
'e2e': minor
---

Breaking: a failed `expect.soft` before `test.skip(...)` now fails the test, as in Playwright. Before, the test was reported `skipped` and the run exited 0 unless `failOnSkippedFailure` was set. The attempt is `failed` with the soft failures as its error, keeps the skip reason in its `skip` field, and retries like any failure. In `report.json`, an attempt or serial member may now carry `skip` with a failed status. The CLI prints the reason under the failure, and the trace page (`trace.md`) names it. `failOnSkippedFailure` now covers only a retry that skips after an earlier failed attempt.
