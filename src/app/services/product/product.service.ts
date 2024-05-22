import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from 'src/app/interfaces/models/Product';
import { BehaviorSubject, Observable, map } from 'rxjs';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { Place } from 'src/app/interfaces/models/Place';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private _productList: Product[] = [];

  private readonly productSubject: BehaviorSubject<Product[]> =
    new BehaviorSubject<Product[]>([]);
  product$: Observable<Product[]> = this.productSubject.asObservable();

  private productsPath: string = 'products';
  private productsCollection: AngularFirestoreCollection<Product>;

  constructor(private nemAEsmorzarDB: AngularFirestore) {
    this.productsCollection = this.nemAEsmorzarDB.collection(this.productsPath);
    this.getProducts();
  }

  getProducts() {
    this.productsCollection
      .snapshotChanges()
      .pipe(
        map((products) => {
          return products.map((product) => {
            const docId = product.payload.doc.id;
            const data = product.payload.doc.data() as Product;
            return { id: docId, ...data };
          });
        })
      )
      .subscribe({
        next: (products) => {
          this._productList = products;
          this.productSubject.next(this._productList);
        },
        error: (error) => {
          console.error(`Error while getting products ${error}`);
        },
      });
  }

  addProduct(productData: any) {
    return this.nemAEsmorzarDB.collection('products').add(productData);
  }

  deleteProduct(productId: string) {
    return this.nemAEsmorzarDB.collection('products').doc(productId).delete();
  }
}

// deleteProduct(product: Product) {
//   this._productList = this._productList.filter(
//     (productContract) => product.id !== productContract.id
//   );
// }

// addProduct(newProduct: Product) {
//   this._productList.push(newProduct);
//   this.updateProductSubject();
// }
