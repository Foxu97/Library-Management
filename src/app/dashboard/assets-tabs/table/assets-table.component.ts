import { Component, OnInit, Input } from '@angular/core';
import {MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'assets-table',
  templateUrl: './assets-table.component.html',
  styleUrls: ['./assets-table.component.scss']
})
export class AssetsTableComponent implements OnInit {
  @Input() assets: any[];
  dataSource;
  displayedColumns: string[] = [];
  constructor() { }

  ngOnInit(): void {
    this.initDisplayedColumns();
    this.dataSource = new MatTableDataSource(this.assets);
    console.log("table assets1", this.assets)
  }
  initDisplayedColumns() {
    // this.assets.forEach(asset => {
      for (const property in this.assets[0]) {
        this.displayedColumns.push(property);
      }
    // });
    console.log(this.displayedColumns)
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
