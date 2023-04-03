import { Episodio, InfoState, Personaje } from "../types/personaje.types";

const baseUrl = 'https://rickandmortyapi.com/api/episode'

// export interface getMultipleEpisodiosResult {
//   info: InfoState | null,
//   results: Episodio[] | null
// }
export const getMultipleEpisodios = async (idEpisodios: string[]): Promise<Episodio[]> => {
  try{
    const res = await fetch(`${baseUrl}/${idEpisodios}`);
    const data = await res.json();
    return data;
  } catch{
    throw new Error ("Ha habido un error. Intente de nuevo más tarde...")
  }
}

