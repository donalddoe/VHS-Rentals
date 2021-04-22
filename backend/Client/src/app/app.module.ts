import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import  {AngularMaterialModule} from './angular-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './screens/login/login.component';
import { RegisterComponent } from './screens/register/register.component';
import { ReturnsComponent } from './users/returns/returns.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NoPageFoundComponent } from './screens/no-page-found/no-page-found.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from './loader/interceptor.service';
import { AdministrationModule } from './administration/administration.module'
import {  AdministrationRoutingModule } from './administration/administration-routing.module'
import { UsersModule } from './users/users.module'
import { UsersRoutingModule } from './users/users-routing.module';

import { MovieDetailsComponent } from './administration/movie-details/movie-details.component';
import { EditMovieComponent } from './edit-movie/edit-movie.component';
import { DeleteRecordComponent } from './delete-record/delete-record.component';
// import{ MainNavComponent } from './administration/admin/main-nav/main-nav.component'


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavBarComponent,
    NoPageFoundComponent,
    MovieDetailsComponent,
    EditMovieComponent,
    DeleteRecordComponent,
    // MainNavComponent
  
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
    AdministrationModule,
    AdministrationRoutingModule,
    UsersModule,
    UsersRoutingModule
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
