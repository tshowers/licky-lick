import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LickMarketingVideo2Component } from './lick-marketing-video2.component';

describe('LickMarketingVideo2Component', () => {
  let component: LickMarketingVideo2Component;
  let fixture: ComponentFixture<LickMarketingVideo2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LickMarketingVideo2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LickMarketingVideo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
