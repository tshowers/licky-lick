import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LickMarketingLatestPost1Component } from './lick-marketing-latest-post1.component';

describe('LickMarketingLatestPost1Component', () => {
  let component: LickMarketingLatestPost1Component;
  let fixture: ComponentFixture<LickMarketingLatestPost1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LickMarketingLatestPost1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LickMarketingLatestPost1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
