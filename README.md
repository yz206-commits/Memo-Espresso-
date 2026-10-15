# Memo & Espresso

Ye Zheng's website, live at https://memoandespresso.com

## How to publish a new post

1. Add a file to `src/content/memos/`, named like `my-post-title.md`.
2. Start it with this header, then write the post below it:

```
---
title: My Post Title
date: 2026-10-20
section: physical-ai
summary: One sentence that shows on the card.
thumbnail: /images/memos/my-image.jpg
---
```

- `section` must be one of: `physical-ai`, `startup-valuation`, `industry-trends` (edit the list in `src/data/sections.ts`).
- Put the thumbnail image in `public/images/memos/`. Leave the `thumbnail` line out to use the default.
- Add `draft: true` to keep a post hidden.

3. Commit to `main`. Vercel publishes it in about a minute.
