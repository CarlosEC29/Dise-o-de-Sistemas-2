"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Alumno = /** @class */ (function () {
    function Alumno(nombre, apellido) {
        this.examenesRendidos = [];
        this.nombre = nombre;
        this.apellido = apellido;
    }
    Alumno.prototype.agregarExamen = function (examen) {
        this.examenesRendidos.push(examen);
    };
    Alumno.prototype.calcularPromedio = function () {
        if (this.examenesRendidos.length === 0) {
            return 0;
        }
        var totalNotas = this.examenesRendidos.reduce(function (total, examen) { return total + examen.nota; }, 0);
        return totalNotas / this.examenesRendidos.length;
    };
    return Alumno;
}());
exports.default = Alumno;
