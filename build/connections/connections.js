"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pathEquipo = exports.putEquipo = exports.deleteEquipo = exports.addEquipo = exports.getEquipo = exports.getLibros = void 0;
const futbol_json_1 = __importDefault(require("../futbol.json"));
const utilsPost_1 = __importDefault(require("../functions/utilsPost"));
const utilsPatch_1 = __importDefault(require("../functions/utilsPatch"));
const respuestaFutbol = futbol_json_1.default;
const getLibros = (res) => {
    return res.send(respuestaFutbol);
};
exports.getLibros = getLibros;
const getEquipo = (req, res) => {
    const equipo = req.params.equipo;
    const data = respuestaFutbol.find(item => item.equipo == equipo);
    if (data) {
        return res.send(data);
    }
    return res.status(404).json({
        message: "No se ha encontrado dicho club"
    });
};
exports.getEquipo = getEquipo;
const addEquipo = (req, res) => {
    try {
        const newEquipo = (0, utilsPost_1.default)(req.body);
        futbol_json_1.default.push(newEquipo);
        return res.send(newEquipo);
    }
    catch (e) {
        if (e instanceof Error) {
            return res.status(404).json({
                message: e.message
            });
        }
        else {
            return res.status(404).json({
                message: "Error desconocido"
            });
        }
    }
};
exports.addEquipo = addEquipo;
const deleteEquipo = (req, res) => {
    const { equipo } = req.params;
    const indice = respuestaFutbol.findIndex(item => item.equipo == equipo);
    if (indice >= 0) {
        respuestaFutbol.splice(indice, 1);
        return res.send(respuestaFutbol);
    }
    return res.status(404).json({
        message: "No se ha encontrado dicho equipo"
    });
};
exports.deleteEquipo = deleteEquipo;
const putEquipo = (req, res) => {
    try {
        const { equipo } = req.params;
        const newEquipo = (0, utilsPost_1.default)(req.body);
        const indice = respuestaFutbol.findIndex(item => item.equipo == equipo);
        if (indice >= 0) {
            respuestaFutbol[indice] = newEquipo;
            return res.send(respuestaFutbol);
        }
        return res.status(404).json({
            message: "No se ha encontrado ningun equipo"
        });
    }
    catch (e) {
        if (e instanceof Error) {
            return res.status(404).json({
                message: e.message
            });
        }
        return res.status(404).json({
            message: "Ha ocurrido un error"
        });
    }
};
exports.putEquipo = putEquipo;
const pathEquipo = (req, res) => {
    try {
        const { equipo } = req.params;
        const data = req.body;
        const indice = respuestaFutbol.findIndex(item => item.equipo == equipo);
        if (indice >= 0) {
            const equipoAModificar = respuestaFutbol[indice];
            const newEquipo = (0, utilsPatch_1.default)(equipoAModificar, data);
            console.log(newEquipo);
            respuestaFutbol[indice] = newEquipo;
            return res.send(respuestaFutbol);
        }
        return res.status(404).json({
            message: "No se ha encontrado dicho equipo"
        });
    }
    catch (e) {
        if (e instanceof Error) {
            return res.status(404).json({
                message: e.message
            });
        }
        return res.status(404).json({
            message: "Ha ocurrido un error"
        });
    }
};
exports.pathEquipo = pathEquipo;
