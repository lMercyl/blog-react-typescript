import { configureStore } from '@reduxjs/toolkit'
import article from "./article/slice"

export const store = configureStore({
  reducer: {
    article
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch