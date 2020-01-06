import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LickAppWidgetShoppingCartComponent } from './lick-app-widget-shopping-cart.component';

describe('LickAppWidgetShoppingCartComponent', () => {
  let component: LickAppWidgetShoppingCartComponent;
  let fixture: ComponentFixture<LickAppWidgetShoppingCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LickAppWidgetShoppingCartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LickAppWidgetShoppingCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
