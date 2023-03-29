import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { setPage, setPersonajesReducer } from '../../redux/personajesSlice';
import personajesSlice from '../../redux/personajesSlice';
import './paginacion.css';

/**
 * Componente que contiene los botones para paginar
 * 
 * Deberás agregar las propiedades necesarias para que funcione correctamente
 * 
 * 
 * @returns un JSX element 
 */
const Paginacion = () => {
  const pagina = useAppSelector(state => state.personajes.page)
  const nextPage = useAppSelector(state => state.personajes.data.info?.next)
  const dispatch = useAppDispatch()

  const next = () => {
    if(nextPage !== null){
      dispatch(setPage(pagina+1))
    }
  }

  const previous = () => {
    dispatch(setPage(pagina-1))
  }

  return <div className="paginacion">
      <button disabled={pagina <= 1 ? true : false} onClick={previous} className={"primary"}>Anterior</button>
      <button disabled={nextPage === null ? true : false} onClick={next} className={"primary"}>Siguiente</button>
  </div>
}

export default Paginacion;