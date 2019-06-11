import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LickMarketingLatestPost2Component } from './lick-marketing-latest-post2.component';

describe('LickMarketingLatestPost2Component', () => {
  let component: LickMarketingLatestPost2Component;
  let fixture: ComponentFixture<LickMarketingLatestPost2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LickMarketingLatestPost2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LickMarketingLatestPost2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
