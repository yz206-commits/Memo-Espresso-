# Memo & Espresso

Ye Zheng's website, live at https://memoandespresso.com. Plain HTML and CSS, no build step.

## Files
- `index.html`: Home (video background and quote)
- `insights/index.html`: Insights page (banner, section tabs, card grid)
- `insights/*.html`: one file per article
- `about.html`: About page
- `css/style.css`: all styling and colors
- `images/`: banners, headshot, article thumbnails (`images/insights/`)
- `video/home.mp4`: homepage background video

## How to publish a new insight
1. Copy `insights/from-delivery-robots-to-physical-ai.html` to `insights/your-title.html` and replace the title, section, date, image and text.
2. Put the thumbnail in `images/insights/` (16:9, about 1280x720).
3. In `insights/index.html`, copy one `<article class="card">` block to the top of the grid and update its link, image, `data-section`, label, date and title.
   Sections: `physical-ai`, `startup-valuation`, `industry-trends`.
4. Commit to `main`. Vercel publishes it in about a minute.
