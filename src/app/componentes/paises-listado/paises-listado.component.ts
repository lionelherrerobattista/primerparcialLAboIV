import { Component, OnInit } from '@angular/core';
import {PaisesService} from '../../servicios/paises.service';

@Component({
  selector: 'app-paises-listado',
  templateUrl: './paises-listado.component.html',
  styleUrls: ['./paises-listado.component.css']
})
export class PaisesListadoComponent implements OnInit {


  paisSeleccionado;
  paisParaMostrar;
  paisParaEliminar;
  listadoPaises

  constructor(private paisesService:PaisesService) {

    this.listadoPaises = this.paisesService.devolverListado();
   }

  ngOnInit(): void {

  }

  TomarPaisParaMostrar(pais) {

    this.paisParaMostrar = pais;
  }

  TomarPeliculaParaEliminar(pais) {
    this.paisesService.deshabiliarPais(pais);
    console.log(this.paisesService.paisesDeshabilitados)
  }


}
