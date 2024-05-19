import { Component, OnInit } from '@angular/core';
import { Place } from 'src/app/interfaces/models/Place';
import { Product } from 'src/app/interfaces/models/Product';
import { PlaceService } from 'src/app/services/place/place.service';
import { ProductService } from 'src/app/services/product/product.service';
import { UserService } from 'src/app/services/user/user.service';
import { WishListService } from 'src/app/services/wishList/wish-list.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  productList: Product[] = {} as Product[];
  placeList: Place[] = {} as Place[];
  place: Place | undefined;

  constructor(
    private productService: ProductService,
    private userService: UserService,
    private wishListService: WishListService
  ) {}

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.productService.product$.subscribe({
      next: (products) => {
        this.productList = products;
      },
      error: (error) => {
        console.error('Error while getting products', error);
      },
    });
  }

  addProductToWishList(product: Product) {
    console.log(product);
    this.userService.currentUser$.subscribe((user) => {
      if (user) {
        this.wishListService.addProductToWishList(product);
      } else {
        alert('Para realizar esta acción debe iniciar sesión');
      }
    });
  }
}
