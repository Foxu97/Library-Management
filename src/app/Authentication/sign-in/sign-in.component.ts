import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AuthenticationService } from '../authentication.service'
import { authData } from '../../Shared/Models/authData';
@Component({
  selector: 'sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss', '../auth-form.scss']
})
export class SignInComponent implements OnInit {
  public signInForm: FormGroup

  constructor(
    private fb: FormBuilder,
    private authService: AuthenticationService
  ) { }

  ngOnInit(): void {
    this.initSignInForm();
  }

  private initSignInForm(): void {
    this.signInForm = this.fb.group({
      email: [null, [Validators.required]],
      password: [null, [Validators.required]]
    });
  }

  public signIn() {
    if (this.signInForm.valid) {
      const authData: authData = {
        email: this.signInForm.controls['email'].value,
        password: this.signInForm.controls['password'].value
      }
      this.authService.signIn(authData).subscribe(res => console.log(res))
    }
  }

}
