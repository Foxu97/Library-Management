import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LibraryAssetsService } from 'src/app/Shared/Services/library-assets.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'add-asset-dialog',
  templateUrl: './add-asset-dialog.component.html',
  styleUrls: ['./add-asset-dialog.component.scss']
})
export class AddAssetDialogComponent implements OnInit {

  public newAssetForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private libraryAssetsService: LibraryAssetsService,
    private dialogRef: MatDialogRef<AddAssetDialogComponent>,
    public translate: TranslateService
  ) {
    dialogRef.disableClose = true;
  }

  ngOnInit(): void {
    console.log("data to do,", this.data)
    this.initForm(this.data.type, this.data.action)
  }
  initForm(assetType, action) {
    if (action === 'add') {
      switch (assetType) {
        case 'books':
          this.initNewBookForm();
          break;
        case 'games':
          this.initNewGameForm();
          break;
        case 'movies':
          this.initNewMovieForm();
          break;
        case 'series':
          this.initNewSeriesForm();
          break;
      }
    } else if (action === 'edit') {
      switch (assetType) {
        case 'books':
          this.initEditBookForm();
          break;
        case 'games':
          this.initEditGameForm();
          break;
        case 'movies':
          this.initEditMovieForm();
          break;
        case 'series':
          this.initEditSeriesForm();
          break;
      }
    }
  }
  // to nie jest dynamiczne
  initNewBookForm() {
    this.newAssetForm = this.formBuilder.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      premiere: [null, Validators.pattern("^[0-9]*$")],
    })
  }
  initNewGameForm() {
    this.newAssetForm = this.formBuilder.group({
      title: ['', Validators.required],
      developer: ['', Validators.required],
      premiere: [null, Validators.pattern("^[0-9]*$")]
    });
  }
  initNewMovieForm() {
    this.newAssetForm = this.formBuilder.group({
      title: ['', Validators.required],
      director: ['', Validators.required],
      premiere: [null, Validators.pattern("^[0-9]*$")]
    })
  }
  initNewSeriesForm() {
    this.newAssetForm = this.formBuilder.group({
      title: ['', Validators.required],
      seasons: ['', Validators.pattern("^[0-9]*$")],
      premiere: [null, Validators.pattern("^[0-9]*$")]
    })
  }
  ///

  initEditBookForm() {
    this.newAssetForm = this.formBuilder.group({
      title: [this.data.asset.title, Validators.required],
      author: [this.data.asset.author, Validators.required],
      premiere: [this.data.asset.premiere, Validators.pattern("^[0-9]*$")]
    })
  }
  initEditGameForm() {
    this.newAssetForm = this.formBuilder.group({
      title: [this.data.asset.title, Validators.required],
      developer: [this.data.asset.developer, Validators.required],
      premiere: [this.data.asset.premiere, Validators.pattern("^[0-9]*$")]
    });
  }
  initEditMovieForm() {
    this.newAssetForm = this.formBuilder.group({
      title: [this.data.asset.title, Validators.required],
      director: [this.data.asset.director, Validators.required],
      premiere: [this.data.asset.premiere, Validators.pattern("^[0-9]*$")]
    })
  }
  initEditSeriesForm() {
    this.newAssetForm = this.formBuilder.group({
      title: [this.data.asset.title, Validators.required],
      seasons: [this.data.asset.seasons, Validators.pattern("^[0-9]*$")],
      premiere: [this.data.asset.premiere, Validators.pattern("^[0-9]*$")]
    })
  }

  addAsset() {
    this.libraryAssetsService.addAsset(this.data.type, this.newAssetForm.value).subscribe();
  }

  editAsset() {
    this.libraryAssetsService.editAsset(this.data.type, this.data.asset.id, this.newAssetForm.value).subscribe()
  }

}
