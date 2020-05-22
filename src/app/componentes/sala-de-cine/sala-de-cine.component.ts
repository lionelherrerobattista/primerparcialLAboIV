import { Component, OnInit } from '@angular/core';
import { SalaDeCine } from 'src/app/clases/sala-de-cine';
import { SalaDeCineService } from 'src/app/servicios/sala-de-cine.service';
import { Pelicula } from 'src/app/clases/peliculas';

@Component({
  selector: 'app-sala-de-cine',
  templateUrl: './sala-de-cine.component.html',
  styleUrls: ['./sala-de-cine.component.css']
})
export class SalaDeCineComponent implements OnInit {

  listadoCines:SalaDeCine[];
  listadoPeliculas:any[];
  peliculaParaDetalle;
  busquedaNombre:string;
  busquedaPais:string;


  constructor(private salaDeCineService:SalaDeCineService) { }

  ngOnInit(): void {

    this.salaDeCineService.getCines().subscribe( lista => {
      this.listadoCines = lista;
    });

    this.salaDeCineService.actualizarLista();

  }

  mostrarDetallePeliculas(cine:SalaDeCine) {
    this.listadoPeliculas = cine.pelicula;
  }

  mostrarPelicula(pelicula:any) {
    this.peliculaParaDetalle = pelicula;
  }

  deshabilitarSala(sala:SalaDeCine) {
    this.salaDeCineService.deshabilitarSala(sala);
  }

  buscarPorNombre() {
    this.salaDeCineService.filtrarPorNombre(this.busquedaNombre);
  }

  buscarPorPais() {
    this.salaDeCineService.filtrarPorPais(this.busquedaPais);
  }

}
