import { createContext, useContext, useState } from 'react'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)

  function register(userData) {
    setUser(userData)
  }

  function signIn(email, password) {
    // TODO: replace with API call to MongoDB
    if (!email || !password) return { error: 'Invalid credentials' }
    setUser({ firstName: email.split('@')[0], email })
    return { error: null }
  }

  function logout() {
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
