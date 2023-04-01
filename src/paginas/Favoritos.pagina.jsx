import { useEffect } from "react";
import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente";
import TarjetaPersonaje from "../componentes/personajes/tarjeta-personaje.componente";
import { useAppSelector } from "../hooks/hooks";

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

  return <div className="container">
      <div className="actions">
          <h3>Personajes Favoritos</h3>
          <button className="danger">Test Button</button>
      </div>
      {favoritos.results.length === 0 && <h4 style={{textAlign: 'center'}}>Aún no marcaste ningún personaje como favorito!</h4>}
      <div className="grilla-personajes">
        {favoritos && favoritos.results.map(elem => (
          <TarjetaPersonaje key={elem.id} id={elem.id} name={elem.name} isFavorito={elem.isFavorito} image={elem.image} />
        ))}
      </div>
  </div>
}

export default PaginaFavoritos