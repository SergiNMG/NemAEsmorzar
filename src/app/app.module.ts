import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainProductComponent } from './modules/product/components/main-product/main-product.component';
import { ProductsComponent } from './modules/product/components/products/products.component';
import { ReviewsComponent } from './modules/place/components/reviews/reviews.component';

@NgModule({
  declarations: [
    AppComponent,
    MainProductComponent,
    ProductsComponent,
    ReviewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
