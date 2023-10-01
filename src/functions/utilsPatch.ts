import { Paises,Ligas } from "../enum";
import { ResponseData } from "../types";
import * as verificarDatos from "./utils";


const verificarEquipo = (object : ResponseData , ObjectEquipo : ResponseData | object):string=>{
    if("equipo" in ObjectEquipo){
        if(verificarDatos.isString(ObjectEquipo.equipo)){
            return ObjectEquipo.equipo
        }
        throw new Error("Formato de equipo no valido")
    }
    return object.equipo
}

const verificarPais = (object : ResponseData, objectPais : ResponseData | object):Paises=>{
    if("pais" in objectPais){
        if(verificarDatos.isPais(objectPais.pais)){
            return objectPais.pais
        }
        throw new Error("Pais no valido")
    }
    return object.pais
}

const verificarLiga = (object : ResponseData, ObjectLiga : ResponseData | object):Ligas=>{
    if("liga" in ObjectLiga){
        if(verificarDatos.isPais(ObjectLiga.liga)){
            return ObjectLiga.liga
        }
        throw new Error("Liga no encontrada")
    }
    return object.liga
}

const verificarTitulos = (object : ResponseData, objectTitulos : ResponseData | object):number=>{
    if("liga" in objectTitulos){
        if(verificarDatos.isNumber(objectTitulos.titulos)){
            return objectTitulos.titulos
        }
        throw new Error("Formato de titulos no valida")
    }
    return object.titulos
}

const crearNuevoEquipo = (object : ResponseData,newData : object):ResponseData=>{
    const nuevoEquipo : ResponseData ={
        equipo : verificarEquipo(object,newData),
        pais : verificarPais(object,newData),
        liga : verificarLiga(object,newData),
        titulos : verificarTitulos(object,newData)
    } 
    return nuevoEquipo
}

export default crearNuevoEquipo