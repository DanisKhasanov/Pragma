import { configureStore } from '@reduxjs/toolkit'
import tasksReducer from './tasksSlice'
import useReducer from './userSlice'

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    user: useReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
