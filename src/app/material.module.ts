import { NgModule } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatButtonModule } from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
    imports: [
        MatToolbarModule,
        MatIconModule,
        MatFormFieldModule,
        MatButtonModule,
        MatSelectModule

    ],
    exports: [
        MatToolbarModule,
        MatIconModule,
        MatFormFieldModule,
        MatButtonModule,
        MatSelectModule
    ]
})
export class MaterialModule { }
