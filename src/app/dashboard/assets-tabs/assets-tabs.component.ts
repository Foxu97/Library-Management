import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'assets-tabs',
  templateUrl: './assets-tabs.component.html',
  styleUrls: ['./assets-tabs.component.scss']
})
export class AssetsTabsComponent implements OnInit {

  constructor() { }

  @Input()
  assetsMap: Map<string, Array<Object>>

  ngOnInit(): void {
    
  }

}
