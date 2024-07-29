export class Curso {

    constructor() {
        this.titulo = '';
        this.descripcion = '';
        this.nombreAula = '';
        this.nombreProfesor = '';
        this.fechaInicio = new Date();
        this.cursoPrivado = false;
        this.horasSemanales = 0;
    }

    titulo: string;
    descripcion: string;
    nombreAula: string;
    nombreProfesor: String;
    fechaInicio: Date;
    cursoPrivado: boolean;
    horasSemanales: Number;
}

