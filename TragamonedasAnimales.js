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
exports.TragamonedasAnimales = void 0;
var Tragamonedas_1 = require("./Tragamonedas");
var TragamonedasAnimales = /** @class */ (function (_super) {
    __extends(TragamonedasAnimales, _super);
    function TragamonedasAnimales(tem, bet) {
        var _this = _super.call(this, tem, bet) || this;
        _this.tematica = tem;
        _this.apuesta = bet;
        _this.rodillo1 = ["León", "Perro", "Gato", "Serpiente", "Conejo", "Avestruz", "Pingüino", "Tortuga", "Sapo"];
        _this.rodillo2 = ["Conejo", "Avestruz", "Pingüino", "Tortuga", "Sapo", "León", "Perro", "Gato", "Serpiente"];
        _this.rodillo3 = ["Tortuga", "Serpiente", "Sapo", "Conejo", "Avestruz", "Pingüino", "León", "Perro", "Gato"];
        _this.rodillo4 = ["Avestruz", "Conejo", "Gato", "León", "Perro", "Pingüino", "Sapo", "Serpiente", "Tortuga"];
        _this.rodillo5 = ["Tortuga", "Serpiente", "Sapo", "Pingüino", "Perro", "León", "Gato", "Conejo", "Avestruz"];
        return _this;
    }
    TragamonedasAnimales.prototype.seleccionarJuego = function () {
        return '\n' + "***Bienvenido al Tragamonedas de Animales***" + '\n';
    };
    TragamonedasAnimales.prototype.verTematica = function (tematica) {
        tematica = "Animales";
        return tematica;
    };
    TragamonedasAnimales.prototype.apostar = function (cantidad) {
        this.apuesta = cantidad + this.apuesta;
    };
    TragamonedasAnimales.prototype.verResultados = function () {
        var pos1;
        var pos2;
        var pos3;
        var pos4;
        var pos5;
        var resultado;
        var premio = this.apuesta * 2;
        var pozo = 10000000;
        pos1 = Math.floor(8 * Math.random() + 1);
        pos2 = Math.floor(8 * Math.random() + 1);
        pos3 = Math.floor(8 * Math.random() + 1);
        pos4 = Math.floor(8 * Math.random() + 1);
        pos5 = Math.floor(8 * Math.random() + 1);
        console.log(this.rodillo1[pos1]);
        console.log(this.rodillo2[pos2]);
        console.log(this.rodillo3[pos3]);
        console.log(this.rodillo4[pos4]);
        console.log(this.rodillo5[pos5]);
        if (pos1 == pos2 && pos2 == pos3 && pos3 == pos4 && pos4 == pos5) {
            resultado = '\n' + "****JACKPOT****" + '\n' + "¡¡¡Ganaste el pozo de $" + pozo + "!!!" + '\n';
        }
        else if (pos2 == pos3 && pos3 == pos4) {
            resultado = '\n' + "¡¡¡Doblaste tu apuesta!!!" + '\n' + "¡¡¡Ganaste $" + premio + "!!!" + '\n';
        }
        else {
            resultado = "\n" + "¡¡¡Vuelve a intentarlo!!!" + '\n';
        }
        return resultado;
    };
    TragamonedasAnimales.prototype.probabilidadDeGanar = function () {
        var jugada = 1;
        var comb = 1 / 59049;
        var probabilidad = 1;
        for (var i = 0; i <= jugada; i++) {
            probabilidad = probabilidad * comb;
        }
        return "La probabilidad es: " + probabilidad;
    };
    return TragamonedasAnimales;
}(Tragamonedas_1.Tragamonedas));
exports.TragamonedasAnimales = TragamonedasAnimales;
