import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { MainProductComponent } from './components/main-product/main-product.component';
import { ProductsComponent } from './components/products/products.component';
import { StarsRatingComponent } from 'src/app/shared/stars-rating/stars-rating.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { FooterComponent } from 'src/app/shared/footer/footer.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ProductComponent,
    MainProductComponent,
    ProductsComponent,
    AllProductsComponent,
    AddProductComponent,
  ],
  imports: [
    CommonModule,
    StarsRatingComponent,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    FooterComponent,
  ],
  exports: [ProductsComponent, MainProductComponent],
})
export class ProductModule {}
