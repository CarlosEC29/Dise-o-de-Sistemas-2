"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Colegio = /** @class */ (function () {
    function Colegio(nombre, apellido) {
        this.alumnos = [];
        this.nombre = nombre;
        this.apellido = apellido;
    }
    Colegio.prototype.agregarAlumno = function (alumno) {
        this.alumnos.push(alumno);
    };
    Colegio.prototype.obtenerPromedioGeneralAlumno = function (nombre, apellido) {
        var alumno = this.alumnos.find(function (alumno) { return alumno.nombre === nombre && alumno.apellido === apellido; });
        if (alumno) {
            return alumno.calcularPromedio();
        }
        else {
            console.log("Alumno no encontrado.");
        }
    };
    Colegio.prototype.obtenerPromedioGeneral = function () {
        var totalPromedios = this.alumnos.reduce(function (total, alumno) { return total + alumno.calcularPromedio(); }, 0);
        return totalPromedios / this.alumnos.length;
    };
    return Colegio;
}());
exports.default = Colegio;
