# DancingSpyder - Cyber-Anime Noir Personal Brand

## Overview
A mobile-first personal branding web app styled like an anime game intro scene with smooth animations and cyberpunk aesthetics. Built with React 18, TypeScript, Framer Motion, and Tailwind CSS.

## Project Setup (Completed: October 4, 2025)

### Technology Stack
- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite 5.4
- **Animation**: Framer Motion
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Piedra + Roboto)

### Architecture
- Single-page application (SPA)
- Frontend-only (no backend)
- Mobile-first design (390px viewport, centered on desktop)
- Optimized for 60fps animations

### Replit Configuration
- **Development Server**: Vite dev server on port 5000
- **Host Configuration**: 0.0.0.0 (required for Replit proxy)
- **Deployment**: Autoscale with `npm run build` and `npm run preview`
- **Workflow**: "Start application" runs `npm run dev`

### Key Files
- `src/App.tsx` - Main orchestration and animation state
- `src/components/Avatar.tsx` - Profile image with glow effects
- `src/components/BackgroundFX.tsx` - Particles and gradient animations
- `src/components/BioPanel.tsx` - Glassmorphism bio container
- `src/components/GlitchText.tsx` - Text with glitch animation
- `src/components/NeonButton.tsx` - Interactive neon-styled buttons
- `vite.config.ts` - Vite configuration with Replit-specific settings
- `tailwind.config.js` - Custom colors and animations

### Customization Points
- **Avatar Image**: `src/components/Avatar.tsx` line 85
- **Bio Lines**: `src/components/BioPanel.tsx` line 11
- **Contact Link**: `src/components/BioPanel.tsx` line 103
- **Color Palette**: `tailwind.config.js` (neon cyan, purple, green, teal)

### Animation Timeline
1. **0-0.6s**: Avatar fades in with neon glow
2. **0.6-1.0s**: Pause with idle animations
3. **1.0-1.6s**: "INITIALIZE" button appears
4. **On Click**: Avatar shifts up, bio panel glitches in line-by-line
5. **Post-Reveal**: Telegram contact button appears

### Development
```bash
npm install
npm run dev
```

### Production Build
```bash
npm run build
npm run preview
```

## Recent Changes
- **October 4, 2025**: Initial Replit setup
  - Configured Vite to run on 0.0.0.0:5000 for Replit proxy compatibility
  - Set up development workflow
  - Configured deployment settings
  - Verified application runs successfully with all animations working

## Notes
- Respects `prefers-reduced-motion` for accessibility
- Touch-optimized with 44x44px minimum tap targets
- Preloaded critical assets for performance
- Mobile Safari iOS 14+ and Chrome Android 90+ supported
