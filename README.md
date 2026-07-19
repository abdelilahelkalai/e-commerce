<div align="center">

# 🛒 MarketWave

**A modern, minimal e-commerce starter built with React and Vite.**

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white&style=flat-square)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white&style=flat-square)](https://vite.dev)
[![react-hook-form](https://img.shields.io/badge/react--hook--form-v7-EC5990?logo=reacthookform&logoColor=white&style=flat-square)](https://react-hook-form.com)
[![React Router](https://img.shields.io/badge/React_Router-v6-CA4245?logo=reactrouter&logoColor=white&style=flat-square)](https://reactrouter.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-000000?style=flat-square)](./LICENSE)

</div>

---

## ✨ Features

| Feature | Description |
|:--------|:------------|
| 🔐 **Authentication** | Sign up & sign in with client-side validation, persisted sessions via `localStorage` |
| 👤 **User Profile** | Personalized profile page with user info and logout |
| 🛡️ **Protected Routes** | Private pages that redirect to sign in when not authenticated |
| 🧭 **Client-Side Routing** | Multi-page navigation with React Router |
| 🌗 **Dark Mode** | Automatic theme switching via `prefers-color-scheme` |
| 📱 **Responsive** | Mobile-first layout that works on all screen sizes |
| 🎨 **Design System** | CSS custom properties for colors, spacing, shadows, and radius |
| 🧩 **Reusable Components** | DRY form inputs, navbar, and layout components |

## 🚀 Getting Started

```bash
# Clone the repository
git clone https://github.com/abdelilahelkalai/e-commerce.git

# Install dependencies
cd e-commerce
npm install

# Start the dev server
npm run dev
```

## 📋 Available Scripts

| Command | Description |
|:--------|:------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## 🗺️ Routes

| Path | Page | Auth Required |
|:-----|:-----|:-------------|
| `/` | Home | No |
| `/shop` | Shop | No |
| `/about` | About | No |
| `/contact` | Contact | No |
| `/auth` | Sign Up / Sign In | No |
| `/profile` | User Profile | Yes |
| `*` | 404 Not Found | No |

## 📂 Project Structure

```
src/
├── main.jsx                    →  Entry point
├── App.jsx                     →  Routes & layout
├── App.css                     →  Global component styles
├── index.css                   →  Design tokens & reset
├── components/
│   ├── Navbar.jsx / .css       →  Navigation bar
│   └── ProtectedRoute.jsx      →  Auth route guard
├── context/
│   └── AuthContext.jsx         →  Authentication state
└── pages/
    ├── Home.jsx                →  Landing page
    ├── Shop.jsx                →  Product listing
    ├── About.jsx               →  About page
    ├── Contact.jsx             →  Contact page
    ├── Auth.jsx / .css         →  Sign up & sign in
    ├── Profile.jsx / .css      →  User profile
    └── NotFound.jsx / .css     →  404 page
```

## 📄 License

This project is licensed under the [MIT License](./LICENSE).

---

<div align="center">

**Made with ❤️ by [Abdelilah El Kalai](https://github.com/abdelilahelkalai)**

</div>
