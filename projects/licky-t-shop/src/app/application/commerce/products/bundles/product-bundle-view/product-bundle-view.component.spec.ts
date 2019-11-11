import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductBundleViewComponent } from './product-bundle-view.component';

describe('ProductBundleViewComponent', () => {
  let component: ProductBundleViewComponent;
  let fixture: ComponentFixture<ProductBundleViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductBundleViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductBundleViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
