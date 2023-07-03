import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { of } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = 'http://localhost:9000/products';
  constructor(private http: HttpClient) {}
  products: Product[] = [];

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
    // return of(this.products);
  }

  getProductsByDate(date: string): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/date/${date}`);
    // return of(this.products.filter((product) => product.date.includes(date)));
  }
}
