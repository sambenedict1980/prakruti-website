# 🌿 Prakruti Website — Site Manager Guide (TEACHME)

Welcome! This document explains everything you need to know to manage the website yourself.

---

## 📁 Project File Tree (Simplified)

```
nitt-nature-club/
│
├── public/
│   └── images/          ← ALL your photos go here
│
├── src/
│   ├── app/             ← One folder per page
│   │   ├── page.tsx              ← HOME page
│   │   ├── about/page.tsx        ← ABOUT page
│   │   ├── events/page.tsx       ← EVENTS page
│   │   ├── initiatives/page.tsx  ← INITIATIVES page
│   │   ├── resources/page.tsx    ← RESOURCES page
│   │   ├── get-involved/page.tsx ← GET INVOLVED / Contact form page
│   │   └── layout.tsx            ← Site-wide wrapper (Navbar, Footer, SOS)
│   │
│   ├── components/      ← Reusable building blocks
│   │   ├── Navbar.tsx   ← Top navigation bar
│   │   ├── Footer.tsx   ← Bottom footer
│   │   └── SOSButton.tsx← Floating emergency SOS button (bottom-right)
│   │
│   └── data/
│       └── index.ts     ← 🗂️ MASTER DATA FILE — gallery, team, events, FAQs, contacts
│
└── TEACHME.md           ← You are here!
```

---

## 🗺️ Sitemap — What's on Each Page

| URL | Page | Key Sections |
|---|---|---|
| `/` | Home | Hero carousel, Gallery, Impact counters, News |
| `/about` | About Us | History, Timeline, Core Team grid |
| `/initiatives` | Initiatives | Flora/Fauna tabs with photos, Campus map |
| `/resources` | Resources | FAQs accordion, Emergency contacts table |
| `/events` | Events | Upcoming & Previous event cards with posters |
| `/get-involved` | Get Involved | Sponsor/Adopt cards, Contact form |

---

## 🖼️ How to Add / Change a Photo

### Step 1 — Copy your photo into the images folder
Put the image file (`.jpg`, `.jpeg`, `.png`, `.webp`) into:
```
public/images/
```
Example: copy `myphoto.jpeg` → `public/images/myphoto.jpeg`

> **Tip:** Rename files to something lowercase with no spaces, e.g. `dog-rescue.jpeg` instead of `Dog Rescue Photo (1).jpeg`

### Step 2 — Reference it in code
Anywhere you see an image path like `"/images/birb.jpeg"`, replace it with `"/images/myphoto.jpeg"`.

---

## 👥 How to Update the Core Team

Open: `src/data/index.ts`

Find this section (around line 60):
```ts
export const coreTeam: TeamMember[] = [
    { name: "Sriram P", role: "Overall Coordinator", image: "/images/sriram.jpeg" },
    { name: "Member 2",  role: "Vice President",      image: "https://picsum.photos/seed/team2/300/300" },
    ...
```

To update a member:
1. Change `"Member 2"` to their real name
2. Change `"Vice President"` to their real role
3. Add their photo to `public/images/` and update the `image` path to `"/images/theirphoto.jpeg"`

---

## 📅 How to Add / Edit Events

Open: `src/data/index.ts`

Find `export const events: EventItem[] = [` (around line 105).

Each event looks like this:
```ts
{
    id: 5,                           // Any unique number
    title: "Event Name Here",
    description: "Write a description of the event here.",
    date: "2026-04-15",              // YYYY-MM-DD format
    image: "/images/my-poster.jpeg", // Poster image (put it in public/images first)
    location: "NIT Trichy",
    type: "upcoming",                // "upcoming" or "previous"
},
```

- Change `type: "upcoming"` for future events, `type: "previous"` for past ones.
- The Events page automatically sorts them into two tabs.

---

## 📰 How to Update the News Cards (Home Page)

Open: `src/data/index.ts`

Find `export const newsItems: NewsItem[] = [` (around line 87).

Each news item:
```ts
{
    id: 1,
    title: "Your News Headline",
    excerpt: "A short 1–2 sentence description.",
    date: "2026-03-01",           // YYYY-MM-DD
    image: "/images/news-photo.jpeg",
    tag: "Flora",                 // Short label e.g. "Flora", "Fauna", "Events"
},
```

---

## 🖼️ How to Change the Hero Carousel Images

Open: `src/app/page.tsx`

Find this block near the top of the file:
```ts
const heroSlides = [
  { src: "/images/prakruti-hero.png", alt: "Prakruti logo" },
  { src: "/images/birb.jpeg",         alt: "Campus bird" },
  { src: "/images/cutepuppy.jpeg",    alt: "Cute puppy" },
  ...
];
```

- Add a new slide: add a new line `{ src: "/images/yourphoto.jpeg", alt: "Description" },`
- Remove a slide: delete that line.
- Reorder: just move the lines up/down.

---

## 📞 How to Update Contact Info

### Email & WhatsApp (Footer + SOS popup)

| File | What to change |
|---|---|
| `src/components/Footer.tsx` | `href="mailto:..."` and `href="https://chat.whatsapp.com/..."` |
| `src/components/SOSButton.tsx` | `const WHATSAPP_GROUP = "..."` at the top of the file |

### Instagram Handle

Open `src/components/Navbar.tsx` and `src/components/Footer.tsx` — search for `prakrutinitt` and replace.

---

## ❓ How to Edit FAQs (Resources Page)

Open: `src/data/index.ts`

Find `export const resourceFAQs: FAQItem[] = [` (around line 163).

Each FAQ entry:
```ts
{
    category: "Campus Dogs",
    question: "Is it safe to pet the campus dogs?",
    answer: "Yes! Most campus dogs are vaccinated...",
},
```

Add, remove, or edit any entry. They are grouped automatically by `category`.

---

## 🚨 How to Update Emergency Contacts (Resources Page)

Open: `src/data/index.ts`

Find `export const emergencyContacts` (around line 154):
```ts
{ name: "Blue Cross of Trichy", role: "Animal Rescue NGO", phone: "+91-431-2750765", available: "9 AM – 6 PM" },
```

Just edit/add/remove lines.

---

## 📝 How to Update the Contact Form (Get Involved Page)

The form uses [Web3Forms](https://web3forms.com). Your current access key is already set.

Open: `src/app/get-involved/page.tsx` — line 8:
```ts
const WEB3FORMS_KEY = "54283314-f6c8-4bbd-b961-a7df91b5b7f4";
```

If you need a new key: go to [web3forms.com](https://web3forms.com), enter your email, copy the key, paste it here.

---

## ✏️ How to Change Page Text

Each page lives in `src/app/<pagename>/page.tsx`. The text is written directly in the JSX (HTML-like code). For example, to change the About page hero title:

Open `src/app/about/page.tsx` and look for the `<h1>` tag to change the heading.

> **Tip:** Use your code editor's **Find** (Ctrl+F) to search for the exact text you want to change.

---

## 🚀 How to Run the Website Locally

Open a terminal in the project folder and run:
```powershell
npm run dev
```
Then open your browser at **http://localhost:3000**

---

## 🏗️ How to Build for Production / Deployment

```powershell
npm run build
```
If this shows "Exit code: 0" — everything is correct and ready to deploy.

---

## 📤 How to Push Changes to GitHub

```powershell
git add .
git commit -m "Describe what you changed"
git push
```

---

## 🔍 Quick Reference — "Where Is That Thing?"

| I want to change… | Open this file |
|---|---|
| Site title / SEO description | `src/app/layout.tsx` |
| Navbar links or logo | `src/components/Navbar.tsx` |
| Footer text, email, socials | `src/components/Footer.tsx` |
| SOS button / WhatsApp link | `src/components/SOSButton.tsx` |
| Home page hero photos | `src/app/page.tsx` → `heroSlides` |
| Home page impact numbers | `src/app/page.tsx` → `<Counter target={...}` |
| Gallery carousel photos | `src/data/index.ts` → `galleryImages` |
| News cards | `src/data/index.ts` → `newsItems` |
| Team members + photos | `src/data/index.ts` → `coreTeam` |
| Events + posters | `src/data/index.ts` → `events` |
| FAQs | `src/data/index.ts` → `resourceFAQs` |
| Emergency contacts table | `src/data/index.ts` → `emergencyContacts` |
| About page content | `src/app/about/page.tsx` |
| Initiatives tabs + photos | `src/app/initiatives/page.tsx` |
| Contact form key | `src/app/get-involved/page.tsx` line 8 |
