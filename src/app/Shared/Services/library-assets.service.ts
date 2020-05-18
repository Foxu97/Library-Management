import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, combineLatest, from, of } from 'rxjs';
import { tap, map, mergeMap, take, last, first, switchMap, merge } from 'rxjs/operators';
import { AuthenticationService } from 'src/app/Authentication/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class LibraryAssetsService {
  constructor(
    private db: AngularFirestore,
    private authService: AuthenticationService,
  ) { }

  public getAllAssets(): Observable<any> {
    return this.db.collection('assetsTypes').valueChanges().pipe(
      switchMap((assets: string[]) => {
        const id$ = this.authService.getUserID();
        return combineLatest(from(assets), id$);
      }),
      switchMap((res: any) => {
        const { types } = res[0];
        const userId = res[1];
        const assetsObservables = [];
        types.forEach(type => {
          let obs = this.db.collection('assets').doc(userId).collection(type).valueChanges();
          assetsObservables.push(of(type))
          assetsObservables.push(obs);
        });
        return combineLatest(assetsObservables);
      }),
      map(assets => {
        const map = new Map();
        for (let i = 0; i < assets.length; i++) {
          if (typeof (assets[i]) === 'string') {
            map.set(assets[i], assets[++i]);
          }
        }
        return map
      })
    )
  }
}
