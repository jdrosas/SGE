import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SGEService } from 'src/app/services/sge.service';

@Component({
  selector: 'app-agregar-editar-asignaciones',
  templateUrl: './agregar-editar-asignaciones.component.html',
  styleUrls: ['./agregar-editar-asignaciones.component.css']
})
export class AgregarEditarAsignacionesComponent {
  loading: boolean = false;
  form: FormGroup

  // Valores requeridos
  constructor(private fb: FormBuilder) { 
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      tipo: ['', Validators.required],
      marca: ['', Validators.required],
      modelo: ['', Validators.required],
      observaciones: [''],
    })
  }

  // Creacion del metodo

  AgregarAsignacion() {
    // const nombre = this.form.get('nombre')?.value;   --Otra forma
    const nombre = this.form.value.nombre;
    
    // Creacion de Objeto
    const asignacion: SGEService = {
      nombre: this.form.value.nombre,
      tipo: this.form.value.tipo,
      marca: this.form.value.marca,
      modelo: this.form.value.modelo,
      observaciones: this.form.value.observaciones
    }

    console.log(asignacion)
  }

}
