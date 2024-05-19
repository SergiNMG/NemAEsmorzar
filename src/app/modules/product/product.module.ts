import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { MainProductComponent } from './components/main-product/main-product.component';
import { ProductsComponent } from './components/products/products.component';
import { StarsRatingComponent } from 'src/app/shared/stars-rating/stars-rating.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { ProductRoutingModule } from './product-routing.module';
import { FooterComponent } from 'src/app/shared/footer/footer.component';

@NgModule({
  declarations: [
    ProductComponent,
    MainProductComponent,
    ProductsComponent,
    AllProductsComponent,
  ],
  imports: [
    CommonModule,
    StarsRatingComponent,
    MatButtonModule,
    MatCardModule,
    FooterComponent,
  ],
  exports: [ProductsComponent, MainProductComponent],
})
export class ProductModule {}
