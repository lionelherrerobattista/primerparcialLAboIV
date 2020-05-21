import { Pais } from './pais';

export class SalaDeCine {
  id:number;
  nombre:string;
  imagen:string;
  pais:Pais;
  pelicula:any[];

  constructor(id:number, nombre:string, imagen:string, pais:Pais, pelicula:any[]) {
    this.id = id;
    this.nombre = nombre;
    this.imagen = imagen;
    this.pais = pais;
    this.pelicula = pelicula;
  }
}
