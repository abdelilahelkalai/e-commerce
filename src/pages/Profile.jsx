import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import './Profile.css'

export default function Profile() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  function handleLogout() {
    logout()
    navigate('/')
  }

  return (
    <div className="profile">
      <div className="profile-card">
        <div className="profile-card__avatar">
          {user.firstName[0].toUpperCase()}
        </div>
        <h1 className="profile-card__name">
          {user.firstName} {user.lastName}
        </h1>
        <span className="profile-card__email">{user.email}</span>
        <div className="profile-card__actions">
          <button className="btn btn--outline" onClick={handleLogout}>Logout</button>
        </div>
      </div>
    </div>
  )
}
