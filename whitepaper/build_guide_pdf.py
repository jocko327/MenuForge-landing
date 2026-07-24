#!/usr/bin/env python3
"""Render the MenuForge recipe costing guide PDF from HTML."""

from pathlib import Path

from weasyprint import HTML


ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "whitepaper" / "guide.html"
OUTPUT = ROOT / "assets" / "downloads" / "menuforge-recipe-costing-guide.pdf"


def main() -> None:
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    # base_url must be the HTML file's own directory so relative asset paths
    # like "../assets/images/..." resolve to landing/assets (not repo-root),
    # otherwise the logo silently falls back to alt text.
    HTML(filename=str(SOURCE), base_url=str(SOURCE.parent)).write_pdf(str(OUTPUT))
    print(f"Wrote {OUTPUT}")


if __name__ == "__main__":
    main()
