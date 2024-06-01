'use client'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from '../../../redux/tasksSlice'
import styles from './style/taskAdd.module.scss'

const AddTaskForm = () => {
  const dispatch = useDispatch()
  const [title, setTitle] = useState('')
  const [email, setEmail] = useState('')
  const [description, setDescription] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (title.length < 3 || title.length > 25) {
      setError('Название задачи должно быть от 3 до 25 символов.')
      return
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
    if (!emailPattern.test(email)) {
      setError('Введите корректный email.')
      return
    }
    setError('')
    dispatch(addTask({ title, email, description }))
    setTitle('')
    setEmail('')
    setDescription('')
  }

  return (
    <form className={styles['add-task-form']} onSubmit={handleSubmit}>
      {error && <p className={styles['add-task-form__error']}>{error}</p>}
      <input
        className={styles['add-task-form__input']}
        type="text"
        placeholder="Название задачи"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        className={styles['add-task-form__input']}
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <textarea
        className={styles['add-task-form__textarea']}
        placeholder="Текст задачи"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button className={styles['add-task-form__button']} type="submit">
        Добавить задачу
      </button>
    </form>
  )
}

export default AddTaskForm
