import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useAuth } from '../context/AuthContext'
import './Auth.css'

function Field({ label, error, register, ...inputProps }) {
  return (
    <div className="field">
      <label className="field__label" htmlFor={inputProps.id}>{label}</label>
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
  const { register: registerUser } = useAuth()
  const navigate = useNavigate()
  const [error, setError] = useState('')
  const { register, handleSubmit, formState: { errors } } = useForm()

  async function onSubmit(data) {
    setError('')
    try {
      const result = await registerUser(data)
      if (result.error) return setError(result.error)
      navigate('/')
    } catch {
      setError('Could not connect to server')
    }
  }

  return (
    <div className="auth-card">
      <div className="auth-card__header">
        <span className="badge">MarketWave</span>
        <h1 className="auth-card__title">Create an account</h1>
        <p className="auth-card__subtitle">Free forever. No credit card needed.</p>
      </div>
      <form className="form" onSubmit={handleSubmit(onSubmit)} noValidate>
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
        {error && <span className="field__error">{error}</span>}
        <button className="btn btn--full" type="submit">Create account</button>
      </form>
      <p className="auth-card__switch">
        Already have an account? <button type="button" onClick={onSwitch}>Sign in</button>
      </p>
    </div>
  )
}

function SignIn({ onSwitch }) {
  const { signIn } = useAuth()
  const navigate = useNavigate()
  const [error, setError] = useState('')
  const { register, handleSubmit, formState: { errors } } = useForm()

  async function onSubmit(data) {
    setError('')
    try {
      const result = await signIn(data.email, data.password)
      if (result.error) return setError(result.error)
      navigate('/')
    } catch {
      setError('Could not connect to server')
    }
  }

  return (
    <div className="auth-card">
      <div className="auth-card__header">
        <span className="badge">MarketWave</span>
        <h1 className="auth-card__title">Welcome back</h1>
        <p className="auth-card__subtitle">Sign in to your account.</p>
      </div>
      <form className="form" onSubmit={handleSubmit(onSubmit)} noValidate>
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
        {error && <span className="field__error">{error}</span>}
        <button className="btn btn--full" type="submit">Sign in</button>
      </form>
      <p className="auth-card__switch">
        Don't have an account? <button type="button" onClick={onSwitch}>Sign up</button>
      </p>
    </div>
  )
}

export default function Auth() {
  const [view, setView] = useState('signup')

  return (
    <div className="auth">
      {view === 'signup'
        ? <SignUp onSwitch={() => setView('signin')} />
        : <SignIn onSwitch={() => setView('signup')} />}
    </div>
  )
}
