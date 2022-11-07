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
exports.TragamonedasFrutas = void 0;
var Tragamonedas_1 = require("./Tragamonedas");
var TragamonedasFrutas = /** @class */ (function (_super) {
    __extends(TragamonedasFrutas, _super);
    function TragamonedasFrutas(tem, bet) {
        var _this = _super.call(this, tem, bet) || this;
        _this.rodillo1 = ["Frutilla", "Manzana", "Naranja", "Banana", "Kiwi", "Cerezas", "Arándanos", "Uvas", "Limón"];
        _this.rodillo2 = ["Arándanos", "Banana", "Cerezas", "Frutilla", "Kiwi", "Limón", "Manzana", "Naranja", "Uvas"];
        _this.rodillo3 = ["Uvas", "Naranja", "Manzana", "Limón", "Kiwi", "Frutilla", "Cerezas", "Banana", "Arándanos"];
        return _this;
    }
    TragamonedasFrutas.prototype.seleccionarJuego = function () {
        return '\n' + "***Bienvenido al Tragamonedas de Frutas***" + '\n';
    };
    TragamonedasFrutas.prototype.verTematica = function (tematica) {
        tematica = "Frutas";
        return "Bienvenido al Tragamonedas de " + tematica;
    };
    TragamonedasFrutas.prototype.apostar = function (cantidad) {
        this.apuesta = cantidad + this.apuesta;
    };
    TragamonedasFrutas.prototype.verResultados = function () {
        var pos1;
        var pos2;
        var pos3;
        var resultado;
        var premio = this.apuesta * 2;
        pos1 = Math.round(8 * Math.random() + 1);
        pos2 = Math.round(8 * Math.random() + 1);
        pos3 = Math.round(8 * Math.random() + 1);
        console.log(this.rodillo1[pos1]);
        console.log(this.rodillo2[pos2]);
        console.log(this.rodillo3[pos3]);
        if (pos1 == pos2 && pos2 == pos3) {
            resultado = '\n' + "¡¡¡Ganaste $" + premio + "!!!";
        }
        else {
            resultado = '\n' + "Intenta nuevamente";
        }
        return resultado;
    };
    TragamonedasFrutas.prototype.probabilidadDeGanar = function () {
        var n = 1;
        var comb = 1 / 729;
        var probabilidad = 1;
        for (var i = 0; i <= n; i++) {
            probabilidad = probabilidad * comb;
        }
        return "La probabilidad es: " + probabilidad;
    };
    return TragamonedasFrutas;
}(Tragamonedas_1.Tragamonedas));
exports.TragamonedasFrutas = TragamonedasFrutas;
