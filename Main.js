"use strict";
exports.__esModule = true;
var TragamonedasAnimales_1 = require("./TragamonedasAnimales");
var TragamonedasFrutas_1 = require("./TragamonedasFrutas");
var Ruleta_1 = require("./Ruleta");
var Dados_1 = require("./Dados");
var Ruleta1 = new Ruleta_1.Ruleta();
var Trag1 = new TragamonedasAnimales_1.TragamonedasAnimales("Animales", 200);
var Trag2 = new TragamonedasFrutas_1.TragamonedasFrutas("Fruits", 3000);
var Dados1 = new Dados_1.Dados();
function mostrar() {
    var readlineSync = require('readline-sync'), juegos = ['Ruleta', 'Tragamonedas Animales', 'Tragamonedas Frutas', 'Dados'], index = readlineSync.keyInSelect(juegos, 'Seleccione un juego');
    console.log('Usted ha seleccionado el juego ' + juegos[index] + '.');
    if (index === 1) {
        console.log(Ruleta1.seleccionarJuego());
        Ruleta1.apostar(5000);
        Ruleta1.elegirColor("Rojo");
        Ruleta1.elegirNumero(15);
        console.log(Ruleta1.verResultados());
    }
    else if (index === 2) {
        console.log(Trag1.seleccionarJuego());
        Trag1.apostar(2500);
        console.log(Trag1.verResultados());
    }
    else if (index === 3) {
        console.log(Trag2.seleccionarJuego());
        Trag1.apostar(200);
        console.log(Trag2.verResultados());
    }
    else if (index === 4) {
        console.log(Dados1.seleccionarJuego());
        Dados1.apostar(2000);
        Dados1.tirarDados();
        Dados1.sumarDados();
        Dados1.intentos(3);
        console.log(Dados1.verResultados());
    }
    else {
        console.log("Seleccione un número válido.");
    }
    console.log(index);
}
mostrar;
