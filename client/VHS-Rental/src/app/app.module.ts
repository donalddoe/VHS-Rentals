import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './screens/login/login.component';
import { RegisterComponent } from './screens/register/register.component';
import { MoviesComponent } from './screens/movies/movies.component';
import { AdminComponent } from './screens/admin/admin.component';
import { RentalsComponent } from './screens/rentals/rentals.component';
import { ReturnsComponent } from './screens/returns/returns.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    MoviesComponent,
    AdminComponent,
    RentalsComponent,
    ReturnsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
