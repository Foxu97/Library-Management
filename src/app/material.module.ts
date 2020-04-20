import { NgModule } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {  MatFormFieldModule } from '@angular/material/form-field'

@NgModule({
    imports: [
        MatToolbarModule,
        MatIconModule,
        MatFormFieldModule

    ],
    exports: [
        MatToolbarModule,
        MatIconModule,
        MatFormFieldModule
    ]
})
export class MaterialModule { }
