export abstract class Tragamonedas{
    protected tematica: string;
    protected rodillo: string[];
    protected apuesta: number;
constructor(tem:string,bet:number){
    this.tematica=tem;
    this.rodillo = new Array<string>;
    this.apuesta=bet;
}

verTematica(tematica:string):string{
    return "***Bienvenido al juego de "+ tematica +"***"
}
}