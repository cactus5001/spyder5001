# DancingSpyder - Cyber-Anime Noir Personal Brand

A mobile-first personal branding web app styled like an anime game intro scene with smooth animations and cyberpunk aesthetics.

## Features

- **Mobile-First Design**: Optimized for 390px viewport, centered on desktop
- **Smooth Animations**: 60fps performance using Framer Motion
- **Cyber-Anime Aesthetics**: Neon glows, particles, glitch effects, and scan lines
- **Progressive Reveal**: Timed animation sequence culminating in bio reveal
- **Touch-Optimized**: Full mobile gesture support with haptic feedback

## Tech Stack

- React 18 with TypeScript
- Framer Motion for animations
- Tailwind CSS for styling
- Vite for blazing-fast builds
- Google Fonts (Piedra + Roboto)

## Animation Timeline

1. **0-0.6s**: Avatar fades in with neon glow
2. **0.6-1.0s**: Pause with idle animations
3. **1.0-1.6s**: "Who am I?" button appears
4. **On Click**: Avatar shifts up, bio panel glitches in line-by-line
5. **Post-Reveal**: Telegram contact button appears

## Customization Points

### Profile Content

**Avatar Image** (`src/components/Avatar.tsx:85`):
```tsx
<img
  src="YOUR_IMAGE_URL_HERE"
  alt="Your Name"
  className="w-full h-full object-cover"
/>
```

**Bio Lines** (`src/components/BioPanel.tsx:11`):
```tsx
const bioLines = [
  '🕷️ Your Name',
  'Your tagline here.',
  'Your second line.',
  'Your third line.',
];
```

**Contact Link** (`src/components/BioPanel.tsx:103`):
```tsx
<NeonButton
  href="YOUR_TELEGRAM_OR_CONTACT_LINK"
  // ...
>
```

### Styling

**Color Palette** (`tailwind.config.js:11-16`):
- Neon cyan: #22d3ee
- Neon purple: #a855f7
- Neon green: #34d399
- Neon teal: #06b6d4

**Typography** (`src/index.css:1`):
- Main name: "Piedra" (Google Font)
- Body text: "Roboto" (Google Font)

### Animation Timing

**Initial Pause Duration** (`src/App.tsx:16`):
```tsx
setTimeout(() => {
  setStage('button');
}, 400); // Adjust pause length
```

**Bio Line Delay** (`src/components/BioPanel.tsx:39`):
```tsx
<GlitchText
  delay={index === 0 ? 0 : 0.2} // Delay between lines
```

## Component Structure

```
src/
├── App.tsx                    # Main orchestration
├── components/
│   ├── Avatar.tsx             # Profile image with glow effects
│   ├── BackgroundFX.tsx       # Particles and gradient animations
│   ├── BioPanel.tsx           # Glassmorphism bio container
│   ├── GlitchText.tsx         # Text with glitch animation
│   └── NeonButton.tsx         # Interactive neon-styled buttons
```

## Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
npm run preview
```

## Performance

- Optimized for 60fps animations
- Lazy-loaded components where applicable
- Preloaded critical assets
- Touch-optimized tap targets (44x44px minimum)
- Respects `prefers-reduced-motion`

## Browser Support

- Modern evergreen browsers (Chrome, Firefox, Safari, Edge)
- Mobile Safari iOS 14+
- Chrome Android 90+

---

Built with precision for that authentic anime game intro vibe.
