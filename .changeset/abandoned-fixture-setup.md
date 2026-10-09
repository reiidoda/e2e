---
'e2e': patch
---

Stop a fixture setup that finishes after its attempt was abandoned from starting later fixtures, hooks, or the test body. The late fixture still releases its own teardown.
