import { useAppSelector } from "../../hooks/hooks"
import { getPersonaje } from "../../queries/personajes.queries"
import { favoritosState } from "../../redux/favoritosSlice"
import { InfoState, Personaje, PersonajeWithDetail } from "../../types/personaje.types"

interface getDataProps {
  id:string,
  setPersonaje: (res: PersonajeWithDetail) => void
}
export const getData = async({id, setPersonaje}: getDataProps) => {
  if(id){
    const res = await getPersonaje(id)
    setPersonaje(res)
  }
}

interface getPersonajesProps {
  data: {
    info: InfoState | null,
    results: Personaje[] | null
  },
  favoritos: favoritosState
}
export const getAllPersonajes = ({data, favoritos}: getPersonajesProps): Personaje[] | null => {
  const personajes = data.results?.map(item => {
    let isFavorito = false;
      favoritos.results.some(elem => {
        if(elem.id === item.id){
          isFavorito = true
        }
      })
    return {...item, isFavorito}
  })
  // localStorage.setItem("favoritos", JSON.stringify(favoritos))
  if(personajes){
    return personajes
  }
  return null
}