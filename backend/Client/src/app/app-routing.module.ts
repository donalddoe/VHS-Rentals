import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './screens/login/login.component';
import { RegisterComponent } from './screens/register/register.component';
import { CustomerComponent } from './Admins/customer/customer.component';
import { RentalsComponent } from './Admins/rentals/rentals.component';
import {ReturnsComponent } from './users/returns/returns.component';
import { MoviesComponent } from './Admins/movies/movies.component';
import { NoPageFoundComponent } from './screens/no-page-found/no-page-found.component';
import { AuthGuard } from './auth.guard';
import { AddMoviesComponent } from './Admins/add-movies/add-movies.component';
import { AdministrationComponent } from './Admins/administration/administration.component';
import { MovieDetailsComponent } from './Admins/movie-details/movie-details.component';
import { StoreFrontComponent } from './store-front/store-front.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { UserComponent } from './user/user.component';
import { WalletComponent } from './wallet/wallet.component';




const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent },
  { 
    path: 'users', 
    canActivate: [AuthGuard],
    loadChildren: () => import('./users/users.module').then(m => m.UsersModule) 
  },
  {
    path: 'admin',
    canActivate: [AuthGuard],
    component: AdministrationComponent
  },
  { path: 'store', 
  canActivate: [AuthGuard],
  component: StoreFrontComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'movies', canActivate: [AuthGuard], component: MoviesComponent },
  { path: 'add-movies',  canActivate: [AuthGuard], component: AddMoviesComponent },
  // { path: 'movies', component: MoviesComponent },
  {path: "movie/:id",  canActivate: [AuthGuard], component: MovieDetailsComponent },
  { path: 'customers',  canActivate: [AuthGuard], component: CustomerComponent },
  { path: 'add-users', canActivate: [AuthGuard], component: CustomerComponent },
  { path: 'view-users', canActivate: [AuthGuard], component: UserComponent },
  { path: 'returns', canActivate: [AuthGuard], component: ReturnsComponent },
  { path: 'rentals', canActivate: [AuthGuard], component: RentalsComponent },
  { path: 'shopping-cart', canActivate: [AuthGuard], component: CheckOutComponent },
  { path: 'wallet', canActivate: [AuthGuard], component: WalletComponent },
  { path: '404', component: NoPageFoundComponent },
  { path: '**', redirectTo: '/404', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
