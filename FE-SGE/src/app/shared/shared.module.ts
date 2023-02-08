import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Angular Material

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressBarModule } from '@angular/material/progress-bar';

// Componentes
import { ProcessComponent } from './process/process.component';

@NgModule({
  declarations: [
    ProcessComponent
  ],
  imports: [
    CommonModule,
    MatSlideToggleModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    MatSortModule,
    MatIconModule,
    MatTooltipModule,
    MatButtonModule,
    MatCardModule,
    MatSnackBarModule,
    MatProgressBarModule
  ],
  exports: [
    MatSlideToggleModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    MatSortModule,
    MatIconModule,
    MatTooltipModule,
    MatButtonModule,
    MatCardModule,
    MatSnackBarModule,
    ProcessComponent,
    MatProgressBarModule
  ]
})
export class SharedModule { }
