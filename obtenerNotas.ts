import Examen from "./examen";
import Alumno from "./alumno";
import Colegio from "./colegio";

// Crear instancias y usar el sistema
const colegio = new Colegio("Nombre del Colegio", "Apellido del Director");

const alumno1 = new Alumno("Nombre1", "Apellido1");
const alumno2 = new Alumno("Nombre2", "Apellido2");

const examen1 = new Examen("Examen1", 9);
const examen2 = new Examen("Examen2", 7.5);
const examen3 = new Examen("Examen3", 7);
const examen4 = new Examen("Examen4", 6.5);
const examen5 = new Examen("Examen5", 10);

alumno1.agregarExamen(examen1);
alumno1.agregarExamen(examen2);
alumno2.agregarExamen(examen3);

colegio.agregarAlumno(alumno1);
colegio.agregarAlumno(alumno2);

const promedioAlumno1 = colegio.obtenerPromedioGeneralAlumno("Nombre1", "Apellido1");
console.log(`Promedio de Alumno1: ${promedioAlumno1}`);

const promedioGeneral = colegio.obtenerPromedioGeneral();
console.log(`Promedio General del Colegio: ${promedioGeneral}`);