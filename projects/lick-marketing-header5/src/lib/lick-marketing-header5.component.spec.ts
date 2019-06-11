import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LickMarketingHeader5Component } from './lick-marketing-header5.component';

describe('LickMarketingHeader5Component', () => {
  let component: LickMarketingHeader5Component;
  let fixture: ComponentFixture<LickMarketingHeader5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LickMarketingHeader5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LickMarketingHeader5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
