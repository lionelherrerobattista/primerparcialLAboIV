import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Pais } from '../clases/pais';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  url = environment.urlpaises;
  listadoPaises:Observable<Pais[]>;
  paisesDeshabilitados:Pais[];
  listado;

  constructor(private http:HttpClient) {

    this.paisesDeshabilitados = [];

    this.cargarListado();
  }

  ///Carga el listado de paises y devuelve una promesa
  cargarListado() {

  // this.listadoPaises = new Promise((resolve, reject) => {this.http.get<any[]>(environment.urlpaises).subscribe( respuesta => {
    this.listadoPaises = new Observable((observer) => {this.http.get<any[]>(environment.urlpaises).subscribe( respuesta => {
    let pais;
    let auxListado:Pais[] = [];

    console.log(respuesta);
    console.log("entro");

    for(let auxPais of respuesta) {

      pais = new Pais(auxPais.name, auxPais.capital, auxPais.flag);

      auxListado.push(pais);
    }

    setInterval(() => {

      //Busco los paises deshabilitados y los saco de la lista
      if(this.paisesDeshabilitados.length > 0) {

        for(let paisDeshabilitado of this.paisesDeshabilitados) {
          for(let i=0; i < auxListado.length; i++) {
            if(auxListado[i].nombre == paisDeshabilitado.nombre) {

              console.log(i);
              auxListado.splice(i, 1);
              console.log(auxListado)
              break;

            }
          }
        }
      }

      observer.next(auxListado);

    }, 1000 * 2);

     }, error => { observer.error(error)})

    });

  }

  ///Devuelve el listado de paises
  devolverListado() {

    return this.listadoPaises;

  }

  deshabiliarPais(pais) {
    this.paisesDeshabilitados.push(pais);
    // this.cargarListado();
  }




}
