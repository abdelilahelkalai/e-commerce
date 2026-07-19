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

  return (
    <nav className="navbar">
      <Link className="navbar__brand" to="/">
        <Logo />
        MarketWave
      </Link>
      <ul className="navbar__links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/shop">Shop</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      {user ? (
        <div className="navbar__user">
          <Link className="btn btn--sm btn--outline" to="/profile">{user.firstName || user.email}</Link>
          <button className="btn btn--sm" onClick={logout}>Logout</button>
        </div>
      ) : (
        <Link className="btn btn--sm" to="/auth">Sign In</Link>
      )}
    </nav>
  )
}
