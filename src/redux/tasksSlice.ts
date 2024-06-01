import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface Task {
  id: number
  title: string
  email: string
  description?: string
  status: 'выполнена' | 'не выполнена'
}

interface TasksState {
  tasks: Task[]
  currentPage: number
}

const initialState: TasksState = {
  tasks: [
    {
      id: 3,
      title: 'Третья задача',
      email: 'user@user.com',
      description: 'Получить офер у Pragma',
      status: 'не выполнена',
    },
    {
      id: 2,
      title: 'Вторая задача',
      email: 'user@user.com',
      description: 'пройти тех.собеседование у Pragma',
      status: 'не выполнена',
    },
    {
      id: 1,
      title: 'Первая задача',
      email: 'user@user.com',
      description: 'пройти тестовое задание у Pragma',
      status: 'не выполнена',
    },
  ],
  currentPage: 1,
}

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Omit<Task, 'id' | 'status'>>) => {
      const newTask: Task = {
        id: state.tasks.length + 1,
        status: 'не выполнена',
        ...action.payload,
      }
      state.tasks.unshift(newTask)
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload
    },
    editTask: (state, action: PayloadAction<Task>) => {
      const index = state.tasks.findIndex(
        (task) => task.id === action.payload.id,
      )
      if (index !== -1) {
        state.tasks[index] = action.payload
      }
    },
  },
})

export const { addTask, setPage, editTask } = tasksSlice.actions
export default tasksSlice.reducer
