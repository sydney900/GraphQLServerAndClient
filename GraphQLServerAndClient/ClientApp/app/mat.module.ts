import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatInputModule, MatFormFieldModule, MatIconModule, MatListModule, MatCardModule } from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatInputModule, MatFormFieldModule, MatIconModule, MatListModule, MatCardModule],
  exports: [MatButtonModule, MatInputModule, MatFormFieldModule, MatIconModule, MatListModule, MatCardModule],
})
export class MaterialModule { }
