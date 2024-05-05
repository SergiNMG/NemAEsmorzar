import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { MainProductComponent } from './components/main-product/main-product.component';
import { ProductsComponent } from './components/products/products.component';
import { StarsRatingComponent } from 'src/app/shared/stars-rating/stars-rating.component';

@NgModule({
  declarations: [ProductComponent, MainProductComponent, ProductsComponent],
  imports: [CommonModule, StarsRatingComponent],
  exports: [ProductsComponent, MainProductComponent],
})
export class ProductModule {}
