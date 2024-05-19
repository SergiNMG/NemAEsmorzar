import { Injectable } from '@angular/core';
import { user } from '@angular/fire/auth';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { BehaviorSubject, Observable, map, tap } from 'rxjs';
import { Product } from 'src/app/interfaces/models/Product';
import { WishList } from 'src/app/interfaces/models/WishList';

@Injectable({
  providedIn: 'root',
})
export class WishListService {
  private _wishList: Product[] = [];
  private wishListSubject = new BehaviorSubject<Product[]>([]);
  wishList$: Observable<Product[]> = this.wishListSubject.asObservable();

  private wishListDoc: AngularFirestoreDocument<any>;
  private readonly wishListDocId: string = 'voOgFYftKBA3p88DuSpi';

  constructor(private nemAEsmorzarDB: AngularFirestore) {
    this.wishListDoc = this.nemAEsmorzarDB.doc(
      `whisList/${this.wishListDocId}`
    );
    this.getWishList();
  }

  getWishList() {
    this.wishListDoc
      .valueChanges()
      .pipe(
        map((data: any) => {
          this._wishList = data?.products || [];
          this.wishListSubject.next(this._wishList);
        })
      )
      .subscribe();
  }

  addProductToWishList(product: Product) {
    if (!this._wishList.some((p) => p.id === product.id)) {
      this._wishList.push(product);
      this.updateWishList();
      //this.wishListSubject.next(this._wishList);
    }
  }

  deleteProductFromWishList(productId: string) {
    this._wishList = this._wishList.filter((p) => p.id !== productId);
    this.updateWishList();
    //this.wishListSubject.next(this._wishList);
  }

  private updateWishList() {
    this.wishListDoc
      .set({ products: this._wishList }, { merge: true })
      .then(() => this.wishListSubject.next(this._wishList))
      .catch((error) => console.error('Error updating wishList', error));
  }
}

// private _wishLists: WishList[] = [];
// private _wishListByUserId!: WishList | undefined;

// private readonly wishListSubject = new BehaviorSubject<WishList[]>([]);
// wishList$: Observable<WishList[]> = this.wishListSubject.asObservable();

// constructor(nemAEsmorzarDB: AngularFirestore) {
//   this.wishListCollection = nemAEsmorzarDB.collection(this.wishListPath);
//   this.getWishList();
// }

// getWishList() {
//   this.wishListCollection
//     .snapshotChanges()
//     .pipe(
//       map((wishLists) => {
//         return wishLists.map((wishList) => {
//           const docId = wishList.payload.doc.id;
//           const data = wishList.payload.doc.data() as WishList;
//           return { id: docId, ...data };
//         });
//       })
//     )
//     .subscribe({
//       next: (whisList) => {
//         this._wishLists = whisList;
//         this.wishListSubject.next(this._wishLists);
//       },
//       error: (error) =>
//         console.error(`Error while getting whisList ${error}`),
//     });
// }

// getWishListByUserId(userId: string): Observable<WishList | undefined> {
//   return this.wishList$.pipe(
//     map((wishList) => wishList.find((wishList) => wishList.userId === userId))
//   );
// }

// addProductToWishList(userId: string, productId: string) {
//   console.log(productId, userId);
//   console.log(this._wishListByUserId);
//   if (this._wishListByUserId) {
//     if (!this._wishListByUserId?.productsIdList.includes(productId)) {
//       this._wishListByUserId?.productsIdList.push(productId);
//       this.updateWishList(this._wishListByUserId);
//     }
//   }
//   const newWishList: WishList = {
//     userId: userId,
//     productsIdList: [productId],
//   };
//   this.createWishList(newWishList);
// }

// deleteProductFromWishList(productId: string) {
//   if (this._wishListByUserId) {
//     this._wishListByUserId.productsIdList =
//       this._wishListByUserId.productsIdList.filter((id) => id !== productId);
//   }
// }

// private createWishList(wishList: WishList) {
//   this.wishListCollection.add(wishList).then(() => this.getWishList());
//   this.updateWishList(wishList);
// }

// private updateWishList(wishList: WishList) {
//   const index = this._wishLists.findIndex((doc) => doc.id === wishList.id);
//   index !== -1
//     ? (this._wishLists[index] = wishList)
//     : this._wishLists.push(wishList);

//   this.wishListSubject.next(this._wishLists);

//   this.wishListCollection
//     .doc(wishList.id)
//     .update(wishList)
//     .then(() => console.log(wishList))
//     .catch((error) => console.error('Error updating wishList', error));
// }
