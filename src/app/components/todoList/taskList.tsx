/* eslint-disable react/react-in-jsx-scope */
// src/app/components/todoList/taskList.tsx

'use client'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../redux/store'
import TaskItem from './taskItem'
import styles from './style/taskList.module.scss'
import { setPage } from '../../../redux/tasksSlice'

const TaskList = () => {
  const dispatch = useDispatch()
  const tasks = useSelector((state: RootState) => state.tasks.tasks)
  const currentPage = useSelector((state: RootState) => state.tasks.currentPage)
  const tasksPerPage = 3

  const indexOfLastTask = currentPage * tasksPerPage
  const indexOfFirstTask = indexOfLastTask - tasksPerPage
  const currentTasks = tasks.slice(indexOfFirstTask, indexOfLastTask)
  const totalPages = Math.ceil(tasks.length / tasksPerPage)

  const handlePageChange = (pageNumber: number) => {
    dispatch(setPage(pageNumber))
  }

  return (
    <div className={styles['task-list']}>
      <ul className={styles['task-list__items']}>
        {currentTasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ul>
      <div className={styles['task-list__pagination']}>
        {totalPages > 1 ? (
          Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
              className={styles['task-list__pagination-button']}
            >
              {index + 1}
            </button>
          ))
        ) : (
          <button disabled className={styles['task-list__pagination-button']}>
            1
          </button>
        )}
      </div>
    </div>
  )
}

export default TaskList
