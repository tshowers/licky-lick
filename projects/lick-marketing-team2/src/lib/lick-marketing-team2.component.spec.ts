import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LickMarketingTeam2Component } from './lick-marketing-team2.component';

describe('LickMarketingTeam2Component', () => {
  let component: LickMarketingTeam2Component;
  let fixture: ComponentFixture<LickMarketingTeam2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LickMarketingTeam2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LickMarketingTeam2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
