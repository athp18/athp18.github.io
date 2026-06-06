# athp18.github.io

Personal portfolio site — [athp18.github.io](https://athp18.github.io)

Built with React + Vite, styled after the [Jalpc](https://github.com/jarrekk/Jalpc) Jekyll theme, and deployed to GitHub Pages.

## Stack

- **React 19** + **Vite**
- **React Router** (HashRouter for GH Pages compatibility)
- **CSS Modules**
- **EmailJS** for the contact form
- **Open Sans** + **DM Mono** fonts via Fontsource

## Pages

| Route | Content |
|---|---|
| `/` | About — hero, bio, details |
| `/#/career` | Career timeline + skills |
| `/#/projects` | Project cards |
| `/#/contact` | Contact form |

## Project structure

```
src/
├── components/     # Nav, Footer, Icons
├── hooks/          # useDarkMode
├── pages/          # Home, CareerPage, ProjectsPage, ContactPage
└── styles/         # global.css (CSS variables, dark mode)

public/
├── images/         # Headshot.jpg
└── favicon.svg
```

## Local dev

```bash
npm install
npm run dev
```

## Deploy

Deploys to the `gh-pages` branch via:

```bash
npm run deploy
```

GitHub Pages is configured to serve from the `gh-pages` branch.

## Contact form setup

The contact form uses [EmailJS](https://www.emailjs.com). To activate it, fill in the three constants at the top of `src/pages/ContactPage.jsx`:

```js
const EMAILJS_SERVICE_ID  = 'YOUR_SERVICE_ID'
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'
const EMAILJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY'
```

Your EmailJS template should use the variables `{{from_name}}`, `{{from_email}}`, and `{{message}}`.
