import { TragamonedasAnimales } from "./TragamonedasAnimales";
import { TragamonedasFrutas } from "./TragamonedasFrutas";
import { Ruleta } from "./Ruleta";
import { Dados } from "./Dados";

let Ruleta1: Ruleta = new Ruleta();
let Trag1: TragamonedasAnimales = new TragamonedasAnimales("Animales", 0);
let Trag2: TragamonedasFrutas = new TragamonedasFrutas("Fruits", 0);
let Dados1: Dados = new Dados();


var readlineSync = require("readline-sync");
var nombre = readlineSync.question('Escriba su nombre ');
console.log("\n" + "Bienvenido/a " + nombre);


var readlineSync = require("readline-sync"),
  juegos = ["Ruleta", "Tragamonedas Animales", "Tragamonedas Frutas", "Dados"],
  index = readlineSync.keyInSelect(juegos, "Seleccione un juego");
console.log("Usted ha seleccionado el juego " + juegos[index] + "." + "\n");
if (index === 0) {
  console.log(Ruleta1.seleccionarJuego());
  Ruleta1.apostar(5000);
  Ruleta1.elegirColor("Rojo");
  Ruleta1.elegirNumero(15);
  console.log(Ruleta1.verResultados());
  Ruleta1.leerArchivo("RuletaResultados.txt");
  Ruleta1.escribirArchivo("RuletaResultados.txt", Ruleta1.verResultados())
} else if (index === 1) {
  console.log(Trag1.seleccionarJuego());
  Trag1.apostar(100);
  console.log(Trag1.verResultados());
  Trag1.leerArchivo("TragamonedasAn.txt");
  Trag1.escribirArchivo("TragamonedasAn.txt", Trag1.verResultados());
} else if (index === 2) {
  console.log(Trag2.seleccionarJuego());
  Trag1.apostar(200);
  console.log(Trag2.verResultados());
  Trag2.leerArchivo("TragamonedasFr.txt");
  Trag2.escribirArchivo("TragamonedasFr.txt", Trag2.verResultados());
} else if (index === 3) {
  console.log(Dados1.seleccionarJuego());
  Dados1.apostar(2000);
  Dados1.tirarDados();
  Dados1.sumarDados();
  Dados1.intentos(3);
  console.log(Dados1.verResultados());
  Dados1.leerArchivo("DadosResultados.txt");
  Dados1.escribirArchivo("DadosResultados.txt", Dados1.verResultados());
} else {
  console.log("Seleccione un número válido.");
}
