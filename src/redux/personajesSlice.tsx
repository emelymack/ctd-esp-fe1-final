import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getPersonajes, getPersonajesResult } from '../queries/personajes.queries';
import { PersonajesState } from '../types/personaje.types';
 
const initialState: PersonajesState ={
  data: {
    info: {
      count: 0,
      pages: 0,
      next: null,
      prev: null
    },
    results: [
      {
        id: 0,
        name: '',
        isFavorito: false,
        image: ''
      }
    ]
  },
  page: 1,
  status: null
}

export const setPersonajesReducer = createAsyncThunk("personajes/getPersonajes", getPersonajes)


const personajesSlice = createSlice({
  name: "personajes",
  initialState,
  reducers: {
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload
    },
    setFavorito: (state, action: PayloadAction<number>) => {
      state.data.results?.map((personaje) => {
        if(personaje.id === action.payload){
          personaje.isFavorito = true
        }
      })
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(setPersonajesReducer.pending, (state) => {
        state.status = 'pending'
      })
      .addCase(setPersonajesReducer.fulfilled, (state, action: PayloadAction<getPersonajesResult>) =>{
        if(action.payload.results && action.payload.info) {
          state.data.results = action.payload.results.map(item => {
            const isFavorito = false;
            return {...item, isFavorito}
          })
          state.data.info = action.payload.info
          state.status = 'fulfilled'
        } else{
          state.data.results = null;
          state.data.info = null;
        }
      })
      .addCase(setPersonajesReducer.rejected, (state) => {
        state.status = 'error'
      })
  }
})

export default personajesSlice;
export const {setPage, setFavorito} = personajesSlice.actions;