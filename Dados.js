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
var Dados = /** @class */ (function (_super) {
    __extends(Dados, _super);
    function Dados(nombre, apuesta) {
        var _this = _super.call(this, nombre) || this;
        _this.dado1 = 0;
        _this.dado2 = 0;
        _this.apuesta = apuesta;
        return _this;
    }
    Dados.prototype.tirarDados = function () {
        this.dado1 = Math.floor(Math.random() * (6 - 1)) + 1;
        this.dado2 = Math.floor(Math.random() * (6 - 1)) + 1;
    };
    Dados.prototype.sumarDados = function () {
        var suma = this.dado1 + this.dado2;
        return suma;
    };
    Dados.prototype.seleccionarJuego = function () {
    };
    Dados.prototype.apostar = function (plata) {
        this.apuesta = plata + this.apuesta;
    };
    Dados.prototype.verResultados = function () {
        var respuesta = "No ganaste , intenta de nuevo ";
        if (this.dado1 === this.dado2) {
            respuesta = "Ganaste: " + this.apuesta * 2 + " Felicidades 1";
        }
        else if (this.sumarDados() === 7) {
            respuesta = "Ganaste: " + this.apuesta * 3 + " Felicidades 2";
        }
        return respuesta;
    };
    Dados.prototype.intentos = function (apuesta) {
        var intentos = 0;
        var continuar = true;
        while (intentos < 3 && continuar === true) {
            if (this.sumarDados() === apuesta) {
                console.log("Felicitaciones ganaste");
                continuar = false;
            }
            else {
                console.log("No ganaste nada");
            }
            intentos++;
        }
        if (continuar === true) {
            console.log("acabaste los intentos");
        }
    };
    Dados.prototype.probabilidadDeGanar = function () {
        var n = 1; //cantidad de veces que tira
        var probCara = 1 / 4; //probabilidad de que salga una cara del dado
        var probFinal = 1;
        for (var i = 0; i <= n; i++) {
            probFinal = probFinal * probCara;
        }
        console.log("La probabilidad es: ", probFinal);
    };
    return Dados;
}(Casino_1.Casino));
exports.Dados = Dados;
var pepe = new Dados("Nico", 1000);
pepe.apostar(1000);
pepe.tirarDados();
pepe.sumarDados();
pepe.probabilidadDeGanar();
