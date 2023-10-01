import express from "express";
import router from "./routes/router";

const app = express();

const PUERTO = process.env.PORT || 3000;

app.use(express.json());
app.use("/api/",router);

app.listen(PUERTO,()=>{
    console.log(`Servidor escuchando en el puerto ${PUERTO}`)
})
