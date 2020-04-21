import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from '@angular/router';
import { from, Observable } from 'rxjs';
import { authData } from '../Shared/Models/authData';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private router: Router,
    private auth: AngularFireAuth
  ) { }

  public signUp(authData: authData): Observable<any> {
    const { email, password } = authData;
    return from(this.auth.createUserWithEmailAndPassword(email, password));
  }
  public signIn(authData: authData): Observable<any> {
    const { email, password } = authData;
    return from(this.auth.signInWithEmailAndPassword(email, password));
  }
}
