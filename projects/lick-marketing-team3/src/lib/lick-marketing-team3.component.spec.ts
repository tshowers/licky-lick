import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LickMarketingTeam3Component } from './lick-marketing-team3.component';

describe('LickMarketingTeam3Component', () => {
  let component: LickMarketingTeam3Component;
  let fixture: ComponentFixture<LickMarketingTeam3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LickMarketingTeam3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LickMarketingTeam3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
