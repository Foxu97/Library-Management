import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import * as fromApp from '../../../app.reducer';
@Component({
  selector: 'loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {
  isLoading$: Observable<boolean>
  constructor(
    private store: Store<fromApp.State>
  ) { }

  ngOnInit(): void {
    this.isLoading$ = this.store.select(fromApp.getIsLoading)
  }

}
