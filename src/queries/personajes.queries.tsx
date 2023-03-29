import { InfoState, Personaje } from "../types/personaje.types";

const baseUrl = 'https://rickandmortyapi.com/api'

export interface getPersonajesResult {
  info: InfoState,
  results: Personaje[]
}
interface getPersonajesProps {
  page?: number;
  filter?: string | null;
}
export const getPersonajes = async ({page, filter}: getPersonajesProps): Promise<getPersonajesResult> => {
  const res = await fetch(`${baseUrl}/character/?page=${page}&name=${filter}`);
  const data = await res.json();
  return data;
}