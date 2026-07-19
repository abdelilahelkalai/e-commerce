import { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext(null)

const USERS_KEY = 'users'
const USER_KEY = 'user'

function getUsers() {
  return JSON.parse(localStorage.getItem(USERS_KEY) || '[]')
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const saved = localStorage.getItem(USER_KEY)
    if (saved) setUser(JSON.parse(saved))
  }, [])

  function register({ firstName, lastName, email, password }) {
    const users = getUsers()
    users.push({ firstName, lastName, email, password })
    localStorage.setItem(USERS_KEY, JSON.stringify(users))
    setUser({ firstName, lastName, email })
    localStorage.setItem(USER_KEY, JSON.stringify({ firstName, lastName, email }))
  }

  function signIn(email, password) {
    const found = getUsers().find((u) => u.email === email)
    if (!found) return { error: 'No account found with this email' }
    if (found.password !== password) return { error: 'Incorrect password' }
    const { password: _, ...userData } = found
    setUser(userData)
    localStorage.setItem(USER_KEY, JSON.stringify(userData))
    return { error: null }
  }

  function logout() {
    localStorage.removeItem(USER_KEY)
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
