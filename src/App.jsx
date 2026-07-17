import { useState } from 'react'
import { useForm } from 'react-hook-form'
import './App.css'

function Field({ label, error, register, ...inputProps }) {
  return (
    <div className="field">
      <label className="field__label" htmlFor={inputProps.id}>
        {label}
      </label>
      <input
        className={`field__input ${error ? 'field__input--error' : ''}`}
        {...register}
        {...inputProps}
      />
      {error && <span className="field__error">{error.message}</span>}
    </div>
  )
}

function SignUp({ onSwitch }) {
  const [done, setDone] = useState(false)
  const { register, handleSubmit, formState: { errors }, getValues } = useForm({
    defaultValues: { firstName: '', lastName: '', email: '', password: '' },
  })

  if (done) {
    return (
      <div className="card">
        <div className="success-icon">✓</div>
        <h2 className="success-title">Welcome, {getValues('firstName')}!</h2>
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

      <form className="form" onSubmit={handleSubmit(() => setDone(true))} noValidate>
        <div className="form-row">
          <Field label="First name" id="firstName" autoComplete="given-name"
            register={register('firstName', { required: 'Required' })}
            error={errors.firstName} />
          <Field label="Last name" id="lastName" autoComplete="family-name"
            register={register('lastName', { required: 'Required' })}
            error={errors.lastName} />
        </div>
        <Field label="Email" id="signup-email" type="email" autoComplete="email"
          placeholder="you@example.com"
          register={register('email', {
            required: 'Required',
            pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Enter a valid email' },
          })}
          error={errors.email} />
        <Field label="Password" id="signup-password" type="password" autoComplete="new-password"
          placeholder="Min. 8 characters"
          register={register('password', {
            required: 'Required',
            minLength: { value: 8, message: 'Min. 8 characters' },
          })}
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
  const [done, setDone] = useState(false)
  const { register, handleSubmit, formState: { errors }, getValues } = useForm({
    defaultValues: { email: '', password: '' },
  })

  if (done) {
    return (
      <div className="card">
        <div className="success-icon">✓</div>
        <h2 className="success-title">Welcome back!</h2>
        <p className="success-text">You are signed in as {getValues('email')}.</p>
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

      <form className="form" onSubmit={handleSubmit(() => setDone(true))} noValidate>
        <Field label="Email" id="signin-email" type="email" autoComplete="email"
          placeholder="you@example.com"
          register={register('email', {
            required: 'Required',
            pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Enter a valid email' },
          })}
          error={errors.email} />
        <Field label="Password" id="signin-password" type="password" autoComplete="current-password"
          placeholder="Enter your password"
          register={register('password', { required: 'Required' })}
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
      <footer className="footer">&copy; 2026 Ecommerce &middot; Abdelilah El Kalai</footer>
    </div>
  )
}
