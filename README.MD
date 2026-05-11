# MyPustakam

A modern minimalist bookstore frontend built with React, TypeScript, Vite, and Tailwind CSS.

## Preview

MyPustakam is a clean and elegant digital bookstore UI inspired by premium editorial and literature-focused design systems.

The project focuses on:

* Modern responsive UI
* Smooth hover interactions
* Reusable React components
* Tailwind CSS utility-first styling
* Type-safe frontend architecture using TypeScript
* Component-driven scalable structure

---

# Tech Stack

## Frontend

* React 18
* TypeScript
* Vite
* Tailwind CSS v4

## Styling

* Tailwind CSS
* Custom design tokens
* Responsive layouts
* Custom typography system
* Material-inspired color palette

## Icons

* Lucide React
* Google Material Symbols

---

# Features

* Responsive navigation bar
* Search UI
* Horizontal book carousel
* Reusable card-based architecture
* Smooth hover animations
* Custom theme colors
* Typography scale system
* Clean scrollbar hiding
* Mobile-first layout

---

# Folder Structure

```bash
mypustakam/
│
├── backend/          # Backend (planned)
├── Design/           # UI/UX assets and references
├── frontend/         # React + TypeScript frontend
│
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.tsx
│   │   │   ├── BookCarousel.tsx
│   │   │   └── BookCard.tsx
│   │   │
│   │   ├── assets/
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── index.css
│   │
│   ├── package.json
│   ├── vite.config.ts
│   └── tailwind.config.ts
│
└── README.md
```

---

# Installation

## Clone the repository

```bash
git clone <your-repository-url>
```

## Navigate into the project

```bash
cd mypustakam
```

## Install dependencies

```bash
npm install
```

## Start development server

```bash
npm run dev
```

---

# Tailwind CSS Setup

This project uses Tailwind CSS v4 with a custom configuration.

## Install Tailwind

```bash
npm install tailwindcss @tailwindcss/vite
```

## Configure Vite

```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})
```

## Import Tailwind

Inside `src/index.css`

```css
@import "tailwindcss";
```

---

# Fonts

## Installed Fonts

* DM Sans
* Libre Caslon Text

## Install Font Packages

```bash
npm install @fontsource/dm-sans
```

## Import Fonts

Inside `main.tsx`

```ts
import "@fontsource/dm-sans";
```

## Libre Caslon Text

Imported through Google Fonts:

```css
@import url('https://fonts.googleapis.com/css2?family=Libre+Caslon+Text:wght@400;600;700&display=swap');
```

---

# Example Component

## Book Carousel

The carousel is generated dynamically using a reusable data array and `map()` iteration.

```tsx
{books.map((book) => (
  <BookCard key={book.id} {...book} />
))}
```

This keeps the UI scalable and maintainable.

---

# Design Philosophy

MyPustakam follows a minimalist editorial design inspired by:

* Modern bookstores
* Literary magazine layouts
* Warm neutral palettes
* Material-inspired design systems
* Elegant typography hierarchy

---

# Git Setup

## Initialize Git

From the project root:

```bash
git init
```

## Create `.gitignore`

Create a `.gitignore` file in the root folder:

```gitignore
# Dependencies
node_modules/

# Environment variables
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# Build output
dist/
build/

# Logs
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# OS files
.DS_Store
Thumbs.db

# IDE files
.vscode/
.idea/
```

## Stage Files

```bash
git add .
```

Git will automatically ignore:

* `node_modules`
* `.env` files
* build folders
* IDE settings

## Commit Changes

```bash
git commit -m "Initial commit"
```

## Connect GitHub Repository

```bash
git remote add origin <your-repository-url>
```

## Push Code

```bash
git branch -M main
git push -u origin main
```

---

# Future Improvements

* Backend integration
* Authentication system
* Book details page
* Cart and checkout
* Wishlist support
* Search functionality
* Dark mode
* Admin dashboard
* API integration
* State management

---

# Scripts

## Run Development Server

```bash
npm run dev
```

## Build Project

```bash
npm run build
```

## Preview Production Build

```bash
npm run preview
```

---

# Author

Built with React, TypeScript, Vite, and Tailwind CSS.

---

# License

This project is open-source and available under the MIT License.
