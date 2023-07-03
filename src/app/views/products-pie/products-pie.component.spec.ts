import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsPieComponent } from './products-pie.component';

describe('ProductsPieComponent', () => {
  let component: ProductsPieComponent;
  let fixture: ComponentFixture<ProductsPieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductsPieComponent]
    });
    fixture = TestBed.createComponent(ProductsPieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
