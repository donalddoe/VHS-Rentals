import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MovieService } from '../movie.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-rent-movie',
  templateUrl: './rent-movie.component.html',
  styleUrls: ['./rent-movie.component.scss']
})
export class RentMovieComponent implements OnInit {

  constructor(
    public dialogRef:MatDialogRef<RentMovieComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private getMovie: MovieService
  ) { }
  movie
  ngOnInit(): void {
    this.movie = this.data
  }
  addToCart() {
    let cart = []
    if (localStorage.getItem("cart")) {
      cart = JSON.parse(localStorage.getItem("cart"))
      cart.push(this.movie)
    } else {
      cart.push(this.movie)
    }
    localStorage.setItem("cart", JSON.stringify(cart))

    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Movie has been added to your shoping cart',
      showConfirmButton: false,
      timer: 4000
    })
    this.dialogRef.close()
  }
  hasEnoughFunds(price): boolean {
    let wallet:number=parseFloat(localStorage.getItem("wallet"))
    // this.userService.getCurrentUser().subscribe(response=>{wallet= response["wallet"]})
    if (wallet >= price) {
      return true;
    } else {
      return false;
    }
  }
}
