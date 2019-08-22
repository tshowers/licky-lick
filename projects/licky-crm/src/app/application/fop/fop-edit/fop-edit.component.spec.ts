import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FopEditComponent } from './fop-edit.component';

describe('FopEditComponent', () => {
  let component: FopEditComponent;
  let fixture: ComponentFixture<FopEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FopEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FopEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
