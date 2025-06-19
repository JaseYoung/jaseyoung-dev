# Jason Young - Personal Website

A modern, responsive personal website built with React, TypeScript, and CSS Modules. Designed for engineering professionals with a clean, minimal aesthetic.

## 🚀 Features

- **Modern Stack**: React 19, TypeScript, Vite
- **Responsive Design**: Mobile-first approach with CSS modules
- **Dark Mode Support**: Automatic dark/light theme detection
- **Professional Layout**: Hero section, about, experience, and contact
- **Blog Ready**: Routing structure prepared for future blog posts
- **GitHub Pages**: Configured for easy deployment
- **Performance Optimized**: Fast loading with Vite build system

## 🛠️ Tech Stack

- **Frontend**: React, TypeScript, CSS Modules
- **Build Tool**: Vite
- **Routing**: React Router DOM
- **Deployment**: GitHub Pages
- **Styling**: CSS Modules with responsive design

## 📁 Project Structure

```
jaseyoung-dev/
├── public/                 # Static assets
├── src/
│   ├── components/         # Reusable React components
│   │   ├── Navigation/     # Site navigation
│   │   ├── Hero/          # Landing section
│   │   ├── About/         # About section
│   │   ├── Experience/    # Professional experience
│   │   └── Contact/       # Contact information
│   ├── pages/             # Page components
│   │   ├── Home/          # Main landing page
│   │   └── Blog/          # Blog page (expandable)
│   ├── App.tsx            # Main app component
│   └── main.tsx           # Entry point
├── DEPLOYMENT.md          # Deployment instructions
└── README.md             # This file
```

## 🏃‍♂️ Quick Start

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/jaseyoung-dev.git
   cd jaseyoung-dev
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run deploy` - Deploy to GitHub Pages

## 🌐 Deployment

The site is configured for GitHub Pages deployment. See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions.

### Quick Deploy
```bash
npm run deploy
```

This will build the project and deploy it to the `gh-pages` branch.

## 🎨 Customization

### Content Updates
- Update personal information in `src/components/Hero/Hero.tsx`
- Modify experience details in `src/components/Experience/Experience.tsx`
- Adjust contact information in `src/components/Contact/Contact.tsx`

### Styling
- Global styles: `src/App.css`
- Component styles: Each component has its own `.module.css` file
- Colors and themes: Modify CSS custom properties in component styles

### Adding Blog Posts
The routing structure is ready for blog functionality:
1. Add blog post components in `src/pages/Blog/`
2. Update routing in `src/App.tsx`
3. Implement blog post list and individual post pages

## 🔧 Configuration

### Custom Domain
To use a custom domain (e.g., jaseyoung.dev):

1. Update `vite.config.ts`:
   ```typescript
   export default defineConfig({
     plugins: [react()],
     base: '/', // Change from '/jaseyoung-dev/'
   })
   ```

2. Update `package.json`:
   ```json
   "homepage": "https://jaseyoung.dev"
   ```

3. Configure DNS settings (see DEPLOYMENT.md for details)

## 📱 Responsive Design

The site is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px  
- Desktop: > 1024px

## 🌙 Dark Mode

Automatic dark mode detection using CSS `prefers-color-scheme`. The design adapts to user's system preference.

## 🚀 Performance

- Vite for fast development and optimized builds
- CSS Modules for scoped styling
- Responsive images and optimized assets
- Minimal JavaScript bundle size

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

This is a personal website, but feel free to use it as a template for your own projects!

## 📞 Contact

- **LinkedIn**: [Jason Young](https://www.linkedin.com/in/jaseyoung/)
- **Website**: [jaseyoung.dev](https://jaseyoung.dev)

---

Built with ❤️ using React, TypeScript, and modern web technologies.