import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import {PaisesService} from '../../servicios/paises.service';


@Component({
  selector: 'app-tablapaises',
  templateUrl: './tablapaises.component.html',
  styleUrls: ['./tablapaises.component.css']
})
export class TablapaisesComponent implements OnInit {

  @Input() listadoParaMostrar;

  @Output() paisSeleccionado: EventEmitter<any>= new EventEmitter<any>();

  pruebaPaises;

  listadoPaises;

  constructor(private paisesService:PaisesService) {
    this.paisesService.devolverListado().subscribe( listado =>{
      this.listadoPaises = listado;
    });
  }

  ngOnInit(): void {


  }

  MostrarDetalles(pais) {
    this.paisSeleccionado.emit(pais);
  }



}
