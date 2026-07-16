import { useState } from 'react'
import './App.css'

function Field({ label, error, ...inputProps }) {
  return (
    <div className="field">
      <label className="field__label" htmlFor={inputProps.id}>
        {label}
      </label>
      <input
        className={`field__input ${error ? 'field__input--error' : ''}`}
        {...inputProps}
      />
      {error && <span className="field__error">{error}</span>}
    </div>
  )
}

function SignUp({ onSwitch }) {
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', password: '' })
  const [errors, setErrors] = useState({})
  const [done, setDone] = useState(false)

  function set(name, value) {
    setForm((f) => ({ ...f, [name]: value }))
    if (errors[name]) setErrors((e) => ({ ...e, [name]: '' }))
  }

  function submit(e) {
    e.preventDefault()
    const err = {}
    if (!form.firstName.trim()) err.firstName = 'Required'
    if (!form.lastName.trim()) err.lastName = 'Required'
    if (!form.email.includes('@')) err.email = 'Enter a valid email'
    if (form.password.length < 8) err.password = 'Min. 8 characters'
    if (Object.keys(err).length) return setErrors(err)
    setDone(true)
  }

  if (done) {
    return (
      <div className="card">
        <div className="success-icon">✓</div>
        <h2 className="success-title">Welcome, {form.firstName}!</h2>
        <p className="success-text">Your account is ready.</p>
      </div>
    )
  }

  return (
    <div className="card">
      <div className="card__header">
        <span className="badge">Ecommerce</span>
        <h1 className="card__title">Create an account</h1>
        <p className="card__subtitle">Free forever. No credit card needed.</p>
      </div>

      <form className="form" onSubmit={submit} noValidate>
        <div className="form-row">
          <Field label="First name" id="firstName" autoComplete="given-name"
            value={form.firstName} onChange={(e) => set('firstName', e.target.value)}
            error={errors.firstName} />
          <Field label="Last name" id="lastName" autoComplete="family-name"
            value={form.lastName} onChange={(e) => set('lastName', e.target.value)}
            error={errors.lastName} />
        </div>
        <Field label="Email" id="signup-email" type="email" autoComplete="email"
          placeholder="you@example.com"
          value={form.email} onChange={(e) => set('email', e.target.value)}
          error={errors.email} />
        <Field label="Password" id="signup-password" type="password" autoComplete="new-password"
          placeholder="Min. 8 characters"
          value={form.password} onChange={(e) => set('password', e.target.value)}
          error={errors.password} />
        <button className="btn btn--full" type="submit">Create account</button>
      </form>

      <p className="card__switch">
        Already have an account? <button type="button" onClick={onSwitch}>Sign in</button>
      </p>
    </div>
  )
}

function SignIn({ onSwitch }) {
  const [form, setForm] = useState({ email: '', password: '' })
  const [errors, setErrors] = useState({})
  const [done, setDone] = useState(false)

  function set(name, value) {
    setForm((f) => ({ ...f, [name]: value }))
    if (errors[name]) setErrors((e) => ({ ...e, [name]: '' }))
  }

  function submit(e) {
    e.preventDefault()
    const err = {}
    if (!form.email.includes('@')) err.email = 'Enter a valid email'
    if (!form.password) err.password = 'Required'
    if (Object.keys(err).length) return setErrors(err)
    setDone(true)
  }

  if (done) {
    return (
      <div className="card">
        <div className="success-icon">✓</div>
        <h2 className="success-title">Welcome back!</h2>
        <p className="success-text">You are signed in as {form.email}.</p>
      </div>
    )
  }

  return (
    <div className="card">
      <div className="card__header">
        <span className="badge">Ecommerce</span>
        <h1 className="card__title">Welcome back</h1>
        <p className="card__subtitle">Sign in to your account.</p>
      </div>

      <form className="form" onSubmit={submit} noValidate>
        <Field label="Email" id="signin-email" type="email" autoComplete="email"
          placeholder="you@example.com"
          value={form.email} onChange={(e) => set('email', e.target.value)}
          error={errors.email} />
        <Field label="Password" id="signin-password" type="password" autoComplete="current-password"
          placeholder="Enter your password"
          value={form.password} onChange={(e) => set('password', e.target.value)}
          error={errors.password} />
        <button className="btn btn--full" type="submit">Sign in</button>
      </form>

      <p className="card__switch">
        Don't have an account? <button type="button" onClick={onSwitch}>Sign up</button>
      </p>
    </div>
  )
}

export default function App() {
  const [view, setView] = useState('signup')

  return (
    <div className="app">
      {view === 'signup'
        ? <SignUp onSwitch={() => setView('signin')} />
        : <SignIn onSwitch={() => setView('signup')} />}
      <footer className="footer">&copy; 2026 Ecommerce</footer>
    </div>
  )
}
