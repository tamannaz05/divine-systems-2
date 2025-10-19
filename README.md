# Divine Systems - React Version

This is the React version of the Divine Systems website, converted from vanilla JavaScript.

## What Changed

### Structure
- **Vanilla JS** → **React Components**: The monolithic HTML file has been split into reusable React components
- **script.js** → **React Hooks**: All JavaScript functionality converted to React hooks and component logic
- **Component-based architecture**: Each section is now a separate, maintainable component

### New Project Structure
```
divine-systems/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx       # Navigation with theme toggle
│   │   ├── Hero.jsx          # Hero section with parallax
│   │   ├── About.jsx         # About section
│   │   ├── Services.jsx      # Services grid
│   │   ├── Team.jsx          # Team section
│   │   ├── Value.jsx         # Value propositions
│   │   ├── Footer.jsx        # Footer
│   │   └── ScrollToTop.jsx   # Scroll to top button
│   ├── hooks/
│   │   ├── useTheme.js       # Theme management hook
│   │   └── useScrollAnimations.js  # Scroll animations hook
│   ├── App.jsx               # Main app component
│   ├── main.jsx              # Entry point
│   └── style.css             # Global styles (unchanged)
├── index.html                # Minimal HTML with React root
├── package.json              # Dependencies
└── vite.config.js            # Vite configuration

backup/                       # Original vanilla JS files
└── script.js.bak
```

### Features Preserved
- ✅ Theme toggle (light/dark mode)
- ✅ Smooth scrolling navigation
- ✅ Mobile responsive menu
- ✅ Scroll animations
- ✅ Active link highlighting
- ✅ Parallax effects on hero section
- ✅ Scroll to top button
- ✅ All original styling and animations

### React Improvements
- **Better Performance**: React's virtual DOM efficiently updates only what changes
- **Component Reusability**: Each component can be easily reused or modified
- **State Management**: Cleaner state management with React hooks
- **Better Code Organization**: Separated concerns with hooks and components
- **Developer Experience**: Hot module replacement for instant updates during development
- **Type Safety Ready**: Easy to add TypeScript in the future

## Getting Started

### Install Dependencies
```bash
npm install
```

### Development Server
```bash
npm run dev
```
This will start the Vite dev server (usually at http://localhost:5173)

### Build for Production
```bash
npm run build
```
This creates optimized production files in the `dist` folder

### Preview Production Build
```bash
npm run preview
```

## Key Technologies
- **React 18**: Modern React with hooks
- **Vite**: Fast build tool and dev server
- **Font Awesome 6**: Icon library
- **Google Fonts (Inter)**: Typography

## Migration Notes

### Vanilla JS → React Conversions

1. **Theme Toggle**
   - Old: `localStorage` + direct DOM manipulation
   - New: `useTheme` hook with React state

2. **Mobile Menu**
   - Old: Class toggling with `addEventListener`
   - New: React state (`isMobileMenuOpen`)

3. **Scroll Animations**
   - Old: Multiple `IntersectionObserver` instances
   - New: `useScrollAnimations` hook with cleanup

4. **Navbar Scroll State**
   - Old: Direct class manipulation on scroll
   - New: React state with `useEffect` listener

5. **Active Links**
   - Old: Manual class toggling
   - New: React state tracking active section

## Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Future Enhancements
- Add TypeScript for type safety
- Implement React Router for multi-page navigation
- Add testing with Vitest or Jest
- Consider state management library (Zustand, Redux) if complexity grows
- Add contact form with form validation

## Original Files
The original vanilla JavaScript files are backed up in the `backup/` directory for reference.
