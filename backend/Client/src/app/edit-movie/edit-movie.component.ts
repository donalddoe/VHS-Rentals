import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { EditMovieService } from '../edit-movie.service';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.scss']
})
export class EditMovieComponent implements OnInit {

  constructor(
    public dialogRef:MatDialogRef<EditMovieComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private editMovie:EditMovieService  
    ) { }

  ngOnInit(): void {
    this.title.setValue(this.data.title)
    this.genre.setValue(this.data.genre)
    this.plot.setValue(this.data.plot)
    this.year.setValue(this.data.year)
    this.poster.setValue(this.data.poster)
    this.numberInStock.setValue(this.data.numberInStock)
    this.dailyRentalRate.setValue(this.data.dailyRentalRate)
  }

  form = new FormGroup({
    title: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
    ]),
    genre: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
    ]),
    plot: new FormControl('', [
       Validators.required,
       Validators.minLength(2),
    ]),
    year: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
    ]),
    poster: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
    ]),
    numberInStock: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
    ]),
    dailyRentalRate: new FormControl('', [
      Validators.required,
      Validators.min(1),
    ]),
  }
  )
  
  get genre() {
    return this.form.get('genre')
  }
  get plot() {
    return this.form.get('plot')
  }
  get year() {
    return this.form.get('year')
  }
  get poster() {
    return this.form.get('poster')
  }
  get numberInStock() {
    return this.form.get('numberInStock')
  }
  get dailyRentalRate() {
    return this.form.get('dailyRentalRate')
  }
  get title() {
    return this.form.get('title')
  }
  onUpdate(){
    this.editMovie.editMovies(this.data._id,this.form.value).subscribe(response=>{console.log(response)})
    this.form.reset()
    Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'Movie details have been edited',
    showConfirmButton: false,
    timer: 4000
    })

    this.onClose()
  }
  onClose(){
    this.form.reset()
    this.dialogRef.close()
  }
}
