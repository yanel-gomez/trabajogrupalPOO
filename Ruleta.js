"use strict";
exports.__esModule = true;
exports.Ruleta = void 0;
var Ruleta = /** @class */ (function () {
    function Ruleta() {
        this.posicion = 0;
        this.colorNumero = 0;
        this.colorRandomColor = "";
    }
    Ruleta.prototype.seleccionarJuego = function () {
        return "***Bienvenido al Juego de la Ruleta***" + '\n';
    };
    Ruleta.prototype.apostar = function (cantidad) {
        this.apuesta = cantidad + this.apuesta;
    };
    Ruleta.prototype.elegirNumero = function (numero) {
        if (numero <= 36) {
            return "Número elegido: " + (this.posicion += numero);
        }
        else {
            return "usted ha elegido un numero incorrecto. Seleccione un número del 1 al 36 ";
        }
    };
    Ruleta.prototype.elegirColor = function (color) {
        if (color === "negro") {
            this.colorNumero = 1;
            return "Color elegido: Negro ";
        }
        else if (color === "rojo") {
            this.colorNumero = 2;
            return "Color elegido: Rojo ";
        }
        else {
            return "Color incorrecto. Elija el color negro o rojo para apostar";
        }
    };
    Ruleta.prototype.setRandomColor = function () {
        var colorRandom = Math.floor(Math.random() * (3 - 1) + 1);
        if (colorRandom === 1) {
            this.colorRandomNumero = 1;
            this.colorRandomColor = "negro";
        }
        else {
            this.colorRandomNumero = 2;
            this.colorRandomColor = "rojo";
        }
    };
    Ruleta.prototype.verResultados = function () {
        this.setRandomColor();
        var numeroRandom = Math.floor(Math.random() * (37 - 1) + 1);
        if (this.posicion <= 36 && numeroRandom == this.posicion && this.colorRandomNumero === this.colorNumero) {
            return "***FELICIDADES***" + "\n" + "Resultados: " + numeroRandom + " " + this.colorRandomColor;
        }
        else {
            return "INTENTE NUEVAMENTE" + "\n" + "Resultados: " + "\n" + "Numero " + numeroRandom + " Color " + this.colorRandomColor;
        }
    };
    //funcion a modificar: 
    Ruleta.prototype.probabilidadDeGanar = function () {
        return "hola";
    };
    return Ruleta;
}());
exports.Ruleta = Ruleta;
