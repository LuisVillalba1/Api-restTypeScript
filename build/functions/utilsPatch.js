"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const verificarDatos = __importStar(require("./utils"));
const verificarEquipo = (object, ObjectEquipo) => {
    if (typeof ObjectEquipo == "object" && ObjectEquipo != null) {
        if ("equipo" in ObjectEquipo && verificarDatos.isString(ObjectEquipo.equipo)) {
            return ObjectEquipo.equipo;
        }
        throw new Error("Formato de equipo no esperado");
    }
    return object.equipo;
};
const verificarPais = (object, objectPais) => {
    if (typeof objectPais == "object" && objectPais != null) {
        if ("pais" in objectPais && verificarDatos.isPais(objectPais.pais)) {
            return objectPais.pais;
        }
        throw new Error("Pais no correspondiente");
    }
    return object.pais;
};
const verificarLiga = (object, ObjectLiga) => {
    if (typeof ObjectLiga == "object" && ObjectLiga != null) {
        if ("liga" in ObjectLiga && verificarDatos.isLiga(ObjectLiga.liga)) {
            return ObjectLiga.liga;
        }
    }
    return object.liga;
};
const verificarTitulos = (object, objectTitulos) => {
    if (typeof objectTitulos == "object" && objectTitulos != null) {
        if ("titulos" in objectTitulos && verificarDatos.isNumber(objectTitulos.titulos)) {
            return objectTitulos.titulos;
        }
    }
    return object.titulos;
};
const crearNuevoEquipo = (object, newData) => {
    const nuevoEquipo = {
        equipo: verificarEquipo(object, newData),
        pais: verificarPais(object, newData),
        liga: verificarLiga(object, newData),
        titulos: verificarTitulos(object, newData)
    };
    return nuevoEquipo;
};
exports.default = crearNuevoEquipo;
