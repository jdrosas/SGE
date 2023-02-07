import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Componentes

import { AgregarEditarAsignacionesComponent } from './components/agregar-editar-asignaciones/agregar-editar-asignaciones.component';
import { ListadoAsignacionesComponent } from './components/listado-asignaciones/listado-asignaciones.component';
import { VerAsignacionesComponent } from './components/ver-asignaciones/ver-asignaciones.component';

const routes: Routes = [
  // Rutas cuando se ingresa la url sola direcciona directamente al listado asignaciones
  { path: '', redirectTo: 'ListadoAsignaciones', pathMatch: 'full' },

  // Ruta del listado de asignaciones
  { path: 'ListadoAsignaciones', component: ListadoAsignacionesComponent },

  // Rutas de agregar asignaciones
  { path: 'AgregarAsignaciones', component: AgregarEditarAsignacionesComponent },

  // Rutas de ver asignaciones
  { path: 'VerAsignaciones/:id', component: VerAsignacionesComponent },

  // Rutas de editar asignaciones
  { path: 'EditarAsignaciones/:id', component: AgregarEditarAsignacionesComponent },

  // Rutas cuando se ingresa una ruta que no encuentra se dirige a la ruta de Listado Asignaciones
  { path: '**', redirectTo: 'ListadoAsignaciones', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
