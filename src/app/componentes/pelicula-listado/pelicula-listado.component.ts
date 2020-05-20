import { Component, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/clases/peliculas';
import { PeliculaService } from '../../servicios/pelicula.service';

@Component({
  selector: 'app-pelicula-listado',
  templateUrl: './pelicula-listado.component.html',
  styleUrls: ['./pelicula-listado.component.css']
})
export class PeliculaListadoComponent implements OnInit {

  peliculaParaMostrar:Pelicula;
  peliculaParaEliminar:Pelicula;


  constructor(private peliculaService:PeliculaService) { }

  ngOnInit(): void {
  }

  TomarPeliculaParaMostrar(pelicula:Pelicula) {

    this.peliculaParaMostrar = pelicula;
  }

  TomarPeliculaParaEliminar(pelicula:Pelicula) {
    this.peliculaService.borrarPelicula(pelicula.id);
  }



}
