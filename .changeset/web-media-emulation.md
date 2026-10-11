---
"@e2e-dev/web": minor
---

The web engine emulates `prefers-color-scheme` and `prefers-reduced-motion`. `web({ colorScheme, reducedMotion })` sets them for every page, and `browser.emulateMedia({ colorScheme, reducedMotion })` changes them for the rest of one test, before the first navigation too. The page's own `@media` rules see them from the first paint, not only `matchMedia`.
