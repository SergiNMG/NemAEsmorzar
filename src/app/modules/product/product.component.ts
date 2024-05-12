import { Component, OnInit } from '@angular/core';
import { Place } from 'src/app/interfaces/models/Place';
import { Product } from 'src/app/interfaces/models/Product';
import { PlaceService } from 'src/app/services/place/place.service';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  productList: Product[] = {} as Product[];
  placeList: Place[] = {} as Place[];
  place: Place | undefined;

  constructor(private productService: ProductService) {}

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
}
