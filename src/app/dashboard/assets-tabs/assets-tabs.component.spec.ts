import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetsTabsComponent } from './assets-tabs.component';

describe('AssetsTabsComponent', () => {
  let component: AssetsTabsComponent;
  let fixture: ComponentFixture<AssetsTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetsTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetsTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
