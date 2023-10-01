import { Paises,Ligas } from "../enum";

export const isString = (string : any):boolean=>{
    return (typeof string == "string")
}

export const isPais = (pais : any): boolean=>{
    return Object.values(Paises).includes(pais)
}

export const isLiga = (liga : any):boolean=>{
    return Object.values(Ligas).includes(liga)
}

export const isNumber = (titulos : any):boolean=>{
    return typeof titulos == "number"
}
