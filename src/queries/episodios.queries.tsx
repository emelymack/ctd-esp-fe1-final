import { Episodio } from "../types/personaje.types";

const baseUrl = 'https://rickandmortyapi.com/api/episode'

/**
 * 
 * @param {Array} idEpisodios array con los id de episodios a buscar
 * @returns los episodios en los que participó X personaje
 */
export const getMultipleEpisodios = async (idEpisodios: string[]): Promise<Episodio[]> => {
  try{
    const res = await fetch(`${baseUrl}/${idEpisodios}`);
    const data = await res.json();
    return data;
  } catch{
    throw new Error ("Ha habido un error. Intente de nuevo más tarde...")
  }
}

