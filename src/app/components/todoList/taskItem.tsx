import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from './style/taskItem.module.scss'
import { editTask } from '@/redux/tasksSlice'
import { RootState } from '@/redux/store'

interface TaskItemProps {
  task: {
    id: number
    title: string
    email: string
    description?: string
    status: 'выполнена' | 'не выполнена'
  }
}

const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
  const isAdmin: boolean = useSelector((state: RootState) => state.user.isAdmin)

  const [isEditing, setIsEditing] = useState(false)
  const [title, setTitle] = useState(task.title)
  const [description, setDescription] = useState(task.description || '')
  const [status, setStatus] = useState(task.status)
  const dispatch = useDispatch()

  const handleSave = () => {
    dispatch(editTask({ ...task, title, description, status }))
    setIsEditing(false)
  }

  return (
    <div className={styles['task-item']}>
      {isEditing ? (
        <>"lint": "npx prettier --write . && eslint --fix . --ext .ts,.tsx",
          <input
            className={styles['task-item__input']}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            className={styles['task-item__textarea']}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <select
            className={styles['task-item__select']}
            value={status}
            onChange={(e) =>
              setStatus(e.target.value as 'выполнена' | 'не выполнена')
            }
          >
            <option value="не выполнена">Не выполнена</option>
            <option value="выполнена">Выполнена</option>
          </select>
          <button onClick={handleSave}>Сохранить</button>
        </>
      ) : (
        <>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <p>Статус: {task.status}</p>
          {isAdmin && (
            <button onClick={() => setIsEditing(true)}>Изменить</button>
          )}
        </>
      )}
    </div>
  )
}

export default TaskItem
