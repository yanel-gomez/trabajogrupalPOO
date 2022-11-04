"use strict";
exports.__esModule = true;
exports.Dados = void 0;
var Dados = /** @class */ (function () {
    function Dados() {
        this.apuesta = 0;
    }
    Dados.prototype.apostar = function (cantidad) {
        this.apuesta = cantidad + this.apuesta;
    };
    Dados.prototype.tirarDados = function () {
        this.dado1 = Math.floor(Math.random() * (6 - 1)) + 1;
        this.dado2 = Math.floor(Math.random() * (6 - 1)) + 1;
    };
    Dados.prototype.sumarDados = function () {
        var dado1 = this.dado1;
        var dado2 = this.dado2;
        var suma = dado1 + dado2;
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
                console.log("Felicitaciones ," + "salieron los dados" + this.dado1 + " " + this.dado2 + "ganaste");
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
    return Dados;
}());
exports.Dados = Dados;
var Dados1 = new Dados();
//console.log(Dados1.seleccionarJuego());
Dados1.apostar(2000);
Dados1.tirarDados();
Dados1.sumarDados();
Dados1.intentos(12);
