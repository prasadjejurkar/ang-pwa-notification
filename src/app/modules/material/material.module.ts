import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';





const matComponents = [
  MatToolbarModule,
  MatSnackBarModule,
  MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatIconModule
];

@NgModule({
  // declarations: [matComponents],
  imports: [matComponents],
  exports: [matComponents]
})
export class MaterialModule { }
