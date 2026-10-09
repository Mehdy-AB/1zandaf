# 🚀 Website Specifications & Content Requirements
**Project Name:** `@1.zndaf` Creator Hub & Interactive Portfolio  
**Target Inspiration:** `https://www.byexosi.com/`  
**Target Audience:** Brands, Sponsors, Tech Enthusiasts, and Instagram Audience  

---

## 📐 1. Design & UX Architecture

* **Theme:** Dark Mode, Cyberpunk/Tech Minimalist Aesthetic (Deep Slate/Black background, Neon/Gradient Accents).
* **Typography:** Modern Clean Sans-serif (e.g., Inter, Space Grotesk).
* **Layout Structure:** Single-page scrollable portfolio with smooth snapping sections, interactive product grid cards with direct buy links, clean brand partnership section, and live dynamic metrics cards.

---

## 🧩 2. Website Structure & Content Breakdown

### 2.1 Hero Section
* **Creator Name:** `@1.zndaf`
* **Subtitle:** Tech, PC Setups, Gaming Gear & Viral Content Creator
* **Tagline:** High-Impact Viral Reels & Clean Aesthetic Desk Setups.
* **Location Badge:** Algeria 🇩🇿 · High-Velocity Viral Creator
* **Quick Stats Grid:**
  * **Peak Reel Views:** `580K+` (Achieved in < 24 Hours)
  * **Engagement Rate (Save Velocity):** `~3.0%` (Top Tier Algorithmic Benchmark)
  * **Total Reach:** Exponential Viral Growth
* **Social Links:**
  * **Instagram:** `@1.zndaf`
  * **Discord / Email:** `[Insert Contact Email Here]`

---

### 2.2 Viral Case Study / Highlighted Reel
* **Featured Showcase:** Discord / Setup Viral Reel Breakthrough
* **Live Status Badge:** `Viral Explosion / Algorithm Top Tier`
* **Key Metrics Display:**
  * **Views:** `580,000+` and counting
  * **Save Count:** `17,300+` (High Value Retention)
  * **Share Velocity:** `9,900+` DM Shares
  * **Watch Time Efficiency:** `8s Average` (Loop Retention)
  * **Algorithm Performance:** Skip Rate `< 50.7%` (Lower/Optimal)

---

### 2.3 Interactive "My Setup & Gear Store" (Buy Cards Section)
*This section must be rendered as interactive ecommerce-style cards with a Category Filter (`All` | `PC Specs` | `Peripherals & Accessories`). Each card contains an image, component name, specs, and a direct **"Buy / View Product"** link.*

```json
[
  {
    "category": "PC Specs",
    "title": "AMD Ryzen 5 5600X",
    "description": "6-Core 12-Thread Desktop Processor",
    "image": "/images/gear/ryzen-5600x.png",
    "buyLink": "https://www.amazon.com/dp/B08166SLDF",
    "tag": "CPU"
  },
  {
    "category": "PC Specs",
    "title": "AMD Radeon RX 6700 XT",
    "description": "12GB GDDR6 High-Performance Graphics Card",
    "image": "/images/gear/rx-6700xt.png",
    "buyLink": "https://www.amazon.com/s?k=rx+6700+xt",
    "tag": "GPU"
  },
  {
    "category": "PC Specs",
    "title": "Asgard White 32GB RAM",
    "description": "32GB (2x16GB) 3200MHz DDR4 Gaming RAM",
    "image": "/images/gear/asgard-ram.png",
    "buyLink": "https://www.aliexpress.com/",
    "tag": "RAM"
  },
  {
    "category": "PC Specs",
    "title": "MSI MAG B550M PRO-VDH WiFi",
    "description": "AMD AM4 Micro-ATX Motherboard",
    "image": "/images/gear/msi-b550.png",
    "buyLink": "https://www.amazon.com/dp/B089D1267D",
    "tag": "Motherboard"
  },
  {
    "category": "PC Specs",
    "title": "Mars Gaming ML-ULTRA 360",
    "description": "360mm Liquid Cooler - Black",
    "image": "/images/gear/mars-cooling.png",
    "buyLink": "https://www.marsgaming.eu/",
    "tag": "Cooler"
  },
  {
    "category": "PC Specs",
    "title": "MSI MAG 850W Gold",
    "description": "850W 80 Plus Gold Fully Modular PSU",
    "image": "/images/gear/msi-psu.png",
    "buyLink": "https://www.amazon.com/",
    "tag": "PSU"
  },
  {
    "category": "PC Specs",
    "title": "Magma V3 (7 Fans Included)",
    "description": "High Airflow ATX Gaming PC Case",
    "image": "/images/gear/magma-v3.png",
    "buyLink": "https://www.amazon.com/",
    "tag": "Case"
  },
  {
    "category": "PC Specs",
    "title": "Samsung NVMe SSD 250GB",
    "description": "Fast High-Speed Boot Drive",
    "image": "/images/gear/samsung-nvme.png",
    "buyLink": "https://www.amazon.com/",
    "tag": "Storage"
  },
  {
    "category": "PC Specs",
    "title": "Teamgroup SATA SSD",
    "description": "Secondary Storage SSD",
    "image": "/images/gear/teamgroup-ssd.png",
    "buyLink": "https://www.amazon.com/",
    "tag": "Storage"
  },
  {
    "category": "Peripherals & Accessories",
    "title": "Logitech G PRO X Superlight 2",
    "description": "Ultra-lightweight Wireless Gaming Mouse - Black",
    "image": "/images/gear/superlight-2.png",
    "buyLink": "https://www.amazon.com/dp/B09C3482G6",
    "tag": "Mouse"
  },
  {
    "category": "Peripherals & Accessories",
    "title": "Epomaker HE68 Lite",
    "description": "Hall Effect Magnetic Switch Custom Gaming Keyboard",
    "image": "/images/gear/epomaker-he68.png",
    "buyLink": "https://epomaker.com/",
    "tag": "Keyboard"
  },
  {
    "category": "Peripherals & Accessories",
    "title": "ATK Gear Sky Black",
    "description": "Premium Control/Speed Desk Mousepad",
    "image": "/images/gear/atk-mousepad.png",
    "buyLink": "https://www.atk.gear/",
    "tag": "Mousepad"
  },
  {
    "category": "Peripherals & Accessories",
    "title": "HyperX Cloud II",
    "description": "Gaming Headset with 7.1 Surround Sound - Black",
    "image": "/images/gear/hyperx-cloud2.png",
    "buyLink": "https://www.amazon.com/dp/B00SAYCXWG",
    "tag": "Headset"
  },
  {
    "category": "Peripherals & Accessories",
    "title": "MSI 275QF Gaming Monitor",
    "description": "27\" High Refresh Rate Gaming Display",
    "image": "/images/gear/msi-275qf.png",
    "buyLink": "https://www.msi.com/",
    "tag": "Monitor"
  },
  {
    "category": "Peripherals & Accessories",
    "title": "Vortex VRX54-C012HL",
    "description": "Heavy-Duty Heavy-Load Monitor Arm Desk Mount",
    "image": "/images/gear/vortex-arm.png",
    "buyLink": "https://www.amazon.com/",
    "tag": "Desk Mount"
  },
  {
    "category": "Peripherals & Accessories",
    "title": "Ergonomic Office/Gaming Chair",
    "description": "Full Lumbar Support Mesh Ergonomic Chair - Black",
    "image": "/images/gear/ergo-chair.png",
    "buyLink": "https://www.amazon.com/",
    "tag": "Furniture"
  }
]
```

---

### 2.4 Brand Collaborations & Partnerships (Open Status)
*Clean placeholder section indicating readiness for official partnerships.*

* **Status Badge:** `Open For Collaborations`
* **Heading:** Brand Partnerships & Affiliate Codes
* **Sub-description:** "Currently accepting brand deals, sponsorships, and product reviews. Official discount codes and affiliate links for partner brands will be featured here upon contract execution."
* **Partner CTA Button:** `Partner With @1.zndaf` (Scrolls directly to Contact Form)

---

### 2.5 Audience Analytics & Insights
* **Platform:** Instagram (`@1.zndaf`)
* **Primary Metric Highlights:**
  * **Save Rate:** `2.93% - 3.0%` (Viral High-Retention Benchmark)
  * **Non-Follower Reach:** `90%+` (High Explore Page Distribution)
  * **Top Audience:** PC Gamers, Desk Setup Enthusiasts, Tech Buyers
  * **Peak Traffic:** `17:00 - 21:00 CET`

---

### 2.6 Work With Me (Sponsorship Contact Form)
* **Call to Action:** "Open for sponsorships, PC build showcases, gear reviews, and brand partnerships."
* **Services Provided:**
  * `Dedicated Viral Reels`
  * `Desk Setup Inclusion & Product Reviews`
  * `Brand Sponsorships & Unboxings`
  * `Affiliate Marketing`
* **Form Fields:** Name, Email, Brand Name, Budget/Offer, Message, [Submit Button].

---

## 🛠️ 3. Technical Requirements for the Developer

1. **Tech Stack:** Next.js / React, Tailwind CSS, Framer Motion (for smooth component transitions), and Lucide React Icons.
2. **Interactive Product Cards:** Dynamic mapping through `gearData.json` so product links and pictures can easily be updated without altering the codebase.
3. **Mobile Optimization:** 100% Mobile responsive layout (Crucial since 90%+ of Instagram traffic opens links via mobile devices).
```
eof