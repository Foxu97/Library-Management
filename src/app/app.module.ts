import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SharedModule } from './Shared/shared.module'
import { StoreModule } from '@ngrx/store';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { AuthenticationModule } from './Authentication/authentication.module'
import { MaterialModule } from './material.module';
import { ToastrModule } from 'ngx-toastr';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { HeaderComponent } from './Shared/UI/header/header.component';
import { LoaderComponent } from './Shared/UI/loader/loader.component';
import { reducers } from './app.reducer';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AssetsTabsComponent } from './dashboard/assets-tabs/assets-tabs.component';
import { AssetsTableComponent } from './dashboard/assets-tabs/table/assets-table.component';
import { AddAssetDialogComponent } from './dashboard/assets-tabs/table/add-asset-dialog/add-asset-dialog.component';
import { DeleteAssetDialogComponent } from './dashboard/assets-tabs/table/delete-asset-dialog/delete-asset-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoaderComponent,
    DashboardComponent,
    AssetsTabsComponent,
    AssetsTableComponent,
    AddAssetDialogComponent,
    DeleteAssetDialogComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    MaterialModule,
    AngularFirestoreModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    ToastrModule.forRoot({
      timeOut: 2500,
      positionClass: 'toast-bottom-full-width',
      progressBar: true
    }),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    StoreModule.forRoot(reducers),
    SharedModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}