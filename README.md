# Flinda Shi - Portfolio

Single-page portfolio website showcasing Platform PM expertise, AI tooling, and technical depth.

## 🚀 Live Site
**https://sjfjawe.github.io**

## ✨ Features

- **Single-page design** with smooth anchor navigation
- **5 sections**: Home, About Me, Professional, Life, Contact
- **Visual style** inspired by:
  - 50% lucyb0207.github.io (minimal, serif, warm accents)
  - 30% jrosser.co.uk (clean professional)
  - 20% yourawesomeusername.github.io (basic structure)
- **Light background** with warm orange/rust accent colors
- **Expandable project cards** with detailed metrics
- **Responsive design** (mobile, tablet, desktop)
- **SEO optimized** with Open Graph tags

## 🛠️ Tech Stack

- **Next.js 14** (App Router, React Server Components)
- **TypeScript** for type safety
- **Tailwind CSS v4** for styling
- **GitHub Pages** for hosting
- **GitHub Actions** for automated deployment

## 📊 Key Metrics Showcased

- 1,260+ Pull Requests Reviewed
- 27 Pull Requests Authored
- €50K Annual Savings
- 4 Years Experience
- 5M+ Users Enabled

## 🏗️ Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm start
```

## 📝 Content Updates Needed

### Life Section
Currently showing placeholder content. Add your personal interests, hobbies, and activities outside work.

### Contact Section
Update with your actual:
- LinkedIn URL
- GitHub profile URL
- Email address
- Location

## 🎨 Design System

**Colors:**
- Background: `#fdfcfb` (warm off-white)
- Text: `#1a1614` (dark brown)
- Accent: `#ff9a5c` (warm orange)
- Muted: `#6b645c` (gray-brown)

**Typography:**
- Headings: Georgia serif
- Labels: Courier New monospace (11px, uppercase)
- Body: System sans-serif

## 📁 Project Structure

```
sjfjawe.github.io/
├── .github/workflows/     # GitHub Actions deployment
├── app/                   # Next.js app directory
│   ├── layout.tsx        # Root layout with Header/Footer
│   ├── page.tsx          # Main page (all sections)
│   └── globals.css       # Global styles
├── components/
│   ├── Header.tsx        # Sticky nav with anchor links
│   ├── Footer.tsx        # Footer with social links
│   └── sections/         # Section components
│       ├── HeroSection.tsx
│       ├── AboutSection.tsx
│       ├── ProfessionalSection.tsx
│       ├── LifeSection.tsx
│       └── ContactSection.tsx
├── public/               # Static assets
└── next.config.ts        # Next.js config (static export)
```

## 🚀 Deployment

Site automatically deploys to GitHub Pages when pushing to `main` branch.

**GitHub Actions workflow:**
1. Checkout code
2. Install dependencies
3. Build Next.js (static export)
4. Deploy to GitHub Pages

## 📄 License

MIT License - See LICENSE file for details
