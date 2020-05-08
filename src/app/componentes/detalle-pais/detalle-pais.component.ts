
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-detalle-pais',
  templateUrl: './detalle-pais.component.html',
  styleUrls: ['./detalle-pais.component.css']
})
export class DetallePaisComponent implements OnInit {

  @Output() paisEliminar: EventEmitter<any>= new EventEmitter<any>();
  @Input() paisSeleccionado;


  constructor() { }

  ngOnInit(): void {
  }

  deshabilitarPais () {
    this.paisEliminar.emit(this.paisSeleccionado);
  }

}
