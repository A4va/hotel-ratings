import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface SearchState {
  value: string
}

const initialState: SearchState = {
  value: "",
}

export const searchValueReducer = createSlice({
  name: 'searchValue',
  initialState,
  reducers: {
    setSearchValue(state, action: PayloadAction<string>) {
      state.value = action.payload;
    },
  },
})

export const { setSearchValue } = searchValueReducer.actions

export default searchValueReducer.reducer