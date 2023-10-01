import { Router } from "express";
import * as connection from "../connections/connections";

const router = Router();

router.get("/",(_req,res)=>{
    connection.getEquipos(res)
})

router.get("/:equipo",(req,res)=>{
    connection.getEquipo(req,res)
})

router.post("/",(req,res)=>{
    connection.addEquipo(req,res)
})

router.delete("/:equipo",(req,res)=>{
    connection.deleteEquipo(req,res)
})

router.put("/:equipo",(req,res)=>{
    connection.putEquipo(req,res)
})

router.patch("/:equipo",(req,res)=>{
    connection.pathEquipo(req,res)
})

export default router