import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Actor } from 'src/app/clases/actor';
import { ActorService } from 'src/app/servicios/actor.service';

@Component({
  selector: 'app-tabla-actor',
  templateUrl: './tabla-actor.component.html',
  styleUrls: ['./tabla-actor.component.css']
})
export class TablaActorComponent implements OnInit {

  @Output() actorSeleccionado: EventEmitter<any>= new EventEmitter<any>();
  listadoActores:Actor[];

  constructor(private actorService:ActorService) {
    this.listadoActores = this.actorService.getActores();
  }

  ngOnInit(): void {
  }

  MostrarDetalles(actor) {
    this.actorSeleccionado.emit(actor);
  }

}
