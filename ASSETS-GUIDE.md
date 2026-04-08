# Hillborn Organic Coffee - Image Assets Guide

This guide specifies the images needed for the website and their specifications.

## Image Requirements Overview

All images should be:
- **Format**: WebP (primary) + JPG (fallback)
- **Quality**: High-resolution, professional photography
- **Style**: Authentic, cinematic, editorial luxury aesthetic
- **Optimization**: Compressed for web (< 200KB per image)

## Hero Section Images

### hero-kilimanjaro.jpg
- **Location**: Background image for hero section
- **Dimensions**: 1920 x 1200px (16:9 aspect ratio)
- **Content**: Mount Kilimanjaro sunrise or dramatic mountain landscape
- **Style**: Cinematic, inspiring, full of natural light
- **Usage**: Main page background

## Experience Section Images

### kilimanjaro.jpg
- **Dimensions**: 800 x 600px
- **Content**: Kilimanjaro peak or trekking path
- **Style**: Dramatic, inspiring mountain imagery

### safari.jpg
- **Dimensions**: 800 x 600px
- **Content**: Wildlife (lion, leopard, or scenic savanna)
- **Style**: Majestic, untamed nature

### zanzibar.jpg
- **Dimensions**: 800 x 600px
- **Content**: Turquoise waters, white sand beach
- **Style**: Tropical, serene, paradise-like

### coffee-farm.jpg
- **Dimensions**: 800 x 600px
- **Content**: Coffee plants, beans, or harvest scenes
- **Style**: Earthy, authentic, organic

## Destination Section Images

### destination-kilimanjaro.jpg
- **Dimensions**: 600 x 500px
- **Content**: Mount Kilimanjaro landscape
- **Note**: Square or near-square for grid layout

### destination-serengeti.jpg
- **Dimensions**: 600 x 500px
- **Content**: Serengeti plains, wildlife
- **Style**: Wide open spaces, golden grasslands

### destination-zanzibar.jpg
- **Dimensions**: 600 x 500px
- **Content**: Island beaches, Stone Town, or cultural elements
- **Style**: Colorful, vibrant

### destination-ngorongoro.jpg
- **Dimensions**: 600 x 500px
- **Content**: Crater landscape or wildlife
- **Style**: Dramatic geological features

## Tour Section Images

### tour-premium-kilimanjaro.jpg
- **Dimensions**: 800 x 600px
- **Content**: Premium mountain lodge or luxury camping setup
- **Style**: High-end, comfortable, aspirational

### tour-great-migration.jpg
- **Dimensions**: 800 x 600px
- **Content**: Wildebeest migration or dramatic safari moment
- **Style**: Action-packed, wildlife spectacle

### tour-zanzibar-escape.jpg
- **Dimensions**: 800 x 600px
- **Content**: Luxury beachfront resort, sunset, or water activities
- **Style**: Relaxation, indulgence, tropical

### tour-coffee-cultural.jpg
- **Dimensions**: 800 x 600px
- **Content**: Cultural interaction, coffee ceremony, or Maasai village
- **Style**: Authentic, human connection, cultural

## Testimonial Section Images

### avatar-1.jpg
- **Dimensions**: 100 x 100px (circular)
- **Content**: Portrait photo of satisfied client 1
- **Style**: Professional headshot

### avatar-2.jpg
- **Dimensions**: 100 x 100px (circular)
- **Content**: Portrait photo of satisfied client 2
- **Style**: Professional headshot

### avatar-3.jpg
- **Dimensions**: 100 x 100px (circular)
- **Content**: Portrait photo of satisfied client 3
- **Style**: Professional headshot

### avatar-4.jpg
- **Dimensions**: 100 x 100px (circular)
- **Content**: Portrait photo of satisfied client 4
- **Style**: Professional headshot

## Gallery Section Images

### gallery-1.jpg
- **Dimensions**: 600 x 600px (tall format in masonry)
- **Content**: Kilimanjaro sunrise
- **Style**: Vertical orientation, dramatic

### gallery-2.jpg
- **Dimensions**: 600 x 600px
- **Content**: Serengeti lion or wildlife
- **Style**: Dynamic wildlife moment

### gallery-3.jpg
- **Dimensions**: 1200 x 600px (wide format)
- **Content**: Expansive savanna landscape
- **Style**: Panoramic, endless vistas

### gallery-4.jpg
- **Dimensions**: 600 x 600px
- **Content**: Zanzibar beach scene
- **Style**: Tropical, serene

### gallery-5.jpg
- **Dimensions**: 600 x 600px (tall format)
- **Content**: Coffee harvesting or farmer
- **Style**: Vertical, documentary-style

### gallery-6.jpg
- **Dimensions**: 600 x 600px
- **Content**: Luxury accommodation exterior/interior
- **Style**: High-end amenities

### gallery-7.jpg
- **Dimensions**: 1200 x 600px (wide format)
- **Content**: Maasai cultural experience or ceremony
- **Style**: Panoramic, cultural

### gallery-8.jpg
- **Dimensions**: 600 x 600px
- **Content**: African night sky, stars, or sunset
- **Style**: Atmospheric, romantic

## Blog Section Images

### blog-kilimanjaro-guide.jpg
- **Dimensions**: 800 x 400px
- **Content**: Mount Kilimanjaro trekking
- **Style**: Aspirational, adventure

### blog-great-migration.jpg
- **Dimensions**: 800 x 400px
- **Content**: Wildebeest herd migration
- **Style**: Dynamic, nature spectacle

### blog-coffee-culture.jpg
- **Dimensions**: 800 x 400px
- **Content**: Coffee roasting, tasting, or farming
- **Style**: Authentic, artisanal

### blog-zanzibar-culture.jpg
- **Dimensions**: 800 x 400px
- **Content**: Stone Town architecture or cultural scene
- **Style**: Historical, vibrant

## Final CTA Section Image

### cta-background.jpg
- **Dimensions**: 1920 x 1200px
- **Content**: Inspiring landscape (sunset safari, mountain view, or beach)
- **Style**: Cinematic, call-to-action worthy

## Story Section Image

### story-image.jpg
- **Dimensions**: 800 x 600px
- **Content**: Coffee farmers, Maasai community, or sustainable farming
- **Style**: Documentary, authentic, human connection

## Image Sourcing Recommendations

### Where to Find Images

1. **Professional Stock Photography**
   - Unsplash (free, high-quality)
   - Pexels (free, curated)
   - Pixabay (free alternatives)

2. **Premium Stock Photos**
   - Shutterstock
   - Adobe Stock
   - Getty Images
   - iStock

3. **Tanzania-Specific Resources**
   - Local photographers in Arusha
   - Tourism board resources
   - National Geographic archives
   - Adventure travel photographers

### Image Optimization

Use these tools to compress images:
- **ImageOptim** (Mac)
- **FileOptimizer** (Windows)
- **Tinypng.com** (online)
- **Squoosh** (Google's web tool)

### WebP Conversion

Convert JPG to WebP for better compression:
```bash
cwebp -q 80 input.jpg -o output.webp
```

## Placeholder Strategy

While sourcing images, you can use:
1. **Unsplash API**: `https://source.unsplash.com/800x600/?kilimanjaro`
2. **Placeholder services**: `https://via.placeholder.com/800x600`
3. **Local temporary images**: Use default colors

## Image Alt Text Examples

```html
<!-- Hero -->
alt="Mount Kilimanjaro sunrise with golden light reflecting off the snow-capped peak"

<!-- Gallery -->
alt="Vast Serengeti savanna landscape with scattered acacia trees"

<!-- Testimonial -->
alt="Smiling client testimonial portrait from luxury safari adventure"

<!-- Coffee -->
alt="Authentic coffee cherry harvest from Tanzanian organic coffee farm"
```

## Performance Considerations

- **Lazy Loading**: Images load as users scroll
- **Responsive Images**: Different sizes for mobile/tablet/desktop
- **WebP Format**: 25-35% smaller than JPG
- **Compression**: Target 50-150KB per image
- **CDN Delivery**: Use CDN for faster loading

## CSS Background Image Paths

Update in HTML:
```html
<div style="background-image: url('assets/image-name.jpg')"></div>
```

Update in CSS:
```css
.hero-background {
    background-image: url('../assets/hero-kilimanjaro.jpg');
}
```

## Future Enhancements

- **Video Integration**: Add cinematic videos to hero section
- **360° Tours**: Panoramic coffee farm and accommodation tours
- **User Gallery**: Feature client photos from journeys
- **Dynamic Content**: Load images from CMS

---

**Image Quality Checklist**

- ✓ High resolution (minimum 1920px width for backgrounds)
- ✓ Professional photography quality
- ✓ Authentic, not stock-photo generic
- ✓ Properly color-graded
- ✓ Compressed for web
- ✓ All file names match HTML references
- ✓ Consistent visual style across site
- ✓ Proper aspect ratios for layout

*All images should communicate luxury, authenticity, and the exceptional beauty of Tanzania.*
