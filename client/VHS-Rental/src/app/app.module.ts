import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import  {AngularMaterialModule} from './angular-material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './screens/login/login.component';
import { RegisterComponent } from './screens/register/register.component';
import { MoviesComponent } from './screens/movies/movies.component';
import { AdminComponent } from './screens/admin/admin.component';
import { RentalsComponent } from './screens/rentals/rentals.component';
import { ReturnsComponent } from './screens/returns/returns.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    MoviesComponent,
    AdminComponent,
    RentalsComponent,
    ReturnsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    HttpClientModule

  ],

  providers: [
    ReactiveFormsModule,
    FormsModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
