'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import styles from './homePage.module.css';
import RootLayout from '../layout';
import TaskList from '../components/todoList/taskList';
import AddTaskForm from '../components/todoList/taskAdd';

export default function Main() {
  const router = useRouter();

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (!user) {
      router.push('/login');
    }
  }, [router]);

  return (
    <RootLayout>
      <div className={styles.homePageContainer}>
        <button onClick={() => router.push('/logout')}>Выйти из профиля</button>
        <div>
          <h1>Добавить задачу</h1>
          <AddTaskForm />
          <h1>Фильтр задач</h1>
          <TaskList />
        </div>
      </div>
    </RootLayout>
  );
}
