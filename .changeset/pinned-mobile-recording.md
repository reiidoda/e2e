---
"@e2e-dev/mobile": patch
---

Forward the worker's device selection with recording, app state resets, device settings, alerts, and clipboard requests. Commands that support running without an open app stay on the selected device after `device.closeApp()` ends the session, even when several simulators or emulators are booted.
