import "./Detalle.css";
import BotonFavorito from "../componentes/botones/boton-favorito.componente";
import TarjetaEpisodio from "../componentes/episodios/tarjeta-episodio.componente";
import { useEffect, useState } from "react";
import { Episodio, PersonajeWithDetail } from "../types/personaje.types";
import { setFavoritos } from '../redux/favoritosSlice';
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { getEpisodios, idEpisodios } from "../componentes/functions/functions.episodios";
import { getData } from "../componentes/functions/functions.personajes";

/**
 * Esta es la pagina de detalle. Aqui se puede mostrar la vista sobre el personaje seleccionado junto con la lista de episodios en los que aparece
 * 
 * EL TRABAJO SOBRE ESTE ARCHIVO ES OPCIONAL Y NO ES REQUISITO DE APROBACION
 * 
 * Uso: 
 * ``` <PaginaDetalle /> ```
 * 
 * @returns la pagina de detalle
 */

const PaginaDetalle = () => {
  const {id} = useParams();
  const [ personaje, setPersonaje ] = useState<PersonajeWithDetail | undefined>(undefined);
  const [ isFavorito, setIsFavorito ] = useState(false)
  const [ episodios, setEpisodios ] = useState<Episodio[]>([])
  const [ arrayEpisodios, setArrayEpisodios ] = useState<string[]>([])
  const favoritos = useAppSelector(state => state.favoritos)
  const dispatch = useAppDispatch()

  useEffect(() => {
    id && getData({id: id, setPersonaje})
  }, [])

  useEffect(() => {
    favoritos.results.map(elem => {
      elem.id === personaje?.id && setIsFavorito(true)
    })
    personaje && setArrayEpisodios(idEpisodios(personaje))    
  }, [personaje, isFavorito])

  useEffect(() => {
    getEpisodios({arrayEpisodios: arrayEpisodios, setEpisodios})
  }, [arrayEpisodios])

  return <div className="container">
      <h3>{personaje?.name}</h3>
      <div className={"detalle"}>
          <div className={"detalle-header"}>
              <img src={personaje?.image} alt="Rick Sanchez"/>
              <div className={"detalle-header-texto"}>

                  <p>{personaje?.name}</p>
                  <p>Planeta: {personaje?.origin.name}</p>
                  <p>Genero: {personaje?.gender}</p>
              </div>
              {personaje && <BotonFavorito isFavorito={isFavorito} onClick={() => {
                dispatch(setFavoritos({id:personaje.id, name: personaje.name, isFavorito: !isFavorito, image: personaje.image}))
                setIsFavorito(!isFavorito)
              }} />}
          </div>
      </div>
      <h4>Lista de episodios donde apareció el personaje</h4>
      <div className={"episodios-grilla"}>
        {episodios.length > 0 && episodios.map(elem => (
          <TarjetaEpisodio key={elem.id} episodio={elem} />
        ))}
      </div>
  </div>
}

export default PaginaDetalle