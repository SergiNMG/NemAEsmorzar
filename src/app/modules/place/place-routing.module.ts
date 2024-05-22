import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlaceComponent } from './place.component';
import { AllProductsComponent } from '../product/components/all-products/all-products.component';
import { ProductComponent } from '../product/product.component';
import { AddPlaceComponent } from './components/add-place/add-place.component';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { AddProductComponent } from '../product/components/add-product/add-product.component';
import { AddReviewComponent } from './components/add-review/add-review.component';
import { ManagePlaceComponent } from './components/manage-place/manage-place.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: PlaceComponent },
      {
        path: 'add',
        component: AddPlaceComponent,
        ...canActivate(() => redirectUnauthorizedTo(['/user/login'])),
      },
    ],
  },
  {
    path: 'products',
    children: [
      { path: '', component: ProductComponent },
      {
        path: 'add',
        component: AddProductComponent,
      },
    ],
  },
  {
    path: 'reviews',
    children: [
      {
        path: 'add',
        component: AddReviewComponent,
      },
    ],
  },
  {
    path: 'manage',
    children: [
      {
        path: '',
        component: ManagePlaceComponent,
        ...canActivate(() => redirectUnauthorizedTo(['/user/login'])),
      },
    ],
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
