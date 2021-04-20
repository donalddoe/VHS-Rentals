import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import  {AngularMaterialModule} from './angular-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './screens/login/login.component';
import { RegisterComponent } from './screens/register/register.component';
import { MoviesComponent } from './screens/movies/movies.component';
import { RentalsComponent } from './screens/rentals/rentals.component';
import { ReturnsComponent } from './screens/returns/returns.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CustomerComponent } from './screens/customer/customer.component';
import { NoPageFoundComponent } from './screens/no-page-found/no-page-found.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from './loader/interceptor.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    MoviesComponent,
    RentalsComponent,
    ReturnsComponent,
    NavBarComponent,
    CustomerComponent,
    NoPageFoundComponent,
  
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,  
  ],
  imports: [
    BrowserModule,
    AngularMaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    FlexLayoutModule,
    NgxSpinnerModule,
    ToastrModule.forRoot({
      timeOut: 4000,
      progressBar: true,
      preventDuplicates: true,
      progressAnimation: 'decreasing'
    }),
  ],

  providers: [
    ReactiveFormsModule,
    FormsModule,
    {
      provide: HTTP_INTERCEPTORS,
       useClass: InterceptorService, 
       multi: true
      }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
