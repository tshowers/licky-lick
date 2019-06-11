import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LickMarketingHeader3Component } from './lick-marketing-header3.component';

describe('LickMarketingHeader3Component', () => {
  let component: LickMarketingHeader3Component;
  let fixture: ComponentFixture<LickMarketingHeader3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LickMarketingHeader3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LickMarketingHeader3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
