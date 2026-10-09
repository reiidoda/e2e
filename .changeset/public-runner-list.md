---
'e2e': minor
---

`list` from `e2e/runner` reports the tests a config, file selection, and title grep would select, in process, without starting an app, an engine, or a worker. The result includes pairs a filter removed, positional arguments that matched no file, and the selected target names. `e2e list --reporter json` renames `skipReason` to `reason` and adds each pair's identity: `id`, `source`, `session`, `sessions`, `serialId`, and `agent`, beside the fields it already printed.
