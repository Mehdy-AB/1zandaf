# @1.zndaf â€” Creator Hub

Next.js 15 Â· Tailwind CSS 4 Â· Framer Motion Â· Lucide icons.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Editing content

| What | Where |
|------|-------|
| Handle, email, Instagram URL, tagline | `data/site.ts` |
| Gear store products & buy links | `data/gearData.json` |
| Product photos | `public/images/gear/<name>.jpg` (matches `image` in gearData.json; an icon shows until the file exists) |
| Logo | `public/logo.jpg` |

The contact form opens the visitor's email app with a pre-filled message to the address in `data/site.ts`.

Deploy: push to GitHub and import the repo on vercel.com (zero config).
