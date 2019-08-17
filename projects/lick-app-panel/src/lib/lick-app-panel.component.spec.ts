import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LickAppPanelComponent } from './lick-app-panel.component';

describe('LickAppPanelComponent', () => {
  let component: LickAppPanelComponent;
  let fixture: ComponentFixture<LickAppPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LickAppPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LickAppPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
