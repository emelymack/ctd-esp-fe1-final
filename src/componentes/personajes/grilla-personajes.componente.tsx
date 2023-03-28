import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { getPersonajes } from '../../queries/personajes.queries';
import { setPersonajesReducer } from '../../redux/personajesSlice';
import './grilla-personajes.css';
import TarjetaPersonaje from './tarjeta-personaje.componente';

/**
 * Grilla de personajes para la pagina de inicio
 * 
 * Deberás agregar las funciones necesarias para mostrar y paginar los personajes
 * 
 * 
 * @returns JSX Element 
 */
const GrillaPersonajes = () => {
  const {data, page} = useAppSelector(state => state.personajes)
  const dispatch = useAppDispatch()
  
  useEffect(() => {
    dispatch(setPersonajesReducer(page))
    // dispatch(setInfoReducer())
  }, [page])

  return (
    <div className="grilla-personajes">
      { data.results && data.results.map((elem) => (
        <TarjetaPersonaje id={elem.id} name={elem.name} isFavorito={false} image={elem.image} />
      )) }
    </div>
  )
}
 
export default GrillaPersonajes;