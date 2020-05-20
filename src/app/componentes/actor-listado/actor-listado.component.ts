import { Component, OnInit } from '@angular/core';
import { Actor } from 'src/app/clases/actor';

@Component({
  selector: 'app-actor-listado',
  templateUrl: './actor-listado.component.html',
  styleUrls: ['./actor-listado.component.css']
})
export class ActorListadoComponent implements OnInit {

  actorSeleccionado;
  actorParaMostrar;
  paisParaMostrar;

  constructor() { }

  ngOnInit(): void {
  }

  TomarActorParaMostrar(actor:Actor) {

    this.actorParaMostrar = actor;
    console.log(actor);
    this.paisParaMostrar = actor.paisDeOrigen;
  }

}
