import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { WishListComponent } from './wish-list/wish-list.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: UserComponent },
      { path: 'login', component: LoginComponent },
      { path: 'signin', component: SigninComponent },
      {
        path: 'wishList',
        component: WishListComponent,
        ...canActivate(() => redirectUnauthorizedTo(['register'])),
      },
      { path: '**', redirectTo: '', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
