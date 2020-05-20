import { Actor } from './actor';

export class Pelicula {

  id:number;
  nombre:string;
  tipo:string;
  fechaDeEstreno:string;
  cantidadDePublico:number;
  fotoDePelicula:string;
  idActores:number[];

  constructor(id, nombre, tipo, fechaDeEstreno, cantidadDePublico, fotoDePelicula, idActores:number[]) {

    if(Pelicula.ValidarTipo) {
      this.id = id;
      this.nombre = nombre;
      this.tipo = tipo;
      this.fechaDeEstreno = fechaDeEstreno;
      this.cantidadDePublico = cantidadDePublico;
      this.fotoDePelicula = fotoDePelicula;
      this.idActores = [];
      for(let actor of idActores) {
        this.idActores.push(actor);
      }
    }

  }

  static ValidarTipo(tipo:string):boolean {

    let tipoValido = false;

    if(tipo === 'terror' ||
    tipo === 'comedia' ||
    tipo === 'amor' ||
    tipo === 'otros'
    ) {

      tipoValido = true;

    }

    return tipoValido;

  }

}
