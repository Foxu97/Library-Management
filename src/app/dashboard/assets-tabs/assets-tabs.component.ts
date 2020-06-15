import { Component, OnInit, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'assets-tabs',
  templateUrl: './assets-tabs.component.html',
  styleUrls: ['./assets-tabs.component.scss']
})
export class AssetsTabsComponent implements OnInit {

  constructor(
    public translate: TranslateService
  ) { }

  @Input()
  assetsMap: Map<string, Array<Object>>

  ngOnInit(): void {
    
  }

}
