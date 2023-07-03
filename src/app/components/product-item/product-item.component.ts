import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../models/product';
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}
  @Input() product: Product = {
    id: 0,
    name: '',
    description: '',
    image: '',
    date: '',
    topics: [''],
  };
}
