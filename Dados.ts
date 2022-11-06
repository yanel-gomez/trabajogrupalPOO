import { Casino } from "./Casino";
<<<<<<< HEAD

export class Dados extends Casino {
=======
var fs = require("fs");
export class Dados implements Casino {
>>>>>>> fd7510cce2ae4e07cdf0c264b69a7c45de946b46
    private dado1: number;
    private dado2: number;
    protected apuesta: number;

    constructor() {
        super();
        this.apuesta = 0;
    }

    public apostar(cantidad: number): void {
        this.apuesta = cantidad + this.apuesta
    }


    public tirarDados(): void {
        this.dado1 = Math.floor(Math.random() * (6 - 1)) + 1;
        this.dado2 = Math.floor(Math.random() * (6 - 1)) + 1;
    }

    public sumarDados(): number {
        let suma:number = this.dado1 + this.dado2;
        return suma
    }

    public seleccionarJuego(): string {
        return "***Bienvenido al Juego de Dados***" + '\n';
    }

    public verResultados(): string {
        let respuesta: string;
        if (this.dado1 === this.dado2){
            respuesta = "Ganaste: " + (2 * this.apuesta) + " Felicidades ";
        }else{
            respuesta = "No ganaste , intenta de nuevo "
        }
        console.log("salieron los dados: " + this.dado1 +" "+ this.dado2);
        return respuesta
    }


    public intentos(numeroApostado: number):void {
        let intentos: number = 0;
        let continuar: boolean = true

        while (intentos < 3 && continuar === true) {
            if (this.sumarDados() === numeroApostado) {
                console.log("Felicitaciones ,"+"salieron los dados: "+this.dado1+" "+this.dado2+" ganaste");
                continuar = false;
            } else {
                console.log("Salieron los dados: "+this.dado1+" "+this.dado2 +" Intenta nuevamente");
            }
            intentos++;
        }
        if (continuar === true) {
            console.log("acabaste los intentos");
        }
    }

    public probabilidadDeGanar(): string {
        let n: number = 1; //cantidad de veces que tira
        let probCara: number = 1 / 36; //probabilidad de que salga una cara del dado
        let probFinal: number = 1;

        for (let i: number = 0; i <= n; i++) {
            probFinal = probFinal * probCara;
        }
        return "La probabilidad es: " + probFinal;
    }
    leerArchivo(path: string): string {
        let archivo: string = fs.readFileSync(path, "utf-8");
        return archivo;
      }
      escribirArchivo(archivo, nuevoTexto) {
        let textoBase: string = fs.readFileSync(archivo, "utf-8");
        textoBase += nuevoTexto;
        fs.writeFile(archivo, textoBase, function (err) {
          if (err) {
            return console.log(err);
          }
    
          console.log("El archivo fue creado correctamente");
        });
      }
}
