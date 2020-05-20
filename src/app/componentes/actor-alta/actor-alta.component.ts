import { Component, OnInit, Input } from '@angular/core';
import { Actor } from 'src/app/clases/actor';
import { ActorService } from 'src/app/servicios/actor.service';
import { Pais } from 'src/app/clases/pais';

@Component({
  selector: 'app-actor-alta',
  templateUrl: './actor-alta.component.html',
  styleUrls: ['./actor-alta.component.css']
})
export class ActorAltaComponent implements OnInit {

  paisParaMostrar;
  nombre:string;
  apellido:string;
  sexo:string;
  fechaDeNacimiento:string;
  foto:string;
  @Input() paisDeOrigen:Pais;

  constructor(private actorService:ActorService) {
    this.foto = "/assets/img/actorDefault.jpg";
   }

  ngOnInit(): void {
  }

  cargarActor() {
    let actorNuevo;
    let id;


    console.log(this.paisDeOrigen)

    if(this.paisDeOrigen != undefined) {

      id = this.actorService.getActores().length + 1;

      actorNuevo = new Actor(id, this.nombre, this.apellido, this.sexo, this.fechaDeNacimiento, this.foto, this.paisDeOrigen);

      this.actorService.agregarActor(actorNuevo);

    }

  }


  TomarPaisParaMostrar(pais) {

    this.paisParaMostrar = pais;
    this.paisDeOrigen = this.paisParaMostrar;
  }

}
