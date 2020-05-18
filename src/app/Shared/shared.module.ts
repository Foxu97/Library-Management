import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({

  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    MatTabsModule
  ],
  exports: [
    MatProgressSpinnerModule,
    MatTabsModule,
    CommonModule
  ],
  declarations: [

  ]
})
export class SharedModule { }
