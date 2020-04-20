import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MustMatch } from './must-match.validator';
import { AuthenticationService } from '../authentication.service'


@Component({
  selector: 'sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  public signUpForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private authService: AuthenticationService
  ) { }

  ngOnInit(): void {
    this.initSignUpForm();
  }

  private initSignUpForm(): void {
    this.signUpForm = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required],
      confirmPassword: [null, Validators.required]
    }, { validator: MustMatch('password', 'confirmPassword') });
  }

  public signUp() {
    if (this.signUpForm.valid) {
      const authData = {
        email: this.signUpForm.controls['email'].value,
        password: this.signUpForm.controls['password'].value
      } //napisac model
      this.authService.signUp(authData)
    }
  }


}
