import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({

  imports: [
    CommonModule,
    MatProgressSpinnerModule
  ],
  exports: [
    MatProgressSpinnerModule,
    CommonModule
  ],
  declarations: [

  ]
})
export class SharedModule {}
