# Divine Systems - React Component Tree

## Component Hierarchy

```
App (src/App.jsx)
│
├── Navbar (src/components/Navbar.jsx)
│   ├── State: isScrolled, isMobileMenuOpen, activeLink
│   ├── Effects: scroll listener, active link tracking
│   └── Features:
│       ├── Logo with smooth scroll to home
│       ├── Navigation links (Home, About, Services, Team, Value, Contact)
│       ├── Theme toggle button (useTheme hook)
│       └── Mobile menu toggle
│
├── Hero (src/components/Hero.jsx)
│   ├── Effects: parallax scroll effect
│   └── Features:
│       ├── Title and description
│       └── CTA button with smooth scroll
│
├── About (src/components/About.jsx)
│   └── Features:
│       ├── Section title and subtitle
│       ├── About text content
│       └── Decorative image/icon
│
├── Services (src/components/Services.jsx)
│   └── Data: services array (6 services)
│       └── For each service:
│           ├── Icon (FontAwesome)
│           ├── Title
│           └── Description
│
├── Team (src/components/Team.jsx)
│   └── Data: teamMembers array (4 members)
│       └── For each member:
│           ├── Avatar (gradient circle with initials)
│           ├── Title
│           └── Description
│
├── Value (src/components/Value.jsx)
│   └── Data: values array (4 values)
│       └── For each value:
│           ├── Number/Label (animated on scroll)
│           ├── Title
│           └── Description
│
├── Footer (src/components/Footer.jsx)
│   └── Features:
│       ├── Company info section
│       │   ├── Description
│       │   └── Social links (LinkedIn, Twitter, GitHub, Email)
│       ├── Services links section
│       ├── Company links section
│       ├── Contact info section
│       └── Copyright footer
│
└── ScrollToTop (src/components/ScrollToTop.jsx)
    ├── State: isVisible
    ├── Effects: scroll listener (shows after 300px)
    └── Features:
        └── Button that smoothly scrolls to top

```

## Custom Hooks

```
useTheme (src/hooks/useTheme.js)
├── State: theme ('light' | 'dark')
├── Effects: localStorage persistence
└── Returns:
    ├── theme: current theme value
    └── toggleTheme: function to switch themes

useScrollAnimations (src/hooks/useScrollAnimations.js)
├── Effects:
│   ├── IntersectionObserver for sections (.section)
│   ├── IntersectionObserver for value numbers (.value-number)
│   └── Cleanup observers on unmount
└── Functionality:
    ├── Adds 'visible' class to sections when in view
    └── Animates value numbers when in view
```

## State Management

```
App Level
└── theme (from useTheme hook)
    ├── Stored in localStorage
    ├── Applied to body via data-theme attribute
    └── Passed to Navbar for theme toggle button

Navbar
├── isScrolled (local state)
│   └── Controls navbar shadow/padding on scroll
├── isMobileMenuOpen (local state)
│   └── Controls mobile menu visibility
└── activeLink (local state)
    └── Tracks current section for active link styling

Hero
└── No state (uses effects for parallax only)

ScrollToTop
└── isVisible (local state)
    └── Controls button visibility based on scroll position

Other Components
└── No state (pure presentational components)
```

## Data Flow

```
1. User Interaction
   │
   ├── Theme Toggle
   │   └── Navbar → toggleTheme() → useTheme → localStorage → body[data-theme]
   │
   ├── Navigation Click
   │   └── Navbar → handleLinkClick() → smooth scroll → update activeLink
   │
   ├── Mobile Menu Toggle
   │   └── Navbar → setIsMobileMenuOpen() → class toggle → menu open/close
   │
   └── Scroll Events
       ├── Window scroll → Navbar → setIsScrolled() → navbar style change
       ├── Window scroll → Navbar → setActiveLink() → active link highlight
       ├── Window scroll → ScrollToTop → setIsVisible() → button show/hide
       ├── Window scroll → Hero → parallax transform
       └── IntersectionObserver → useScrollAnimations → add visible class

2. Component Rendering
   │
   └── App
       ├── Loads theme from localStorage (useTheme)
       ├── Applies theme to body (useEffect)
       ├── Sets up scroll animations (useScrollAnimations)
       └── Renders all child components in order
```

## Event Listeners

```
Window Events
├── scroll (multiple listeners)
│   ├── Navbar: isScrolled state
│   ├── Navbar: activeLink tracking
│   ├── ScrollToTop: isVisible state
│   └── Hero: parallax effect
│
├── IntersectionObserver
│   ├── Sections (.section) → fade in animation
│   └── Value numbers (.value-number) → number animation
│
└── keydown (Navbar)
    └── Escape key → close mobile menu

All listeners are cleaned up on component unmount via useEffect cleanup
```

## Component Communication

```
Props Flow
├── App → Navbar
│   ├── theme (string)
│   └── toggleTheme (function)
│
└── All other components
    └── No props (self-contained)

Context
└── None (small app, props sufficient)

Events
├── Smooth scroll navigation (shared logic)
└── Theme persistence (localStorage)
```

## File Dependencies

```
main.jsx
└── imports App.jsx
    └── imports style.css

App.jsx
├── imports all components
│   ├── Navbar
│   ├── Hero
│   ├── About
│   ├── Services
│   ├── Team
│   ├── Value
│   ├── Footer
│   └── ScrollToTop
└── imports hooks
    ├── useTheme
    └── useScrollAnimations

Components
├── No interdependencies
└── All independent and self-contained

Hooks
├── No interdependencies
└── Can be used independently
```

## Styling Approach

```
Global Styles (src/style.css)
├── CSS Variables (theme colors)
├── Base styles (reset, body, typography)
├── Component styles
│   ├── .navbar, .nav-container, .nav-links, etc.
│   ├── .hero, .hero-content
│   ├── .section, .section-title, .section-subtitle
│   ├── .service-card, .services-grid
│   ├── .team-card, .team-grid, .team-avatar
│   ├── .value-card, .value-grid, .value-number
│   ├── .footer, .footer-content
│   └── .scroll-top
├── Animations (@keyframes)
└── Media queries (@media)

Theme Switching
└── [data-theme="dark"] overrides
    └── Changes CSS variable values for dark mode
```

## Component Interaction Example

```
User clicks "Services" link in navbar:

1. Navbar component
   ├── handleLinkClick('#services') triggered
   ├── e.preventDefault() stops default anchor behavior
   ├── Calculate target position with offset
   ├── window.scrollTo({ behavior: 'smooth' })
   └── setIsMobileMenuOpen(false) closes mobile menu if open

2. As user scrolls to Services section:
   ├── Navbar scroll listener detects new section
   ├── setActiveLink('services') updates state
   └── 'active' class applied to Services link

3. When Services section enters viewport:
   ├── IntersectionObserver (useScrollAnimations) detects
   └── Adds 'visible' class → triggers fade-in animation
```

## Performance Optimizations

```
Built-in Optimizations
├── React Virtual DOM (efficient updates)
├── useEffect cleanup (prevent memory leaks)
├── IntersectionObserver (better than scroll events)
└── Debouncing not needed (IntersectionObserver handles it)

Production Build
├── Code minification
├── Tree shaking (removes unused code)
├── Asset optimization
└── Gzip compression

Potential Future Optimizations
├── React.memo for expensive components
├── useMemo for expensive calculations
├── useCallback for stable function references
├── Code splitting with React.lazy
└── Image lazy loading
```

## Testing Strategy

```
Recommended Test Structure

Unit Tests (components)
├── Navbar.test.jsx
│   ├── Renders all navigation links
│   ├── Theme toggle switches theme
│   ├── Mobile menu opens/closes
│   └── Active link updates on scroll
├── Hero.test.jsx
├── Services.test.jsx
├── Team.test.jsx
├── Value.test.jsx
└── ScrollToTop.test.jsx

Unit Tests (hooks)
├── useTheme.test.js
│   ├── Returns default theme
│   ├── Toggles theme correctly
│   └── Persists to localStorage
└── useScrollAnimations.test.js

Integration Tests
└── App.test.jsx
    ├── All components render
    ├── Navigation works end-to-end
    └── Theme persists across page reload

E2E Tests (Playwright/Cypress)
├── User can navigate to all sections
├── User can toggle theme
├── User can use mobile menu
└── Scroll animations trigger correctly
```

---

## Visual Component Tree

```
┌─────────────────────────────────────────────┐
│                   <App />                    │
│  • useTheme hook                             │
│  • useScrollAnimations hook                  │
└──────────────────┬──────────────────────────┘
                   │
    ┌──────────────┼──────────────┐
    │              │              │
┌───▼────┐   ┌────▼─────┐   ┌───▼───────┐
│ Navbar │   │   Hero   │   │   About   │
│────────│   │──────────│   │───────────│
│• Theme │   │• Parallax│   │• Content  │
│• Mobile│   │• CTA Btn │   │• Image    │
│  Menu  │   │          │   │           │
└────────┘   └──────────┘   └───────────┘

    ┌──────────────┼──────────────┐
    │              │              │
┌───▼────┐   ┌────▼─────┐   ┌───▼───────┐
│Services│   │   Team   │   │   Value   │
│────────│   │──────────│   │───────────│
│• 6     │   │• 4 Cards │   │• 4 Cards  │
│  Cards │   │• Avatars │   │• Numbers  │
└────────┘   └──────────┘   └───────────┘

    ┌──────────────┼──────────────┐
    │              │
┌───▼────┐   ┌────▼─────────┐
│ Footer │   │ ScrollToTop  │
│────────│   │──────────────│
│• Links │   │• Fixed Btn   │
│• Social│   │• Visibility  │
└────────┘   └──────────────┘
```

---

This component tree shows the complete structure of your React application. Each component is independent, reusable, and follows React best practices.
