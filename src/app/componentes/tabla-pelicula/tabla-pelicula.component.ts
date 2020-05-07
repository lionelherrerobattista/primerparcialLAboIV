import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Pelicula } from 'src/app/clases/peliculas';
import {PeliculaService} from '../../servicios/pelicula.service';

@Component({
  selector: 'app-tabla-pelicula',
  templateUrl: './tabla-pelicula.component.html',
  styleUrls: ['./tabla-pelicula.component.css']
})
export class TablaPeliculaComponent implements OnInit {

  @Output() peliculaSeleccionada: EventEmitter<any>= new EventEmitter<any>();

  listadoPeliculas:Pelicula[];

  constructor(private peliculaService:PeliculaService) { }

  ngOnInit(): void {
    this.cargarListado();
  }

  cargarListado() {

    this.listadoPeliculas = this.peliculaService.traerPeliculas();

  }

  MostrarDetalles(pelicula:Pelicula) {
    this.peliculaSeleccionada.emit(pelicula);
  }

}
