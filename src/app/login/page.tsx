'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import styles from './loginPage.module.css'
import RootLayout from '../layout'
import { Admin, User } from '../../enum/usersData'
import { useDispatch } from 'react-redux'
import { setUserAdmin } from '@/redux/userSlice'

export default function LoginPage() {
  const dispatch = useDispatch()
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
    if (email === User.email && password === User.password) {
      dispatch(setUserAdmin(false))
      localStorage.setItem('user', JSON.stringify({ email: User.email }))
      router.push('/home')
    } else if (email === Admin.email && password === Admin.password) {
      dispatch(setUserAdmin(true))
      localStorage.setItem('user', JSON.stringify({ email: Admin.email }))
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
