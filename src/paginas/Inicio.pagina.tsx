import Filtros from "../componentes/personajes/filtros.componente"
import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente"
import Paginacion from "../componentes/paginacion/paginacion.componente";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { setPersonajesReducer } from "../redux/personajesSlice";
import { setFilter } from "../redux/filterSlice";
import { Personaje } from "../types/personaje.types";
import { getAllPersonajes } from "../componentes/functions/functions.personajes";
 
/**
 * Esta es la pagina principal. Aquí se debera ver el panel de filtros junto con la grilla de personajes.
 * 
 * Uso: 
 * ``` <PaginaInicio /> ```
 * 
 * @returns la pagina de inicio
 */
const PaginaInicio = () => {
  const data = useAppSelector(state => state.personajes.data)
  const favoritos = useAppSelector(state => state.favoritos)
  const personajes = getAllPersonajes({data, favoritos})
  const dispatch = useAppDispatch()

  const limpiarFiltros = () => {
    dispatch(setPersonajesReducer({page: 1, filter: ''}))
    dispatch(setFilter(''))
  }
  
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