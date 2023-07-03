import { Component, Input } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
})
export class ProductsListComponent {
  constructor(private productService: ProductService) {}
  @Input() date: string = '';
  products: Product[] = [];

  ngOnInit(): void {
    this.productService
      .getProducts()
      .subscribe((products: Product[]) => (this.products = products));
  }

  searchProductsByDate(date: string): void {
    this.productService
      .getProductsByDate(date)
      .subscribe((products: Product[]) => {
        console.log(products);
        this.products = products;
      });
  }
}
