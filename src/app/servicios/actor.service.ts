import { Injectable } from '@angular/core';
import { Actor } from '../clases/actor';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActorService {

  listaActores:Subject<Actor[]>;
  listaCompleta:Actor[];

  constructor() {
    this.listaActores = new Subject<Actor[]>();

    this.listaCompleta = [
      {id:1,nombre:"Rogelio",apellido:"Aguas",sexo:"Masculino",fechaDeNacimiento:"1960-11-11", foto:"assets/img/actorDefault.jpg",paisDeOrigen:{nombre:"Argentina", capital:"Buenos Aires", bandera:"" }},
      {id:2,nombre:"María",apellido:"Gonzalez",sexo:"Femenino",fechaDeNacimiento:"1975-11-11", foto:"assets/img/actorDefault.jpg",paisDeOrigen:{nombre:"Argentina", capital:"Buenos Aires", bandera:"" }},
    ];
  }

  getActores() {
    return this.listaActores;
  }


  devolverProximoId() {
    return this.listaCompleta.length + 1;
  }

  actualizarLista(){
    this.listaActores.next(this.listaCompleta);
  }

  //Filtra la lista de actores por id
  filtrarActoresPorId(listaId:number[]) {
    let listaFiltrada = this.listaCompleta.filter( actor => {

      let incluirEnLista = false;

      for(let id of listaId) {
        if(actor.id == id) {
          incluirEnLista = true;
          break;
        }
      }

      return incluirEnLista;
    });

    this.listaActores.next(listaFiltrada);

  }

  agregarActor(actor:Actor) {
    this.listaCompleta.push(actor);
  }
}
