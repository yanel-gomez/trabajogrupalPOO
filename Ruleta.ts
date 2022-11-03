import { Casino } from "./Casino";
export class Ruleta extends Casino{
private posicion:number
private colorNumero:number
private colorRandomNumero:number
private colorRandomColor:string;

constructor (){
    super()
    this.posicion=0;
    this.colorNumero=0;
    this.colorRandomColor=""
}
seleccionarJuego(){
return "****Bienvenido al juego de la Ruleta****"+"\n";
}
apostar(){
}
elegirNumero(numero:number):string{
    if (numero<=36){
return "Número elegido: " + (this.posicion+=numero);
}
else{
    return "usted ha elegido un numero incorrecto. Seleccione un número del 1 al 36 ";
}
}
elegirColor(color:string):string{
    if (color==="negro"){
        this.colorNumero=1;
     return  "Color elegido: Negro " + "\n";
    }
    else if (color==="rojo"){
        this.colorNumero=2;
    return "Color elegido: Rojo "+"\n";
    }
    else{
   return "Color incorrecto. Elija el color negro o rojo para apostar";
    }
}
setRandomColor():void{
    let colorRandom= Math.floor(Math.random() * (3-1)+1)
    if(colorRandom===1){
         this.colorRandomNumero=1; 
          this.colorRandomColor="negro";
    }
else{
    this.colorRandomNumero=2;
  this.colorRandomColor="rojo";
}
}
verResultados():string{ 
    this.setRandomColor();
  let numeroRandom= Math.floor(Math.random() * (37-1)+1); 
  if (this.posicion<=36&&numeroRandom == this.posicion&&this.colorRandomNumero===this.colorNumero){
    return "***FELICIDADES***" + "\n"+ "Resultados: " + numeroRandom+" "+this.colorRandomColor;
}
else{
 return   "INTENTE NUEVAMENTE" + "\n"+ "Resultados: "+"\n"+"Numero "+numeroRandom+" Color "+this.colorRandomColor;
}
}

//funcion a modificar: 
probabilidadDeGanar():string{
return "hola";
}
}