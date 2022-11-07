"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Dados = void 0;
var Casino_1 = require("./Casino");
var fs = require("fs");
var Dados = /** @class */ (function (_super) {
    __extends(Dados, _super);
    function Dados() {
        var _this = _super.call(this) || this;
        _this.apuesta = 0;
        return _this;
    }
    Dados.prototype.apostar = function (cantidad) {
        this.apuesta = cantidad + this.apuesta;
    };
    Dados.prototype.tirarDados = function () {
        this.dado1 = Math.floor(Math.random() * (6 - 1)) + 1;
        this.dado2 = Math.floor(Math.random() * (6 - 1)) + 1;
    };
    Dados.prototype.sumarDados = function () {
        var suma = this.dado1 + this.dado2;
        return suma;
    };
    Dados.prototype.seleccionarJuego = function () {
        return "***Bienvenido al Juego de Dados***" + '\n';
    };
    Dados.prototype.verResultados = function () {
        var respuesta;
        if (this.dado1 === this.dado2) {
            respuesta = "Ganaste: " + (2 * this.apuesta) + " Felicidades ";
        }
        else {
            respuesta = "No ganaste , intenta de nuevo ";
        }
        console.log("salieron los dados: " + this.dado1 + " " + this.dado2);
        return respuesta;
    };
    Dados.prototype.intentos = function (numeroApostado) {
        var intentos = 0;
        var continuar = true;
        while (intentos < 3 && continuar === true) {
            if (this.sumarDados() === numeroApostado) {
                console.log("Felicitaciones ," + "salieron los dados: " + this.dado1 + " " + this.dado2 + " ganaste");
                continuar = false;
            }
            else {
                console.log("Salieron los dados: " + this.dado1 + " " + this.dado2 + " Intenta nuevamente");
            }
            intentos++;
        }
        if (continuar === true) {
            console.log("acabaste los intentos");
        }
    };
    Dados.prototype.probabilidadDeGanar = function () {
        var n = 1; //cantidad de veces que tira
        var probCara = 1 / 36; //probabilidad de que salga una cara del dado
        var probFinal = 1;
        for (var i = 0; i <= n; i++) {
            probFinal = probFinal * probCara;
        }
        return "La probabilidad es: " + probFinal;
    };
    Dados.prototype.leerArchivo = function (path) {
        var archivo = fs.readFileSync(path, "utf-8");
        return archivo;
    };
    Dados.prototype.escribirArchivo = function (archivo, nuevoTexto) {
        var textoBase = fs.readFileSync(archivo, "utf-8");
        textoBase += nuevoTexto;
        fs.writeFile(archivo, textoBase, function (err) {
            if (err) {
                return console.log(err);
            }
            console.log("El archivo fue creado correctamente");
        });
    };
    return Dados;
}(Casino_1.Casino));
exports.Dados = Dados;
