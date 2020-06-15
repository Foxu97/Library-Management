import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LibraryAssetsService } from '../../../../Shared/Services/library-assets.service';
@Component({
  selector: 'delete-asset-dialog',
  templateUrl: './delete-asset-dialog.component.html',
  styleUrls: ['./delete-asset-dialog.component.scss']
})
export class DeleteAssetDialogComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private libraryAssetsService: LibraryAssetsService
  ) { }

  ngOnInit(): void {
    console.log("to delete:", this.data)
  }

  deleteAsset() {
    this.libraryAssetsService.deleteAsset(this.data.type, this.data.assetToDelete.id).subscribe();
  }
}
