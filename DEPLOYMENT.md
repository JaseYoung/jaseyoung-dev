# Deployment Guide

This guide explains how to build and deploy your personal website to GitHub Pages.

## Prerequisites

- Node.js (v18 or higher)
- npm (comes with Node.js)
- Git
- GitHub account

## Local Development

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
The site will be available at `http://localhost:5173`

### 3. Build for Production
```bash
npm run build
```
This creates a `dist` folder with the production build.

### 4. Preview Production Build
```bash
npm run preview
```

## GitHub Pages Deployment

### Initial Setup

1. **Create GitHub Repository**
   - Go to GitHub and create a new repository named `jaseyoung-dev`
   - Initialize it as public (required for GitHub Pages on free accounts)

2. **Connect Local Repository to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/jaseyoung-dev.git
   git push -u origin main
   ```

3. **Deploy to GitHub Pages**
   ```bash
   npm run deploy
   ```
   This command:
   - Builds the project (`npm run build`)
   - Deploys the `dist` folder to the `gh-pages` branch
   - GitHub Pages automatically serves from this branch

### GitHub Pages Configuration

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under "Source", select **Deploy from a branch**
4. Choose **gh-pages** branch and **/ (root)** folder
5. Click **Save**

Your site will be available at: `https://YOUR_USERNAME.github.io/jaseyoung-dev/`

### Custom Domain Setup (jaseyoung.dev)

1. **Add CNAME Record**
   - In your domain registrar (where you bought jaseyoung.dev)
   - Add a CNAME record pointing `www.jaseyoung.dev` to `YOUR_USERNAME.github.io`
   - Add an A record pointing `jaseyoung.dev` to GitHub's IP addresses:
     - 185.199.108.153
     - 185.199.109.153
     - 185.199.110.153
     - 185.199.111.153

2. **Configure GitHub Pages**
   - Go to repository **Settings** → **Pages**
   - In "Custom domain", enter `jaseyoung.dev`
   - Check "Enforce HTTPS"
   - GitHub will verify the domain

3. **Update Vite Configuration**
   - If using custom domain, update `vite.config.ts`:
   ```typescript
   export default defineConfig({
     plugins: [react()],
     base: '/', // Change from '/jaseyoung-dev/' to '/'
   })
   ```
   - Update `package.json` homepage:
   ```json
   "homepage": "https://jaseyoung.dev",
   ```

## Continuous Deployment

Every time you run `npm run deploy`, your changes will be automatically published to GitHub Pages.

For automatic deployment on every push to main:

1. Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    - name: Setup Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '18'
    - name: Install dependencies
      run: npm ci
    - name: Build
      run: npm run build
    - name: Deploy
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
```

## Troubleshooting

### Common Issues

1. **404 on GitHub Pages**
   - Ensure the `base` in `vite.config.ts` matches your repository name
   - Check that GitHub Pages is enabled and pointing to `gh-pages` branch

2. **CSS/JS Not Loading**
   - Verify the `base` configuration in `vite.config.ts`
   - Ensure the `homepage` in `package.json` is correct

3. **Build Fails**
   - Check TypeScript errors: `npm run lint`
   - Ensure all imports are correct
   - Verify Node.js version compatibility

4. **Custom Domain Not Working**
   - DNS changes can take up to 24 hours to propagate
   - Use `dig jaseyoung.dev` to check DNS resolution
   - Ensure HTTPS is enforced in GitHub Pages settings

### Development Tips

- Use `npm run dev` for development with hot reloading
- Run `npm run build` before deploying to catch build errors
- Check the browser console for runtime errors
- Use browser dev tools to debug responsive design

## File Structure

```
jaseyoung-dev/
├── public/           # Static assets
├── src/
│   ├── components/   # Reusable React components
│   ├── pages/        # Page components
│   ├── App.tsx       # Main app component
│   └── main.tsx      # Entry point
├── dist/            # Production build (generated)
├── package.json     # Dependencies and scripts
└── vite.config.ts   # Vite configuration
```