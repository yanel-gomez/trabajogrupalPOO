import { Casino } from "./Casino";
export class Ruleta extends Casino {
  private posicion: number;
  private colorElegido: number;
  private colorAleatorioN: number;
  private colorAleatorioS: string;
  protected apuesta: number;

  constructor() {
    super();
    this.posicion = 0;
    this.colorElegido = 0;
    this.colorAleatorioS = "";
  }
  public seleccionarJuego(): string {
    return "\n" + "***Bienvenido al Juego de la Ruleta***" + "\n";
  }

  public elegirNumero(numero: number): string {
    if (numero <= 36) {
      return "Número: " + (this.posicion += numero);
    } else {
      return (
        "\n" +
        "|  usted ha elegido un numero incorrecto. Seleccione un número del 1 al 36  |" +
        "\n"
      );
    }
  }
  public elegirColor(color: string): string {
    if (color === "negro" || color === "Negro") {
      this.colorElegido = 1;
      return "Color: Negro ";
    } else if (color === "rojo" || color === "Rojo") {
      this.colorElegido = 2;
      return "Color: Rojo ";
    } else {
      return "Color incorrecto. Elija el color negro o rojo para apostar";
    }
  }
  public setColorAleatorio(): void {
    let colorAleatorio = Math.floor(Math.random() * (3 - 1) + 1);
    if (colorAleatorio === 1) {
      this.colorAleatorioN = 1;
      this.colorAleatorioS = "negro";
    } else {
      this.colorAleatorioN = 2;
      this.colorAleatorioS = "rojo";
    }
  }
  public verResultados(): string {
    this.setColorAleatorio();
    let numeroAleatorio = Math.floor(Math.random() * (37 - 1) + 1);
    if (
      this.posicion <= 36 &&
      numeroAleatorio == this.posicion &&
      this.colorAleatorioN === this.colorElegido
    ) {
      return (
        "***FELICIDADES***" +
        "\n" +
        "Usted ha ganado $" +
        this.apuesta * 2 +
        "La bolita cayó en el número: " +
        numeroAleatorio +
        ", color " +
        this.colorAleatorioS +
        "."
      );
    } else {
      return (

        "\n" +
        "La bolita cayó en el número " +
        numeroAleatorio +
        ", color " +
        this.colorAleatorioS +
        "." + "\n" +
        "¡¡¡Vuelve a intentarlo!!!" + "\n"
      );
    }
  }
  public probabilidadDeGanar(): string {
    let tiro: number = 1;
    let probabilidad: number = (tiro * 100) / 72;
    return "La probabilidad de ganar apostando 1 vez es de: % " + probabilidad;
  }

}
