import "./Detalle.css";
import BotonFavorito from "../componentes/botones/boton-favorito.componente";
import TarjetaEpisodio from "../componentes/episodios/tarjeta-episodio.componente";
import { useEffect, useState } from "react";
import { PersonajeWithDetail } from "../types/personaje.types";
import { setFavoritos } from '../redux/favoritosSlice';
import { useParams } from "react-router-dom";
import { getPersonaje } from "../queries/personajes.queries";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";

/**
 * Esta es la pagina de detalle. Aqui se puede mostrar la vista sobre el personaje seleccionado junto con la lista de episodios en los que aparece
 * 
 * EL TRABAJO SOBRE ESTE ARCHIVO ES OPCIONAL Y NO ES REQUISITO DE APROBACION
 * 
 * 
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
  const favoritos = useAppSelector(state => state.favoritos)
  const dispatch = useAppDispatch()

  const getData = async() => {
    if(id){
      const res = await getPersonaje(id)
      setPersonaje(res)
    }
  }
  useEffect(() => {
    getData()
  }, [])
  useEffect(() => {
    favoritos.results.map(elem => {
      elem.id === personaje?.id && setIsFavorito(true)
    })
  }, [personaje])

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
                  setIsFavorito(false)
                }} />}
            </div>
        </div>
        <h4>Lista de episodios donde apareció el personaje</h4>
        <div className={"episodios-grilla"}>
            <TarjetaEpisodio />
            <TarjetaEpisodio />
            <TarjetaEpisodio />
        </div>
    </div>
}

export default PaginaDetalle