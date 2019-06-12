import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LickMarketingMenuComponent } from './lick-marketing-menu.component';

describe('LickMarketingMenuComponent', () => {
  let component: LickMarketingMenuComponent;
  let fixture: ComponentFixture<LickMarketingMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LickMarketingMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LickMarketingMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
