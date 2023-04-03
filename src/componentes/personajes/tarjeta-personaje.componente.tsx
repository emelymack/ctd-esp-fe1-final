import { useEffect } from 'react';
import { useAppDispatch } from '../../hooks/hooks';
import { setFavoritos } from '../../redux/favoritosSlice';
import { Personaje } from '../../types/personaje.types';
import BotonFavorito from '../botones/boton-favorito.componente';
import './tarjeta-personaje.css';
import { Link } from 'react-router-dom';

/**
 * Tarjeta para cada personaje dentro de la grilla de personajes. 
 * 
 * Deberás agregar las propiedades necesarias para mostrar los datos de los personajes
 * 
 * 
 * @returns un JSX element 
 */

const TarjetaPersonaje = ({id, name, isFavorito, image}: Personaje) => {
  const dispatch = useAppDispatch()

  return (
    <div className="tarjeta-personaje">
        <img src={image} alt={name}/>
        <div className="tarjeta-personaje-body">
          <Link to={`/detalle/${id}`}>
            <span>{name}</span>
          </Link>
          <BotonFavorito isFavorito={isFavorito} onClick={() => dispatch(setFavoritos({id: id, name: name, isFavorito: !isFavorito, image: image}))} />
        </div>
    </div>
  )
}

export default TarjetaPersonaje;