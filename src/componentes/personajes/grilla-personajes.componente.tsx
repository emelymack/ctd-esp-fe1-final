import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { setPersonajesReducer } from '../../redux/personajesSlice';
import { Personaje } from '../../types/personaje.types';
import './grilla-personajes.css';
import TarjetaPersonaje from './tarjeta-personaje.componente';
import { useLocation } from 'react-router-dom';
import { array, arrayOf, object, objectOf } from 'prop-types';

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
  const statusConsulta = useAppSelector(state => state.personajes.status)
  const location = useLocation();
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(setPersonajesReducer({page: page, filter: filter}))
  }, [page, filter])

  useEffect(() => {
    if(filter === ''){
      dispatch(setPersonajesReducer({page: 1, filter: filter}))
    }
  }, [filter])

  if(location.pathname == '/'){
    if(statusConsulta === 'pending'){
      return <h3>Cargando...</h3>
    }
    if(statusConsulta === 'error' && location.pathname == '/'){
      return <h3 style={{textAlign: 'center'}}>No encontramos ningún personaje... Intente de nuevo 🧐</h3>
    }
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

GrillaPersonajes.propTypes ={
  personajes: arrayOf(object)
}