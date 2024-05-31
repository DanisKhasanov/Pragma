'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import styles from './LoginPage.module.css'
import RootLayout from '../layout'

const users = [
  { email: 'user@user.com', password: '12345' },
  { email: 'admin@admin.com', password: '67890' },
]

export default function LoginPage() {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const [error, setError] = useState<string>('')
  const router = useRouter()
  useEffect(() => {
    const user = localStorage.getItem('user')
    if (user) {
      router.push('/home')
    }
  }, [])

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email)
  }

  const handleLogin = () => {
    if (!validateEmail(email)) {
      setError('Invalid email address')
      return
    }
    if (password.length === 0) {
      setError('Password is required')
      return
    }

    const user = users.find((u) => u.email === email && u.password === password)
    if (user) {
      localStorage.setItem('user', JSON.stringify(user))
      router.push('/home')
    } else {
      setError('Неправильный email или пароль')
    }
  }


  return (
    <RootLayout>
      <div className={styles.loginFormContainer}>
        <h2>Login</h2>
        <input
          className={styles.loginInput}
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="text"
          placeholder="Email"
        />
        <div className={styles.passwordContainer}>
          <input
            className={styles.loginInput}
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
          />
        </div>
        {error && <div className={styles.errorMessage}>{error}</div>}
        <button className={styles.loginButton} onClick={handleLogin}>
          Login
        </button>
      </div>
    </RootLayout>
  )
}
