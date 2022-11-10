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
        return '\n' + "***Bienvenido al Juego de Dados***" + '\n';
    };
    Dados.prototype.verResultados = function () {
        var respuesta;
        if (this.dado1 === this.dado2) {
            respuesta = "Ganaste: " + (2 * this.apuesta) + " Felicidades ";
        }
        else {
            respuesta = "¡¡¡¡ Vuelva a intentarlo !!!!!";
        }
        console.log("salieron los dados: " + this.dado1 + " " + this.dado2);
        return respuesta;
    };
    Dados.prototype.intentos = function (numeroApostado) {
        var intentos = 0;
        var continuar = true;
        while (intentos < 3 && continuar === true) {
            if (this.sumarDados() === numeroApostado) {
                console.log("Felicitaciones ," + "salieron los dados: " + this.dado1 + " " + this.dado2 + " ganaste" + this.apuesta * 4);
                continuar = false;
            }
            else {
                console.log("Salieron los dados: " + this.dado1 + " " + this.dado2 + " Intenta nuevamente");
            }
            intentos++;
            this.tirarDados();
        }
        if (continuar === true) {
            console.log("¡¡¡¡ Vuelva a intentarlo !!!!!");
            this.apuesta - this.apuesta;
        }
    };
    Dados.prototype.probabilidadDeGanar = function () {
        var n = 1;
        var probCara = 1 / 36;
        var probFinal = 1;
        for (var i = 0; i <= n; i++) {
            probFinal = probFinal * probCara;
        }
        return "La probabilidad es de : " + probFinal;
    };
    return Dados;
}(Casino_1.Casino));
exports.Dados = Dados;
