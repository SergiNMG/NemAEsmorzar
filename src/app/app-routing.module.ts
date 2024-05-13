import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // { path: '', redirectTo: 'places', pathMatch: 'full' },
  {
    path: 'places',
    loadChildren: () =>
      import('./modules/place/place.module').then((m) => m.PlaceModule),
  },
  {
    path: 'products',
    loadChildren: () =>
      import('./modules/product/product.module').then((m) => m.ProductModule),
  },
  {
    path: 'user',
    loadChildren: () =>
      import('./modules/user/user.module').then((m) => m.UserModule),
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./modules/about/about.module').then((m) => m.AboutModule),
  },
  { path: '**', redirectTo: 'places' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
