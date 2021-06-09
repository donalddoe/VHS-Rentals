import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { GetMoviesService } from '../get-movies.service';
import { RentalService } from '../rental.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-rental',
  templateUrl: './add-rental.component.html',
  styleUrls: ['./add-rental.component.scss']
})
export class AddRentalComponent implements OnInit {

  constructor(private userservice: UserService,
    private moviesservice: GetMoviesService,
    private rent: RentalService,
    private router: Router) { }
  users
  movies
  moviesHashTable=[]
  getDailyRentalRate(){
    return this.moviesHashTable[this.movieid.value] ? this.moviesHashTable[this.movieid.value] : 0
  }
  getTotal(){
    let t=this.getDailyRentalRate()*this.daysBooked.value
    this.total.setValue(t)
    this.total.updateValueAndValidity()
    return t
  }
  setMoviesHashTable(){
    this.moviesHashTable=[]
    this.movies.forEach(element => {
      this.moviesHashTable[element._id]=element.dailyRentalRate  
    });
  }

  ngOnInit(): void {
    this.moviesservice.fetchMovies().subscribe(response => {this.movies = response; this.setMoviesHashTable()})
    this.userservice.fetchUsers().subscribe(response => this.users = response)
    this.moviesservice.fetchMovies().subscribe(response => this.movies = response)

  }
  form = new FormGroup({
    userid: new FormControl('', [
      Validators.required,

    ]),
    movieid: new FormControl('', [
      Validators.required,

    ]),
    daysBooked: new FormControl(0, [
      Validators.required,
      Validators.min(1)
    ]),
 total: new FormControl(0, [

 ]),

  })

  get movieid() {
    return this.form.get('movieid')
  }
  get userid() {
    return this.form.get('userid')
  }
  get daysBooked() {
    return this.form.get('daysBooked')
  }
   get total() {
     return this.form.get('total')
   }

  onSubmit() {
    this.daysBooked.setValue(this.daysBooked.value+"")
    this.form.updateValueAndValidity()
    this.rent.rent(this.form.value).subscribe(response => {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Movie has been rented',
        showConfirmButton: false,
        timer: 4000
      })
      this.router.navigate['/admin/rentals']
    }

    )


  }
}
