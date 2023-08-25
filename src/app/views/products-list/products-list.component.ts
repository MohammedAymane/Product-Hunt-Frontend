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

  @Input() date: string = ''; // Propriété d'entrée pour filtrer les produits par date

  products: Product[] = []; // Tableau des produits

  ngOnInit(): void {
    // Méthode du cycle de vie du composant qui s'exécute lors de l'initialisation du composant
    // Récupère tous les produits
    this.productService
      .getProducts()
      .subscribe(
        (products: Product[]) =>
          (this.products = products.filter(
            (product) => product.topics.length >= 2
          ))
      );
  }

  searchProductsByDate(date: string): void {
    // Méthode pour rechercher les produits par date
    // Appelle le service productService pour récupérer les produits par date
    this.productService
      .getProductsByDate(date)
      .subscribe((products: Product[]) => {
        console.log(products);
        this.products = products;
      });
  }
}
