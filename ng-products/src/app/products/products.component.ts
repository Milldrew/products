import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
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

  createProduct(productName: string) {
    console.log(productName);
    const id = Math.floor(Math.random() * 1000);
    this.products.push({ id, name: productName });
  }

  selectProduct(product: Product) {
    this.selectedProduct = product;
    console.log(product);
  }
  ngOnInit(): void {}
  productName = new FormControl('');
}
