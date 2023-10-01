import { Paises,Ligas } from "../enum";
import { ResponseData } from "../types";
import * as utils from "./utils"



const addNombreEquipo = (equipo : any):string=>{
    if(!utils.isString(equipo)){
        throw new Error("Ha ocurrido un error")
    }
    return equipo
}



const verificarPais = (pais : any):Paises=>{
    if(!utils.isPais(pais) || !utils.isString(pais)){
        throw new Error("El pais ingresado es incorrecto")
    }
    return pais
}




const verificarLiga = (liga : any):Ligas=>{
    if(!utils.isString(liga) || !utils.isLiga(liga)){
        throw new Error("La liga ingresada es incorrecta")
    }
    return liga
}



const verificarTitulos = (titulos: any):number=>{
    if(!utils.isNumber(titulos)){
        throw new Error("Formato de titulos ganados incorrecta")
    }
    return titulos
}


const verificarDatos = (object : any):ResponseData=>{
    const newEquipo: ResponseData = {
        equipo : addNombreEquipo(object.equipo),
        pais : verificarPais(object.pais),
        liga : verificarLiga(object.liga),
        titulos : verificarTitulos(object.titulos)
    }
    return newEquipo
}

export default verificarDatos
