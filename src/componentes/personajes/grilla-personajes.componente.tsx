import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { getPersonajes } from '../../queries/personajes.queries';
import { setPersonajesReducer } from '../../redux/personajesSlice';
import { Personaje } from '../../types/personaje.types';
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
interface Props {
  personajes: Personaje[] | null
}
const GrillaPersonajes = ({personajes}: Props) => {
  const {page} = useAppSelector(state => state.personajes)
  const filter = useAppSelector(state => state.filtro)
  const dispatch = useAppDispatch()
  
  useEffect(() => {
    dispatch(setPersonajesReducer({page: page, filter: filter}))
  }, [page, filter])

  useEffect(() => {
    if(filter === ''){
      dispatch(setPersonajesReducer({page: 1, filter: filter}))
    }
  }, [filter])


  if(personajes === null) {
    return <p style={{textAlign: 'center'}}>No se encontraron personajes con ese nombre</p>
  }

  return (
    <div className="grilla-personajes">
      { personajes && personajes?.map((elem) => (
          <TarjetaPersonaje key={elem.id} id={elem.id} name={elem.name} isFavorito={elem.isFavorito} image={elem.image} />
        )) 
      }
    </div>
  )
}


 
export default GrillaPersonajes;