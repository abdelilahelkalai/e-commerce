import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function Home() {
  const { user } = useAuth()

  return (
    <div className="page page--home">
      {user ? (
        <>
          <span className="badge">Welcome back</span>
          <h1 className="page__title">Hey, {user.firstName}</h1>
          <p className="page__subtitle">
            Ready to explore the latest products? Your next favorite item is just a click away.
          </p>
          <div className="page__actions">
            <Link className="btn" to="/shop">Browse Shop</Link>
            <Link className="btn btn--outline" to="/profile">View Profile</Link>
          </div>
        </>
      ) : (
        <>
          <span className="badge">New Collection 2026</span>
          <h1 className="page__title">Shop the Future</h1>
          <p className="page__subtitle">
            Premium products, minimal design, delivered to your door.
          </p>
          <div className="page__actions">
            <Link className="btn" to="/auth">Get Started</Link>
            <Link className="btn btn--outline" to="/shop">Browse Shop</Link>
          </div>
        </>
      )}
    </div>
  )
}
