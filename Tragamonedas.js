"use strict";
exports.__esModule = true;
exports.Tragamonedas = void 0;
var Tragamonedas = /** @class */ (function () {
    function Tragamonedas(tem, bet) {
        this.tematica = tem;
        this.rodillo = new Array;
        this.apuesta = bet;
    }
    Tragamonedas.prototype.verTematica = function (tematica) {
        return "***Bienvenido al juego de " + tematica + "***";
    };
    return Tragamonedas;
}());
exports.Tragamonedas = Tragamonedas;
