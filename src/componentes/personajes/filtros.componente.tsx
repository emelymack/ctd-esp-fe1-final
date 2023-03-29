import './filtros.css';
import { useRef, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { setFilter } from '../../redux/filterSlice';

const Filtros = () => {
  const dispatch = useAppDispatch()
  const filter = useAppSelector(state => state.filtro)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setFilter(e.target.value))
  }

  return (
    <div className="filtros">
      <label htmlFor="nombre">Filtrar por nombre:</label>
      <input 
        type="text" 
        placeholder="Rick, Morty, Beth, Alien, ...etc" 
        name="nombre"
        onChange={onChange}
        value={filter}
      />
    </div>
  )
}

export default Filtros;