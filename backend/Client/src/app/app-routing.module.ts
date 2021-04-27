import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './screens/login/login.component';
import { RegisterComponent } from './screens/register/register.component';
import { CustomerComponent } from './administration/customer/customer.component';
import { RentalsComponent } from './administration/rentals/rentals.component';
import {ReturnsComponent } from './users/returns/returns.component';
// import { MoviesComponent } from './administration/movies/movies.component';
import { NoPageFoundComponent } from './screens/no-page-found/no-page-found.component';
import {AuthGuard} from './auth.guard'
import { StoreFrontComponent } from './store-front/store-front.component';





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
    canActivate: [AuthGuard],
    loadChildren: () => import('./users/users.module').then(m => m.UsersModule) 
  },
  { path: 'store', component: StoreFrontComponent },
  { path: 'register', component: RegisterComponent },
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
