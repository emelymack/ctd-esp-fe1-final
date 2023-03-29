import Filtros from "../componentes/personajes/filtros.componente"
import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente"
import Paginacion from "../componentes/paginacion/paginacion.componente";
import { useAppDispatch } from "../hooks/hooks";
import { setPersonajesReducer } from "../redux/personajesSlice";
import { setFilter } from "../redux/filterSlice";
 
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
      <GrillaPersonajes />
      <Paginacion />
  </div>
}

export default PaginaInicio