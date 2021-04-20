import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './screens/login/login.component';
import { RegisterComponent } from './screens/register/register.component';
import { AddMoviesComponent } from './screens/admin/add-movies/add-movies.component';
import { CustomerComponent } from './screens/customer/customer.component';
import { RentalsComponent } from './screens/rentals/rentals.component';
import {ReturnsComponent } from './screens/returns/returns.component';
import { MoviesComponent } from './screens/movies/movies.component';
import { NoPageFoundComponent } from './screens/no-page-found/no-page-found.component';
import {AuthGuard} from './auth.guard'





const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent },
  { 
    path: 'admin', 
    canActivate: [AuthGuard],
    loadChildren: () => import('./administration/administration.module').then(m => m.AdministrationModule) 
  },
  { 
    path: 'users', 
    loadChildren: () => import('./users/users.module').then(m => m.UsersModule) 
  },
  { path: 'register', component: RegisterComponent },
  { path: 'AddMovies', component: AddMoviesComponent },
  // { path: '404', component: NoPageFoundComponent },
  // { path: '**', redirectTo: '/404', pathMatch: 'full'}
  { path: 'customers', canActivate: [AuthGuard], component: CustomerComponent },
  { path: 'returns', canActivate: [AuthGuard], component: ReturnsComponent },
  { path: 'rentals', canActivate: [AuthGuard], component: RentalsComponent },
  { path: 'movies', canActivate: [AuthGuard], component: MoviesComponent },
  { path: '404', component: NoPageFoundComponent },
  { path: '**', redirectTo: '/404', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
