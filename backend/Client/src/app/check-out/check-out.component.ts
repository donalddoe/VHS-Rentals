import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { EditMovieService } from '../edit-movie.service';
import { RentalService } from '../rental.service';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.scss']
})
export class CheckOutComponent implements OnInit {

  constructor(
    private rent:RentalService,
    private update:EditMovieService,
    private router: Router
    ) {}
  

  cart
  getTotal() {
    this.setCart()
    let result = 0
    this.cart.forEach(element => {
      console.log(element.daysBooked)
      if (element.daysBooked) {
        result += (element.dailyRentalRate * element.daysBooked)
      } else {
        result += element.dailyRentalRate
      }
    });
    return result
  }
  setCart() {
    this.cart = JSON.parse(localStorage.getItem("cart"))
  }
  removeMovie(id) {
    this.cart.splice(this.cart.findIndex(movie => movie._id === id), 1);
    localStorage.setItem("cart", JSON.stringify(this.cart))
  }


  setNumberOfDays(id) {
    let days = 0
    if (parseInt((document.getElementById(`${id}`) as HTMLInputElement).value) < 1) {
      days = 1
    } else {
      days = parseInt((document.getElementById(`${id}`) as HTMLInputElement).value)
    }
    let currentMovie = this.cart.findIndex(movie => movie._id === id)
    //TODO add days Booked to scheme
    this.cart[currentMovie].daysBooked = days
    this.cart[currentMovie].dateOut = new Date()
    localStorage.setItem("cart", JSON.stringify(this.cart))
    this.setCart()
  }
  processOrders(){
    console.log(this.cart)
     this.cart.forEach(element => {
      let id=localStorage.getItem("id")
      let movieId:string=element._id+""
      //TODO change backend 
      // this.rent.rent({movie:{...element},customer:{...this.form.value},customerId:id,movieId:movieId}).subscribe(response=>{
//         dailyRentalRate: 9
// genre: "Action, Crime, Drama, Thriller"
// numberInStock: 6
// plot: "Set within a year after the events of Batman Begins, Batman, Lieutenant James Gordon, and new district attorney Harvey Dent successfully begin to round up the criminals that plague Gotham City until a mysterious and sadistic criminal mastermind known only as the Joker appears in Gotham, creating a new wave of chaos. Batman's struggle against the Joker becomes deeply personal, forcing him to \"confront everything he believes\" and improve his technology to stop him. A love triangle develops between Bruce Wayne, Dent and Rachel Dawes."
// poster: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg"
// title: "The Dark Knight"
// year: "2008"
        this.rent.rent({userId:id,movieId:movieId}).subscribe(response=>{
          console.log(response)
          let numberInStock=element.numberInStock-1
          let movie=new FormData()
          movie.set("genre",element.genre)
          movie.set("numberInStock",numberInStock.toString())
          movie.set("plot",element.plot)
          movie.set("poster",element.poster)
          movie.set("title",element.title)
          movie.set("year",element.year)
          
          this.update.editMovies(element._id,movie).subscribe(result=>{
            console.log(result)
          })
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Your order has been processed, please remember to return your videos on time',
          showConfirmButton: false,
          timer: 4000
        })
      }

      )
   });
   localStorage.removeItem("cart")
   this.router.navigate(['/store']);

  }

  ngOnInit(): void {
    this.setCart()
  }



}
