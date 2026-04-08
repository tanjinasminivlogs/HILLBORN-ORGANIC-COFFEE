# Hillborn Organic Coffee - Brand & Style Guide

## Brand Identity

**Company Name**: Hillborn Organic Coffee
**Tagline**: "Experience Tanzania Like Never Before"
**Type**: Luxury African Tour Operator
**Location**: Arusha, Tanzania
**Brand Positioning**: Premium, authentic, sustainable luxury travel

## Visual Identity

### Color System

#### Primary Colors
- **Primary Green**: `#2D4F1E` RGB(45, 79, 30)
  - Usage: Main headings, primary buttons, navigation accents
  - Psychology: Nature, trust, sustainability
  - Represents: Tanzania's forests, growth, eco-tourism

- **Accent Brown**: `#6F4E37` RGB(111, 78, 55)
  - Usage: Call-to-action buttons, secondary headings, accents
  - Psychology: Earthiness, authenticity, quality
  - Represents: Coffee, soil, heritage

#### Secondary Colors
- **Off-White Background**: `#FAFAFA` RGB(250, 250, 250)
  - Usage: Page backgrounds, subtle sections
  - Creates: Elegant minimalism

- **Pure White**: `#FFFFFF` RGB(255, 255, 255)
  - Usage: Card backgrounds, text backgrounds, contrast

#### Neutral Colors
- **Dark Text**: `#1A1A1A` RGB(26, 26, 26)
  - Primary text color for readability

- **Light Text**: `#666666` RGB(102, 102, 102)
  - Secondary text, descriptions

- **Border Light**: `#E8E8E8` RGB(232, 232, 232)
  - Subtle dividers, borders

#### Shadow System
- **Light Shadow**: `rgba(0, 0, 0, 0.08)`
  - Subtle depth, hover states

- **Medium Shadow**: `rgba(0, 0, 0, 0.15)`
  - Card elevation, important elements

## Typography System

### Font Families

**Primary - Headlines**
- Font: Cormorant Garamond (Serif)
- License: Free (Google Fonts)
- Usage: H1, H2, H3 headings
- Weights: 300, 400, 600, 700
- Characteristics: Elegant, luxurious, editorial

**Secondary - Body Text**
- Font: Inter (Sans-serif)
- License: Free (Google Fonts)
- Usage: Body text, UI elements
- Weights: 300, 400, 500, 600, 700
- Characteristics: Clean, professional, highly legible

### Type Scale

```
H1 (Hero): 4rem (64px) - Cormorant Garamond 400
H2 (Section): 3rem (48px) - Cormorant Garamond 400
H3 (Card): 1.7rem (27px) - Cormorant Garamond 600
H4 (Footer): 1.2rem (19px) - Cormorant Garamond 600

Body Large: 1.1rem (18px) - Inter 400
Body Regular: 1rem (16px) - Inter 400
Body Small: 0.95rem (15px) - Inter 400
Label: 0.9rem (14px) - Inter 600
Caption: 0.85rem (13px) - Inter 400
```

### Line Height
- Headlines: 1.1 (tight, elegant)
- Body: 1.6-1.8 (readable, generous)
- UI Elements: 1.2

### Letter Spacing
- Headlines: +0.5px to +1px (luxury feel)
- Body: 0px (standard)
- Labels: +0.5px to +1px (emphasis)

## Spacing & Layout

### Spacing Scale (8px base)
- xs: 0.5rem (8px)
- sm: 1rem (16px)
- md: 1.5rem (24px)
- lg: 2rem (32px)
- xl: 2.5rem (40px)
- 2xl: 3rem (48px)
- 3xl: 4rem (64px)
- 4xl: 5rem (80px)

### Section Padding
- Desktop: 8rem (128px) top/bottom
- Tablet: 4rem (64px) top/bottom
- Mobile: 2.5rem (40px) top/bottom

### Container Max-Width
- Maximum: 1400px (1400 pixels)
- Padding: 2rem on sides (32px)
- Mobile: 1.5rem on sides (24px)

### Grid Systems

**2-Column Layout**
- Desktop: 50% / 50%
- Tablet: 100%
- Gap: 2.5rem

**4-Column Layout**
- Desktop: 4 equal columns
- Tablet: 2 columns
- Mobile: 1 column
- Gap: 1.5rem to 2rem

## Button Styles

### Primary Button
- Background: `#6F4E37` (Accent Brown)
- Text: White
- Padding: 0.9rem 2rem
- Border Radius: 50px
- Font Weight: 600
- Hover: Darker shade (#5d4230) + scale up + shadow
- Transition: 0.3s ease

### Secondary Button
- Background: Transparent
- Border: 2px white
- Text: White
- Padding: 0.9rem 2rem
- Border Radius: 50px
- Hover: White background + colored text

### Text Link Button
- Background: Transparent
- Text: `#6F4E37`
- Padding: 0.5rem
- Underline: On hover
- Hover: Change to primary green

## Card Components

### Experience Card
```
Layout:
├─ Image (300px height)
├─ Content Padding (2.5rem)
│  ├─ Title (1.7rem, serif)
│  ├─ Description (0.95rem, body)
│  └─ Link (styled text)
```

Hover Effects:
- Translate Y: -8px
- Box shadow: Enhanced
- Image scale: 1.05

### Tour Card
```
Layout:
├─ Image (280px height)
│  └─ Badge (positioned top-right)
├─ Content (2rem padding)
│  ├─ Title
│  ├─ Description
│  ├─ Metadata
│  └─ Footer (price + button)
```

### Blog Card
```
Layout:
├─ Image (250px height)
├─ Content (2rem padding)
│  ├─ Category badge
│  ├─ Title
│  ├─ Description
│  └─ Meta (reading time + link)
```

## Navigation System

### Desktop Navigation
- Fixed position at top
- Glassmorphism (backdrop blur)
- Logo on left
- Menu items centered right
- Height: ~80px
- Transitions: Smooth 0.3s

### Mobile Navigation
- Hamburger menu
- Full-screen overlay
- Slide animation
- Touch-optimized

## Hero Section

### Dimensions
- Height: 100vh (full viewport)
- Margin-top: 80px (account for navbar)

### Elements
- Background image: Fullscreen cover
- Overlay: Black 40% opacity
- Content centering: Flex center
- Title: 4rem serif, white
- Subtitle: 1.3rem, white, 300 weight
- CTAs: Dual buttons

### Animations
- Fade in up: 1s ease-out
- Scroll indicator: Bounce continuous
- Parallax: Background moves slower

## Hover & Interaction States

### General Rules
- All interactive elements: 0.3s to 0.4s ease transition
- Hover scale: -2px to -8px (translate Y upward)
- Shadow enhancement: From light to medium
- Color shift: To primary or accent color

### Click States
- Slight scale down: 0.98
- Quick feedback: 0.1s transition

### Focus States (Accessibility)
- Visible outline or highlight
- Minimum 2px thickness
- Contrasting color

## Forms & Inputs

### Input Styling
- Border: 1px solid border-light
- Border-radius: 4px
- Padding: 0.8rem
- Font: Inter 0.95rem
- Focus: Border changes to accent-brown
- Background: Transparent or white

### Labels
- Font weight: 600
- Font size: 0.9rem
- Margin-bottom: 0.5rem
- Color: Dark text

### Validation
- Valid: Green border
- Invalid: Red border
- Error message: 0.85rem red text below input

## Footer

### Layout
- Dark background (`#1A1A1A`)
- 4-column grid (desktop)
- 2-column tablet
- 1-column mobile
- Gap: 3rem

### Typography
- Headings: Serif 1.2rem, brown accent
- Links: Light gray, hover brown

### Social Icons
- Size: 40px diameter
- Background: Subtle transparency
- Hover: Brown background, white text

## Responsive Breakpoints

```
Mobile:     < 480px
Tablet:     481px - 768px
Desktop:    769px - 1024px
Large:      1025px - 1400px
XL:         > 1400px
```

### Responsive Adjustments

**Mobile (< 480px)**
- Font sizes: -20% from desktop
- Padding: -50% from desktop
- Margins: -50% from desktop
- Grid: Single column
- Images: Smaller dimensions

**Tablet (481-768px)**
- Font sizes: -10% from desktop
- Padding: -25% from desktop
- Grid: 2 columns max
- Spacing: Moderate reduction

**Desktop (769px+)**
- Full design as specified
- Maximum 4 columns
- Full spacing & padding

## Animation Principles

### Easing Functions
- Standard: `cubic-bezier(0.25, 0.46, 0.45, 0.94)`
- Easy in: `ease-in`
- Easy out: `ease-out`
- Smooth: `ease`

### Duration Guidelines
- Hover effects: 0.3s - 0.4s
- Entrance animations: 0.6s - 1s
- Page transitions: 0.3s - 0.5s
- Scroll animations: 0.6s - 0.8s

### Common Animations
- Fade in: Opacity 0 → 1
- Slide up: translateY 30px → 0
- Scale in: scale 0.95 → 1
- Bounce: Multiple keyframes

## Imagery Guidelines

### Photography Style
- **Aesthetic**: Cinematic, editorial, aspirational
- **Colors**: Warm earth tones, golden hours
- **Composition**: Rule of thirds, depth of field
- **People**: Authentic moments, genuine smiles
- **Nature**: Grand landscapes, dramatic lighting

### Image Sizes (Recommended)
- Hero: 1920 x 1200px
- Section backgrounds: 1920 x 600px
- Cards: 800 x 600px or 600 x 600px
- Thumbnails: 400 x 300px
- Avatars: 100 x 100px

### Image Quality
- Compression: WebP 80% quality
- File size: 50-150KB per image
- Format: JPG/PNG + WebP fallback
- Resolution: 2x for retina display

## Micro-interactions

### Button Hover
1. Subtle scale up (1.02)
2. Shadow enhancement
3. Color slight shift
4. Cursor: pointer

### Link Hover
1. Color change
2. Underline appears/grows
3. Transition: 0.3s

### Form Focus
1. Border color change
2. Subtle shadow
3. Cursor: text

### Card Hover
1. Elevation (translate Y -8px)
2. Shadow enhancement
3. Image scale 1.05
4. Transition: 0.4s cubic-bezier

## Icons & Symbols

### Icon Set
- Font Awesome 6.4.0 (used in site)
- Size: 20px - 24px typical
- Color: Match text or primary color
- Margin: 0.5rem from text

### Icon Usage
- Navigation: 24px
- Buttons: 20px
- Cards: 18px
- Social: 20px

## SEO & Metadata

### Page Meta
```html
<title>Hillborn Organic Coffee - Luxury Tanzania Safari</title>
<meta name="description" content="...">
<meta name="keywords" content="...">
<meta name="viewport" content="width=device-width, initial-scale=1">
```

### Social Meta (Open Graph)
```html
<meta property="og:title" content="...">
<meta property="og:description" content="...">
<meta property="og:image" content="...">
<meta property="og:url" content="...">
```

## Accessibility Standards

### WCAG 2.1 AA Compliance
- Color contrast: Minimum 4.5:1 for text
- Focus indicators: Visible and clear
- Button size: Minimum 44x44px
- Alt text: Descriptive for all images
- Keyboard navigation: Full support

### Screen Reader Support
- Semantic HTML5
- ARIA labels where needed
- Descriptive link text
- Form labels associated

## Usage Examples

### Using Brand Colors in New Sections
```css
.new-section {
    background: var(--light-bg);
    color: var(--text-dark);
}

.new-section h2 {
    color: var(--primary-green);
}

.new-section button {
    background: var(--accent-brown);
}
```

### Creating New Cards
```css
.custom-card {
    background: white;
    border-radius: 8px;
    padding: 2rem;
    box-shadow: 0 5px 20px var(--shadow-light);
    transition: all 0.4s ease;
}

.custom-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 40px var(--shadow-medium);
}
```

## Brand Voice & Tone

### Writing Style
- Elegant but accessible
- Emotional and storytelling-focused
- Authentic and honest
- Aspirational without being pretentious

### Example Headlines
- "Experience Tanzania Like Never Before"
- "Where Luxury Meets Authenticity"
- "Discover Pristine Wilderness"
- "Create Memories in the Heart of Africa"

### Messaging Pillars
1. **Authenticity**: Real experiences, genuine connections
2. **Luxury**: Premium accommodations, exclusive access
3. **Sustainability**: Eco-conscious practices, community support
4. **Adventure**: Thrilling experiences, natural wonders
5. **Culture**: Authentic interactions, local knowledge

## Consistency Checklist

- [ ] All headings use Cormorant Garamond
- [ ] All body text uses Inter font
- [ ] Primary green used for H2 headings
- [ ] Accent brown used for buttons/CTAs
- [ ] 8px spacing scale followed
- [ ] Card shadows consistent
- [ ] Hover animations applied uniformly
- [ ] Mobile breakpoints responsive
- [ ] Color contrast accessible (4.5:1)
- [ ] All links underline on hover
- [ ] Buttons have clear hover states

## Maintenance & Updates

### Quarterly Review
- Check for any design inconsistencies
- Update imagery seasonally
- Review color usage
- Test accessibility

### Annual Updates
- Refresh imagery
- Review typography readability
- Update outdated content
- Audit all links and forms

---

*This brand guide ensures consistency across all touchpoints and maintains Hillborn Organic Coffee's premium luxury positioning.*

**Last Updated**: April 2026
**Version**: 1.0
**Status**: Active
