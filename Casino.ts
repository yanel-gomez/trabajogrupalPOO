export abstract class Casino{
nombre:string;
apuesta:number;
constructor(){
    this.nombre = "Status";
    this.apuesta=0;
}
abstract seleccionarJuego()
apostar(cantidad:number):void{
this.apuesta +=cantidad;
}
abstract verResultados():string;

abstract probabilidadDeGanar():string

}
