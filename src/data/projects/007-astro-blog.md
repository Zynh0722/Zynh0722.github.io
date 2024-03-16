---
title: "This Website!"
---

Previously when looking for a toolkit to start building out my static
portfolio site, I had originally landed on Jekyll, and entirely because
it had a native integration to [github pages](https://pages.github.com/).
This worked, and provided the basis of what I wanted, a simple static site
generator with flexible templates and markdown.

The reason I moved away from Jekyll is nearly as simple as why I chose it
to begin with, I don't really know ruby. I also didn't appreciate the
templating syntax. I weighed two specific alternatives [Hugo](https://gohugo.io/)
and [Astro](https://astro.build/). I landed on Astro because it is almost entirely
javascript, or an extended html syntax, no weird `{{ .Templates }}`.

Largely this site is a practice of brutalism. Almost this entire site is javascriptless,
and is also entirely statically generated. This is of course with one exception,
the p5 Sketches. I made a concession in regards to the sites lack of JS entirely
to remove the glass window between the code you see and the visualizations you see.
As such all of the animations that I made not only are running live in your browser,
but also all of them are clickable and link directly to their actual source code.
