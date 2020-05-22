import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { SalaDeCine } from '../clases/sala-de-cine';

@Injectable({
  providedIn: 'root'
})
export class SalaDeCineService {

  listaCines:Subject<SalaDeCine[]>;
  listaCompleta:SalaDeCine[];
  salasDeshabilitadas:SalaDeCine[];

  constructor() {
    this.listaCines = new Subject<SalaDeCine[]>();

    this.salasDeshabilitadas = [];

    this.listaCompleta = [
      {id:1,nombre:"Village",imagen:"",pais:{nombre:"Argentina", capital:"Buenos Aires", bandera:"" },
        pelicula:[{fecha:"2020-05-21", pelicula:{id: 1, nombre: "Rocky I", tipo:'otros', fechaDeEstreno:'01/01/1976', cantidadDePublico: 2000000, fotoDePelicula:'/assets/img/rock1.jpg', idActores:[1,2] }},{fecha:"2020-05-20", pelicula: {id: 3, nombre: "Rocky III", tipo:'otros', fechaDeEstreno:'01/01/1982', cantidadDePublico: 2000000, fotoDePelicula:'/assets/img/rocky3.jpg', idActores:[1] },}]},
      {id:2,nombre:"Hoyts",imagen:"",pais:{nombre:"Chile", capital:"Santiago", bandera:"" },
        pelicula:[{fecha:"2020-05-21", pelicula: {id: 2, nombre: "Rocky II", tipo:'otros', fechaDeEstreno:'01/01/1979', cantidadDePublico: 2000000, fotoDePelicula:'/assets/img/rocky2.jpg', idActores:[2] },},{fecha:"2020-05-19", pelicula:{id: 1, nombre: "Rocky I", tipo:'otros', fechaDeEstreno:'01/01/1976', cantidadDePublico: 2000000, fotoDePelicula:'/assets/img/rock1.jpg', idActores:[1,2] }}]},
      {id:3,nombre:"Multiplex",imagen:"",pais:{nombre:"Ecuador", capital:"Quito", bandera:"" },
        pelicula:[{fecha:"2020-05-21", pelicula:{id: 1, nombre: "Rocky I", tipo:'otros', fechaDeEstreno:'01/01/1976', cantidadDePublico: 2000000, fotoDePelicula:'/assets/img/rock1.jpg', idActores:[1,2] }},{fecha:"2020-05-10", pelicula: {id: 3, nombre: "Rocky III", tipo:'otros', fechaDeEstreno:'01/01/1982', cantidadDePublico: 2000000, fotoDePelicula:'/assets/img/rocky3.jpg', idActores:[1] },}]},
      {id:4,nombre:"Lavalle",imagen:"",pais:{nombre:"Argentina", capital:"Ottawa", bandera:"" },
        pelicula:[{fecha:"2020-05-21", pelicula:{id: 1, nombre: "Rocky I", tipo:'otros', fechaDeEstreno:'01/01/1976', cantidadDePublico: 2000000, fotoDePelicula:'/assets/img/rock1.jpg', idActores:[1,2] }},{fecha:"2020-05-20",pelicula: {id: 3, nombre: "Rocky III", tipo:'otros', fechaDeEstreno:'01/01/1982', cantidadDePublico: 2000000, fotoDePelicula:'/assets/img/rocky3.jpg', idActores:[1] },}]},
      {id:5,nombre:"Unicenter",imagen:"",pais:{nombre:"Canada", capital:"Buenos Aires", bandera:"" },
        pelicula:[{fecha:"2020-05-25", pelicula: {id: 2, nombre: "Rocky II", tipo:'otros', fechaDeEstreno:'01/01/1979', cantidadDePublico: 2000000, fotoDePelicula:'/assets/img/rocky2.jpg', idActores:[2] },},{fecha:"2020-05-21", pelicula:{id: 1, nombre: "Rocky I", tipo:'otros', fechaDeEstreno:'01/01/1976', cantidadDePublico: 2000000, fotoDePelicula:'/assets/img/rock1.jpg', idActores:[1,2] }}]},

    ];
   }

   getCines() {
    return this.listaCines;
  }


  devolverProximoId() {
    return this.listaCompleta.length + 1;
  }

  actualizarLista(){
    let lista= this.filtarCines();

    this.listaCines.next(lista);
  }

  agregarcine(cine:SalaDeCine) {
    this.listaCompleta.push(cine);
  }

  filtarCines():SalaDeCine[] {

    let listadoFiltrado = this.listaCompleta.filter( sala => {
      let incluirEnLista = true;

      for(let salaDeshabiltada of this.salasDeshabilitadas) {
        if(sala.nombre == salaDeshabiltada.nombre) {
          incluirEnLista = false;
          break;
        }
      }
      return incluirEnLista;
    })

    return listadoFiltrado;
  }

  filtrarPorNombre(nombre:string) {

    let listadoFiltrado = this.listaCompleta.filter( sala => {
      let incluirEnLista = false;


        if(sala.nombre == nombre) {
          incluirEnLista = true;

        }

      return incluirEnLista;
    })

    this.listaCines.next(listadoFiltrado);

  }

  filtrarPorPais(pais:string) {

    let listadoFiltrado = this.listaCompleta.filter( sala => {
      let incluirEnLista = false;


        if(sala.pais.nombre == pais) {
          incluirEnLista = true;

        }

      return incluirEnLista;
    })

    this.listaCines.next(listadoFiltrado);

  }

  deshabilitarSala(sala:SalaDeCine) {
    this.salasDeshabilitadas.push(sala);
    console.log(this.salasDeshabilitadas);
    this.actualizarLista();
  }
}
