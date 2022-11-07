import { Casino } from "./Casino";

export abstract class Tragamonedas extends Casino{
    protected tematica: string;
    protected rodillo: string[];
    protected apuesta: number;
constructor(tem:string,bet:number){
    super();
    this.tematica=tem;
    this.rodillo = new Array<string>;
    this.apuesta=bet;
}
verTematica(tematica:string):string{
    return "***Bienvenido al juego de "+ tematica +"***"
}
}