var fs = require("fs")
export abstract class Casino {
  protected nombre: string;
  protected apuesta: number;
  constructor() {
    this.nombre = "Status";
    this.apuesta = 0;
  }
  abstract seleccionarJuego();
  apostar(cantidad: number): void {
    this.apuesta += cantidad;
  }
  abstract verResultados(): string;

  abstract probabilidadDeGanar(): string;

  public leerArchivo(path: string): string {
    let archivo: string = fs.readFileSync(path, "utf-8");
    return archivo;
  }
  public escribirArchivo(archivo:string, nuevoTexto:string) {
    let textoBase: string = fs.readFileSync(archivo, "utf-8");
    textoBase += nuevoTexto;
    fs.writeFile(archivo, textoBase, function (err) {
      if (err) {
        return console.log(err);
      }

      console.log("Este resultado ha sido agregado a estadísticas.");
    });
  }
}
