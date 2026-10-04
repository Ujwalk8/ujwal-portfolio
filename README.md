# Ujwal K – Portfolio

Static site (HTML, CSS, JS). No build step.

## Edit
- Content: `index.html` · Colours/fonts: top of `styles.css`
- Resume: replace `assets/Ujwal_Resume.pdf` with a new PDF of the **same file name**.
- LinkedIn: uncomment the button in the Contact section of `index.html` and add the real URL.
- Social preview image: add `<meta property="og:image" content="https://YOUR-DOMAIN/assets/preview.png">` after deploying.

## Preview locally
`python3 -m http.server 8000`, then open http://localhost:8000

## Deploy to Vercel
**Dashboard:** push this folder to GitHub → vercel.com/new → import the repo → Framework Preset "Other", leave Build Command and Output Directory empty → Deploy.
**CLI:** `npm i -g vercel`, run `vercel` in this folder, then `vercel --prod`.
