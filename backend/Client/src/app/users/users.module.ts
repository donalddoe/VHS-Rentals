import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import  {AngularMaterialModule} from '../angular-material.module';
import { UsersRoutingModule } from './users-routing.module';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';


@NgModule({
  declarations: [UserDashboardComponent, UserDashboardComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,  
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    AngularMaterialModule
  ]
})
export class UsersModule { }
