import { Casino } from "./Casino";

export class Dados extends Casino{
   private dado1:number;
   private dado2:number;
   private apuesta:number;

    constructor(nombre:string,apuesta:number){
     super(nombre) 
     this.dado1 = 0;
     this.dado2 = 0;
     this.apuesta = apuesta;
    }

    public tirarDados():void{
      this.dado1 = Math.floor(Math.random() * (6 - 1)) + 1;
      this.dado2 = Math.floor(Math.random() * (6 - 1)) + 1;
    }
    public sumarDados():number{
     let suma :number = this.dado1 + this.dado2;
     return suma
    }
    seleccionarJuego(){

    }
    
    public verResultados():string{
    let respuesta :string = "No ganaste , intenta de nuevo ";
        if(this.dado1 === this.dado2)
             respuesta = "Ganaste: "+ this.apuesta * 2 +" Felicidades ";
        return respuesta
    }
    
    
    public intentos(apuesta:number){
    let intentos: number = 0;
    let continuar: boolean = true
    
     while (intentos < 3 && continuar === true) {
    if (this.sumarDados() === apuesta) {
        console.log("Felicitaciones ganaste");
        continuar = false;
    } else {
        console.log("No ganaste nada");
    }
    intentos++;
    }
    if (continuar === true) {
    console.log("acabaste los intentos");
    }
    }
    
   
    public probabilidadDeGanar(): string {
    let n : number = 1; //cantidad de veces que tira
    let probCara : number = 1/36; //probabilidad de que salga una cara del dado
    let probFinal : number = 1;

    for (let i: number = 0; i <= n; i++) {
    probFinal = probFinal * probCara;
    }
    return "La probabilidad es: " + probFinal ;
    }
}

