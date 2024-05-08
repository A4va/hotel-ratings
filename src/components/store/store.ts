import { configureStore } from '@reduxjs/toolkit'
import { searchValueReducer } from './searchSlice'

export const store = configureStore({
  reducer: {
    searchValue: searchValueReducer.reducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch