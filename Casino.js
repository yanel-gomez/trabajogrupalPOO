"use strict";
exports.__esModule = true;
exports.Casino = void 0;
var Casino = /** @class */ (function () {
    function Casino() {
        this.nombre = "Status";
        this.apuesta = 0;
    }
    Casino.prototype.apostar = function (cantidad) {
        this.apuesta += cantidad;
    };
    return Casino;
}());
exports.Casino = Casino;
