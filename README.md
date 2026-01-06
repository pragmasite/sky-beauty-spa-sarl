# SKY BEAUTY spa - Professional Website

A modern, single-page website built with Vite + React + TypeScript + shadcn/ui + Framer Motion for SKY BEAUTY spa Sàrl.

## Features

### 🌍 Multi-Language Support
- Primary language: **French** (default route: `/`)
- Secondary languages: **English** (`/en`) and **German** (`/de`)
- Language switcher dropdown in header

### 🎨 Design System
- **Color Palette**: Rose/Blush theme optimized for beauty/wellness
  - Primary: Rose (#FF6B9D)
  - Accent: Gold (#F5D76E)
  - Serif fonts: Playfair Display
  - Sans fonts: Inter
- **Responsive**: Mobile-first design
- **Smooth Animations**: Framer Motion throughout

### 📱 Sections
1. **Header** - Fixed navigation with language switcher
2. **Hero** - Full-height background image with gradient overlay
3. **About** - Team introduction and features
4. **Services** - 8 specialized beauty treatments
5. **Gallery** - Image slider with descriptions (4 images)
6. **Hours** - Opening hours with today highlight
7. **Contact** - Contact info + embedded Google Maps
8. **Footer** - Navigation and social links

### ⚙️ Technical Stack
- **Vite** - Fast bundling
- **React 18** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility styling
- **shadcn/ui** - Premium components
- **Framer Motion** - Animations
- **React Router** - Multi-language routing

## Project Structure

```
src/
├── components/        # All UI components
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Services.tsx
│   ├── Gallery.tsx
│   ├── Hours.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   ├── DisclaimerModal.tsx
│   └── ui/           # shadcn/ui components
├── hooks/
│   └── useLanguage.tsx  # Language context hook
├── lib/
│   └── translations.ts  # FR/EN/DE translations
├── pages/
│   ├── Index.tsx       # Main page
│   └── NotFound.tsx
└── App.tsx             # Routes & providers

public/
└── images/
    ├── hero-bg.jpg     # Hero section background
    ├── img-1.jpg       # Gallery image 1
    ├── img-2.jpg       # Gallery image 2
    ├── img-3.jpg       # Gallery image 3
    ├── img-4.jpg       # Gallery image 4
    └── favicon.jpg     # Logo (favicon)
```

## Key Features

### Language System
- URL-based routing (not state-based)
- All content fully translated (FR, EN, DE)
- Language switcher in header
- Automatic language detection from URL

### Accessibility
- Semantic HTML
- Proper contrast ratios
- Mobile responsive navigation
- Smooth scroll behavior
- Clickable scroll indicator

### Performance
- Optimized images
- CSS-in-JS with Tailwind
- Code splitting via Vite
- Gzip compression enabled

## Building & Deployment

```bash
# Install dependencies
npm install

# Development server
npm run dev

# Production build
npm run build

# Preview production build
npm run preview
```

## Browser Support
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers

## Contact Information
- **Phone**: +41 76 340 36 71
- **Email**: skybeautyyspaa@outlook.fr
- **Address**: Route de Ferney 220, 1218 Le Grand-Saconnex, Switzerland
- **Instagram**: @skybeautyy.studio

---

**Note**: This is a preview website. It is not indexed on Google and may contain test data.
