---
"@e2e-dev/web": patch
---

The agent now reads a sentence with an inline link, emphasis, or code as one line of text, so `<p>Read our <a>privacy policy</a> for details.</p>` no longer reads "Read our for details." The link is still listed as its own control.
