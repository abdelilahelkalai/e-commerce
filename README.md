# E-Commerce

A modern, minimal e-commerce starter built with React and Vite.

## Features

- **Sign Up / Sign In** — forms powered by [react-hook-form](https://react-hook-form.com) with validation, error states, and success screens
- **Reusable Field component** — DRY form inputs with label, error, and focus states
- **Dark mode** — automatic via `prefers-color-scheme`
- **Responsive** — mobile-first layout, works on all screen sizes
- **Clean design system** — CSS custom properties for colors, spacing, shadows, and radius

## Tech Stack

- [React 19](https://react.dev)
- [Vite 8](https://vite.dev)
- [react-hook-form](https://react-hook-form.com)
- Plain CSS with CSS custom properties

## Getting Started

```bash
git clone https://github.com/abdelilahelkalai/e-commerce.git
cd e-commerce
npm install
npm run dev
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## Project Structure

```
src/
  main.jsx        — entry point
  App.jsx         — Field, SignUp, SignIn components
  App.css         — component styles
  index.css       — global styles & design tokens
```

## License

MIT
