import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { SGE } from 'src/app/interfaces/SGE';

const list_asignaciones: SGE[] = [
  { nombre: 'Optiplex', tipo: 'Portatil', marca: 'Dell', modelo: '8400', observaciones: 'Nuevo'},
  { nombre: 'Optiplex', tipo: 'Portatil', marca: 'Dell', modelo: '8400', observaciones: 'Nuevo'},
  { nombre: 'Optiplex', tipo: 'Portatil', marca: 'Hp', modelo: '8400', observaciones: 'Nuevo'},
  { nombre: 'Optiplex', tipo: 'Portatil', marca: 'Dell', modelo: '8400', observaciones: 'Nuevo'},
  { nombre: 'Optiplex', tipo: 'Portatil', marca: 'Hp', modelo: '1234', observaciones: 'Nuevo'},
  { nombre: 'Optiplex', tipo: 'Portatil', marca: 'Dell', modelo: '8400', observaciones: 'Nuevo'},
  { nombre: 'Optiplex', tipo: 'Portatil', marca: 'Dell', modelo: '8400', observaciones: 'Nuevo'},
  { nombre: 'Optiplex', tipo: 'Portatil', marca: 'Hp', modelo: '8400', observaciones: 'Nuevo'},
  { nombre: 'Optiplex', tipo: 'Portatil', marca: 'Dell', modelo: '8400', observaciones: 'Nuevo'},
  { nombre: 'Optiplex', tipo: 'Portatil', marca: 'Dell', modelo: '8400', observaciones: 'Nuevo'},
  { nombre: 'Optiplex', tipo: 'Portatil', marca: 'Dell', modelo: '8400', observaciones: 'Nuevo'},
  { nombre: 'Optiplex', tipo: 'Portatil', marca: 'Dell', modelo: '8400', observaciones: 'Nuevo'},
  { nombre: 'Optiplex', tipo: 'Portatil', marca: 'Dell', modelo: '8400', observaciones: 'Nuevo'}
];

@Component({
  selector: 'app-listado-asignaciones',
  templateUrl: './listado-asignaciones.component.html',
  styleUrls: ['./listado-asignaciones.component.css']
})
export class ListadoAsignacionesComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['nombre', 'tipo', 'marca', 'modelo', 'observaciones'];
  dataSource = new MatTableDataSource<SGE>(list_asignaciones);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor() { }

  ngOnInit(): void {

  }
  //Paginación
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  //Filtro
  filtrar(event: Event) {
    const filtro = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filtro.trim().toLowerCase();
  }

}
