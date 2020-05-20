import { Injectable } from '@angular/core';
import { Actor } from '../clases/actor';

@Injectable({
  providedIn: 'root'
})
export class ActorService {

  listaActores:Actor[];

  constructor() {

    this.listaActores = [];

  }

  getActores() {
    return this.listaActores;
  }

  agregarActor(actor:Actor) {
    this.listaActores.push(actor);
  }
}
