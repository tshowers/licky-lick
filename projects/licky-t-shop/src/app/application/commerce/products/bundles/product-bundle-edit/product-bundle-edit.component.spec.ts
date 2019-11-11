import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductBundleEditComponent } from './product-bundle-edit.component';

describe('ProductBundleEditComponent', () => {
  let component: ProductBundleEditComponent;
  let fixture: ComponentFixture<ProductBundleEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductBundleEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductBundleEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
