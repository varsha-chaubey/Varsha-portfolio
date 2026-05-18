# Varsha Chaubey Portfolio

A modern portfolio website built with **Next.js 16**, **React 19**, **Tailwind CSS 4**, and **Framer Motion**. The site showcases Varsha Chaubey's profile, experience, skills, projects, and contact details with a polished, animated UI.

## Features

- Responsive landing page with hero section and animated typewriter-style title
- About, experience, projects, skills, and contact sections
- Project gallery with image/video media cards
- Reusable UI components and clean layout structure
- Client-side animations using `framer-motion`
- Dynamic contact and profile data loaded from JSON

## Tech Stack

- Next.js 16 (App Router)
- React 19
- Tailwind CSS 4
- Framer Motion
- Lucide icons
- React Icons
- TypeScript

## Project Structure

- `app/page.tsx` — main application page layout
- `components/sections` — page sections such as `hero`, `about`, `projects`, and `contact`
- `components/layouts` — shared layout components like `Navbar` and `Footer`
- `components/shared` — reusable UI components
- `data` — portfolio content stored in JSON files like `profile.json`, `projects.json`, and `skills.json`

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio locally.

## Build for Production

```bash
npm run build
npm run start
```

## Customize Content

Update the content in `data/profile.json`, `data/projects.json`, and `data/skills.json` to change the portfolio text, links, and media.

## Deployment

This project can be deployed on Vercel or any platform that supports Next.js applications. For Vercel, simply connect the repository and deploy using the default settings.

## License

This repository is for a personal portfolio project. Feel free to adapt the structure and styles for your own portfolio.
