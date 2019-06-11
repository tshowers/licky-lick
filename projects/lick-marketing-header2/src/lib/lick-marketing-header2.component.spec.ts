import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LickMarketingHeader2Component } from './lick-marketing-header2.component';

describe('LickMarketingHeader2Component', () => {
  let component: LickMarketingHeader2Component;
  let fixture: ComponentFixture<LickMarketingHeader2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LickMarketingHeader2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LickMarketingHeader2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
