import { Injectable } from '@angular/core';
import {Pelicula} from '../clases/peliculas';

@Injectable({
  providedIn: 'root'
})
export class PeliculaService {

  listadoPeliculas:Pelicula[];

  constructor() {

    this.listadoPeliculas = [
      {id: 1, nombre: "Rocky I", tipo:'otros', fechaDeEstreno:'01/01/1976', cantidadDePublico: 2000000, fotoDePelicula:'/assets/img/rock1.jpg', idActores:[1,2] },
      {id: 2, nombre: "Rocky II", tipo:'otros', fechaDeEstreno:'01/01/1979', cantidadDePublico: 2000000, fotoDePelicula:'/assets/img/rocky2.jpg', idActores:[2] },
      {id: 3, nombre: "Rocky III", tipo:'otros', fechaDeEstreno:'01/01/1982', cantidadDePublico: 2000000, fotoDePelicula:'/assets/img/rocky3.jpg', idActores:[1] },
    ];
   }

  getPeliculas() {

  }

  traerPeliculas() {
    return this.listadoPeliculas;
  }

  agregarPelicula(pelicula:Pelicula) {

    this.listadoPeliculas.push(pelicula);

  }

  filtrarPeliculas(filtro:string):Pelicula[] {

    let arrayFiltrado:Pelicula[];

    for(let i = 0; i < this.listadoPeliculas.length; i++) {
      if(this.listadoPeliculas[i].tipo == filtro) {
        arrayFiltrado.push(this.listadoPeliculas[i]);
        break;
      }
    }

    return arrayFiltrado;
  }

  borrarPelicula(id:number) {

    for(let i = 0; i < this.listadoPeliculas.length; i++) {
      if(this.listadoPeliculas[i].id == id) {
        this.listadoPeliculas.splice(i, 1);
        break;
      }
    }

  }
}
