import { Casino } from "./Casino";
export class Ruleta implements Casino{
private posicion:number
private colorNumero:number
private colorRandomNumero:number
private colorRandomColor:string;
private apuesta:number;

constructor (){
    this.posicion=0;
    this.colorNumero=0;
    this.colorRandomColor=""
}
public seleccionarJuego():string{
    return "***Bienvenido al Juego de la Ruleta***"+'\n';
}
public apostar(cantidad:number):void{
    this.apuesta = cantidad + this.apuesta
}
public elegirNumero(numero:number):string{
    if (numero<=36){
return "Número elegido: " + (this.posicion+=numero);
}
else{
    return "usted ha elegido un numero incorrecto. Seleccione un número del 1 al 36 ";
}
}
public elegirColor(color:string):string{
    if (color==="negro"){
        this.colorNumero=1;
     return  "Color elegido: Negro ";
    }
    else if (color==="rojo"){
        this.colorNumero=2;
    return "Color elegido: Rojo ";
    }
    else{
   return "Color incorrecto. Elija el color negro o rojo para apostar";
    }
}
public setRandomColor():void{
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
public verResultados():string{ 
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
public probabilidadDeGanar():string{
    let tiro:number = 1;
    let probabilidad:number = (tiro * 100 / 72);    
    return "La probabilidad de ganar apostando 1 vez es de: % "+ probabilidad;
    }
}