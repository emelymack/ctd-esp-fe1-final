import './filtros.css';
import { useState } from 'react';

const Filtros = () => {
  const [ filterValue, setFilterValue ] = useState<string>('')
  
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterValue(e.target.value)
  }

  return (
    <div className="filtros">
      <label htmlFor="nombre">Filtrar por nombre:</label>
      <input 
        type="text" 
        placeholder="Rick, Morty, Beth, Alien, ...etc" 
        name="nombre"
        onChange={onChange}
      />
    </div>
  )
}

export default Filtros;