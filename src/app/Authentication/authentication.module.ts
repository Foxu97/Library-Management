import { NgModule } from '@angular/core';
import { AngularFireAuthModule } from "@angular/fire/auth";
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { SharedModule } from '../Shared/shared.module';
import { ROUTES } from '../Shared/Models/Routing.enum'
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';


@NgModule({
    declarations: [
        SignInComponent,
        SignUpComponent
    ],
    imports: [
        AngularFireAuthModule,
        RouterModule.forChild([
            { path: ROUTES.SIGN_IN, component: SignInComponent },
            { path: ROUTES.SIGN_UP, component: SignUpComponent }

        ]),
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatDividerModule,
        MatChipsModule,
        MatCardModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule
    ]

})
export class AuthenticationModule { }
