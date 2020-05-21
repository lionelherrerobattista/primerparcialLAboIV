import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BienvenidoComponent } from './componentes/bienvenido/bienvenido.component';
import { BusquedaComponent } from './componentes/busqueda/busqueda.component';
import { PeliculaAltaComponent } from './componentes/pelicula-alta/pelicula-alta.component';
import { ActorAltaComponent } from './componentes/actor-alta/actor-alta.component';
import { ActorListadoComponent } from './componentes/actor-listado/actor-listado.component';
import { PeliculaListadoComponent } from './componentes/pelicula-listado/pelicula-listado.component';
import { TablaPeliculaComponent } from './componentes/tabla-pelicula/tabla-pelicula.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Material
import {MatTableModule} from '@angular/material/table';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import { DetallePeliculaComponent } from './componentes/detalle-pelicula/detalle-pelicula.component';
import {MatInputModule} from '@angular/material/input';
import { MenuComponent } from './componentes/menu/menu.component';
import { PaisesListadoComponent } from './componentes/paises-listado/paises-listado.component';
import {MatRadioModule} from '@angular/material/radio';
import { FormsModule } from '@angular/forms'

import { HttpClientModule } from '@angular/common/http';
import { DetallePaisComponent } from './componentes/detalle-pais/detalle-pais.component';
import { TablapaisesComponent } from './componentes/tablapaises/tablapaises.component';
import { TablaActorComponent } from './componentes/tabla-actor/tabla-actor.component';
import { DetalleActorComponent } from './componentes/detalle-actor/detalle-actor.component';
import { SalaDeCineComponent } from './componentes/sala-de-cine/sala-de-cine.component';
import { CineAltaComponent } from './componentes/cine-alta/cine-alta.component';


@NgModule({
  declarations: [
    AppComponent,
    BienvenidoComponent,
    BusquedaComponent,
    PeliculaAltaComponent,
    ActorAltaComponent,
    ActorListadoComponent,
    PeliculaListadoComponent,
    TablaPeliculaComponent,
    DetallePeliculaComponent,
    MenuComponent,
    PaisesListadoComponent,
    DetallePaisComponent,
    TablapaisesComponent,
    TablaActorComponent,
    DetalleActorComponent,
    SalaDeCineComponent,
    CineAltaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatInputModule,
    MatRadioModule,
    HttpClientModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
