# Hillborn Organic Coffee - Visual Website Map & Component Library

## Website Structure & Navigation Map

```
┌─────────────────────────────────────────────────────────────┐
│                      NAVIGATION BAR                         │
│  [LOGO]  Home | Experiences | Destinations | Tours | Blog  │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                    HERO SECTION (100vh)                     │
│                  [Full Background Image]                    │
│                                                             │
│           "Experience Tanzania Like Never Before"          │
│     "Discover pristine wilderness, authentic culture..."  │
│                                                             │
│            [Plan Journey]  [Explore Tours]                │
│                                                             │
│         ┌─ Quick Search Form ─────────────────┐            │
│         │ Destination | Dates | Guests | GO   │            │
│         └─────────────────────────────────────┘            │
│                                                             │
│                      ↓ Scroll ↓                             │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│          FEATURED EXPERIENCES (4 Cards, 2x2 Grid)           │
│                                                             │
│  ┌──────────────┐  ┌──────────────┐                       │
│  │ Kilimanjaro  │  │    Safari    │                       │
│  │   [Image]    │  │   [Image]    │                       │
│  │ Description  │  │ Description  │                       │
│  │  [Discover]  │  │  [Discover]  │                       │
│  └──────────────┘  └──────────────┘                       │
│                                                             │
│  ┌──────────────┐  ┌──────────────┐                       │
│  │   Zanzibar   │  │   Coffee     │                       │
│  │   [Image]    │  │   [Image]    │                       │
│  │ Description  │  │ Description  │                       │
│  │  [Discover]  │  │  [Discover]  │                       │
│  └──────────────┘  └──────────────┘                       │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│              BRAND STORY (Split Layout)                     │
│                                                             │
│  [Large Story Image]    Story Text                        │
│                         "Our Story"                        │
│                         Paragraph 1                        │
│                         Paragraph 2                        │
│                         Paragraph 3                        │
│                         [Learn More]                       │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│          DESTINATIONS (4 Cards, 1x4 Grid)                   │
│                                                             │
│  ┌────────┐  ┌────────┐  ┌────────┐  ┌────────┐          │
│  │Kiliman│  │Serenget│  │Zanzibar│  │Ngoron │          │
│  │[Image]│  │[Image] │  │[Image] │  │[Image]│          │
│  │OverLay│  │OverLay │  │OverLay │  │OverLay│          │
│  └────────┘  └────────┘  └────────┘  └────────┘          │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│           FEATURED TOURS (4 Cards, 2x2 Grid)                │
│                                                             │
│  ┌──────────────────────┐  ┌──────────────────────┐       │
│  │ [PREMIUM]            │  │ [SEASONAL]           │       │
│  │ [Tour Image]         │  │ [Tour Image]         │       │
│  │ Kilimanjaro Summit   │  │ Great Migration      │       │
│  │ Description...       │  │ Description...       │       │
│  │ 8 Days | Challenging │  │ 5 Days | Moderate    │       │
│  │ From $4,500 [View]   │  │ From $3,200 [View]   │       │
│  └──────────────────────┘  └──────────────────────┘       │
│                                                             │
│  ┌──────────────────────┐  ┌──────────────────────┐       │
│  │ [RELAXATION]         │  │ [EXCLUSIVE]          │       │
│  │ [Tour Image]         │  │ [Tour Image]         │       │
│  │ Zanzibar Paradise    │  │ Coffee & Culture     │       │
│  │ Description...       │  │ Description...       │       │
│  │ 4 Days | Easy        │  │ 6 Days | Authentic   │       │
│  │ From $2,800 [View]   │  │ From $2,200 [View]   │       │
│  └──────────────────────┘  └──────────────────────┘       │
│                                                             │
│                 [View All Collections]                     │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│          TESTIMONIALS (4 Cards, 1x4 Grid)                   │
│                                                             │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐  │
│  │[Avatar]  │  │[Avatar]  │  │[Avatar]  │  │[Avatar]  │  │
│  │Name      │  │Name      │  │Name      │  │Name      │  │
│  │Location  │  │Location  │  │Location  │  │Location  │  │
│  │★★★★★    │  │★★★★★    │  │★★★★★    │  │★★★★★    │  │
│  │Review... │  │Review... │  │Review... │  │Review... │  │
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘  │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│          GALLERY (Masonry Layout)                            │
│                                                             │
│  ┌─────┐  ┌─────┐  ┌──────────┐  ┌─────┐               │
│  │ [L] │  │ [S] │  │  [Wide]  │  │ [S] │               │
│  │ [T] │  │ [S] │  │          │  │ [S] │               │
│  └─────┘  └─────┘  └──────────┘  └─────┘               │
│                                                             │
│  ┌─────┐  ┌──────────┐  ┌─────┐  ┌─────┐               │
│  │ [S] │  │  [Wide]  │  │ [S] │  │ [S] │               │
│  │ [S] │  │          │  │ [S] │  │ [S] │               │
│  └─────┘  └──────────┘  └─────┘  └─────┘               │
│  [S=Small, L=Large/Tall, Wide=Wide]                     │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│             BLOG/STORIES (4 Cards, 2x2 Grid)                │
│                                                             │
│  ┌──────────────────────┐  ┌──────────────────────┐       │
│  │ [Travel Guide]       │  │ [Safari Stories]     │       │
│  │ [Blog Image]         │  │ [Blog Image]         │       │
│  │ Kilimanjaro Guide    │  │ Great Migration      │       │
│  │ Description...       │  │ Description...       │       │
│  │ 5 min [Read More →]  │  │ 7 min [Read More →]  │       │
│  └──────────────────────┘  └──────────────────────┘       │
│                                                             │
│  ┌──────────────────────┐  ┌──────────────────────┐       │
│  │ [Coffee Culture]     │  │ [Cultural Insights]  │       │
│  │ [Blog Image]         │  │ [Blog Image]         │       │
│  │ Organic Coffee       │  │ Zanzibar Culture     │       │
│  │ Description...       │  │ Description...       │       │
│  │ 6 min [Read More →]  │  │ 8 min [Read More →]  │       │
│  └──────────────────────┘  └──────────────────────┘       │
│                                                             │
│                   [View All Stories]                       │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│            FINAL CTA (Full Width)                           │
│                   [Background Image]                       │
│                                                             │
│        "Start Your African Adventure Today"               │
│    "Your journey to unforgettable experiences begins..."  │
│                                                             │
│                [Plan Your Journey Now]                     │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                      FOOTER                                 │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐  │
│  │ About    │  │ Quick    │  │ Dest.    │  │ Contact  │  │
│  │ [Social] │  │ Links    │  │ Links    │  │ Info     │  │
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘  │
│                                                             │
│  © 2026 Hillborn Organic Coffee | Privacy | Terms          │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                   BOOKING MODAL                             │
│                   (Overlay)                                 │
│                                                             │
│           Begin Your Journey              [X]              │
│                                                             │
│  Full Name: [________________]                             │
│  Email:     [________________]                             │
│  Phone:     [________________]                             │
│                                                             │
│  Experience: [Select ▼]    Guests: [Select ▼]            │
│  Start Date: [Date Picker] Duration: [Select ▼]          │
│                                                             │
│  Special Requests: [Large Text Area...............]        │
│                                                             │
│  ☑ I agree to be contacted...                             │
│                                                             │
│              [Send My Inquiry]                             │
│     A specialist will contact you within 24 hours         │
└─────────────────────────────────────────────────────────────┘
```

---

## Component Specifications

### Button Variants

**Primary Button**
```
Background: Brown (#6F4E37)
Text: White
Padding: 0.9rem 2rem (14px 32px)
Border Radius: 50px
Font Weight: 600
Hover: Darker shade + transform up + shadow
Example: [Plan Your Journey]
```

**Secondary Button**
```
Background: Transparent
Border: 2px White
Text: White
Padding: 0.9rem 2rem
Border Radius: 50px
Hover: White background + text color change
Example: [Explore Tours]
```

**Text Link**
```
Background: Transparent
Text: Brown (#6F4E37)
Underline: On hover
Example: [Discover], [Learn More →]
```

### Card Components

**Experience Card**
```
Width: 50% (desktop), 100% (mobile)
Image Height: 300px
Content Padding: 2.5rem
Hover: Translate Y -8px + shadow enhancement
```

**Tour Card**
```
Width: 50% (desktop), 100% (mobile)
Image Height: 280px
Badge: Top-right positioned
Footer: Flexbox with price + button
```

**Blog Card**
```
Width: 50% (desktop), 100% (mobile)
Image Height: 250px
Category Badge: Inline, brown text
Metadata: Flex, space-between
```

### Input Field Styling

```
Border: 1px solid #E8E8E8
Padding: 0.8rem
Border Radius: 4px
Font: Inter 0.95rem
Focus: Border changes to brown
```

---

## Color Usage Across Components

| Component | Primary Color | Accent Color | Usage |
|-----------|---|---|---|
| Headings (H2) | Green #2D4F1E | - | Main titles |
| Buttons (CTA) | - | Brown #6F4E37 | Action items |
| Links | - | Brown #6F4E37 | Navigation, discovery |
| Badges | - | Brown #6F4E37 | Tour categories |
| Shadows | Dark 0.08 | Dark 0.15 | Depth, elevation |
| Borders | #E8E8E8 | - | Subtle dividers |
| Text | #1A1A1A | - | Primary content |
| Text Alt | #666666 | - | Secondary info |

---

## Responsive Behavior

### Desktop (> 769px)
- 4-column grids
- Full spacing
- All hover effects
- Full typography scale

### Tablet (481-768px)
- 2-column grids
- Reduced spacing (-25%)
- Touch-friendly buttons
- Adjusted font sizes

### Mobile (< 480px)
- 1-column layouts
- Minimal spacing
- 44px+ touch targets
- Reduced font sizes (-20%)
- Stacked forms
- Full-width elements

---

## Spacing System

```
xs  = 0.5rem   (8px)
sm  = 1rem     (16px)
md  = 1.5rem   (24px)
lg  = 2rem     (32px)
xl  = 2.5rem   (40px)
2xl = 3rem     (48px)
3xl = 4rem     (64px)
4xl = 5rem     (80px)
```

**Section Padding**:
- Desktop: 8rem (128px) top/bottom
- Tablet: 4rem (64px) top/bottom
- Mobile: 2.5rem (40px) top/bottom

---

## Typography Scale

```
H1 (Hero):      4rem   (64px)   Weight: 400
H2 (Section):   3rem   (48px)   Weight: 400
H3 (Card):      1.7rem (27px)   Weight: 600
H4 (Footer):    1.2rem (19px)   Weight: 600

Body Large:     1.1rem (18px)   Weight: 400
Body Regular:   1rem   (16px)   Weight: 400
Body Small:     0.95rem(15px)   Weight: 400
Label:          0.9rem (14px)   Weight: 600
Caption:        0.85rem(13px)   Weight: 400
```

---

## Animation Timing

```
Hover Effects:     0.3s - 0.4s
Page Transitions:  0.3s - 0.5s
Entrance Animations: 0.6s - 1s
Scroll Animations: 0.6s - 0.8s

Easing:
Standard: cubic-bezier(0.25, 0.46, 0.45, 0.94)
Easy In:  ease-in
Easy Out: ease-out
Smooth:   ease
```

---

## Form Layout

**Desktop**:
```
Row 1: Name          Email          Phone
Row 2: Experience    Guests
Row 3: Start Date    Duration
Row 4: Special Requests (full width)
Row 5: Checkbox      (full width)
Row 6: Submit Button (full width)
```

**Mobile**:
```
Row 1: Name
Row 2: Email
Row 3: Phone
Row 4: Experience
Row 5: Guests
Row 6: Start Date
Row 7: Duration
Row 8: Special Requests
Row 9: Checkbox
Row 10: Submit Button
```

---

## Hover States

### Card Hover
```css
transform: translateY(-8px);
box-shadow: 0 15px 40px rgba(0,0,0,0.15);
transition: all 0.4s ease;
```

### Button Hover
```css
transform: translateY(-2px);
box-shadow: 0 10px 25px rgba(111,78,55,0.3);
transition: all 0.3s ease;
```

### Image Hover (in card)
```css
transform: scale(1.05);
transition: transform 0.5s ease;
```

### Link Hover
```css
color: #2D4F1E (change to green);
text-decoration: underline;
transition: color 0.3s ease;
```

---

## Mobile Menu States

**Closed**:
- Display: none (hidden)
- Background: transparent

**Open**:
- Display: flex
- Background: White with shadow
- Animation: Slide down
- Z-index: 999

---

## Accessibility Features

✅ Semantic HTML5
✅ ARIA labels
✅ Focus indicators
✅ Keyboard navigation
✅ Color contrast (4.5:1+)
✅ Alt text on images
✅ Screen reader support
✅ Touch targets (44px+)

---

## Component Library

### Available Components

1. Navigation Bar
2. Hero Section
3. Experience Card
4. Destination Card
5. Tour Card
6. Testimonial Card
7. Blog Card
8. Gallery Item (Masonry)
9. Button (3 variants)
10. Input Field
11. Select Dropdown
12. Textarea
13. Modal/Overlay
14. Lightbox
15. Badge

Each component is fully styled and responsive.

---

## Performance Checklist

✅ Minified CSS
✅ Minified JavaScript
✅ Optimized images
✅ Lazy loading ready
✅ GZIP compression compatible
✅ Cache headers configured
✅ CDN ready
✅ < 3s page load target
✅ 90+ Lighthouse score

---

## Browser Compatibility

| Feature | Chrome | Firefox | Safari | Edge |
|---------|--------|---------|--------|------|
| CSS Grid | ✅ | ✅ | ✅ | ✅ |
| Flexbox | ✅ | ✅ | ✅ | ✅ |
| Animations | ✅ | ✅ | ✅ | ✅ |
| Forms | ✅ | ✅ | ✅ | ✅ |
| IntersectionObserver | ✅ | ✅ | ✅ | ✅ |
| Smooth Scroll | ✅ | ✅ | ✅ | ✅ |

---

## Next Steps for Customization

1. Replace brand name throughout
2. Update color variables for your brand
3. Modify typography selections
4. Add your company's contact info
5. Upload high-quality images
6. Customize content and messaging
7. Test thoroughly
8. Deploy and monitor

---

**This visual map provides a complete overview of the website structure and components.**

*Reference this document while customizing to maintain design consistency.*
