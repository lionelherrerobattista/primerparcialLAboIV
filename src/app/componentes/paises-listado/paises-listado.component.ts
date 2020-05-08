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

  constructor(private paisesService:PaisesService) { }

  ngOnInit(): void {

  }

  TomarPaisParaMostrar(pais) {

    this.paisParaMostrar = pais;
  }

  TomarPeliculaParaEliminar(pais) {
    this.paisParaEliminar = pais;
  }


}
