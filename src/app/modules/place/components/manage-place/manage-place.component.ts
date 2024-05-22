import { Component } from '@angular/core';
import { Place } from 'src/app/interfaces/models/Place';
import { Product } from 'src/app/interfaces/models/Product';
import { Review } from 'src/app/interfaces/models/Review';
import { PlaceService } from 'src/app/services/place/place.service';
import { ProductService } from 'src/app/services/product/product.service';
import { ReviewService } from 'src/app/services/review/review.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-manage-place',
  templateUrl: './manage-place.component.html',
  styleUrls: ['./manage-place.component.scss'],
})
export class ManagePlaceComponent {
  placeList: Place[] = {} as Place[];
  productList: Product[] = {} as Product[];
  reviewList: Review[] = {} as Review[];

  constructor(
    private placeService: PlaceService,
    private productService: ProductService,
    private reviewService: ReviewService
  ) {}

  ngOnInit(): void {
    this.getPlaces();
    this.getProducts();
    this.getReviews();
  }

  getPlaces() {
    this.placeService.places$.subscribe({
      next: (places) => {
        this.placeList = places;
      },
      error: (error) => {
        console.error('Error while getting places', error);
      },
    });
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

  getReviews() {
    this.reviewService.reviews$.subscribe({
      next: (reviews) => {
        this.reviewList = reviews;
      },
      error: (error) => {
        console.error('Error while getting reviews', error);
      },
    });
  }

  deletePlace(placeId: string) {
    this.placeService
      .deletePlace(placeId)
      .then(() => alert('Lugar eliminado'))
      .catch((error) => console.error(error));
  }

  deleteProduct(productId: string) {
    this.productService
      .deleteProduct(productId)
      .then(() => alert('Producto eliminado'))
      .catch((error) => console.error(error));
  }

  deleteReview(reviewId: string) {
    this.reviewService
      .deleteReview(reviewId)
      .then(() => alert('Review eliminada'))
      .catch((error) => console.error(error));
  }
}
