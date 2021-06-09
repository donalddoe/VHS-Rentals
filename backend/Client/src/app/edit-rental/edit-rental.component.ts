import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { GetMoviesService } from '../get-movies.service';
import { RentalService } from '../rental.service';
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
    private moviesservice: GetMoviesService ,
    private rent: RentalService 
  ) { }
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
  console.log(t)
  return t
}
setMoviesHashTable(){
  this.moviesHashTable=[]
  this.movies.forEach(element => {
    this.moviesHashTable[element._id]=element.dailyRentalRate  
  });
}
  ngOnInit(): void {
    this.userid.setValue(this.data.userid)
    this.movieid.setValue(this.data.movieid)
    this.total.setValue(this.data.total)
    this.daysBooked.setValue(this.data.daysBooked)
    this.userservice.fetchUsers().subscribe(response => {
      this.users = response
      this.moviesservice.fetchMovies().subscribe(response => {
        this.movies = response
        this.setMoviesHashTable()
      })
    })

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
      Validators.required,
  
    ]),

  })

  get movieid() {
    return this.form.get('movieId')
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

  onSubmit(){
    console.log(this.form.value)
  }
  onUpdate(){
    this.rent.update(this.form.value).subscribe(response=>{
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Rental has been edited',
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
