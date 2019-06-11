import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LickMarketingHeader4Component } from './lick-marketing-header4.component';

describe('LickMarketingHeader4Component', () => {
  let component: LickMarketingHeader4Component;
  let fixture: ComponentFixture<LickMarketingHeader4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LickMarketingHeader4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LickMarketingHeader4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
