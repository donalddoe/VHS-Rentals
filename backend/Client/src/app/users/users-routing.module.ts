import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { ReturnsComponent } from './returns/returns.component'

const routes: Routes = [
  { path: '', children:[
  { path: 'user-dashboard', component: UserDashboardComponent },
  { path: 'returns', component: ReturnsComponent },
  { path : '', redirectTo : 'user-dashboard', pathMatch : 'full' }
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
