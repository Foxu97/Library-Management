import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { AuthenticationService } from '../../../Authentication/authentication.service';
import * as fromApp from '../../../app.reducer';
@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isAuth$: Observable<boolean>

  constructor(
    private store: Store<fromApp.State>,
    private authService: AuthenticationService
  ) { }

  ngOnInit(): void {
    this.isAuth$ = this.store.select(fromApp.getIsAuth);
  }
  public logout() {
    this.authService.signOut();
  }

}
