# ADHITHYA K — Portfolio Website

A modern, Google-style personal portfolio for **Adhithya K**, Backend Developer & Cloud Enthusiast.

Built with **Next.js 14**, CSS Modules, and a Google Material Design aesthetic.

---

## ✨ Features

- **Google-inspired UI** — Material Design cards, elevation, and Google 4-color accents
- **Dark / Light Mode** — Persisted via `localStorage`, no flash on reload
- **Typing Animation** — Hero section cycles through roles with realistic typing effect
- **Scroll Animations** — IntersectionObserver-based reveal for all sections
- **Project Filtering** — Filter projects by category (Web, ML, AI, Java)
- **Skill Filtering** — Filter tech stack by category with animated progress bars
- **Contact Form** — EmailJS integration with validation and mailto fallback
- **Resume Download** — One-click PDF download from Navbar and About section
- **Fully Responsive** — Mobile-first, works on all screen sizes
- **SEO Ready** — Next.js metadata API with OG tags
- **Fast** — CSS Modules, no heavy runtime CSS-in-JS

---

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css        # Global design tokens, CSS variables, utilities
│   ├── layout.js          # HTML shell + theme init script
│   └── page.js            # Root page assembling all sections
├── components/
│   ├── Navbar/            # Sticky nav with active-section tracking
│   ├── Hero/              # Typing animation, CTA buttons, social links
│   ├── About/             # Bio, stats, highlights cards
│   ├── Skills/            # Filterable skill cards with progress bars
│   ├── Experience/        # Vertical timeline with certificate links
│   ├── Projects/          # Filterable project cards with GitHub links
│   ├── Certifications/    # Certification list cards
│   ├── Achievements/      # Achievement highlight cards
│   ├── Contact/           # Info panel + EmailJS contact form
│   └── Footer/            # Links, socials, Google color bar
└── data/
    └── portfolioData.js   # All content in one place — edit here!
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# 1. Clone / unzip the project
cd portfolio-new

# 2. Install dependencies
npm install

# 3. Start dev server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

---

## 📧 Setting Up EmailJS (Contact Form)

1. Go to [https://www.emailjs.com](https://www.emailjs.com) and create a free account
2. Create an **Email Service** (e.g. Gmail) — note the **Service ID**
3. Create an **Email Template** with variables:
   - `{{from_name}}` — sender's name
   - `{{from_email}}` — sender's email
   - `{{subject}}` — message subject
   - `{{message}}` — message body
   - Note the **Template ID**
4. Get your **Public Key** from Account → General
5. Open `src/components/Contact/Contact.jsx` and replace:

```js
const SERVICE_ID  = 'YOUR_SERVICE_ID';
const TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
const PUBLIC_KEY  = 'YOUR_PUBLIC_KEY';
```

> **Note:** If EmailJS is not configured, the form automatically falls back to opening a pre-filled `mailto:` link in the user's email client.

---

## 📄 Adding Your Resume

Place your resume PDF at:

```
public/files/ADHITHYA.pdf
```

The Navbar and About section will automatically link to it for download.

---

## 🖼️ Adding Your Profile Photo

Place your photo at:

```
public/profile.jpg
```

Then update `About.jsx` to use `<img src="/profile.jpg" />` instead of the initials avatar.

---

## ✏️ Updating Content

All portfolio content lives in **one file**:

```
src/data/portfolioData.js
```

Edit `personalInfo`, `skills`, `experience`, `projects`, `certifications`, `achievements`, and `socialLinks` — all sections update automatically.

---

## 🌐 Deployment

### Vercel (Recommended — Free)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Follow prompts — auto-detects Next.js
```

Or connect your GitHub repo at [vercel.com](https://vercel.com) for automatic deployments on every push.

### Netlify

```bash
npm run build
# Upload the `.next` folder, or connect GitHub repo
```

### GitHub Pages (Static Export)

Add to `next.config.js`:
```js
output: 'export'
```

Then:
```bash
npm run build
# Deploy the `out/` folder
```

---

## 🎨 Customization

### Colors
Edit CSS variables in `src/app/globals.css` under `:root {}` and `[data-theme="dark"] {}`.

### Fonts
Currently using **Outfit** + **DM Sans** (Google Fonts). Change the import in `globals.css`.

### Sections
Add/remove sections in `src/app/page.js` and create matching components in `src/components/`.

---

## 📦 Tech Stack

| Tool | Purpose |
|------|---------|
| Next.js 14 | React framework with App Router |
| CSS Modules | Scoped styling, zero runtime |
| @emailjs/browser | Contact form email delivery |
| react-icons | Icon library |
| Google Fonts | Outfit + DM Sans typography |

---

## 📬 Contact

**Adhithya K** · [adhicse005@gmail.com](mailto:adhicse005@gmail.com) · [LinkedIn](https://www.linkedin.com/in/adhithya-k-390780292/)
