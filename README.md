# Hero Server Action

## Test project for practice using Next.js

### Technologies & Libraries

- Next.js (App Router) — next@16.2.6
- React — react@19.2.4 / react-dom@19.2.4
- HeroUI — @heroui/react, @heroui/styles
- Next Themes — next-themes
- Tailwind CSS — tailwindcss + @tailwindcss/postcss
- PostCSS
- Gravity UI icons — @gravity-ui/icons
- ESLint, babel-plugin-react-compiler

### How to pull and run

1. Clone the repo:

```
git clone <repo-url>
cd <repo-folder>
```

Replace `<repo-folder>` with the folder name created by `git clone` (for example `hero-server-action` or `3.hero-server-action` if your copy has a `3.` prefix).

2. Install dependencies and run the dev server:

```
npm install
npm run dev
```

3. Open http://localhost:3000 in your browser.

**Note on dependencies:** After cloning, run `npm install` to install all required libraries listed in `package.json` (HeroUI: `@heroui/react`, Tailwind: `tailwindcss` and `@tailwindcss/postcss`, Gravity UI icons: `@gravity-ui/icons`, `next-themes`, etc.). Make sure you have Node.js installed (recommended v16+ or v18+).

### What I'm practicing

This project practices the Next.js App Router and server actions, integrating UI libraries (HeroUI, Tailwind, Gravity UI), theme switching, and simple task CRUD with local data.
