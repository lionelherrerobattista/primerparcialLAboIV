export class Actor {
  id:number;
  nombre:string;
  apellido:string;
  sexo:string;
  fechaDeNacimiento:string;
  foto:string;
  paisDeOrigen:string;

  constructor(id, nombre, apellido, sexo, fechaDeNacimiento, foto, paisDeOrigen) {

    this.id= id;
    this.nombre= nombre;
    this.apellido= apellido;
    this.sexo= sexo;
    this.fechaDeNacimiento= fechaDeNacimiento;
    this.foto= foto;
    this.paisDeOrigen = paisDeOrigen;

  }
}
