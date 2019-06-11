import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LickMarketingVideo1Component } from './lick-marketing-video1.component';

describe('LickMarketingVideo1Component', () => {
  let component: LickMarketingVideo1Component;
  let fixture: ComponentFixture<LickMarketingVideo1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LickMarketingVideo1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LickMarketingVideo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
