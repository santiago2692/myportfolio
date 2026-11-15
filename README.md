# Santiago Pirez Velasco — portfolio

Source for [santiagopirezvelasco.com](https://santiagopirezvelasco.com).

The site is plain HTML, CSS and a small amount of JavaScript. There is **no build step**: everything in `docs/` is published as-is by GitHub Pages.

## Structure

```
docs/
  index.html                 Homepage
  work/<case-study>/         WEX case studies (billing, purchase-controls, login, fillup)
  apps/<app>/                Tiger Mind Labs app pages (milo, cards-of-chaos, pacechase, hackers-golf, beagle-bounce)
  cardsofchaos/              Cards of Chaos product + privacy pages (linked from the App Store)
  assets/spv.css             SPV design system: tokens, components, motion
  assets/site.js             Contact form, nav highlighting, legacy-link redirects, analytics events
  images/                    Brand marks, app icons, app and WEX screenshots
  resume/                    Resume PDF
  favicon.*, apple-touch-icon.png, og-image.png
```

## Edit locally

Open any page directly, or serve the folder so absolute paths resolve:

```bash
cd docs && python3 -m http.server 8000
# → http://localhost:8000
```

## After editing CSS or JS

Run `python3 scripts/stamp_assets.py` before committing. It adds a version to the `spv.css` and `site.js`
links on every page, so visitors' browsers load the new files instead of an old cached copy.

## Contact form

The "Say hi" form posts to [FormSubmit](https://formsubmit.co) (no account needed). The first submission sends an
activation email to the inbox set in `CONTACT_ENDPOINT` at the top of `docs/assets/site.js`. After confirming, replace
the address there with the random alias FormSubmit provides, so the address isn't in the page source.

## Design system

`docs/assets/spv.css` is generated from the SPV Design System (tokens + component and motion styles). Keep new UI on its
classes (`spv-btn`, `spv-card`, `spv-reveal`, …) and tokens (`--ink`, `--accent`, `--dur-base`, …).
