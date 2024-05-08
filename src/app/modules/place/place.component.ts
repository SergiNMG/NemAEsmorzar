import { Component, OnInit } from '@angular/core';
import { Firestore, documentId } from '@angular/fire/firestore';
import { concatMap } from 'rxjs';
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
  placeSelected: Place = {} as Place;

  constructor(
    private placeService: PlaceService,
    private productService: ProductService,
    private reviewService: ReviewService
  ) {
    this.getProducts();
    this.getReviews();
  }

  ngOnInit(): void {
    this.getPlaces();
  }

  // loadData() {
  //   this.placeService.places$
  //     .pipe(
  //       concatMap(() => this.productService.product$.subscribe()),
  //       concatMap(() => this.reviewService.reviews$)
  //     )
  //     .subscribe({
  //       next: (places) => {
  //         this.placeList = places;
  //         this.setDefaultPlaceSelected();
  //       },
  //       error: (error) => {
  //         console.error('Error al cargar datos', error);
  //       },
  //     });
  // }

  getPlaces() {
    this.placeService.places$.subscribe({
      next: (places) => {
        this.placeList = places;
        this.setDefaultPlaceSelected();
        console.log(this.placeSelected);
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
        this.filterProducts();
      },
      error: (error) => {
        console.error('Error while getting products', error);
      },
      complete: () => {
        console.log(this.productList);
      },
    });
  }

  getReviews() {
    this.reviewService.reviews$.subscribe({
      next: (reviews) => {
        this.reviewList = reviews;
        this.filterReviews();
      },
      error: (error) => {
        console.error('Error while getting reviews', error);
      },
      complete: () => {
        console.log(this.reviewList);
      },
    });
  }

  private filterProducts() {
    this.placeSelected.products = this.productList.filter(
      (product) => this.placeSelected.id === product.placeId
    );
  }

  private filterReviews() {
    this.placeSelected.reviews = this.reviewList.filter(
      (review) => this.placeSelected.id === review.placeId
    );
  }

  private selectPlace(place: Place): Place {
    return (this.placeSelected = place);
  }

  private setDefaultPlaceSelected() {
    this.placeSelected = this.placeList[0];
  }
}
