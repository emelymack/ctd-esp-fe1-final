import { InfoState, Personaje } from "../types/personaje.types";

const baseUrl = 'https://rickandmortyapi.com/api'

// export const getInfo = async (): Promise<{}> => {
//   const res = await fetch(`${baseUrl}/character`);
//   const data = await res.json();
//   return data.info;
// }

export interface getPersonajesResult {
  info: InfoState,
  results: Personaje[]
}
export const getPersonajes = async (page: number): Promise<getPersonajesResult> => {
  const res = await fetch(`${baseUrl}/character/?page=${page}`);
  const data = await res.json();
  return data;
}