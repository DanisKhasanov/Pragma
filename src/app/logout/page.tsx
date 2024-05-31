'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import styles from './logout.module.css'
import RootLayout from '../layout'

export default function Logout() {
  useEffect(() => {
    const user = localStorage.getItem('user')
    if (!user) {
      router.push('/login')
    }
  }, [])
  const router = useRouter()
  const handleLogout = () => {
    localStorage.removeItem('user')
    router.push('/')
  }
  return (
    <RootLayout>
      <div className={styles.container}>
        <div className={styles.content}>
          <Link href="/login">
            <button className={styles.loginButton} onClick={handleLogout}>
              Logout
            </button>
          </Link>
        </div>
      </div>
    </RootLayout>
  )
}
