import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from '@angular/router';
import { from, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { authData } from '../Shared/Models/authData';
import { Store } from '@ngrx/store';
import * as fromRoot from '../app.reducer';
import * as UI from '../Shared/UI/ui.actions';
import * as Auth from './authentication.actions';
import { ROUTES } from '../Shared/Models/Routing.enum';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private router: Router,
    private authAf: AngularFireAuth,
    private store: Store<fromRoot.State>
  ) { }

  public signUp(authData: authData): Observable<any> {
    this.store.dispatch(new UI.StartLoading())
    const { email, password } = authData;
    return from(this.authAf.createUserWithEmailAndPassword(email, password)).pipe(
      tap(() => this.store.dispatch(new UI.StopLoading())
      )
    );
  }
  public signIn(authData: authData): Observable<any> {
    this.store.dispatch(new UI.StartLoading())
    const { email, password } = authData;
    return from(this.authAf.signInWithEmailAndPassword(email, password)).pipe(
      tap(() => this.store.dispatch(new UI.StopLoading())
      )
    );
  }
  public initAuthListener() {
    this.authAf.authState.pipe(
      tap((user) => {
        console.log("user", user)
        if (user) {
          console.log('isUser')
          this.store.dispatch(new Auth.SetAuthenticated());
          this.router.navigate([ROUTES.DEFAULT]);
        } else {
          this.store.dispatch(new Auth.SetUnauthenticated());
          this.router.navigate([ROUTES.AUTH + "/" + ROUTES.SIGN_IN]);
        }
      })
    ).subscribe()
  }
  public signOut() {
    this.authAf.signOut();
  }
}
