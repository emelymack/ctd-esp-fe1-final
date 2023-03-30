import { createSlice, PayloadAction } from '@reduxjs/toolkit';


const initialState: string = ''
export const filterSlice = createSlice({
  name: "filtro",
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<string>) =>{
      return state = action.payload
    }
  }
})

export const { setFilter } = filterSlice.actions;