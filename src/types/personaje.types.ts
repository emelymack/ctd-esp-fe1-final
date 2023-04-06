/**
 * Representa un personaje
 * 
 * @author Emely Mack
 * @see https://rickandmortyapi.com/api/character
 */

export interface Personaje{
  id: number;
  name: string;
  isFavorito: boolean;
  image: string;
}

export interface PersonajeWithDetail extends Personaje{
  origin: {
    name: string,
  };
  gender: string;
  episode: string[];
}

export interface InfoState {
  count: number,
  pages: number,
  next: string | null,
  prev: string | null
}
export interface PersonajesState {
  data: {
    info: InfoState | null,
    results: Personaje[] | null
  },
  page: number,
  status: string | null
}

export interface Episodio{
  id: number;
  name: string;
  episode: string;
  air_date: string;
}