export abstract class Casino{
nombre:string;
apuesta:number;
constructor(){
    this.nombre = "Status";
    this.apuesta=0;
}
seleccionarJuego(){
}
Apostar(cantidad:number){
this.apuesta +=cantidad;
}
verResultados(){   //(gano x plata o perdió)

} 
probabilidadDeGanar():string{
}

}
