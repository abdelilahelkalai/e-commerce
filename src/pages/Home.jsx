import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import './Home.css'

const categories = [
  { name: 'Desktops & PCs', icon: '/images/desktop.svg', link: '/shop?category=desktops' },
  { name: 'Laptops', icon: '/images/laptop.svg', link: '/shop?category=laptops' },
  { name: 'iPads & Tablets', icon: '/images/tablet.svg', link: '/shop?category=tablets' },
  { name: 'Accessories', icon: '/images/accessories.svg', link: '/shop?category=accessories' },
]

export default function Home() {
  const { user } = useAuth()

  return (
    <div className="home">
      <div className="hero">
        {user ? (
          <>
            <span className="badge">Welcome back</span>
            <h1 className="hero__title">Hey, {user.firstName}</h1>
            <p className="hero__subtitle">
              Ready to explore the latest products? Your next favorite item is just a click away.
            </p>
          </>
        ) : (
          <>
            <span className="badge">New Collection 2026</span>
            <h1 className="hero__title">Shop the Future</h1>
            <p className="hero__subtitle">
              Premium products, minimal design, delivered to your door.
            </p>
          </>
        )}
        <div className="hero__actions">
          <Link className="btn" to="/shop">Browse Shop</Link>
          {!user && <Link className="btn btn--outline" to="/auth">Get Started</Link>}
        </div>
      </div>

      <section className="categories">
        <h2 className="section-title">Shop by Category</h2>
        <div className="categories__grid">
          {categories.map((cat) => (
            <Link key={cat.name} to={cat.link} className="category-card">
              <img src={cat.icon} alt={cat.name} />
              <span>{cat.name}</span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
