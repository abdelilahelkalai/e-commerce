<div align="center">

# 🛒 MarketWave

**A modern, minimal e-commerce starter built with React, Vite, Node.js, and MongoDB.**

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white&style=flat-square)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white&style=flat-square)](https://vite.dev)
[![Node.js](https://img.shields.io/badge/Node.js-22-339933?logo=node.js&logoColor=white&style=flat-square)](https://nodejs.org)
[![MongoDB](https://img.shields.io/badge/MongoDB-8-47A248?logo=mongodb&logoColor=white&style=flat-square)](https://mongodb.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-000000?style=flat-square)](./LICENSE)

</div>

---

## ✨ Features

| Feature | Description |
|:--------|:------------|
| 🔐 **Authentication** | Sign up & sign in with JWT tokens, passwords hashed with bcrypt |
| 👤 **User Profile** | Personalized profile page with user info and logout |
| 🛡️ **Protected Routes** | Private pages that redirect to sign in when not authenticated |
| 🧭 **Client-Side Routing** | Multi-page navigation with React Router |
| 🗄️ **MongoDB Backend** | Persistent user data stored in MongoDB Atlas |
| 🌗 **Dark Mode** | Automatic theme switching via `prefers-color-scheme` |
| 📱 **Responsive** | Mobile-first layout with hamburger menu on mobile |
| 🎨 **Design System** | CSS custom properties for colors, spacing, shadows, and radius |

## 🚀 Getting Started

```bash
# Clone the repository
git clone https://github.com/abdelilahelkalai/e-commerce.git

# Install frontend dependencies
cd e-commerce
npm install

# Install server dependencies
cd server
npm install
cd ..
```

### Environment Variables

Create a `server/.env` file:

```
PORT=5001
MONGODB_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_random_secret_key
```

### Run the App

```bash
# Start the backend server
cd server
npm run dev

# In a new terminal, start the frontend
npm run dev
```

## 📋 Available Scripts

### Frontend

| Command | Description |
|:--------|:------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

### Server

| Command | Description |
|:--------|:------------|
| `npm run dev` | Start server with auto-reload (nodemon) |
| `npm start` | Start server in production |

## 🔌 API Endpoints

| Method | Endpoint | Description | Auth |
|:-------|:---------|:------------|:-----|
| `POST` | `/api/auth/register` | Create a new account | No |
| `POST` | `/api/auth/login` | Sign in | No |
| `GET` | `/api/auth/me` | Get current user profile | Yes (Bearer token) |

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
├── public/images/             →  SVG icons for product categories
├── src/
│   ├── main.jsx               →  Entry point
│   ├── App.jsx                →  Routes & layout
│   ├── App.css                →  Global component styles
│   ├── index.css              →  Design tokens & reset
│   ├── components/
│   │   ├── Navbar.jsx / .css  →  Responsive navigation bar
│   │   └── ProtectedRoute.jsx →  Auth route guard
│   ├── context/
│   │   └── AuthContext.jsx    →  Authentication state & API calls
│   └── pages/
│       ├── Home.jsx / .css    →  Landing page with categories
│       ├── Shop.jsx           →  Product listing
│       ├── About.jsx / .css   →  About page
│       ├── Contact.jsx / .css →  Contact page
│       ├── Auth.jsx / .css    →  Sign up & sign in
│       ├── Profile.jsx / .css →  User profile
│       └── NotFound.jsx       →  404 page
└── server/
    ├── server.js              →  Express entry point
    ├── config/db.js           →  MongoDB connection
    ├── models/User.js         →  User schema (Mongoose)
    ├── routes/auth.js         →  Auth API routes
    ├── middleware/auth.js      →  JWT verification middleware
    └── .env                   →  Environment variables (not committed)
```

## 📄 License

This project is licensed under the [MIT License](./LICENSE).

---

<div align="center">

**Made with ❤️ by [Abdelilah El Kalai](https://github.com/abdelilahelkalai)**

</div>
