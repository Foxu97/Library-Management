import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { AuthenticationService } from '../../../Authentication/authentication.service';
import * as fromApp from '../../../app.reducer';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isAuth$: Observable<boolean>
  languageOptions: string[];
  selectedLanguage: string = "PL"

  constructor(
    private store: Store<fromApp.State>,
    private authService: AuthenticationService,
    private translateService: TranslateService
  ) { }

  ngOnInit(): void {
    this.languageOptions = ['pl', 'en']
    this.isAuth$ = this.store.select(fromApp.getIsAuth);
  }
  public logout() {
    this.authService.signOut();
  }
  public selectLanguage(selectedLan) {
    this.selectedLanguage = selectedLan.toUpperCase();
    this.translateService.use(selectedLan);
  }

}
