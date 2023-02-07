import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Componentes

import { AgregarEditarAsignacionesComponent } from './components/agregar-editar-asignaciones/agregar-editar-asignaciones.component';
import { ListadoAsignacionesComponent } from './components/listado-asignaciones/listado-asignaciones.component';
import { VerAsignacionesComponent } from './components/ver-asignaciones/ver-asignaciones.component';

const routes: Routes = [
  { path: '', redirectTo: 'ListadoAsignaciones', pathMatch: 'full'},
  { path: 'ListadoAsignaciones', component: ListadoAsignacionesComponent},
  { path: 'AgregarAsignaciones', component: AgregarEditarAsignacionesComponent},
  { path: 'VerAsignaciones', component: VerAsignacionesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
