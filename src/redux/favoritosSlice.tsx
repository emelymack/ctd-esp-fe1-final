import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Personaje } from '../types/personaje.types';

interface favoritosState{
  results: Personaje[]
}

const initialState: favoritosState = {
  results: []
}
export const favoritosSlice = createSlice({
  name: "favoritos",
  initialState,
  reducers: {
    setFavoritos: (state, action: PayloadAction<Personaje>) =>{
      state.results.push(action.payload)
    }
  }
})

export const { setFavoritos } = favoritosSlice.actions;