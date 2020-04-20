import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from '@angular/router';

export interface authData {
  email: string,
  password: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private router: Router,
    private auth: AngularFireAuth
  ) { }

  public signUp(authData: authData): void {
    const {email, password} = authData;
    this.auth.createUserWithEmailAndPassword(email, password).then(res => {
      console.log(res)
    });
  }
}
