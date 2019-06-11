import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LickMarketingHeader1Component } from './lick-marketing-header1.component';

describe('LickMarketingHeader1Component', () => {
  let component: LickMarketingHeader1Component;
  let fixture: ComponentFixture<LickMarketingHeader1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LickMarketingHeader1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LickMarketingHeader1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
