import { useEffect } from "react";
import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente";
import TarjetaPersonaje from "../componentes/personajes/tarjeta-personaje.componente";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { deleteFavorito } from "../redux/favoritosSlice";

/**
 * Esta es la pagina de favoritos. Aquí se deberan ver todos los personajes marcados como favoritos
 * 
 * Uso: 
 * ``` <PaginaFavoritos /> ```
 * 
 * @returns la pagina de favoritos
 */
const PaginaFavoritos = () => {
  const favoritos = useAppSelector(state => state.favoritos)
  const dispatch = useAppDispatch()

  const eliminarTodos = () =>{
    favoritos.results.map(elem => {
      dispatch(deleteFavorito(elem))
    })
  }

  return <div className="container">
      <div className="actions">
          <h3>Personajes Favoritos</h3>
          <button className="danger" onClick={eliminarTodos}>Eliminar todos</button>
      </div>
      {favoritos.results.length === 0 && <h4 style={{textAlign: 'center'}}>Aún no marcaste ningún personaje como favorito!</h4>}
      {favoritos && <GrillaPersonajes personajes={favoritos.results} />}
  </div>
}

export default PaginaFavoritos