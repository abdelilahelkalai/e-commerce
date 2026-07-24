import { createContext, useContext, useState, useEffect } from 'react'

const API_URL = 'http://localhost:5001/api/auth'
const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [token, setToken] = useState(localStorage.getItem('token'))

  useEffect(() => {
    if (token) {
      fetch(`${API_URL}/me`, {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.user) setUser(data.user)
          else logout()
        })
        .catch(() => logout())
    }
  }, [token])

  async function register({ firstName, email, password }) {
    try {
      const res = await fetch(`${API_URL}/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ firstName, email, password }),
      })
      const data = await res.json()
      if (data.error) return { error: data.error }
      localStorage.setItem('token', data.token)
      setToken(data.token)
      setUser(data.user)
      return { error: null }
    } catch {
      return { error: 'Could not connect to server' }
    }
  }

  async function signIn(email, password) {
    try {
      const res = await fetch(`${API_URL}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      })
      const data = await res.json()
      if (data.error) return { error: data.error }
      localStorage.setItem('token', data.token)
      setToken(data.token)
      setUser(data.user)
      return { error: null }
    } catch {
      return { error: 'Could not connect to server' }
    }
  }

  function logout() {
    localStorage.removeItem('token')
    setToken(null)
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, register, signIn, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}
