import { Component, OnDestroy, OnInit } from '@angular/core';
import { Firestore, documentId } from '@angular/fire/firestore';
import { Subscription, concatMap } from 'rxjs';
import { Place } from 'src/app/interfaces/models/Place';
import { Product } from 'src/app/interfaces/models/Product';
import { Review } from 'src/app/interfaces/models/Review';
import { PlaceService } from 'src/app/services/place/place.service';
import { ProductService } from 'src/app/services/product/product.service';
import { ReviewService } from 'src/app/services/review/review.service';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.scss'],
})
export class PlaceComponent implements OnInit {
  placeList: Place[] = {} as Place[];
  productList: Product[] = {} as Product[];
  reviewList: Review[] = {} as Review[];
  placeSelected: Place | undefined = undefined;
  defaultPosition: number = 0;

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
        this.selectPlace(this.placeSelected);
      },
      error: (error) => {
        console.error('Error while getting reviews', error);
      },
    });
  }

  selectPlace(place: Place | undefined) {
    place
      ? (this.placeSelected = place)
      : (this.placeSelected = this.placeList[this.defaultPosition]);
    this.filterProducts();
    this.filterReviews();
  }

  private filterProducts() {
    if (this.placeSelected) {
      this.placeSelected.products = this.productList.filter(
        (product) => this.placeSelected?.id === product.placeId
      );
    }
  }

  private filterReviews() {
    if (this.placeSelected) {
      this.placeSelected.reviews = this.reviewList.filter(
        (review) => this.placeSelected?.id === review.placeId
      );
    }
  }
}
