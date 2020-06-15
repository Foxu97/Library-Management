import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, combineLatest, from, of } from 'rxjs';
import { tap, map, mergeMap, take, last, first, switchMap, merge } from 'rxjs/operators';
import { AuthenticationService } from 'src/app/Authentication/authentication.service';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../app.reducer';
import * as UI from '../../Shared/UI/ui.actions';
@Injectable({
  providedIn: 'root'
})
export class LibraryAssetsService {
  constructor(
    private db: AngularFirestore,
    private authService: AuthenticationService,
    private store: Store<fromRoot.State>,
  ) { }
  public getAllAssets(): Observable<any> {
    this.store.dispatch(new UI.StartLoading());

    return this.db.collection('assetsTypes').valueChanges({ idField: 'id' }).pipe(
      switchMap((assets: any) => {
        const id$ = this.authService.getUserID();
        return combineLatest(from(assets), id$);
      }),
      switchMap((res: any) => {
        const { types } = res[0];
        const userId = res[1];
        const assetsObservables = [];
        types.forEach(type => {
          let obs = this.db.collection('assets').doc(userId).collection(type).valueChanges({ idField: 'id' });
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
        this.store.dispatch(new UI.StopLoading())
        return map
      })
    )
  }

  public addAsset(assetType, data) {
    this.store.dispatch(new UI.StartLoading())
    return this.authService.getUserID().pipe(
      map(userId => {
        this.store.dispatch(new UI.StopLoading())
        return this.db.collection('assets').doc(userId).collection(assetType).add(data)
      })
    )
  }

  public deleteAsset(assetType, id) {
    this.store.dispatch(new UI.StartLoading());
    return this.authService.getUserID().pipe(
      map(userId => {
        this.store.dispatch(new UI.StopLoading())
        return this.db.collection('assets').doc(userId).collection(assetType).doc(id).delete();
      })
    )
  }

  public editAsset(assetType, id, data) {
    this.store.dispatch(new UI.StartLoading());
    return this.authService.getUserID().pipe(
      map(userId => {
        this.store.dispatch(new UI.StopLoading());
        return this.db.collection('assets').doc(userId).collection(assetType).doc(id).set(data);
      })
    )
  }
}
