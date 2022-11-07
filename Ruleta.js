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
exports.Ruleta = void 0;
var Casino_1 = require("./Casino");
var Ruleta = /** @class */ (function (_super) {
    __extends(Ruleta, _super);
    function Ruleta() {
        var _this = _super.call(this) || this;
        _this.posicion = 0;
        _this.colorElegido = 0;
        _this.colorAleatorioS = "";
        return _this;
    }
    Ruleta.prototype.seleccionarJuego = function () {
        return "\n" + "***Bienvenido al Juego de la Ruleta***" + "\n";
    };
    Ruleta.prototype.elegirNumero = function (numero) {
        if (numero <= 36) {
            return "Número: " + (this.posicion += numero);
        }
        else {
            return ("\n" +
                "|  usted ha elegido un numero incorrecto. Seleccione un número del 1 al 36  |" +
                "\n");
        }
    };
    Ruleta.prototype.elegirColor = function (color) {
        if (color === "negro" || color === "Negro") {
            this.colorElegido = 1;
            return "Color: Negro ";
        }
        else if (color === "rojo" || color === "Rojo") {
            this.colorElegido = 2;
            return "Color: Rojo ";
        }
        else {
            return "Color incorrecto. Elija el color negro o rojo para apostar";
        }
    };
    Ruleta.prototype.setColorAleatorio = function () {
        var colorAleatorio = Math.floor(Math.random() * (3 - 1) + 1);
        if (colorAleatorio === 1) {
            this.colorAleatorioN = 1;
            this.colorAleatorioS = "negro";
        }
        else {
            this.colorAleatorioN = 2;
            this.colorAleatorioS = "rojo";
        }
    };
    Ruleta.prototype.verResultados = function () {
        this.setColorAleatorio();
        var numeroAleatorio = Math.floor(Math.random() * (37 - 1) + 1);
        if (this.posicion <= 36 &&
            numeroAleatorio == this.posicion &&
            this.colorAleatorioN === this.colorElegido) {
            return ("***FELICIDADES***" +
                "\n" +
                "Usted ha ganado $" +
                this.apuesta * 2 +
                "La bolita cayó en el número: " +
                numeroAleatorio +
                ", color " +
                this.colorAleatorioS +
                ".");
        }
        else {
            return ("\n" +
                "La bolita cayó en el número " +
                numeroAleatorio +
                ", color " +
                this.colorAleatorioS +
                "." + "\n" +
                "¡¡¡Vuelve a intentarlo!!!" + "\n");
        }
    };
    Ruleta.prototype.probabilidadDeGanar = function () {
        var tiro = 1;
        var probabilidad = (tiro * 100) / 72;
        return "La probabilidad de ganar apostando 1 vez es de: % " + probabilidad;
    };
    return Ruleta;
}(Casino_1.Casino));
exports.Ruleta = Ruleta;
