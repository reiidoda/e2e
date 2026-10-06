---
"e2e": patch
---

A polling assertion takes its last read at its timeout instead of up to 100 ms after it, so it no longer passes on a state that arrived after the timeout.
