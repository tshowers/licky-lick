import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContextNavComponent } from './context-nav.component';

describe('ContextNavComponent', () => {
  let component: ContextNavComponent;
  let fixture: ComponentFixture<ContextNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContextNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContextNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
