import { Request, Response } from "express"
import futbolJson from "../futbol.json"
import { ResponseData } from "../types"
import verificarDatos from "../functions/utilsPost";
import crearNuevoEquipo from "../functions/utilsPatch";

const respuestaFutbol : ResponseData[] = futbolJson as ResponseData[];

//obtenemos todos los equipos
export const getEquipos = (res : Response)=>{
    return res.send(respuestaFutbol)
}

//obtenemos un equipo por el nombre correspondiente
export const getEquipo = (req : Request, res : Response):ResponseData | object=>{
    const equipo = req.params.equipo;
    const data = respuestaFutbol.find(item=> item.equipo == equipo);
    if(data){
        return res.send(data)
    }
    return res.status(404).json({
        message : "No se ha encontrado dicho club"
    })
}

//añadimos un equipo
export const addEquipo = (req : Request,res : Response):ResponseData | object=>{
    try{
        const newEquipo = verificarDatos(req.body);
        futbolJson.push(newEquipo);
        return res.send(newEquipo);
    }
    catch(e : unknown){
        if(e instanceof Error){
            return res.status(404).json({
                message : e.message
            })
        }
        else{
            return res.status(404).json({
                message : "Error desconocido"
            })
        }
    }
}

//eliminamos un equipo 
export const deleteEquipo = (req : Request, res: Response):ResponseData | object=>{
    const {equipo} = req.params;
    const indice = respuestaFutbol.findIndex(item=>item.equipo == equipo);
    if(indice >=0){
        //eliminamos el equipo correspondiente
        respuestaFutbol.splice(indice,1);
        return res.send(respuestaFutbol)
    }
    return res.status(404).json({
        message : "No se ha encontrado dicho equipo"
    })
}

//modificamos un equipo por completo
export const putEquipo = (req : Request , res : Response):ResponseData | object=>{
    try{
        const {equipo} = req.params;
        const newEquipo = verificarDatos(req.body);
        const indice = respuestaFutbol.findIndex(item=> item.equipo == equipo);
        if(indice >= 0){
            respuestaFutbol[indice] = newEquipo;
            return res.send(respuestaFutbol);
        }
        return res.status(404).json({
            message : "No se ha encontrado ningun equipo"
        })
    }
    catch(e : any){
        if(e instanceof Error){
            return res.status(404).json({
                message : e.message
            })
        }
        return res.status(404).json({
            message : "Ha ocurrido un error"
        })
    }
}

//modificamos algun dato del equipo
export const pathEquipo = (req : Request, res : Response):ResponseData | object=>{
    try{
        const {equipo} = req.params;
        const data = req.body;
        const indice = respuestaFutbol.findIndex(item=> item.equipo == equipo)
        if(indice >= 0){
            const equipoAModificar = respuestaFutbol[indice];
            const newEquipo = crearNuevoEquipo(equipoAModificar,data);
            console.log(newEquipo);
            respuestaFutbol[indice] = newEquipo;

            return res.send(respuestaFutbol)
        }
        return res.status(404).json({
            message : "No se ha encontrado dicho equipo"
        })
    }
    catch(e : any){
        if(e instanceof Error){
            return res.status(404).json({
                message : e.message
            })
        }
        return res.status(404).json({
            message : "Ha ocurrido un error"
        })
    }
}