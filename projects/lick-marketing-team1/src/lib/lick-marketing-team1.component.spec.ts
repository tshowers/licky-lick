import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LickMarketingTeam1Component } from './lick-marketing-team1.component';

describe('LickMarketingTeam1Component', () => {
  let component: LickMarketingTeam1Component;
  let fixture: ComponentFixture<LickMarketingTeam1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LickMarketingTeam1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LickMarketingTeam1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
