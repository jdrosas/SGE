import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarEditarAsignacionesComponent } from './agregar-editar-asignaciones.component';

describe('AgregarEditarAsignacionesComponent', () => {
  let component: AgregarEditarAsignacionesComponent;
  let fixture: ComponentFixture<AgregarEditarAsignacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarEditarAsignacionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarEditarAsignacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
