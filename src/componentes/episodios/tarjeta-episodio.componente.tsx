import './tarjeta-episodio.css';
import { Episodio, Personaje, PersonajeWithDetail } from '../../types/personaje.types';
import { useEffect } from 'react';
import { getMultipleEpisodios } from '../../queries/episodios.queries';

/**
 * Tarjeta para cada episodio dentro de la vista de personaje.
 * 
 * Deberás agregar las propiedades necesarias para mostrar los datos de los episodios
 * 
 * 
 * @returns un JSX element 
 */
interface Props{
  episodio: Episodio
}
const TarjetaEpisodio = ({episodio}: Props) => {

    return <div className="tarjeta-episodio">
            <h4>{episodio.name}</h4>
            <div>
                <span>{episodio.episode}</span>
                <span>Lanzado el: {episodio.air_date}</span>
            </div>
    </div>
}

export default TarjetaEpisodio;