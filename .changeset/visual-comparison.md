---
"e2e": minor
"@e2e-dev/mobile": patch
---

Add `toHaveScreenshot` for visual comparison on every engine that captures pixels: `await expect(screen).toHaveScreenshot('home.png')` compares the screen and `expect(locator).toHaveScreenshot()` one element against a PNG stored beside the test file, one per target and operating system. A missing one fails the test and is written beside it, or in CI attached to the results instead; `--update-snapshots` (`-u`) writes missing and different ones and passes. Options: `threshold`, `maxDiffPixels`, `maxDiffPixelRatio`, `mask`, `maskColor`, `timeout`. A mismatch attaches the expected, actual, and diff images to the step. On iOS and Android the status bar is held in a fixed state for these screenshots.
