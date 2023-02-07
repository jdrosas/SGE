import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Componentes

import { AgregarEditarAsignacionesComponent } from './components/agregar-editar-asignaciones/agregar-editar-asignaciones.component';
import { ListadoAsignacionesComponent } from './components/listado-asignaciones/listado-asignaciones.component';
import { VerAsignacionesComponent } from './components/ver-asignaciones/ver-asignaciones.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Angular Material

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { CustomMatPaginatorIntl } from './paginator-es';
import { MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [
    AppComponent,
    AgregarEditarAsignacionesComponent,
    ListadoAsignacionesComponent,
    VerAsignacionesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    MatSortModule,
    MatIconModule,
    MatTooltipModule
  ],
  providers: [{
    provide: MatPaginatorIntl,
    useClass: CustomMatPaginatorIntl
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
