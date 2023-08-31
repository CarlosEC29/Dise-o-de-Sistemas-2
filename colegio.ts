import Examen from "./examen";
import Alumno from "./alumno";

export default class Colegio {
  private alumnos: Alumno[] = [];
  private nombre: string;
  private apellido: string;

  constructor(nombre: string, apellido: string) {
    this.nombre = nombre;
    this.apellido = apellido;
  }


  agregarAlumno(alumno: Alumno) {
    this.alumnos.push(alumno);
  }

  obtenerPromedioGeneralAlumno(nombre: string, apellido: string): number | undefined {
    const alumno = this.alumnos.find(alumno => alumno.nombre === nombre && alumno.apellido === apellido);

    if (alumno) {
      return alumno.calcularPromedio();
    } else {
      console.log("Alumno no encontrado.");
    }
  }

  obtenerPromedioGeneral(): number {
    const totalPromedios = this.alumnos.reduce((total, alumno) => total + alumno.calcularPromedio(), 0);
    return totalPromedios / this.alumnos.length;
  }
}  