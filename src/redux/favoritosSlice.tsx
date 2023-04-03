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
    },
    deleteFavorito: (state, action: PayloadAction<Personaje>) => {
      state.results = state.results.filter(elem => elem.id != action.payload.id)
    }
  }
})

export const { setFavoritos, deleteFavorito } = favoritosSlice.actions;