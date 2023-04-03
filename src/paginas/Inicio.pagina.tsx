import Filtros from "../componentes/personajes/filtros.componente"
import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente"
import Paginacion from "../componentes/paginacion/paginacion.componente";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { setPersonajesReducer } from "../redux/personajesSlice";
import { setFilter } from "../redux/filterSlice";
import { Personaje } from "../types/personaje.types";
 
/**
 * Esta es la pagina principal. Aquí se debera ver el panel de filtros junto con la grilla de personajes.
 * 
 * Uso: 
 * ``` <PaginaInicio /> ```
 * 
 * @returns la pagina de inicio
 */
const PaginaInicio = () => {
  const dispatch = useAppDispatch()
  const {data} = useAppSelector(state => state.personajes)
  const favoritos = useAppSelector(state => state.favoritos)

  const limpiarFiltros = () => {
    dispatch(setPersonajesReducer({page: 1, filter: ''}))
    dispatch(setFilter(''))
  }

  const getAllPersonajes = (): Personaje[] | null => {
    const personajes = data.results?.map(item => {
      let isFavorito = false;
        favoritos.results.some(elem => {
          if(elem.id === item.id){
            isFavorito = true
          }
        })
      return {...item, isFavorito}
    })
    // localStorage.setItem("favoritos", JSON.stringify(favoritos))
    if(personajes){
      return personajes
    }
    return null
  }
  
  const personajes = getAllPersonajes()
  return <div className="container">
      <div className="actions">
          <h3>Catálogo de Personajes</h3>
          <button className="danger" onClick={limpiarFiltros}>Limpiar Filtros</button>
      </div>
      <Filtros />
      <Paginacion />
      <GrillaPersonajes personajes={personajes} />
      <Paginacion />
  </div>
}

export default PaginaInicio