import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './screens/login/login.component';
import { RegisterComponent } from './screens/register/register.component';
import { CustomerComponent } from './Admins/customer/customer.component';
import { RentalsComponent } from './Admins/rentals/rentals.component';
import {ReturnsComponent } from './users/returns/returns.component';
import { MoviesComponent } from './Admins/movies/movies.component';
import { NoPageFoundComponent } from './screens/no-page-found/no-page-found.component';
import {AuthGuard} from './auth.guard';
import { AdministrationComponent } from './Admins/administration/administration.component';
import { AddMoviesComponent } from './Admins/add-movies/add-movies.component';
import { MovieDetailsComponent } from './Admins/movie-details/movie-details.component';
import { AllCustomersComponent } from './Admins/all-customers/all-customers.component';





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
  { path: 'register', component: RegisterComponent },
  { path: 'movies', canActivate: [AuthGuard], component: MoviesComponent },
  { path: 'add-movies',  canActivate: [AuthGuard], component: AddMoviesComponent },
  // { path: 'movies', component: MoviesComponent },
  {path: "movie/:id",  canActivate: [AuthGuard], component: MovieDetailsComponent },
  { path: 'customers',  canActivate: [AuthGuard], component: CustomerComponent },
  { path: 'all-customers',  canActivate: [AuthGuard], component: AllCustomersComponent },
  { path: 'customers', canActivate: [AuthGuard], component: CustomerComponent },
  { path: 'returns', canActivate: [AuthGuard], component: ReturnsComponent },
  { path: 'rentals', canActivate: [AuthGuard], component: RentalsComponent },
  { path: '404', component: NoPageFoundComponent },
  { path: '**', redirectTo: '/404', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
