import { NgModule } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {  MatFormFieldModule } from '@angular/material/form-field'
import { MatButtonModule } from '@angular/material/button';
@NgModule({
    imports: [
        MatToolbarModule,
        MatIconModule,
        MatFormFieldModule,
        MatButtonModule

    ],
    exports: [
        MatToolbarModule,
        MatIconModule,
        MatFormFieldModule,
        MatButtonModule
    ]
})
export class MaterialModule { }
