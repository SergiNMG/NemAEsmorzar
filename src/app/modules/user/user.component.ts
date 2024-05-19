import { Component, OnInit } from '@angular/core';
import { Observable, from } from 'rxjs';
import { Product } from 'src/app/interfaces/models/Product';
import { User } from 'src/app/interfaces/models/User';
import { WishList } from 'src/app/interfaces/models/WishList';
import { ProductService } from 'src/app/services/product/product.service';
import { UserService } from 'src/app/services/user/user.service';
import { WishListService } from 'src/app/services/wishList/wish-list.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  wishList$: Observable<Product[]>;

  constructor(
    private userService: UserService,
    private wishListService: WishListService
  ) {
    this.wishList$ = this.wishListService.wishList$;
  }

  ngOnInit(): void {}

  deleteProduct(product: Product) {
    if (product.id) {
      this.wishListService.deleteProductFromWishList(product.id);
    }
  }
}

// filterProductsByWishList() {
//   if (!this.wishList?.productsIdList) {
//     this.productList = [];
//     return;
//   }
//   this.productList = this.productList.filter((product) => {
//     return product.id && this.wishList?.productsIdList.includes(product.id);
//   });
// }

// getWishListByUserId() {
//   this.userService.currentUser$.subscribe((user) => {
//     if (user) {
//       this.wishListService.getWishListByUserId(user.uid).subscribe({
//         next: (wishList) => {
//           wishList = this.wishList;
//           this.getProducts();
//           this.filterProductsByWishList();
//           console.log(wishList);
//         },
//         error: (error) => {
//           console.error('Error al obtener la wishList', error);
//         },
//       });
//     }
//   });
// }

// getProducts() {
//   this.productService.product$.subscribe({
//     next: (products) => {
//       this.productList = products;
//     },
//     error: (error) => {
//       console.error('Error while getting products', error);
//     },
//   });
// }
