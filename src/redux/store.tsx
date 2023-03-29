import { configureStore} from "@reduxjs/toolkit";
import { filterSlice } from "./filterSlice";
import personajesSlice from "./personajesSlice";

const store = configureStore({
   reducer: {
    personajes: personajesSlice.reducer,
    filtro: filterSlice.reducer,
   }
});

// Tipamos el hook useSelector y useDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;