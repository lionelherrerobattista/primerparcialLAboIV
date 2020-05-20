import { Component, OnInit } from '@angular/core';
import { Actor } from 'src/app/clases/actor';
import { PeliculaService } from 'src/app/servicios/pelicula.service';
import { Pelicula } from 'src/app/clases/peliculas';

@Component({
  selector: 'app-pelicula-alta',
  templateUrl: './pelicula-alta.component.html',
  styleUrls: ['./pelicula-alta.component.css']
})
export class PeliculaAltaComponent implements OnInit {

  nombre:string;
  tipo:string;
  fechaDeEstreno:string;
  cantidadDePublico:number;
  actores:Actor[];


  constructor(private peliculasService:PeliculaService) {
    this.actores = [];
   }

  ngOnInit(): void {

  }

  cargarPelicula() {
    let id= this.peliculasService.traerPeliculas().length + 1;
    let foto = ''
    let idActores = []

    //Crear el array de id
    for(let actor of this.actores) {
      idActores.push(actor.id);
    }

    //Crear la película
    let peliculaNueva = new Pelicula(id, this.nombre, this.tipo, this.fechaDeEstreno, this.cantidadDePublico, foto, idActores);

    console.log(peliculaNueva);

    //Guardar la película
    if(peliculaNueva != undefined) {

      this.peliculasService.agregarPelicula(peliculaNueva);
    }

    this.actores = [];
  }

  tomarActor(actor:Actor) {
    this.actores.push(actor);

  }

}
