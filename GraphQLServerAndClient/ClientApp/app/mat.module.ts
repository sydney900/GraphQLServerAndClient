import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatInputModule, MatFormFieldModule, MatIconModule, MatListModule } from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatInputModule, MatFormFieldModule, MatIconModule, MatListModule],
  exports: [MatButtonModule, MatInputModule, MatFormFieldModule, MatIconModule, MatListModule],
})
export class MaterialModule { }
