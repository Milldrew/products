import { Component, OnInit } from '@angular/core';
export type Product = { id: number; name: string };

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products: Product[] = [
    { id: 1, name: 'product' },
    { id: 2, name: 'product' },
    { id: 3, name: 'product' },
  ];
  selectedProduct?: Product;
  constructor() {}

  selectProduct(product: Product) {
    this.selectedProduct = product;
    console.log(product);
  }
  ngOnInit(): void {}
}
