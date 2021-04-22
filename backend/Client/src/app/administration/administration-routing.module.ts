import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AddMoviesComponent } from './add-movies/add-movies.component';
import { MoviesComponent } from './movies/movies.component';

import { CustomerComponent } from './customer/customer.component';
import { RentalsComponent } from './rentals/rentals.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';



const routes: Routes = [
  { path: '', children :[
    { path : 'admin-dashboard', component :AdminDashboardComponent },
    { path: 'add-movies', component: AddMoviesComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'rentals', component: RentalsComponent },
  { path: 'customers', component: CustomerComponent },
    { path: 'movies', component: MoviesComponent },
    {path: "movie/:id", component: MovieDetailsComponent },
    

    { path : '', redirectTo : 'admin', pathMatch : 'full' }
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministrationRoutingModule { }
