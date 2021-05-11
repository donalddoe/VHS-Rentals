import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { GetMoviesService } from '../get-movies.service';
import { UserService } from '../user.service';
@Component({
  selector: 'app-edit-rental',
  templateUrl: './edit-rental.component.html',
  styleUrls: ['./edit-rental.component.scss']
})
export class EditRentalComponent implements OnInit {

  constructor(
    public dialogRef:MatDialogRef<EditRentalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private userservice: UserService,
    private moviesservice: GetMoviesService 
  ) { }
users
movies
  ngOnInit(): void {
    this.userservice.fetchUsers().subscribe(response => {
      this.users = response
      this.moviesservice.fetchMovies().subscribe(response => {
        this.movies = response
        this.userId.setValue(this.data.user._id)
        this.movieId.setValue(this.data.movie._id)
          
      })
    })

  }
  form = new FormGroup({
    userId: new FormControl(this.data.user._id, [
      Validators.required,
   
    ]),
    movieId: new FormControl('', [
      Validators.required,

    ]),
    daysBooked: new FormControl('', [
      Validators.required,
      Validators.min(1)
    ]),
    total: new FormControl('', [
      Validators.required,
  
    ]),

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
  get total() {
    return this.form.get('total')
  }

  onSubmit(){
    console.log(this.form.value)
  }
  onUpdate(){
    this.userservice.updateUser(this.data._id,this.form.value).subscribe(response=>{
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'User details have been edited',
        showConfirmButton: false,
        timer: 4000
        })
    
    })
    this.form.reset() 
    this.onClose()
  }
  onClose(){
    this.form.reset()
    this.dialogRef.close()
  }
}
