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
/*console.log(Trag1.seleccionarJuego());
Trag1.apostar(1200);
console.log(Trag1.verResultados());*/
/*console.log(Ruleta1.elegirColor("rojo"));
console.log(Ruleta1.elegirNumero(5));
Ruleta1.apostar(200);
Ruleta1.setRandomColor();
console.log(Ruleta1.verResultados());*/
//console.log(Dados1.seleccionarJuego());
Dados1.apostar(2000);
Dados1.tirarDados();
console.log(Dados1.sumarDados());
//Dados1.intentos(3);
Dados1.leerArchivo("ResultadosDados.txt");
console.log(Dados1.escribirArchivo("ResultadosDados.txt", Dados1.verResultados()));
