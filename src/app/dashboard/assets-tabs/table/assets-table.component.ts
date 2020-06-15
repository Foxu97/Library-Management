import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { AddAssetDialogComponent } from './add-asset-dialog/add-asset-dialog.component';
import { DeleteAssetDialogComponent } from './delete-asset-dialog/delete-asset-dialog.component';
import { TranslateService } from '@ngx-translate/core';
import { MatSort } from '@angular/material/sort';
@Component({
  selector: 'assets-table',
  templateUrl: './assets-table.component.html',
  styleUrls: ['./assets-table.component.scss']
})
export class AssetsTableComponent implements OnInit {
  @Input() assets: any[];
  @Input() assetType: string;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  dataSource;
  displayedColumns: string[] = [];
  constructor(
    public dialog: MatDialog,
    public translate: TranslateService
  ) { }

  ngOnInit(): void {
    this.initDisplayedColumns();
    this.dataSource = new MatTableDataSource(this.assets);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  initDisplayedColumns() {

    for (const property in this.assets[0]) {
      if (property !== 'id') {
        this.displayedColumns.push(property);
      }
    }
    if (this.assets.length > 0) {
      this.displayedColumns.push('actions');
    }
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  openDialog(action) {
    const dialogRef = this.dialog.open(AddAssetDialogComponent, {
      data: {
        type: this.assetType,
        asset: this.assets[0],
        action: action
      }
    });
  }
  openDeleteAssetDialog(element) {
    const dialogRef = this.dialog.open(DeleteAssetDialogComponent, {
      data: {
        type: this.assetType,
        assetToDelete: element
      }
    });
  }
}
