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
    console.log(this.http.get("https://restcountries.eu/rest/v2"));
    return this.http.get("https://restcountries.eu/rest/v2"); //hago la peticion a nuestra api
  }


}
