#!/usr/bin/env python3
"""Add a content hash to the CSS/JS links in every page, so browsers fetch the new
files right after a change instead of using an old cached copy.

Run from the repo root after editing anything in docs/assets/:
    python3 scripts/stamp_assets.py
"""
import hashlib, pathlib, re

DOCS = pathlib.Path(__file__).resolve().parent.parent / "docs"
ASSETS = ["assets/spv.css", "assets/site.js"]

stamps = {a: hashlib.sha1((DOCS / a).read_bytes()).hexdigest()[:10] for a in ASSETS}
changed = 0
for page in DOCS.rglob("*.html"):
    if "cardsofchaos" in page.parts:
        continue
    html = page.read_text()
    new = html
    for asset, v in stamps.items():
        new = re.sub(r'(["\'])/' + re.escape(asset) + r'(\?v=[0-9a-f]+)?\1', r'\1/' + asset + '?v=' + v + r'\1', new)
    if new != html:
        page.write_text(new)
        changed += 1
print(f"Stamped {changed} pages:", ", ".join(f"{a}?v={v}" for a, v in stamps.items()))
