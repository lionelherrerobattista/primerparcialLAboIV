import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  url = environment.urlpaises;
  listadoPaises;

  constructor(private http:HttpClient) { }

  obtenerPaises() {
    console.log(this.http.get(environment.urlpaises));
    return this.http.get(environment.urlpaises); //hago la peticion a nuestra api
  }

  cargarListado() {


    this.obtenerPaises().subscribe(resultado => {

      console.log(resultado);

      this.listadoPaises = resultado;

      console.log(this.listadoPaises);


    }, error => {
        console.log('Error');
    });


  }

  devolverListado() {

    return this.listadoPaises;

  }




}
