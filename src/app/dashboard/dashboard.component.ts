import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { LibraryAssetsService } from '../Shared/Services/library-assets.service';
import { LibraryAssets } from '../Shared/Models/libraryAssets';
import { ActivatedRoute } from '@angular/router';
import { tap, map, switchMap } from 'rxjs/operators';
@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  assetsMap$: Observable<Map<string, Object>>;
  constructor(
    private libraryAssetsService: LibraryAssetsService,
  ) { }

  ngOnInit(): void {
    this.assetsMap$ = this.libraryAssetsService.getAllAssets();
  }

}
