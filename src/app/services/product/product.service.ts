import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from 'src/app/interfaces/models/Product';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private URL = 'assets/data/places.json';
  private _productList: Product[] = [];

  private readonly productSubject: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);
  product$: Observable<Product[]> = this.productSubject.asObservable();

  constructor(private httpProducts: HttpClient) { }

  getProducts() {
    this.httpProducts.get<Product[]>(this.URL)
      .subscribe({
        next: product => {
          this._productList = product;
          this.updateProductSubject();
        },
        error: error => {
          console.error('Error while getting products', error);
        }
      })
  }

  deleteProduct(product: Product) {
    this._productList = this._productList.filter(productContract => product.id !== productContract.id);
  }

  addProduct(newProduct: Product) {
    this._productList.push(newProduct);
    this.updateProductSubject();
  }

  private updateProductSubject() {
    this.productSubject.next(this._productList);
  }
}
