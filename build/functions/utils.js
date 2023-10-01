"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNumber = exports.isLiga = exports.isPais = exports.isString = void 0;
const enum_1 = require("../enum");
const isString = (string) => {
    return (typeof string == "string");
};
exports.isString = isString;
const isPais = (pais) => {
    return Object.values(enum_1.Paises).includes(pais);
};
exports.isPais = isPais;
const isLiga = (liga) => {
    return Object.values(enum_1.Ligas).includes(liga);
};
exports.isLiga = isLiga;
const isNumber = (titulos) => {
    return typeof titulos == "number";
};
exports.isNumber = isNumber;
