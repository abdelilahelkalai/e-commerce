import { Link } from 'react-router-dom'
import './NotFound.css'

export default function NotFound() {
  return (
    <div className="not-found">
      <span className="not-found__code">404</span>
      <h1 className="not-found__title">Page not found</h1>
      <p className="not-found__text">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link className="btn" to="/">Back to Home</Link>
    </div>
  )
}
