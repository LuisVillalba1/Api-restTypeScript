import {Paises,Ligas} from "./enum"

export interface ResponseData {
    equipo : string,
    pais : Paises,
    liga : Ligas,
    titulos : number
}
