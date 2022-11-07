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
exports.Tragamonedas = void 0;
var Casino_1 = require("./Casino");
var Tragamonedas = /** @class */ (function (_super) {
    __extends(Tragamonedas, _super);
    function Tragamonedas(tem, bet) {
        var _this = _super.call(this) || this;
        _this.tematica = tem;
        _this.rodillo = new Array;
        _this.apuesta = bet;
        return _this;
    }
    Tragamonedas.prototype.verTematica = function (tematica) {
        return "***Bienvenido al juego de " + tematica + "***";
    };
    return Tragamonedas;
}(Casino_1.Casino));
exports.Tragamonedas = Tragamonedas;
