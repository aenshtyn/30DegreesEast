# Push to GitHub Guide

## Current Status

Your repository is initialized with the `dev` branch containing 13 well-organized commits:

1. ✅ Initial project setup with Next.js 15, TypeScript, and Tailwind CSS
2. ✅ Add global styles and root layout
3. ✅ Create header and footer components
4. ✅ Add reusable UI components
5. ✅ Set up video library data structure
6. ✅ Build home page with hero section and service overview
7. ✅ Create Start Here onboarding page
8. ✅ Implement coaching services page with three tracks
9. ✅ Build Teaching System Audit conversion page
10. ✅ Create video library (Insights) page
11. ✅ Develop About and Contact page
12. ✅ Add comprehensive project documentation
13. ✅ Integrate Resend for contact form email delivery

## Push to GitHub - Step by Step

### Option 1: Create New Repository on GitHub

1. **Go to GitHub:**
   - Visit [github.com](https://github.com)
   - Log in to your account

2. **Create New Repository:**
   - Click the "+" icon in the top right
   - Select "New repository"
   - Repository name: `30degreeseast` (or your preferred name)
   - Description: "Personal brand and coaching website for 30 Degrees East"
   - Choose Public or Private
   - **DO NOT** initialize with README, .gitignore, or license (we already have these)
   - Click "Create repository"

3. **Copy the Repository URL:**
   - GitHub will show you the repository URL
   - It looks like: `https://github.com/YOUR_USERNAME/30degreeseast.git`
   - Or SSH: `git@github.com:YOUR_USERNAME/30degreeseast.git`

4. **Run These Commands:**

```bash
# Add GitHub as remote origin
git remote add origin https://github.com/YOUR_USERNAME/30degreeseast.git

# Push dev branch to GitHub
git push -u origin dev

# Create main branch from dev
git checkout -b main
git push -u origin main

# Switch back to dev for development
git checkout dev
```

Replace `YOUR_USERNAME` with your actual GitHub username.

### Option 2: If You Already Have a Repository

If you've already created a repository on GitHub:

```bash
# Add the remote
git remote add origin YOUR_REPO_URL

# Push dev branch
git push -u origin dev

# Create and push main branch
git checkout -b main
git push -u origin main

# Return to dev
git checkout dev
```

## Verify the Push

After pushing, verify on GitHub:
1. Go to your repository on GitHub
2. You should see both `main` and `dev` branches
3. Check that all 13 commits are visible
4. Verify all files are present

## Recommended Workflow

Going forward, use this git workflow:

### Development
```bash
# Work on dev branch
git checkout dev

# Make changes, then:
git add .
git commit -m "Your commit message"
git push origin dev
```

### Deploy to Production
```bash
# When ready to deploy:
git checkout main
git merge dev
git push origin main

# Return to development
git checkout dev
```

## Branch Strategy

- **`dev` branch:** For active development
- **`main` branch:** For production-ready code
- When you deploy to Vercel/Netlify, connect the `main` branch

## Next Steps After Pushing

1. **Set up branch protection (optional):**
   - Go to Settings → Branches
   - Add rule for `main` branch
   - Enable "Require pull request before merging"

2. **Deploy to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Set production branch to `main`
   - Add environment variables (RESEND_API_KEY, etc.)
   - Deploy!

3. **Configure GitHub Actions (optional):**
   - Add CI/CD for automated testing
   - Lint checks on pull requests

## Common Issues

### Permission Denied (SSH)
If using SSH and getting permission denied:
```bash
# Use HTTPS instead
git remote set-url origin https://github.com/YOUR_USERNAME/30degreeseast.git
```

### Repository Already Exists Error
If you get "repository already exists":
```bash
# Just add the remote and push
git remote add origin YOUR_REPO_URL
git push -u origin dev
```

### Large Files Warning
If you see warnings about large files:
- Check that `node_modules/` is in `.gitignore` (it is)
- Run `git status` to see what's being tracked

## GitHub Repository Settings

Recommended settings for your repository:

1. **About:** Add description and website URL
2. **Topics:** Add tags like `nextjs`, `typescript`, `tailwind`, `coaching`
3. **README:** The README.md will display automatically
4. **License:** Consider adding MIT or your preferred license

---

**Ready to push?** Follow the steps above and your code will be on GitHub!
