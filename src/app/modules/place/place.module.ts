import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaceComponent } from './place.component';
import { PlaceInfoComponent } from './components/place-info/place-info.component';
import { FooterComponent } from 'src/app/shared/footer/footer.component';
import { StarsRatingComponent } from 'src/app/shared/stars-rating/stars-rating.component';
import { ProductsComponent } from '../product/components/products/products.component';
import { MainProductComponent } from '../product/components/main-product/main-product.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { ProductModule } from '../product/product.module';

@NgModule({
  declarations: [PlaceComponent, PlaceInfoComponent, ReviewsComponent],
  imports: [CommonModule, FooterComponent, StarsRatingComponent, ProductModule],
})
export class PlaceModule {}
