import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

import { AuthenticationService } from './Authentication/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  // items$: Observable<any[]>
  constructor(
    private firestore: AngularFirestore,
    private authService: AuthenticationService,
    private translate: TranslateService
  ) {

  }
  ngOnInit() {
    this.translate.setDefaultLang('pl');
    this.authService.initAuthListener();
    // this.items$ = this.firestore.collection('availableExercises').valueChanges();
  }
  title = 'Library-Management';
}
