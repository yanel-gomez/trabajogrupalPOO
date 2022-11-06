import { Casino } from "./Casino";


export class Dados implements Casino {
    private dado1: number;
    private dado2: number;
    private apuesta: number;

    constructor() {
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
            this.tirarDados()
            if ( this.sumarDados() === numeroApostado) {
                console.log("Felicitaciones ,"+" salieron los dados: "+this.dado1+" "+this.dado2+" ganaste");
                continuar = false;
            } else {
                console.log("Salieron los dados: "+this.dado1+" "+this.dado2 +" Intenta nuevamente");
            }
            intentos++;
            this.tirarDados()
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

    
}
