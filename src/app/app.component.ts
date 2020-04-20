import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import {MatToolbarModule} from '@angular/material/toolbar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  items$: Observable<any[]>
  constructor(private firestore: AngularFirestore) {

  }
  ngOnInit() {
    this.items$ = this.firestore.collection('availableExercises').valueChanges();
  }
  title = 'Library-Management';
}
