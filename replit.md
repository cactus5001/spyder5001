# DancingSpyder - Cyber-Anime Noir Personal Brand

## Overview
A mobile-first personal branding web app styled like an anime game intro scene with smooth animations and cyberpunk aesthetics. Built with React 18, TypeScript, Framer Motion, and Tailwind CSS. Features a dramatic reveal sequence with slower, more cinematic animations.

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
- Optimized for 60fps animations with slower, more dramatic timing

### Replit Configuration
- **Development Server**: Vite dev server on port 5000
- **Host Configuration**: 0.0.0.0 (required for Replit proxy)
- **Deployment**: Autoscale with `npm run build` and `npm run preview`
- **Workflow**: "Start application" runs `npm run dev`

### Key Features
- **Enhanced Futuristic UI**: Larger avatar (176px), dual rotating rings, enhanced glow effects
- **Slower Animations**: Typography speed increased to 80ms per character (from 40ms)
- **Auto-Scroll Bio**: Automatically scrolls as new lines appear, with custom cyan-glowing scrollbar
- **Mobile-Optimized**: Touch-friendly with enhanced visual feedback
- **Custom Bio Content**: Extended narrative about DancingSpyder's identity
- **Contact Integration**: Links to @dancingspyder_bot on Telegram

### Key Files
- `src/App.tsx` - Main orchestration with slower animation timing
- `src/components/Avatar.tsx` - Enhanced profile image with dual rings and glows
- `src/components/BioPanel.tsx` - Extended bio with auto-scroll functionality
- `src/components/GlitchText.tsx` - Slower typing animation (80ms per char)
- `src/components/NeonButton.tsx` - Enhanced neon button with stronger effects
- `src/components/BackgroundFX.tsx` - Ambient background effects
- `src/index.css` - Custom scrollbar styles and utilities
- `vite.config.ts` - Vite configuration with Replit-specific settings
- `tailwind.config.js` - Custom colors and animations

### Bio Content
The bio panel displays a multi-line narrative:
- Introduction: "Hellow There..!"
- Identity statement: "A ghost in the machine..."
- Mission description across multiple lines
- Philosophical statements about shadows and traces
- Call to action about entering "their world"

### Animation Timeline (Enhanced)
1. **0-0.8s**: Avatar fades in with enhanced dual-glow
2. **0.8-2.3s**: Longer dramatic pause with idle animations
3. **2.3-3.5s**: "INITIALIZE" button appears
4. **On Click**: Avatar shifts up smoothly (1.5s transition)
5. **Bio Reveal**: Each line types out slowly (80ms per character)
   - First line: 2s delay
   - Subsequent lines: 1.8s delay between each
6. **Auto-Scroll**: Smooth scroll as bio extends beyond viewport
7. **Contact Button**: Appears 2s after final line completes

### UI Enhancements
- **Avatar**: Enlarged to 176px (44x44 in Tailwind units)
- **Corner Brackets**: Increased from 8px to 10px (40px)
- **Glow Effects**: Multiple layered glows (cyan + purple)
- **Scan Lines**: Enhanced with animated overlay
- **Border Effects**: Increased border width and shadow intensity
- **Terminal Header**: Enhanced with glowing status dots
- **Scrollbar**: Custom cyan-themed with glow effect

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
  - Verified application runs successfully
  
- **October 4, 2025**: Major UI/UX enhancements
  - Fixed Avatar.tsx animation bug (removed invalid opacity check)
  - Updated bio content with new DancingSpyder narrative (21 lines)
  - Changed Telegram link to @dancingspyder_bot
  - Slowed all animations for more dramatic effect:
    - Typography: 40ms → 80ms per character
    - Avatar fade-in: 1.2s → 1.5s
    - Initial pause: 1.0s → 1.5s
    - Bio line delays: 1.0-1.2s → 1.8-2.0s
  - Added auto-scroll functionality to bio panel
  - Enhanced avatar with dual rotating rings
  - Increased avatar size: 160px → 176px
  - Enhanced all glow effects and shadows
  - Improved corner brackets size and glow
  - Added custom scrollbar with cyan theme
  - Enhanced terminal header with glowing status dots
  - Improved mobile touch optimization

## User Preferences
- Mobile-first approach prioritized
- Slower, more cinematic animations preferred
- Strong cyan/neon aesthetic with enhanced glow effects
- Auto-scroll for long content on mobile devices

## Notes
- Respects `prefers-reduced-motion` for accessibility
- Touch-optimized with 44x44px minimum tap targets
- Preloaded critical assets for performance
- Mobile Safari iOS 14+ and Chrome Android 90+ supported
- Custom scrollbar styled to match futuristic theme
- Bio content exceeds viewport on most mobile devices, auto-scrolls smoothly
