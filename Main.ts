import { TragamonedasAnimales } from "./TragamonedasAnimales";
import { TragamonedasFrutas } from "./TragamonedasFrutas";
import { Ruleta } from "./Ruleta";
import { Dados } from "./Dados";

let Ruleta1: Ruleta = new Ruleta();
let Trag1: TragamonedasAnimales = new TragamonedasAnimales("Animales", 0);
let Trag2: TragamonedasFrutas = new TragamonedasFrutas("Fruits", 0);
let Dados1: Dados = new Dados();

var colors = require('colors/safe');
var readlineSync = require("readline-sync");
var nombre = readlineSync.question(colors.bgGray('Escriba su nombre: '));
console.log(colors.brightMagenta("\n" + "Bienvenido/a " + nombre));


var readlineSync = require("readline-sync"),
  juegos = ["Ruleta", "Tragamonedas Animales", "Tragamonedas Frutas", "Dados"],
  index = readlineSync.keyInSelect(juegos, "Seleccione un juego");
console.log(colors.brightMagenta("Usted ha seleccionado el juego " + juegos[index] + "." + "\n"));
if (index === 0) {
  console.log(colors.rainbow(Ruleta1.seleccionarJuego()));
  let apuesta = readlineSync.question(colors.bgMagenta('Ingrese su apuesta: $'));
  parseInt(apuesta);
  Ruleta1.apostar(apuesta);
  let color = readlineSync.question('Seleccione un color ' + " rojo o negro: ");
  Ruleta1.elegirColor(color);
  let numero = readlineSync.question('Seleccione un numero ' + " entre 1 y 36 : ");
  parseInt(numero);
  Ruleta1.elegirNumero(numero);
  console.log(colors.green(Ruleta1.verResultados()));
  Ruleta1.leerArchivo("RuletaResultados.txt");
  Ruleta1.escribirArchivo("RuletaResultados.txt", Ruleta1.verResultados())
} else if (index === 1) {
  console.log(colors.rainbow(Trag1.seleccionarJuego()));
  let apuesta = readlineSync.question(colors.bgMagenta('Ingrese su apuesta: $'));
  while (apuesta <= 0 || isNaN(apuesta)) {
    parseInt(apuesta);
    Trag1.apostar(apuesta);
  }
  console.log(colors.green(Trag1.verResultados()));
  Trag1.leerArchivo("TragamonedasAn.txt");
  Trag1.escribirArchivo("TragamonedasAn.txt", Trag1.verResultados());
} else if (index === 2) {
  console.log(colors.rainbow(Trag2.seleccionarJuego()));
  let apuesta = readlineSync.question(colors.bgMagenta('Ingrese su apuesta: $'));
  parseInt(apuesta);
  Trag2.apostar(apuesta);
  console.log(colors.green(Trag2.verResultados()));
  Trag2.leerArchivo("TragamonedasFr.txt");
  Trag2.escribirArchivo("TragamonedasFr.txt", Trag2.verResultados());
} else if (index === 3) {
  console.log(colors.rainbow(Dados1.seleccionarJuego()));
  let apuesta = readlineSync.question(colors.bgMagenta('Ingrese su apuesta: $'));
  parseInt(apuesta);
  Dados1.apostar(apuesta);
  Dados1.tirarDados();
  Dados1.sumarDados();
  let seleccionar = readlineSync.question('Desea apostar a un numero [presione 1] o a que los dados sean iguales [presione 2]');
  parseInt(seleccionar);
  if (seleccionar = 1) {
    let num = readlineSync.question('Ingrese numero (entre 2 y 12) que quiere seleccionar: ');
    console.log("Se tiraron los dados");
    Dados1.intentos(num);
  } else if (seleccionar = 2) {
    console.log("Se tiraron los dados");
    console.log(colors.green(Dados1.verResultados()));
  }
  Dados1.leerArchivo("DadosResultados.txt");
  Dados1.escribirArchivo("DadosResultados.txt", Dados1.verResultados());
} else {
  console.log("Seleccione un numero valido.");
}