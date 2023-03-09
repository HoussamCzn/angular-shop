import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productsUrl = 'http://80.11.122.222:8000/polyfx/cgi/getart.cgi?frs=';
  private retailerId : string = "401000219"; // My retailer ID from PolyFX
  products: Product[] = [];

  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get<Product[]>(this.productsUrl + this.retailerId);
  }
}
