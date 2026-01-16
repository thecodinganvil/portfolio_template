# Portfolio Template

A clean, modern portfolio template built with Next.js. Ready to customize with your own content.

## 🚀 Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 How to Customize

### 1. Personal Information

Update these files with your details:

**`src/app/layout.tsx`**
- Change the title, description, and author name

**`src/components/sections/Home.tsx`**
- Update your name and role/tagline

**`src/components/sections/About.tsx`**
- Replace the placeholder photo with your image
- Update name, nationality, languages
- Update contact details (address, phone, email, LinkedIn)
- Modify skills array with your skills
- Update timeline with your experience and education

**`src/components/sections/Contact.tsx`**
- Update phone, address, email
- Add your social media links

### 2. Portfolio Projects

**`src/components/sections/Portfolio.tsx`**
- Add your project images to `/public/assets/portfolio/`
- Update the `portfolioItems` array with your projects

### 3. Testimonials

**`src/components/sections/Testimonials.tsx`**
- Add real testimonials from your clients

### 4. Stats/Facts

**`src/components/sections/Facts.tsx`**
- Update the numbers to reflect your experience

### 5. Profile Photo

Replace the placeholder in `About.tsx` with an actual image:
```tsx
<img className="my-photo" src="/assets/about.jpg" alt="Your Name" />
```

### 6. Color Theme

Change the color theme in `layout.tsx`:
```html
<link id="color-skin-link" rel="stylesheet" href="/css/skins/yellow.css" />
```

Available themes in `/public/css/skins/`:
- yellow.css
- blue.css
- green.css
- red.css
- purple.css

## 📁 Project Structure

```
├── public/
│   ├── assets/           # Your images
│   └── css/              # Template CSS
├── src/
│   ├── app/              # Next.js app
│   ├── components/
│   │   └── sections/     # Page sections to customize
│   └── lib/              # Utilities
```

## 🚀 Deploy

Deploy easily on [Vercel](https://vercel.com/):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

---

Made with Next.js
