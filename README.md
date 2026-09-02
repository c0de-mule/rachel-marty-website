# Rachel Marty — Personal Website (GitHub Pages)

A modern, fast, and accessible portfolio site for **Rachel Marty**, strategic communications professional and digital strategist.

Designed to position Rachel as a top-1% candidate for senior digital marketing and social communications roles at industry-leading agencies like **Bospar** and **The Hoffman Agency**.

---

## 📁 Repository Structure

```
.
├── index.html              # Homepage (Hero, metrics, featured case studies, positioning)
├── about.html              # About page (Career narrative, credentials, toolkit, education)
├── work.html               # Portfolio page (Interactive filtering, 14+ SCRIM case studies)
├── contact.html            # Contact page (Direct info, copy-to-clipboard, mailto form)
├── 404.html                # Custom error page
├── CNAME                   # Custom domain record (rachelmarty.com)
├── sitemap.xml             # Search engine sitemap
├── robots.txt              # Search engine crawler instructions
├── .nojekyll               # Disables Jekyll processing on GitHub Pages
├── css/
│   └── style.css           # Design system (DM Serif Display + Inter + JetBrains Mono)
├── js/
│   └── main.js             # Mobile menu, scroll reveal animations, category filters
└── assets/
    └── images/             # Optimized WebP/JPEG visual assets & case study graphics
```

---

## 🚀 How to Test Locally

You can preview the site instantly on your machine using Python's built-in web server:

```bash
# In this directory, run:
python3 -m http.server 8000
```

Then open your browser and navigate to:
👉 **[http://localhost:8000](http://localhost:8000)**

---

## 🌐 How to Deploy to GitHub Pages (Step-by-Step)

### Step 1: Create a GitHub Repository
1. Log into your GitHub account (or create one at [github.com](https://github.com)).
2. Click **New Repository**.
3. Name it: `rachel-marty-portfolio` (or `rachelmarty.github.io`).
4. Set visibility to **Public**.
5. Leave "Add a README" unchecked (since we already have one).

### Step 2: Push This Code to GitHub
Open your terminal, navigate to this folder, and run:

```bash
git init
git add .
git commit -m "Initial commit: Complete personal website for Rachel Marty"
git branch -M main
git remote add origin https://github.com/<YOUR-USERNAME>/rachel-marty-portfolio.git
git push -u origin main
```

### Step 3: Enable GitHub Pages
1. Go to your repo on GitHub: `Settings` → `Pages` (in the left sidebar).
2. Under **Build and deployment** > **Source**, select `Deploy from a branch`.
3. Under **Branch**, select `main` and `/ (root)`. Click **Save**.
4. Under **Custom domain**, ensure `rachelmarty.com` is entered.
5. Check the box for **Enforce HTTPS** (may take a few minutes to issue the SSL certificate).

---

## 🏷️ Pointing Your Domain (`rachelmarty.com`) from Squarespace Domains

In your domain registrar (Squarespace Domains / Google Domains), navigate to **DNS Settings** and configure:

### 1. Apex Domain (`rachelmarty.com`) — A Records
Add 4 **A** records pointing `@` to GitHub's IPs:
- `185.199.108.153`
- `185.199.109.153`
- `185.199.110.153`
- `185.199.111.153`

### 2. Subdomain (`www.rachelmarty.com`) — CNAME Record
Add a **CNAME** record:
- **Host / Name**: `www`
- **Type**: `CNAME`
- **Data / Value**: `<YOUR-USERNAME>.github.io`

---

## 🎨 Design System Specs

- **Colors:**
  - Background: Cream (`#FAF7F2`) & Warm Sand (`#F3EDE4`)
  - Primary Text: Rich Charcoal (`#2D2D2D`)
  - Accent / CTA: Terracotta (`#C0785C` & `#A8624A`)
  - Secondary Accent: Sage Green (`#8B9E8B`)
- **Typography:**
  - Headlines: *DM Serif Display* (Google Fonts)
  - Body: *Inter* (Google Fonts)
  - Labels & Metadata: *JetBrains Mono* (Google Fonts)
