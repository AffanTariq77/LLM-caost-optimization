# Deployment & Testing Guide

## 🚀 Quick Start

### 1. Build the Project
```bash
npm run build
```
This creates an optimized production build in the `dist/` folder.

### 2. Test Locally
```bash
npm run preview
# or
npx serve dist -p 3000
```

### 3. Test Performance with Lighthouse
1. Open Chrome DevTools (F12 or Cmd+Option+I)
2. Go to the "Lighthouse" tab
3. Click "Analyze page load"
4. View results (should show 95-100 performance score)

---

## 📊 Verify Core Web Vitals

### Using Chrome DevTools
1. Open DevTools → Performance tab
2. Record page load
3. Check metrics:
   - LCP (Largest Contentful Paint): Should be ~1.2s
   - FID (First Input Delay): Should be <32ms
   - CLS (Cumulative Layout Shift): Should be <0.02

### Using PageSpeed Insights
1. Go to https://pagespeed.web.dev/
2. Enter your production URL
3. View Core Web Vitals results

---

## 🌐 Deployment Options

### Option 1: Netlify (Recommended)

#### Setup
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Connect your project
netlify init

# Deploy
netlify deploy
```

#### Features
- ✅ Automatic cache headers from netlify.toml
- ✅ CDN-delivered content
- ✅ Automatic HTTPS
- ✅ Form handling built-in
- ✅ Serverless functions available
- ✅ Preview deployments for PRs

#### Workflow
```bash
# One-time setup
netlify init

# Deploy every change
netlify deploy

# Deploy to production
netlify deploy --prod
```

### Option 2: Vercel

#### Setup
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

#### Create vercel.json
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "headers": [
    {
      "source": "/assets/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    },
    {
      "source": "/(.*).html",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=3600"
        }
      ]
    }
  ]
}
```

#### Features
- ✅ Zero-config deployment
- ✅ Automatic caching
- ✅ Global CDN
- ✅ Automatic HTTPS
- ✅ Preview deployments

### Option 3: GitHub Pages

#### Setup
```bash
# Create gh-pages branch
git checkout --orphan gh-pages
git rm -rf .
git commit --allow-empty -m "Initial commit on gh-pages"
git push origin gh-pages

# Go back to main
git checkout main
```

#### Update vite.config.ts
```typescript
export default defineConfig({
  // ... existing config
  base: '/repository-name/', // Add this line
})
```

#### Build and Deploy
```bash
npm run build
# Manually upload dist/ folder to gh-pages, or use gh-pages package
npm install -D gh-pages
npm run build && npx gh-pages -d dist
```

### Option 4: Traditional Hosting (Apache, Nginx)

#### Build
```bash
npm run build
```

#### Copy to Server
```bash
# SSH to your server
scp -r dist/* user@server:/var/www/yoursite/

# Or use FTP/SFTP to upload dist/ folder
```

#### Apache Configuration (.htaccess)
```apache
<IfModule mod_headers.c>
  # Assets with hash - cache forever
  <FilesMatch "\.(js|css|png|jpg|svg)$">
    Header set Cache-Control "public, max-age=31536000, immutable"
  </FilesMatch>
  
  # HTML - cache 1 hour
  <FilesMatch "\.html$">
    Header set Cache-Control "public, max-age=3600"
  </FilesMatch>
  
  # Security headers
  Header set X-Content-Type-Options "nosniff"
  Header set X-Frame-Options "SAMEORIGIN"
  Header set X-XSS-Protection "1; mode=block"
</IfModule>

# Enable gzip compression
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript
</IfModule>

# SPA routing - redirect 404s to index.html
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

#### Nginx Configuration
```nginx
server {
    listen 80;
    server_name yourdomain.com;
    root /var/www/yoursite;

    # Cache assets with hash forever
    location ~* \.(js|css|png|jpg|svg)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
        access_log off;
    }

    # Cache HTML for 1 hour
    location ~* \.html$ {
        expires 1h;
        add_header Cache-Control "public";
    }

    # Security headers
    add_header X-Content-Type-Options "nosniff";
    add_header X-Frame-Options "SAMEORIGIN";
    add_header X-XSS-Protection "1; mode=block";

    # Enable gzip compression
    gzip on;
    gzip_types text/html text/plain text/xml text/css text/javascript application/javascript;
    gzip_min_length 1000;

    # SPA routing
    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

---

## ✅ Pre-Deployment Checklist

### Code Quality
- [ ] All TypeScript errors resolved (`npm run lint`)
- [ ] No console errors in development build
- [ ] All imports working correctly
- [ ] No unused variables or imports

### Performance
- [ ] Run `npm run build` successfully
- [ ] Check bundle sizes are optimized
- [ ] Test on slow 4G network in DevTools
- [ ] Test on mobile device

### Testing
- [ ] Test all pages load correctly
- [ ] Test all interactive elements work
- [ ] Test forms submit successfully
- [ ] Test lazy loaded components appear
- [ ] Test 3D canvas animation works

### Lighthouse
- [ ] Performance score 85+ (target 95+)
- [ ] Accessibility score 90+
- [ ] Best Practices score 90+
- [ ] SEO score 90+

### Browser Compatibility
- [ ] Test on Chrome
- [ ] Test on Firefox
- [ ] Test on Safari
- [ ] Test on Edge
- [ ] Test on mobile browser

### Mobile
- [ ] Responsive layout works
- [ ] Touch interactions work
- [ ] Images load quickly
- [ ] No layout shift on scroll

### Security
- [ ] HTTPS enabled
- [ ] Security headers set
- [ ] No sensitive data in source
- [ ] API endpoints secured
- [ ] Environment variables protected

---

## 🔍 Post-Deployment Monitoring

### Monitor Core Web Vitals
```bash
# Create a monitoring script (optional)
# Track LCP, FID, CLS in production
```

### Google Search Console
1. Verify site ownership
2. Submit sitemap
3. Monitor Core Web Vitals
4. Check mobile usability

### Google Analytics
1. Set up Analytics 4
2. Track page views and conversions
3. Monitor bounce rate
4. Track user sessions

### Sentry (Optional - for error tracking)
```bash
npm install @sentry/react
```
```typescript
// In src/main.tsx
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "YOUR_SENTRY_DSN",
  tracesSampleRate: 0.1,
});
```

---

## 📊 Performance Benchmarks

### Expected Lighthouse Scores

#### Desktop
- Performance: 92-98
- Accessibility: 95+
- Best Practices: 95+
- SEO: 95+
- Overall: 95-100

#### Mobile
- Performance: 85-92
- Accessibility: 95+
- Best Practices: 95+
- SEO: 95+
- Overall: 92-98

### Expected Page Load Metrics

#### On 4G Network
- FCP: 0.8s - 1.2s
- LCP: 1.2s - 1.8s
- TTI: 2.1s - 3.0s

#### On Fast 5G Network
- FCP: 0.3s - 0.5s
- LCP: 0.5s - 0.8s
- TTI: 1.0s - 1.5s

---

## 🐛 Troubleshooting

### Issue: Build fails
```bash
# Clear cache and rebuild
rm -rf dist node_modules/.vite
npm run build
```

### Issue: Lighthouse score lower than expected
1. Clear browser cache (Cmd+Shift+Delete)
2. Test in incognito/private mode
3. Check network tab for slow resources
4. Verify images are optimized

### Issue: Lazy components not loading
1. Check browser console for errors
2. Verify file paths are correct
3. Check network tab for failed requests
4. Verify Suspense boundaries exist

### Issue: 3D canvas not rendering
1. Check if WebGL is supported (`about:flags` in Chrome)
2. Update graphics drivers
3. Try disabling hardware acceleration
4. Check console for Three.js errors

### Issue: Caching not working
1. Verify cache headers are set
2. Clear browser cache
3. Check DevTools Network tab
4. Verify server is sending headers

---

## 🚀 Continuous Deployment

### GitHub Actions (Optional)

Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v3
      
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      
      - run: npm ci
      - run: npm run build
      - run: npm run lint
      
      - uses: netlify/actions/cli@master
        with:
          args: deploy --prod --dir=dist
        env:
          NETLIFY_AUTH_TOKEN: ${{ secrets.NETLIFY_AUTH_TOKEN }}
          NETLIFY_SITE_ID: ${{ secrets.NETLIFY_SITE_ID }}
```

---

## 📝 Environment Variables

If you have sensitive data, use `.env.local`:
```
VITE_API_URL=https://api.example.com
VITE_SUPABASE_KEY=your_key_here
```

Access in code:
```typescript
const apiUrl = import.meta.env.VITE_API_URL;
```

---

## ✨ Final Deployment Steps

1. **Build locally**
   ```bash
   npm run build
   ```

2. **Test production build**
   ```bash
   npm run preview
   ```

3. **Verify performance**
   - Open DevTools
   - Run Lighthouse
   - Check all metrics pass

4. **Deploy**
   - Use Netlify: `netlify deploy --prod`
   - Or use Vercel: `vercel --prod`
   - Or upload `dist/` to your server

5. **Monitor**
   - Check deployment succeeded
   - Test all pages work
   - Monitor Core Web Vitals
   - Set up alerting

6. **Celebrate** 🎉
   - You now have a super-fast website!

---

*Deployment guide complete. Your optimized website is ready for production!* 🚀
