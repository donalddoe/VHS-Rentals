import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import  {AngularMaterialModule} from './angular-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './screens/login/login.component';
import { RegisterComponent } from './screens/register/register.component';
import { MoviesComponent } from './Admins/movies/movies.component';
import { RentalsComponent } from './Admins/rentals/rentals.component';
import { ReturnsComponent } from './users/returns/returns.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AddMoviesComponent } from './Admins/add-movies/add-movies.component';
import { CustomerComponent } from './Admins/customer/customer.component';
import { NoPageFoundComponent } from './screens/no-page-found/no-page-found.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from './loader/interceptor.service';
import { MovieDetailsComponent } from './Admins/movie-details/movie-details.component';
import { EditMovieComponent } from './edit-movie/edit-movie.component';
import { DeleteRecordComponent } from './delete-record/delete-record.component';
import { AdministrationComponent } from './Admins/administration/administration.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { StoreFrontComponent } from './store-front/store-front.component';
import { RentMovieComponent } from './rent-movie/rent-movie.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { FooterComponent } from './footer/footer.component';
import { UserComponent } from './user/user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { AddUserComponent } from './add-user/add-user.component';
import { EditRentalComponent } from './edit-rental/edit-rental.component';
import { AddRentalComponent } from './add-rental/add-rental.component';
import { WalletComponent } from './wallet/wallet.component';
import { EditWalletComponent } from './edit-wallet/edit-wallet.component';
// import { MdbModule } from 'mdb-angular-ui-kit';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    MoviesComponent,
    RentalsComponent,
    ReturnsComponent,
    NavBarComponent,
    AddMoviesComponent,
    CustomerComponent,
    NoPageFoundComponent,
    MovieDetailsComponent,
    EditMovieComponent,
    DeleteRecordComponent,
    AdministrationComponent,
    FooterComponent,
    StoreFrontComponent,
    RentMovieComponent,
    CheckOutComponent,
    UserComponent,
    EditUserComponent,
    AddUserComponent,
    EditRentalComponent,
    AddRentalComponent,
    WalletComponent,
    EditWalletComponent,

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
    // AngularMaterialModule,
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
   MatProgressBarModule,
  //  MdbModule 
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
