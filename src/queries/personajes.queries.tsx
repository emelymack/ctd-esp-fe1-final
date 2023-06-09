import { InfoState, Personaje, PersonajeWithDetail } from "../types/personaje.types";

const baseUrl = 'https://rickandmortyapi.com/api/character'

export interface getPersonajesResult {
  info: InfoState | null,
  results: Personaje[] | null
}
interface getPersonajesProps {
  page?: number;
  filter?: string | null;
}
export const getPersonajes = async ({page, filter}: getPersonajesProps): Promise<getPersonajesResult> => {
  const res = await fetch(`${baseUrl}/?page=${page}&name=${filter}`);
  const data = await res.json();
  if(res.ok){
    return data;
  } else{
    throw new Error("Error. Intente de nuevo más tarde")
  }
}

export const getPersonaje = async (id: string): Promise<PersonajeWithDetail> => {
  const res = await fetch(`${baseUrl}/${id}`);
  const data = await res.json();
  return data;
}