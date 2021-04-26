import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import  {AngularMaterialModule} from '../angular-material.module';
import { AdministrationRoutingModule } from './administration-routing.module';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
// import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AllCustomersComponent } from '../Admins/all-customers/all-customers.component';


@NgModule({
  declarations: [],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,  
  ],
  imports: [
    CommonModule,
    AdministrationRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    AngularMaterialModule
  ]
})
export class AdministrationModule { }
