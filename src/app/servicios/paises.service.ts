import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Pais } from '../clases/pais';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { map, first } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  url = environment.urlpaises;
  listadoPaises:Subject<Pais[]>;
  listadoOriginal:Pais[];
  listadoFiltrado:Pais[];
  paisesDeshabilitados:Pais[];


  constructor(private http:HttpClient) {

    this.listadoPaises = new Subject<Pais[]>();
    this.paisesDeshabilitados = [];
    this.listadoOriginal = [];
    this.listadoFiltrado = [];

  }

  actualizarListado() {

    this.getPaises().subscribe( listado => {

      let pais:Pais;

      //Mapear la lista
      for(let auxPais of listado) {

        pais = new Pais(auxPais.name, auxPais.capital, auxPais.flag);

        this.listadoOriginal.push(pais);
      }

      //Aplicar filtro si corresponde
      if(this.paisesDeshabilitados.length > 0) {
        this.listadoFiltrado = this.filtarPaises();
        this.listadoPaises.next(this.listadoFiltrado);
      } else {
        this.listadoPaises.next(this.listadoOriginal);
      }

    });
  }

  getPaises() {

    return this.http.get<any[]>(this.url); //Devuelve una sola respuesta
  }

  ///Filtra los paises de acuerdo a la lista de paises que fueron deshabilitados
  ///Devuelve lista filtrada
  filtarPaises():Pais[] {

      let listadoFiltrado = this.listadoOriginal.filter( pais => {
        let incluirEnLista = true;

        for(let paisDeshabilitado of this.paisesDeshabilitados) {
          if(pais.nombre == paisDeshabilitado.nombre) {
            incluirEnLista = false;
            break;
          }
        }
        return incluirEnLista;
      })

    return listadoFiltrado;
  }


  ///Devuelve el listado de paises
  devolverListado() {

    return this.listadoPaises;

  }

  //Agrega un país a la lista de paises deshabilitados
  deshabiliarPais(pais) {
    this.paisesDeshabilitados.push(pais);
    this.actualizarListado();
  }




}
