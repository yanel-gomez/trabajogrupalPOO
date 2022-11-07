var fs = require("fs");


import { Tragamonedas } from "./Tragamonedas";

export class TragamonedasAnimales extends Tragamonedas {
    protected tematica:string;
    protected apuesta:number;
    protected rodillo1: string[];
    protected rodillo2: string[];
    protected rodillo3: string[];
    protected rodillo4: string[];
    protected rodillo5: string[];

    constructor(tem: string, bet: number){ 
    super(tem,bet)

        this.tematica = tem;
        this.apuesta = bet;
        this.rodillo1 = ["León", "Perro", "Gato", "Serpiente", "Conejo", "Avestruz", "Pingüino", "Tortuga", "Sapo"]
        this.rodillo2 = ["Conejo", "Avestruz", "Pingüino", "Tortuga", "Sapo", "León", "Perro", "Gato", "Serpiente"]
        this.rodillo3 = ["Tortuga", "Serpiente", "Sapo", "Conejo", "Avestruz", "Pingüino", "León", "Perro", "Gato"]
        this.rodillo4 = ["Avestruz", "Conejo", "Gato", "León", "Perro", "Pingüino", "Sapo", "Serpiente", "Tortuga"]
        this.rodillo5 = ["Tortuga", "Serpiente", "Sapo", "Pingüino", "Perro", "León", "Gato", "Conejo", "Avestruz"]
    }
    public seleccionarJuego():string{
        return "***Bienvenido al Tragamonedas de Animales***"+'\n';
    }

    public verTematica(tematica: string): string {
        tematica="Animales";
        return tematica;
    }

    public apostar(cantidad:number):void{
        this.apuesta = cantidad + this.apuesta
    }

    public verResultados(): string {
        let pos1: number;
        let pos2: number;
        let pos3: number;
        let pos4: number;
        let pos5: number;
        let resultado:string;
        let premio:number=this.apuesta*2
        let pozo:number=10000000

        pos1 = Math.floor(8 * Math.random() + 1);
        pos2 = Math.floor(8 * Math.random() + 1);
        pos3 = Math.floor(8 * Math.random() + 1);
        pos4 = Math.floor(8 * Math.random() + 1);
        pos5 = Math.floor(8 * Math.random() + 1);
        console.log(this.rodillo1[pos1]);
        console.log(this.rodillo2[pos2]);
        console.log(this.rodillo3[pos3]);
        console.log(this.rodillo4[pos4]);
        console.log(this.rodillo5[pos5]);
        if (pos1 == pos2 && pos2 == pos3 && pos3 == pos4 && pos4 == pos5) {
            resultado = "****JACKPOT****" + '\n' + "¡¡¡Ganaste el pozo de $" + pozo + "!!!";
        } else if (pos2 == pos3 && pos3 == pos4){
            resultado = "¡¡¡Doblaste tu apuesta!!!" + '\n' + "¡¡¡Ganaste $" + premio + "!!!"
        }else{
            resultado = "\n"+"¡¡¡Vuelve a intentarlo!!!"
        }
            
        return resultado;
    }
     public probabilidadDeGanar(): string {
        let jugada : number = 1;
        let comb : number = 1/729; 
        let probabilidad : number = 1;
    
        for (let i: number = 0; i <= jugada; i++) {
        probabilidad = probabilidad * comb;
        }
        return "La probabilidad es: " + probabilidad;
    }    
}
