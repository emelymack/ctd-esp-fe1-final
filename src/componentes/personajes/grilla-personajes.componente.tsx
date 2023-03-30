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
const GrillaPersonajes = () => {
  const {data, page} = useAppSelector(state => state.personajes)
  const filter = useAppSelector(state => state.filtro)
  const favoritos = useAppSelector(state => state.favoritos)
  const dispatch = useAppDispatch()
  
  useEffect(() => {
    dispatch(setPersonajesReducer({page: page, filter: filter}))
  }, [page, filter])

  useEffect(() => {
    if(filter === ''){
      dispatch(setPersonajesReducer({page: 1, filter: filter}))
    }
  }, [filter])
  
  if(data.results === undefined) {
    return <p style={{textAlign: 'center'}}>No se encontraron personajes con ese nombre</p>
  }

  const getAllPersonajes = (): Personaje[] => {
    const personajes = data.results.map(item => {
      let isFavorito = false;
        favoritos.results.some(elem => {
          if(elem.id === item.id){
            isFavorito = true
          }
        })
      return {...item, isFavorito}
    })
    // localStorage.setItem("favoritos", JSON.stringify(favoritos))
    return personajes
  }
  const personajes = getAllPersonajes()

  return (
    <div className="grilla-personajes">
      { data.results && personajes.map((elem) => (
          <TarjetaPersonaje key={elem.id} id={elem.id} name={elem.name} isFavorito={elem.isFavorito} image={elem.image} />
        )) 
      }
    </div>
  )
}


 
export default GrillaPersonajes;