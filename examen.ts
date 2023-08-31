export default class Examen {
    protected nombre: string;
    public nota: number;

    public constructor(nombre: string, nota: number) {
        this.nombre = nombre;
        this.nota = nota;
    }
  }
