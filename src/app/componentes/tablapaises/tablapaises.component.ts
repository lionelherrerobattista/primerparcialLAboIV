import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import {PaisesService} from '../../servicios/paises.service';

@Component({
  selector: 'app-tablapaises',
  templateUrl: './tablapaises.component.html',
  styleUrls: ['./tablapaises.component.css']
})
export class TablapaisesComponent implements OnInit {

  listadoPaises;
  @Input() paisDeshabilitar;

  @Output() paisSeleccionado: EventEmitter<any>= new EventEmitter<any>();

  constructor(private paisesService:PaisesService) { }

  ngOnInit(): void {



    console.log(this.paisesService.listadoPaises);

    this.paisesService.obtenerPaises().subscribe(resultado => {

      // console.log(resultado);

      this.listadoPaises = resultado;

      // console.log(this.listadoPaises);


    }, error => {
        console.log('Error');
    });
  }

  MostrarDetalles(pais) {
    this.paisSeleccionado.emit(pais);
  }

  borrarPais(name) {

    for(let i = 0; i < this.listadoPaises.length; i++) {
      if(this.listadoPaises[i].name == name) {
        this.listadoPaises.splice(i, 1);
        break;
      }
    }

  }


}
