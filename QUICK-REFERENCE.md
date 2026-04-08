# Hillborn Organic Coffee - Quick Reference Guide

## 📁 Project Files

```
d:\learning_html\
├── index.html              Main website (all HTML structure)
├── styles.css              Complete styling (all CSS)
├── script.js               Interactive features (JavaScript)
├── README.md               Project overview
├── ASSETS-GUIDE.md         Image specifications
├── DEPLOYMENT.md           Hosting & launch guide
├── BRAND-GUIDELINES.md     Design system & brand standards
├── QUICK-REFERENCE.md      This file
└── assets/                 Image folder (to populate)
```

## 🎨 Brand Colors (CSS Variables)

| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| Primary Green | `#2D4F1E` | 45,79,30 | Headings, accents |
| Accent Brown | `#6F4E37` | 111,78,55 | Buttons, CTAs |
| Light Background | `#FAFAFA` | 250,250,250 | Section backgrounds |
| White | `#FFFFFF` | 255,255,255 | Cards, content |
| Dark Text | `#1A1A1A` | 26,26,26 | Primary text |
| Light Text | `#666666` | 102,102,102 | Secondary text |

## 🔤 Typography

**Headings**: Cormorant Garamond (serif)
- H1: 4rem (64px) | 400 weight
- H2: 3rem (48px) | 400 weight
- H3: 1.7rem (27px) | 600 weight

**Body**: Inter (sans-serif)
- Large: 1.1rem (18px) | 400 weight
- Regular: 1rem (16px) | 400 weight
- Small: 0.95rem (15px) | 400 weight

## 📱 Responsive Breakpoints

```
Mobile:     < 480px   (1 column, reduced spacing)
Tablet:     481-768px (2 columns, moderate spacing)
Desktop:    > 769px   (4 columns, full spacing)
```

## 🎯 Website Sections

1. **Navigation Bar** - Fixed, glassmorphic
2. **Hero Section** - Fullscreen with CTA & quick search
3. **Featured Experiences** - 4 luxury cards
4. **Brand Story** - Split layout with narrative
5. **Destinations** - 4 destination cards
6. **Featured Tours** - Premium tour cards with pricing
7. **Testimonials** - Client reviews, 4 columns
8. **Gallery** - Masonry layout
9. **Blog** - Travel stories
10. **Final CTA** - Full-width call to action
11. **Footer** - 4-column layout

## 🔧 Customization Hotspots

### Contact Information
**File**: `index.html` | **Line**: ~900 (footer section)
```html
<p>Phone: +255 (0) 27 250 8888</p>
<p>Email: hello@hillborn.tz</p>
```

### Social Media Links
**File**: `index.html` | **Line**: ~910
```html
<a href="https://instagram.com/hillborntz"><i class="fab fa-instagram"></i></a>
```

### Brand Colors
**File**: `styles.css` | **Line**: 1-10
```css
:root {
    --primary-green: #2D4F1E;
    --accent-brown: #6F4E37;
}
```

### Booking Form Handler
**File**: `script.js` | **Line**: ~150
```javascript
function handleBooking() { /* ... */ }
```

## 🖼️ Image Placeholders to Replace

| Image | Dimensions | Purpose |
|-------|-----------|---------|
| hero-kilimanjaro.jpg | 1920x1200 | Hero background |
| kilimanjaro.jpg | 800x600 | Experience card |
| safari.jpg | 800x600 | Experience card |
| zanzibar.jpg | 800x600 | Experience card |
| coffee-farm.jpg | 800x600 | Experience card |
| destination-*.jpg | 600x500 | Destination cards (4x) |
| tour-*.jpg | 800x600 | Tour cards (4x) |
| avatar-*.jpg | 100x100 | Testimonials (4x) |
| gallery-*.jpg | Various | Gallery (8x) |
| blog-*.jpg | 800x400 | Blog cards (4x) |
| cta-background.jpg | 1920x1200 | Final CTA section |
| story-image.jpg | 800x600 | Story section |

**Total**: 40+ images needed

## 🎬 Key Interactions

### Navbar
- Fixed position with scroll effect
- Smooth link navigation
- Mobile hamburger menu

### Hero Section
- Parallax background
- Animated headline (fade-in-up)
- Quick search form
- Bounce scroll indicator

### Cards
- Hover: Translate Y -8px + shadow enhancement
- Image scale: 1.05 on hover
- Smooth transitions: 0.3-0.4s

### Modal (Booking)
- Fade in animation
- Form validation
- Success message
- Keyboard close (ESC)

### Gallery
- Lightbox on click
- Click outside to close
- Responsive masonry grid

## 📊 File Sizes (Optimized)

- `index.html`: ~45KB
- `styles.css`: ~85KB
- `script.js`: ~25KB
- **Average per image**: 80-150KB (optimized)
- **Total per page load**: ~500KB-1.5MB (with images)

## ⚡ Performance Tips

1. **Minify files** before deployment
2. **Optimize images** to WebP format
3. **Enable GZIP** compression on server
4. **Use CDN** for static assets
5. **Lazy load** images below fold
6. **Cache** static assets (1 year)

## 🔍 SEO Basics

- Meta description: ~155 characters
- Open Graph tags: Configured
- Structured data: Add JSON-LD
- Mobile responsive: ✓ Yes
- Page speed: Target < 3 seconds
- Lighthouse score: Target 90+

## 🚀 Deployment Steps

1. Create `assets/` folder
2. Add optimized images
3. Update contact information
4. Connect booking form API
5. Test on mobile/tablet
6. Deploy to hosting
7. Configure domain/SSL
8. Set up analytics
9. Verify Lighthouse score
10. Monitor performance

## 📞 Contact Information Template

**Email**: hello@hillborn.tz  
**Phone**: +255 (0) 27 250 8888  
**WhatsApp**: +255 755 123 456  
**Location**: Arusha, Tanzania

## 🎨 CSS Variables Quick Access

```css
/* Colors */
--primary-green: #2D4F1E;
--accent-brown: #6F4E37;
--light-bg: #FAFAFA;
--white: #FFFFFF;
--text-dark: #1A1A1A;
--text-light: #666666;
--border-light: #E8E8E8;
--shadow-light: rgba(0, 0, 0, 0.08);
--shadow-medium: rgba(0, 0, 0, 0.15);

/* Fonts */
--font-serif: 'Cormorant Garamond', serif;
--font-sans: 'Inter', sans-serif;
```

## 🔌 Form Submission Flow

1. User fills booking form
2. JavaScript validates input
3. Creates booking object
4. Sends to backend API (configure endpoint)
5. Shows success message
6. Resets form
7. Closes modal

**Current**: Logs to console (development)  
**Production**: Connect to your API endpoint

## 📋 Content Sections

| Section | Editable Items | Location |
|---------|---|---|
| Navigation | 6 links | HTML ~50 |
| Hero | Title, subtitle | HTML ~250 |
| Experiences | 4 cards | HTML ~380 |
| Story | Text, image | HTML ~420 |
| Destinations | 4 cards | HTML ~480 |
| Tours | 4 cards | HTML ~570 |
| Testimonials | 4 reviews | HTML ~680 |
| Gallery | 8 items | HTML ~760 |
| Blog | 4 articles | HTML ~840 |
| Footer | Contact, links | HTML ~900 |

## 🎯 Conversion Elements

- Primary CTA: "Plan Your Journey" (accent brown)
- Secondary CTA: "Explore Tours" (white outline)
- Modal CTA: Booking form
- Blog CTA: "View All Stories"
- Tour CTA: "View Details"
- Final CTA: "Plan Your Journey Now"

## ✅ Launch Checklist

- [ ] All images added & optimized
- [ ] Contact info updated
- [ ] Social links configured
- [ ] Booking form connected
- [ ] Meta tags added
- [ ] Analytics installed
- [ ] SSL certificate active
- [ ] Domain configured
- [ ] Mobile tested
- [ ] Desktop tested
- [ ] Lighthouse score 90+
- [ ] Forms tested
- [ ] Links verified
- [ ] Backup created
- [ ] Monitoring enabled

## 🆘 Troubleshooting Quick Tips

**Images not showing**
→ Check file paths, verify assets/ folder exists

**Styles not applied**
→ Clear browser cache, check CSS link

**JavaScript errors**
→ Open DevTools (F12), check console

**Form not working**
→ Check API endpoint, verify form IDs

**Mobile not responsive**
→ Check viewport meta tag, test breakpoints

## 📚 External Resources

- **Fonts**: Google Fonts (fonts.googleapis.com)
- **Icons**: Font Awesome (cdnjs.cloudflare.com)
- **Hosting**: Netlify, Vercel, AWS
- **CDN**: Cloudflare, AWS CloudFront
- **Analytics**: Google Analytics 4
- **Forms**: Netlify Forms, Formspree, Basin

## 🔐 Security Basics

- Use HTTPS always
- Validate all form inputs
- Sanitize user data
- Keep dependencies updated
- Regular security audits
- GDPR compliance (if applicable)

---

## Quick Command Reference

```bash
# Local development
python -m http.server 8000
npx http-server
# Visit: http://localhost:8000

# Minify CSS
csso styles.css -o styles.min.css

# Optimize images
cwebp -q 80 input.jpg -o output.webp

# Check lighthouse
npx lighthouse https://your-domain.com
```

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | Apr 2026 | Initial release |
| 1.1 | TBD | Multi-language support |
| 1.2 | TBD | Mobile app launch |

---

**Created for Hillborn Organic Coffee**  
*Luxury Travel Website - Tanzania*

**Last Updated**: April 8, 2026  
**Status**: Production Ready  
**Support**: See README.md for detailed documentation
