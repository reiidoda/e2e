---
"@e2e-dev/mobile": patch
---

`device.home()` works after `device.closeApp()`: it binds a new session to the worker's device without launching an app. On iOS, `device.foregroundApp()` with no app open is `APP_NOT_OPEN` with a message that says to open one, also after `device.home()` from a closed app, and `app.clearState()` on an app with no data container, such as Settings, is `UNSUPPORTED_CAPABILITY` instead of an internal `ENOENT` failure.
