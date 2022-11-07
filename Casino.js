"use strict";
exports.__esModule = true;
exports.Casino = void 0;
var fs = require("fs");
var Casino = /** @class */ (function () {
    function Casino() {
        this.nombre = "Status";
        this.apuesta = 0;
    }
    Casino.prototype.apostar = function (cantidad) {
        this.apuesta += cantidad;
    };
    Casino.prototype.leerArchivo = function (path) {
        var archivo = fs.readFileSync(path, "utf-8");
        return archivo;
    };
    Casino.prototype.escribirArchivo = function (archivo, nuevoTexto) {
        var textoBase = fs.readFileSync(archivo, "utf-8");
        textoBase += nuevoTexto;
        fs.writeFile(archivo, textoBase, function (err) {
            if (err) {
                return console.log(err);
            }
            console.log("Este resultado ha sido agregado a estadísticas.");
        });
    };
    return Casino;
}());
exports.Casino = Casino;
