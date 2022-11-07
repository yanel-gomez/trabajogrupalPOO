import { TragamonedasAnimales } from "./TragamonedasAnimales";
import { TragamonedasFrutas } from "./TragamonedasFrutas";
import { Ruleta } from "./Ruleta";
import { Dados } from "./Dados";

let Ruleta1: Ruleta = new Ruleta();
let Trag1: TragamonedasAnimales = new TragamonedasAnimales("Animales", 200);
let Trag2: TragamonedasFrutas = new TragamonedasFrutas("Fruits", 3000);
let Dados1: Dados = new Dados();
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
} else if (index === 1) {
  console.log(Trag1.seleccionarJuego());
  Trag1.apostar(2500);
  console.log(Trag1.verResultados());
} else if (index === 2) {
  console.log(Trag2.seleccionarJuego());
  Trag1.apostar(200);
  console.log(Trag2.verResultados());
} else if (index === 3) {
  console.log(Dados1.seleccionarJuego());
  Dados1.apostar(2000);
  Dados1.tirarDados();
  Dados1.sumarDados();
  Dados1.intentos(3);
  console.log(Dados1.verResultados());
} else {
  console.log("Seleccione un número válido.");
}

console.log(index);
