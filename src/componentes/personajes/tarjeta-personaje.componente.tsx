import { SyntheticEvent, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { setFavoritos } from '../../redux/favoritosSlice';
import { setFavorito, setPersonajesReducer } from '../../redux/personajesSlice';
import { Personaje } from '../../types/personaje.types';
import BotonFavorito from '../botones/boton-favorito.componente';
import './tarjeta-personaje.css';

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

  const toggleFavorito = () => {
    if(!isFavorito){
      dispatch(setFavoritos({
        id: id,
        name: name,
        isFavorito: true,
        image: image
      }))
      dispatch(setFavorito(id))
    }
  }
  
    return <div className="tarjeta-personaje">
        <img src={image} alt={name}/>
        <div className="tarjeta-personaje-body">
            <span>{name}</span>
            <BotonFavorito isFavorito={isFavorito} onClick={toggleFavorito} />
        </div>
    </div>
}

export default TarjetaPersonaje;