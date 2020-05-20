import { Component, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/clases/peliculas';
import { ActorService } from 'src/app/servicios/actor.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  peliculaParaMostrar:Pelicula;
  mostrarLista:boolean;

  constructor(private actorService:ActorService) {
    this.mostrarLista = false;
  }

  ngOnInit(): void {
  }

  tomarPeliculaSeleccionada(pelicula:Pelicula) {
    this.peliculaParaMostrar = pelicula;
    this.actorService.filtrarActoresPorId(pelicula.idActores);
    this.mostrarLista = true;

  }

}
