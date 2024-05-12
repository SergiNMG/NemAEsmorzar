import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaceComponent } from './place.component';
import { PlaceInfoComponent } from './components/place-info/place-info.component';
import { FooterComponent } from 'src/app/shared/footer/footer.component';
import { StarsRatingComponent } from 'src/app/shared/stars-rating/stars-rating.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { ProductModule } from '../product/product.module';
import { PlaceRoutingModule } from './place-routing.module';
import { AsideComponent } from './components/aside/aside.component';
import { AllProductsComponent } from '../product/components/all-products/all-products.component';
import { MainProductComponent } from '../product/components/main-product/main-product.component';
import { ProductComponent } from '../product/product.component';

@NgModule({
  declarations: [
    PlaceComponent,
    PlaceInfoComponent,
    ReviewsComponent,
    AsideComponent,
  ],
  imports: [
    CommonModule,
    FooterComponent,
    StarsRatingComponent,
    ProductModule,
    PlaceRoutingModule,
  ],
})
export class PlaceModule {}
