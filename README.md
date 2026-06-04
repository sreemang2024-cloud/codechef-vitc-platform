CodeChef VIT Chennai - Event Platform

Hey there! This is my frontend application submission for the CodeChef VITC Projects recruitment screening. I built a responsive event management platform where users can learn about the club, browse upcoming events, and register for them. 

Live Demo: https://codechef-vitc-platform.vercel.app/

What I built into this project:
- A clean, modern UI using Tailwind CSS
- A working dark mode toggle that flips the entire site theme
- Dynamic routing for individual event detail pages
- Form validation on the registration modal to catch missing info or bad emails
- Smooth scroll and entrance animations using Framer Motion
- A fully responsive layout that works on mobile devices

The Tech Stack:
- Next.js (App Router)
- TypeScript
- Tailwind CSS v4
- Framer Motion
- Lucide React

Folder Structure:
src/
├── app/                      (Next.js App Router)
│   ├── events/[id]/          (Dynamic routing for events)
│   │   ├── loading.tsx       (Next.js Suspense skeleton UI)
│   │   └── page.tsx          (Individual event details page)
│   ├── globals.css           (Tailwind v4 & global styles)
│   ├── layout.tsx            (Root layout with ThemeProvider setup)
│   └── page.tsx              (Main landing page)
├── components/               (Reusable UI Components)
│   ├── Footer.tsx            (Footer with social links)
│   ├── Navbar.tsx            (Responsive navigation & theme toggle)
│   ├── RegisterModal.tsx     (Client-side form with validation)
│   └── ThemeProvider.tsx     (next-themes context provider)
├── sections/                 (Landing Page Sections)
│   ├── ClubInfo.tsx          (CodeChef VITC details & perks)
│   ├── Hero.tsx              (Animated landing section)
│   └── UpcomingEvents.tsx    (Event card grid)
└── data/                     (Mock Database)
    └── events.ts             (Static event data array)

How to run this locally:
1. Clone this repository to your machine
2. Open your terminal and run "npm install" to grab the dependencies
3. Run "npm run dev" to start the local server
4. Open http://localhost:3000 in your browser to view the site

Thanks for checking out my submission!
