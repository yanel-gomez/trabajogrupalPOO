import { Tragamonedas } from "./Tragamonedas";

export class TragamonedasFrutas extends Tragamonedas {
    protected rodillo1: string[];
    protected rodillo2: string[];
    protected rodillo3: string[];

    constructor(tem: string, bet: number) {
        super(tem, bet)
        this.rodillo1 = ["Frutilla", "Manzana", "Naranja", "Banana", "Kiwi", "Cerezas", "Arándanos", "Uvas", "Limón"]
        this.rodillo2 = ["Arándanos", "Banana", "Cerezas", "Frutilla", "Kiwi", "Limón", "Manzana", "Naranja", "Uvas"]
        this.rodillo3 = ["Uvas", "Naranja", "Manzana", "Limón", "Kiwi", "Frutilla", "Cerezas", "Banana", "Arándanos"]
    }
    public seleccionarJuego(): string {
        return '\n' + "***Bienvenido al Tragamonedas de Frutas***" + '\n';
    }

    public verTematica(tematica: string): string {
        tematica = "Frutas"
        return "Bienvenido al Tragamonedas de " + tematica;
    }

    public apostar(cantidad: number): void {
        this.apuesta = cantidad + this.apuesta
    }

    public verResultados(): string {
        let pos1: number;
        let pos2: number;
        let pos3: number;
        let resultado: string;
        let premio: number = this.apuesta * 2

        pos1 = Math.round(8 * Math.random() + 1);
        pos2 = Math.round(8 * Math.random() + 1);
        pos3 = Math.round(8 * Math.random() + 1);
        console.log(this.rodillo1[pos1]);
        console.log(this.rodillo2[pos2]);
        console.log(this.rodillo3[pos3]);
        if (pos1 == pos2 && pos2 == pos3) {
            resultado = '\n' + "¡¡¡Ganaste $" + premio + "!!!";
        } else {
            resultado = '\n' + "Intenta nuevamente";
        }
        return resultado;
    }

    public probabilidadDeGanar(): string {
        let n: number = 1;
        let comb: number = 1 / 729;
        let probabilidad: number = 1;

        for (let i: number = 0; i <= n; i++) {
            probabilidad = probabilidad * comb;
        }
        return "La probabilidad es: " + probabilidad;
    }

}

