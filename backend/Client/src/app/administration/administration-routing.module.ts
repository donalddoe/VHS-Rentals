import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AddMoviesComponent } from './add-movies/add-movies.component';


const routes: Routes = [
  { path: '', children :[
    { path : 'admin', component : AdminComponent },
    { path: 'add-movies', component: AddMoviesComponent },
    { path : '', redirectTo : 'admin', pathMatch : 'full' }
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministrationRoutingModule { }
