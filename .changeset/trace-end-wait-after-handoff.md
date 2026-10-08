---
"e2e": patch
---

A recorded step the cache hands to the agent no longer accumulates the replay wait or the agent's turn into the next replay's end wait. The wait is measured from the agent's verdict if it settled without acting, or from its last action if it acted.
