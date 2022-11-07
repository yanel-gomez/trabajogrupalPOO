import { TragamonedasAnimales } from "./TragamonedasAnimales";
import { TragamonedasFrutas } from "./TragamonedasFrutas";
import { Ruleta } from "./Ruleta";
import { Dados } from "./Dados";

let Ruleta1:Ruleta = new Ruleta();
let Trag1:TragamonedasAnimales = new TragamonedasAnimales("Animales",200);
let Trag2: TragamonedasFrutas = new TragamonedasFrutas("Fruits",3000);
let Dados1:Dados = new Dados();


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
console.log(Dados1.escribirArchivo("ResultadosDados.txt",Dados1.verResultados()));

