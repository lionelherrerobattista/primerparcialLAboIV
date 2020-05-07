import { Component, OnInit } from '@angular/core';
import {PaisesService} from '../../servicios/paises.service';

@Component({
  selector: 'app-paises-listado',
  templateUrl: './paises-listado.component.html',
  styleUrls: ['./paises-listado.component.css']
})
export class PaisesListadoComponent implements OnInit {

  listadoPaises;

  constructor(private paisesService:PaisesService) { }

  ngOnInit(): void {

    this.paisesService.obtenerPaises().subscribe(resultado => {

      console.log(resultado);

      this.listadoPaises = resultado;

      console.log(this.listadoPaises);


    }, error => {
        console.log('Error');
    });
  }

}
