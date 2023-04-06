import { getMultipleEpisodios } from "../../queries/episodios.queries"
import { getPersonaje } from "../../queries/personajes.queries"
import { Episodio, Personaje, PersonajeWithDetail } from "../../types/personaje.types"

export const idEpisodios = (personaje: PersonajeWithDetail) => {
  const arrayEpisodios: string[] = []
  personaje?.episode.map(elem => {
    const substr = elem.substring(elem.lastIndexOf('/')+1)
    arrayEpisodios.push(substr)
  })
  return arrayEpisodios;
}

interface getEpisodiosProps {
  arrayEpisodios:string[],
  setEpisodios: (res: Episodio[]) => void
}
export const getEpisodios = async({arrayEpisodios, setEpisodios}: getEpisodiosProps) => {
  const getEpisodios = await getMultipleEpisodios(arrayEpisodios)
  getEpisodios && setEpisodios(getEpisodios)
}