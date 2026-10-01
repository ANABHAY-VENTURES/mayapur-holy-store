# 🪷 Mayapur Holy Store

> **From Mayapur, with devotion.**

A premium, responsive storefront for **Mayapur Holy Store**, designed around the visual warmth of its Instagram presence while providing a proper product catalogue, devotional storytelling, video content, and direct WhatsApp enquiries.

**Live website:** https://d-majumder.github.io/mayapur-holy-store/

---

## ✨ Highlights

- 🪷 Premium devotional visual identity inspired by Sri Dham Mayapur
- 🎨 Claymorphism / soft tactile UI
- ✨ Scroll-reveal and floating animations
- 📸 Instagram-inspired product journal
- 🛍️ Product catalogue with category filtering
- 🎥 Video / story section for Reels and product videos
- 🛒 Client-side enquiry bag
- 💬 Direct WhatsApp enquiry flow
- 📱 Responsive mobile-first layout
- 🌐 GitHub Pages compatible
- 🔎 SEO metadata and semantic structure
- 🔗 Open Graph / social sharing metadata
- 🖼️ Custom social-preview banner
- 🪄 Favicon and web manifest
- 🤖 `robots.txt` and XML sitemap
- 📦 No framework or build system required

---

## 🏪 About Mayapur Holy Store

Mayapur Holy Store presents handcrafted devotional products from **Sri Dham Mayapur, West Bengal**, including deities, deity dresses and other devotional treasures.

The website is intentionally designed to feel more like a **digital devotional catalogue** than a conventional e-commerce template.

The core experience is:

**Discover → Feel → Explore → Enquire**

rather than forcing visitors through a complicated checkout process.

---

## 🧭 Website Structure

```text
Home
│
├── Hero
│
├── Mayapur Journal
│   └── Instagram-style product stories
│
├── Mayapur Stories
│   └── Product / store / craftsmanship videos
│
├── Product Catalogue
│   ├── All
│   ├── Deities
│   └── Dresses
│
├── Our Story
│
├── Instagram Gallery
│
└── WhatsApp Contact
```

---

## 📁 Project Structure

```text
mayapur-holy-store/
│
├── index.html
├── styles.css
├── script.js
│
├── favicon.svg
├── site.webmanifest
├── robots.txt
├── sitemap.xml
│
├── README.md
├── LICENSE
├── ASSET-LICENSE.md
│
├── assets/
│   ├── social-banner.jpg
│   ├── gaura-nitai-blue.jpg
│   ├── gaura-nitai-purple.jpg
│   ├── gaura-nitai-set.jpg
│   ├── gaura-nitai-yellow.jpg
│   ├── mayapur-holy-store-front.jpg
│   └── narsimha-brass.jpg
│
└── videos/
    ├── 01-gaura-nitai-cinematic.mp4
    ├── 02-handcrafting-process.mp4
    ├── 03-dressing-the-deities.mp4
    ├── 04-mayapur-store-tour.mp4
    └── 05-packing-worldwide-orders.mp4
```

---

## 🎥 Adding Videos

Place the MP4 files in the `videos/` directory using these exact names:

| File | Purpose |
|---|---|
| `01-gaura-nitai-cinematic.mp4` | Cinematic Gaura-Nitai product video |
| `02-handcrafting-process.mp4` | Crafting / painting / finishing process |
| `03-dressing-the-deities.mp4` | Dressing and preparing the deities |
| `04-mayapur-store-tour.mp4` | Physical store walkthrough |
| `05-packing-worldwide-orders.mp4` | Packing and shipping process |

Recommended video format:

- MP4
- H.264 video
- AAC audio
- 1080 × 1920 for vertical videos
- 5–15 seconds for homepage/story clips
- Keep file sizes reasonably compressed for faster loading

---

## 💻 Local Development

This is a static website and does not require Node.js, React, Vite, or another build system.

### Option 1 — Python

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

### Option 2 — VS Code

Install **Live Server**, right-click `index.html`, and select:

**Open with Live Server**

---

## 🌐 GitHub Pages Deployment

The site is configured for:

```text
https://d-majumder.github.io/mayapur-holy-store/
```

### 1. Create the repository

Create a GitHub repository named:

```text
mayapur-holy-store
```

### 2. Upload the project

Upload the contents of this repository to the `main` branch.

The `index.html` file must remain in the repository root.

### 3. Enable GitHub Pages

Go to:

**Repository → Settings → Pages**

Set:

```text
Source: Deploy from a branch
Branch: main
Folder: / (root)
```

Save the settings.

GitHub Pages will then publish the static site.

---

## 🔎 SEO

The website includes:

- `<title>`
- Meta description
- Keywords
- Canonical URL
- `robots` directives
- Open Graph metadata
- Twitter/X card metadata
- Schema.org `Store` structured data
- XML sitemap
- `robots.txt`
- Semantic headings
- Descriptive image `alt` text
- Mobile responsive layout
- Web manifest
- Social preview image

### Social sharing

The website uses:

```text
assets/social-banner.jpg
```

as its Open Graph preview image.

When a supported platform fetches the page, the intended preview is:

**Mayapur Holy Store — From Mayapur, With Devotion**

with the description and store banner.

Some platforms cache link previews. If an old preview continues to appear after deployment, use that platform's link-preview/debugging tool to request a fresh crawl.

---

## 💬 WhatsApp

The floating WhatsApp button directly opens a conversation with the store.

Current number:

```text
+91 95472 31074
```

The WhatsApp links use a pre-filled enquiry message.

If the business changes its WhatsApp number, update the `wa.me` links in `index.html`.

---

## 🛍️ Product Data

The current catalogue is a front-end prototype.

Product information is currently defined in:

```text
script.js
```

The production version can be upgraded to an admin-backed catalogue where the store can manage:

- Product name
- Price
- Category
- Size
- Material
- Description
- Multiple photographs
- Stock status
- Product tagline
- Video
- WhatsApp enquiry link

This would allow the store owner to update the catalogue without editing website code.

---

## 🛡️ Security & Privacy

This website is intentionally a static front-end.

It does **not** contain:

- Payment credentials
- API secrets
- Database credentials
- Private access tokens
- Authentication secrets

Do not commit private API keys, passwords, access tokens or other secrets to this repository.

If a backend, payment gateway or CMS is added later, secrets should remain server-side or in the relevant platform's secret-management system.

---

## 🤝 Contributions

This repository primarily represents the website created for Mayapur Holy Store.

For substantial changes, please open an issue first to discuss the proposed change.

Small improvements to the front-end implementation may be submitted through pull requests.

---

## 👤 Creator

Designed and developed by **Dhruba Majumder**.

- GitHub: https://github.com/D-Majumder

---

## 📜 License

The website's **source code** is released under the MIT License.

The photographs, videos, logos, branding, product images, store imagery, and other business-specific media are **not included under the MIT License** unless explicitly stated otherwise.

See:

- [`LICENSE`](LICENSE)
- [`ASSET-LICENSE.md`](ASSET-LICENSE.md)

---

## 🪷 Credits

**Mayapur Holy Store**

Sri Dham Mayapur, Nabadwip, West Bengal, India

Instagram: https://www.instagram.com/mayapurpoojabox/

---

> Built with care for a devotional craft business from Mayapur.
