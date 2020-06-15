import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { TranslateService } from '@ngx-translate/core';

import { AuthenticationService } from './Authentication/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private authService: AuthenticationService,
    private translate: TranslateService
  ) {

  }
  ngOnInit() {
    this.translate.setDefaultLang('pl');
    this.authService.initAuthListener();
  }
  title = 'Library-Management';
}
