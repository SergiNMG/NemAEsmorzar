import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlaceComponent } from './place.component';
import { AllProductsComponent } from '../product/components/all-products/all-products.component';
import { ProductComponent } from '../product/product.component';

const routes: Routes = [
  {
    path: '',
    children: [{ path: '', component: PlaceComponent }],
  },
  {
    path: 'products',
    children: [{ path: '', component: ProductComponent }],
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlaceRoutingModule {}
