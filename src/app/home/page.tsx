'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import styles from './homePage.module.css'
import RootLayout from '../layout'

export default function Main() {
  const router = useRouter()
  const [tasks, setTasks] = useState<string[]>([])

  useEffect(() => {
    const user = localStorage.getItem('user')
    if (!user) {
      router.push('/login')
    }
  }, [])

  return (
    <RootLayout>
      <div className={styles.homePageContainer}>
        <h1>Task List</h1>
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
        <button
          onClick={() => setTasks([...tasks, `Task ${tasks.length + 1}`])}
        >
          Add Task
        </button>
      </div>
    </RootLayout>
  )
}
