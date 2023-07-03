import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = 'http://localhost:9000/products';

  constructor(private http: HttpClient) {}

  /**
   * Récupère tous les produits.
   * Retourne un observable contenant un tableau de produits.
   */
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }

  /**
   * Récupère les produits par date.
   * @param date La date utilisée pour filtrer les produits.
   * Retourne un observable contenant un tableau de produits.
   */
  getProductsByDate(date: string): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/date/${date}`);
  }
}
