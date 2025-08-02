# James Pratt Conductor - Deployment Guide

## Production Build

To create a production build:

```bash
npm run build
```

This will create a `dist` folder with optimized files ready for deployment.

## Deployment Options

### 1. Netlify (Recommended)

1. **GitHub Integration**:
   - Push your code to a GitHub repository
   - Connect your GitHub repo to Netlify
   - Set build command: `npm run build`
   - Set publish directory: `dist`

2. **Drag & Drop**:
   - Run `npm run build`
   - Drag the `dist` folder to Netlify's deploy area

3. **Netlify CLI**:
   ```bash
   npm install -g netlify-cli
   netlify login
   netlify deploy --prod --dir=dist
   ```

### 2. Vercel

1. **GitHub Integration**:
   - Connect GitHub repository to Vercel
   - Vercel will auto-detect Vite configuration

2. **Vercel CLI**:
   ```bash
   npm install -g vercel
   vercel --prod
   ```

### 3. GitHub Pages

1. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Add to package.json scripts:
   ```json
   {
     "scripts": {
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. Update vite.config.js:
   ```javascript
   export default defineConfig({
     plugins: [react()],
     base: '/James-Pratt-Conductor/'
   })
   ```

4. Deploy:
   ```bash
   npm run build
   npm run deploy
   ```

### 4. AWS S3 + CloudFront

1. **Create S3 Bucket**:
   - Enable static website hosting
   - Upload `dist` folder contents

2. **CloudFront Distribution**:
   - Create distribution pointing to S3 bucket
   - Configure custom domain if needed

### 5. Traditional Web Hosting

1. Run `npm run build`
2. Upload contents of `dist` folder to your web server
3. Configure server to serve `index.html` for all routes (SPA routing)

## Environment Variables

For production deployment, create a `.env.production` file:

```
VITE_SITE_URL=https://jamesprattconductor.com
VITE_CONTACT_EMAIL=info@jamespratt.com
VITE_ANALYTICS_ID=your-analytics-id
```

## Domain Configuration

### Custom Domain Setup

1. **DNS Configuration**:
   - Point your domain to your hosting provider
   - Set up CNAME or A records as required

2. **SSL Certificate**:
   - Most modern hosting providers offer free SSL
   - Ensure HTTPS is enabled

### SEO Considerations

1. **Meta Tags**: Already configured in `index.html`
2. **Sitemap**: Consider generating a sitemap for better SEO
3. **Analytics**: Add Google Analytics or similar tracking

## Performance Optimization

The site is already optimized with:
- Code splitting
- Lazy loading
- Optimized images (when added)
- Minified CSS and JavaScript

## Monitoring

After deployment, monitor:
- Site performance with tools like Lighthouse
- Uptime monitoring
- Contact form submissions
- User analytics

## Maintenance

Regular maintenance tasks:
- Update dependencies: `npm update`
- Security audits: `npm audit`
- Performance monitoring
- Content updates through the CMS or direct file edits

## Support

For deployment issues or technical support, refer to your hosting provider's documentation or contact the development team.
