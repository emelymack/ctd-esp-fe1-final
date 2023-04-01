import { InfoState, Personaje } from "../types/personaje.types";

const baseUrl = 'https://rickandmortyapi.com/api'

export interface getPersonajesResult {
  info: InfoState | null,
  results: Personaje[] | null
}
interface getPersonajesProps {
  page?: number;
  filter?: string | null;
}
export const getPersonajes = async ({page, filter}: getPersonajesProps): Promise<getPersonajesResult> => {
  try{
    const res = await fetch(`${baseUrl}/character/?page=${page}&name=${filter}`);
    const data = await res.json();
    if(res.ok){
      return data;
    } else{
      throw new Error ('Ha habido un error')
    }
  }
  catch{
    return {
      info: null,
      results: null
    }
  }
}