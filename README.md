# Memo & Espresso

Ye Zheng's website, live at https://memoandespresso.com. Plain HTML and CSS, no build step.

## Files
- `index.html`: Insights page (banner, section tabs, card grid)
- `about.html`: About page
- `insights/*.html`: one file per article
- `css/style.css`: all styling
- `images/`: headshot and article thumbnails (`images/insights/`)

## How to publish a new insight
1. Copy `insights/from-delivery-robots-to-physical-ai.html` to `insights/your-title.html` and replace the title, section, date, image and text.
2. Put the thumbnail in `images/insights/` (16:9, about 1280x720).
3. In `index.html`, copy one `<article class="card">` block to the top of the grid and update its link, image, `data-section`, label, date and title.
   Sections: `physical-ai`, `startup-valuation`, `industry-trends`.
4. Commit to `main`. Vercel publishes it in about a minute.
