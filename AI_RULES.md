# AI_RULES.md - Guidelines for AI Development

## Tech Stack Overview

- **React 18 + TypeScript**: Primary framework with strict type safety
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **Framer Motion**: Advanced animations and transitions
- **Vite**: Next-generation build tool for fast development
- **Shadcn/UI**: Component library based on Radix UI + Tailwind
- **Lucide React**: Modern icon library
- **ESLint + Prettier**: Code quality and formatting standards

## Development Rules

### 1. Component Architecture
- All components must be functional components using hooks
- Use TypeScript interfaces for all props with proper documentation
- Keep components small and focused (max 100-150 lines)
- Use proper separation of concerns - containers vs presentational components

### 2. Styling Standards
- Use Tailwind CSS for all styling (no inline styles)
- Follow the provided design system (color palette, spacing, typography)
- Ensure mobile-first responsive design
- Use `clsx` for conditional styling

### 3. Animation Guidelines
- Use Framer Motion for all animations
- Keep animations smooth and performant
- Respect `prefers-reduced-motion` user preference
- Animate with purpose - no unnecessary animations

### 4. State Management
- Use React hooks for local state (useState, useEffect)
- For complex state, consider useReducer or context
- Keep state as local as possible - avoid global state unless necessary

### 5. Performance Optimization
- Use React.memo() for expensive components
- Implement proper key props in lists
- Lazy load non-critical components
- Optimize images and assets

### 6. Error Handling
- Always validate props with TypeScript
- Use proper error boundaries for graceful degradation
- Provide meaningful error messages in development

### 7. Accessibility (A11y)
- All interactive elements must be keyboard navigable
- Use semantic HTML elements
- Provide ARIA labels where needed
- Ensure proper color contrast ratios

### 8. Testing
- Write unit tests for utility functions
- Test component rendering and interactions
- Use Jest + React Testing Library
- Aim for 80%+ test coverage on critical paths

### 9. Documentation
- Document all components with JSDoc
- Update this file with any new standards
- Keep README.md updated with project structure

### 10. Code Quality
- Follow React best practices
- No console.log in production code
- Use ESLint and Prettier for consistent formatting
- Regular code reviews before merging

---

*Last Updated: October 4, 2025*