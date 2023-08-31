import Examen from "./examen";

export default class Alumno {
  protected examenesRendidos: Examen[] = [];
  public nombre: string;
  public apellido: string;

  public constructor(nombre: string, apellido: string) {
    this.nombre = nombre;
    this.apellido = apellido;
  }

  public agregarExamen(examen: Examen) {
    this.examenesRendidos.push(examen);
  }

  public calcularPromedio(): number {
    if (this.examenesRendidos.length === 0) {
      return 0;
    }

    const totalNotas = this.examenesRendidos.reduce((total, examen) => total + examen.nota, 0);
    return totalNotas / this.examenesRendidos.length;
  }
}