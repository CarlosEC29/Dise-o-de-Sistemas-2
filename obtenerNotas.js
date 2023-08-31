"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var examen_1 = require("./examen");
var alumno_1 = require("./alumno");
var colegio_1 = require("./colegio");
// Crear instancias y usar el sistema
var colegio = new colegio_1.default("Nombre del Colegio", "Apellido del Director");
var alumno1 = new alumno_1.default("Nombre1", "Apellido1");
var alumno2 = new alumno_1.default("Nombre2", "Apellido2");
var examen1 = new examen_1.default("Examen1", 90);
var examen2 = new examen_1.default("Examen2", 75);
var examen3 = new examen_1.default("Examen3", 85);
alumno1.agregarExamen(examen1);
alumno1.agregarExamen(examen2);
alumno2.agregarExamen(examen3);
colegio.agregarAlumno(alumno1);
colegio.agregarAlumno(alumno2);
var promedioAlumno1 = colegio.obtenerPromedioGeneralAlumno("Nombre1", "Apellido1");
console.log("Promedio de Alumno1: ".concat(promedioAlumno1));
var promedioGeneral = colegio.obtenerPromedioGeneral();
console.log("Promedio General del Colegio: ".concat(promedioGeneral));
