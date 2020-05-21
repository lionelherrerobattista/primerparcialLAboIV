import { Component, OnInit } from '@angular/core';
import { Pais } from 'src/app/clases/pais';
import { Pelicula } from 'src/app/clases/peliculas';
import { SalaDeCineService } from 'src/app/servicios/sala-de-cine.service';
import { SalaDeCine } from 'src/app/clases/sala-de-cine';

@Component({
  selector: 'app-cine-alta',
  templateUrl: './cine-alta.component.html',
  styleUrls: ['./cine-alta.component.css']
})
export class CineAltaComponent implements OnInit {

  id:number;
  nombre:string;
  imagen:string;
  pais:Pais;
  peliculas:Pelicula[];
  fechaDeEstreno:string;

  constructor(private salaDeCineService:SalaDeCineService) {
    this.peliculas = []
  }

  ngOnInit(): void {
  }

  cargarCine() {

    let cine;
    let id;
    let peliculas = []

    if(this.pais != undefined) {

      console.log("Cargo");

      id= this.salaDeCineService.devolverProximoId();

      for(let auxPelicula of this.peliculas) {
        peliculas.push({fecha:this.fechaDeEstreno, pelicula:auxPelicula});
      }

      cine = new SalaDeCine(id, this.nombre, "", this.pais, peliculas);

      this.salaDeCineService.agregarcine(cine);

    } else {
      console.log("Error");
    }


  }

  tomarPais(pais:Pais){
    this.pais = pais;
  }

  tomarPelicula(pelicula:Pelicula){
    this.peliculas.push(pelicula);
  }

}
