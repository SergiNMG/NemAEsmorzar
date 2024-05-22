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
import { AddPlaceComponent } from './components/add-place/add-place.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { AddReviewComponent } from './components/add-review/add-review.component';
import { MatSelectModule } from '@angular/material/select';
import { ManagePlaceComponent } from './components/manage-place/manage-place.component';
import { RouterLink, RouterLinkActive } from '@angular/router';

@NgModule({
  declarations: [
    PlaceComponent,
    PlaceInfoComponent,
    ReviewsComponent,
    AsideComponent,
    AddPlaceComponent,
    AddReviewComponent,
    ManagePlaceComponent,
  ],
  imports: [
    CommonModule,
    FooterComponent,
    StarsRatingComponent,
    ProductModule,
    PlaceRoutingModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    RouterLink,
    RouterLinkActive,
  ],
})
export class PlaceModule {}
