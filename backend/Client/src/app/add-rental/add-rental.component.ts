import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { GetMoviesService } from '../get-movies.service';
import { RentalService } from '../rental.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-rental',
  templateUrl: './add-rental.component.html',
  styleUrls: ['./add-rental.component.scss']
})
export class AddRentalComponent implements OnInit {

  constructor(private userservice: UserService,
    private moviesservice: GetMoviesService,
    private rent: RentalService) { }
  users
  movies
  ngOnInit(): void {
    this.userservice.fetchUsers().subscribe(response => this.users = response)
    this.moviesservice.fetchMovies().subscribe(response => this.movies = response)

  }
  form = new FormGroup({
    userId: new FormControl('', [
      Validators.required,

    ]),
    movieId: new FormControl('', [
      Validators.required,

    ]),
    daysBooked: new FormControl('', [
      Validators.required,
      Validators.min(1)
    ]),
    // total: new FormControl('', [
    //   Validators.required,

    // ]),

  })

  get movieId() {
    return this.form.get('movieId')
  }
  get userId() {
    return this.form.get('userId')
  }
  get daysBooked() {
    return this.form.get('daysBooked')
  }
  // get total() {
  //   return this.form.get('daysBooked')
  // }

  onSubmit() {

    this.rent.rent(this.form.value).subscribe(response => {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Movie has been rented',
        showConfirmButton: false,
        timer: 4000
      })
    }

    )

    console.log(this.form.value)
  }
}
