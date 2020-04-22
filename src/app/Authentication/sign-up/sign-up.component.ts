import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MustMatch } from './must-match.validator';
import { AuthenticationService } from '../authentication.service'
import { authData } from 'src/app/Shared/Models/authData';


@Component({
  selector: 'sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss', '../auth-form.scss']
})
export class SignUpComponent implements OnInit {
  public signUpForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private authService: AuthenticationService
  ) { }

  ngOnInit(): void {
    this.initSignUpForm();
    this.signUpForm.valueChanges.subscribe(_ => {
      console.log(this.signUpForm)
    })
  }

  private initSignUpForm(): void {
    this.signUpForm = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(6)]],
      confirmPassword: [null, [Validators.required, Validators.minLength(6)]]
    }, { validator: MustMatch('password', 'confirmPassword') });
  }

  public signUp() {
    if (this.signUpForm.valid) {
      const authData: authData = {
        email: this.signUpForm.controls['email'].value,
        password: this.signUpForm.controls['password'].value
      }
      this.authService.signUp(authData).subscribe(res => {
        console.log(res)
      })
    }
  }


}
