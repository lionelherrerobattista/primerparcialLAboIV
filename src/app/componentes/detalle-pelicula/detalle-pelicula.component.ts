import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pelicula } from 'src/app/clases/peliculas';
import { PeliculaService } from '../../servicios/pelicula.service';
@Component({
  selector: 'app-detalle-pelicula',
  templateUrl: './detalle-pelicula.component.html',
  styleUrls: ['./detalle-pelicula.component.css']
})
export class DetallePeliculaComponent implements OnInit {

  @Output() peliculaEliminar: EventEmitter<any>= new EventEmitter<any>();
  @Input() peliculaSeleccionada:Pelicula;

  constructor(private peliculaService:PeliculaService) { }

  ngOnInit(): void {
  }

  borrarPelicula () {
    this.peliculaEliminar.emit(this.peliculaSeleccionada);
  }

}
