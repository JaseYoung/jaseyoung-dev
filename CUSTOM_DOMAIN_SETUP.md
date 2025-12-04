# Custom Domain Setup Guide

## ✅ Code Changes Made

I've configured your site for the custom domain `jaseyoung.dev`:

1. ✅ Changed `base: '/'` in `vite.config.ts` (was `/jaseyoung-dev/`)
2. ✅ Removed `basename="/jaseyoung-dev"` from router in `App.tsx`
3. ✅ Updated `homepage` to `https://jaseyoung.dev` in `package.json`
4. ✅ Created `public/CNAME` file with your domain

## 📋 What You Need To Do

### Step 1: DNS Configuration (At Your Domain Registrar)

**Where you bought jaseyoung.dev** (Namecheap, GoDaddy, Cloudflare, etc.):

**Add A Records** (for apex domain jaseyoung.dev):
```
Type: A
Name: @
Value: 185.199.108.153
TTL: Automatic or 1 hour

Type: A
Name: @
Value: 185.199.109.153

Type: A  
Name: @
Value: 185.199.110.153

Type: A
Name: @
Value: 185.199.111.153
```

**Add CNAME Record** (for www subdomain):
```
Type: CNAME
Name: www
Value: jaseyoung.github.io
TTL: Automatic or 1 hour
```

### Step 2: Push Code to GitHub

```bash
cd /Users/gbJaJoMa/personal/jaseyoung-dev

git add .
git commit -m "Configure custom domain jaseyoung.dev"
git push origin main
```

### Step 3: Configure GitHub Pages

1. Go to: https://github.com/JaseYoung/jaseyoung-dev/settings/pages

2. **Build and deployment**:
   - Source: Select **"GitHub Actions"**

3. **Custom domain**:
   - Enter: `jaseyoung.dev`
   - Click **Save**
   - Check **"Enforce HTTPS"** (after DNS propagates)

4. Wait for DNS check to complete (can take 10 minutes to 24 hours)

### Step 4: Verify

After DNS propagates:
- ✅ https://jaseyoung.dev (your custom domain)
- ✅ https://www.jaseyoung.dev (www subdomain)
- ✅ https://jaseyoung.github.io/jaseyoung-dev/ (will redirect to custom domain)

## 🔍 Check DNS Propagation

```bash
# Check if DNS is working
dig jaseyoung.dev +short

# Should show GitHub's IPs:
# 185.199.108.153
# 185.199.109.153
# 185.199.110.153
# 185.199.111.153
```

Or use: https://www.whatsmydns.net/#A/jaseyoung.dev

## ⏱️ Timeline

- **DNS propagation**: 10 minutes - 24 hours (usually 1-2 hours)
- **HTTPS certificate**: Automatic after DNS verifies (15-60 minutes)
- **First deployment**: 2-3 minutes after push

## 🆘 Troubleshooting

**DNS not resolving?**
- Wait longer (can take 24 hours)
- Check you added all 4 A records correctly
- Verify with `dig jaseyoung.dev`

**"Domain not verified" on GitHub?**
- DNS hasn't propagated yet
- Check A records are correct
- Try removing and re-adding the domain

**Site shows 404?**
- Make sure GitHub Actions deployment succeeded
- Check Actions tab for errors
- Verify CNAME file exists in repo

**HTTPS not working?**
- Wait for DNS to fully propagate first
- GitHub needs to verify domain before issuing certificate
- Can take up to 24 hours after DNS resolves

## 📝 Summary

Your site is now configured for:
- **Primary**: https://jaseyoung.dev
- **Also works**: https://www.jaseyoung.dev

Just push to GitHub and configure your DNS settings!
