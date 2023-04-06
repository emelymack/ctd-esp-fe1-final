import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Personaje } from '../types/personaje.types';

export interface favoritosState{
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
      if(!action.payload.isFavorito){
        state.results = state.results.filter(elem => elem.id != action.payload.id)
      } else{
        state.results.push(action.payload)
      }
    },
    deleteFavoritos: (state) => {
      state.results = []
    }
  }
})

export const { setFavoritos, deleteFavoritos } = favoritosSlice.actions;