import './tarjeta-episodio.css';
import { Episodio } from '../../types/personaje.types';
import { object } from 'prop-types';

/**
 * Tarjeta para cada episodio dentro de la vista de personaje.
 * 
 * Deberás agregar las propiedades necesarias para mostrar los datos de los episodios
 * 
 * @param {Object} episodio objeto con info de episodio 
 * @returns componente card de episodio
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
TarjetaEpisodio.propTypes = {
  episodio: object
}