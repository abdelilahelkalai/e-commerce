import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import './Navbar.css'

function Logo() {
  return (
    <svg className="navbar__logo" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="32" height="32" rx="8" fill="var(--color-primary)" />
      <path d="M8 12h4l4 8h-4L8 12z" fill="#fff" />
      <path d="M16 12h4l4 8h-4l-4-8z" fill="#fff" opacity="0.6" />
      <path d="M12 22l4-8 4 8h-8z" fill="#fff" />
    </svg>
  )
}

export default function Navbar() {
  const { user, logout } = useAuth()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="navbar">
      <Link className="navbar__brand" to="/">
        <Logo />
        MarketWave
      </Link>

      <button
        className={`navbar__toggle ${menuOpen ? 'navbar__toggle--open' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
        <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
        <li><Link to="/shop" onClick={() => setMenuOpen(false)}>Shop</Link></li>
        <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
        <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
        {user ? (
          <>
            <li><Link to="/profile" onClick={() => setMenuOpen(false)}>{user.firstName || user.email}</Link></li>
            <li>
              <button className="navbar__logout" onClick={() => { logout(); setMenuOpen(false); }}>Logout</button>
            </li>
          </>
        ) : (
          <li><Link to="/auth" onClick={() => setMenuOpen(false)}>Sign In</Link></li>
        )}
      </ul>
    </nav>
  )
}
