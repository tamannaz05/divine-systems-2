# Divine Systems - React Quick Start Guide

## 🚀 Get Started in 3 Steps

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Build for Production
```bash
npm run build
```
Production files will be in the `dist/` folder.

---

## 📁 Project Structure

```
divine-systems/
├── src/
│   ├── components/       # React components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── Team.jsx
│   │   ├── Value.jsx
│   │   ├── Footer.jsx
│   │   └── ScrollToTop.jsx
│   ├── hooks/           # Custom React hooks
│   │   ├── useTheme.js
│   │   └── useScrollAnimations.js
│   ├── App.jsx          # Main app component
│   ├── main.jsx         # Entry point
│   └── style.css        # Global styles
├── index.html           # HTML template
├── package.json         # Dependencies
└── vite.config.js       # Vite config
```

---

## 🎨 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build optimized production bundle |
| `npm run preview` | Preview production build locally |

---

## ✨ Features

- ✅ **Theme Toggle** - Light/Dark mode with localStorage persistence
- ✅ **Responsive Design** - Mobile-first responsive layout
- ✅ **Smooth Scrolling** - Animated navigation with active link highlighting
- ✅ **Scroll Animations** - Sections animate in on scroll
- ✅ **Mobile Menu** - Hamburger menu for mobile devices
- ✅ **Parallax Effects** - Hero section with parallax scrolling
- ✅ **Scroll to Top** - Button to quickly return to top

---

## 🔧 Customization

### Change Colors
Edit CSS variables in `src/style.css`:
```css
:root {
  --primary: #1f2937;
  --secondary: #2563eb;
  --accent: #14b8a6;
  /* ... more variables */
}
```

### Add/Edit Services
Edit the services array in `src/components/Services.jsx`:
```jsx
const services = [
  {
    icon: 'fa-cloud-upload-alt',
    title: 'Your Service Title',
    description: 'Your service description',
  },
  // Add more services...
]
```

### Add/Edit Team Members
Edit the team array in `src/components/Team.jsx`:
```jsx
const teamMembers = [
  {
    avatar: 'AB',
    title: 'Your Role',
    description: 'Role description',
  },
  // Add more team members...
]
```

---

## 🌐 Deployment

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
```bash
npm run build
# Drag and drop the 'dist' folder to Netlify
```

### Deploy to GitHub Pages
```bash
npm run build
# Upload contents of 'dist' folder to gh-pages branch
```

---

## 📚 Documentation

- **README.md** - Overview and getting started
- **MIGRATION_GUIDE.md** - Detailed vanilla JS → React migration guide
- **QUICKSTART.md** - This file

---

## 🆘 Common Issues

**Dev server not starting?**
```bash
rm -rf node_modules package-lock.json
npm install
npm run dev
```

**Port 5173 already in use?**
```bash
# Vite will automatically try the next available port
# Or specify a different port in vite.config.js
```

**Styles not loading?**
- Check that `src/style.css` exists
- Verify import in `src/main.jsx`

---

## 💡 Tips

1. **Hot Module Replacement**: Save any file to see changes instantly
2. **React DevTools**: Install the browser extension for debugging
3. **VS Code**: Install "ES7+ React/Redux/React-Native snippets" extension
4. **Component Extraction**: Extract reusable parts into separate components

---

## 🔗 Useful Links

- [React Docs](https://react.dev)
- [Vite Docs](https://vitejs.dev)
- [Font Awesome Icons](https://fontawesome.com/icons)

---

## 📝 Development Workflow

1. **Edit a component** in `src/components/`
2. **Save the file** - Changes appear instantly
3. **Check browser** - Hot reload updates automatically
4. **Test mobile** - Use browser DevTools mobile view
5. **Build** - Run `npm run build` when ready for production

---

## 🎯 Next Steps

- [ ] Add contact form with validation
- [ ] Integrate with a backend API
- [ ] Add blog section
- [ ] Implement SEO optimization
- [ ] Add unit tests
- [ ] Set up CI/CD pipeline

---

**Happy Coding! 🚀**

For detailed information, see [MIGRATION_GUIDE.md](./MIGRATION_GUIDE.md)
