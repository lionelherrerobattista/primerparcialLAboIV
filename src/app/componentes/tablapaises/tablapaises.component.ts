import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {PaisesService} from '../../servicios/paises.service';

@Component({
  selector: 'app-tablapaises',
  templateUrl: './tablapaises.component.html',
  styleUrls: ['./tablapaises.component.css']
})
export class TablapaisesComponent implements OnInit {

  listadoPaises;

  @Output() paisSeleccionado: EventEmitter<any>= new EventEmitter<any>();

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

  MostrarDetalles(pais) {
    this.paisSeleccionado.emit(pais);
  }


}
