import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Modulos

import { SharedModule } from './shared/shared.module';

// Componentes

import { AgregarEditarAsignacionesComponent } from './components/agregar-editar-asignaciones/agregar-editar-asignaciones.component';
import { ListadoAsignacionesComponent } from './components/listado-asignaciones/listado-asignaciones.component';
import { VerAsignacionesComponent } from './components/ver-asignaciones/ver-asignaciones.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomMatPaginatorIntl } from './paginator-es';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { NavbarComponent } from './components/navbar/navbar.component';
import { InicioSesionComponent } from './components/inicio-sesion/inicio-sesion.component';

@NgModule({
  declarations: [
    AppComponent,
    AgregarEditarAsignacionesComponent,
    ListadoAsignacionesComponent,
    VerAsignacionesComponent,
    NavbarComponent,
    InicioSesionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [{
    provide: MatPaginatorIntl,
    useClass: CustomMatPaginatorIntl
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
