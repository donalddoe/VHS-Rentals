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
     this.cart[currentMovie].daysBooked = days
    this.cart[currentMovie].dateOut = new Date()
    localStorage.setItem("cart", JSON.stringify(this.cart))
    this.setCart()
    console.log(this.cart)
  }
  processOrders(){
    console.log(this.cart)
     this.cart.forEach(element => {
      let id=localStorage.getItem("id")
      let movieid:string=element._id+""
      this.setNumberOfDays(movieid)
      let daysBooked=element.daysBooked ? element.daysBooked : 1   
        this.rent.rent({userid:id,movieid:movieid,daysBooked:element.daysBooked+"",total:(daysBooked*element.dailyRentalRate)}).subscribe(response=>{
          console.log(response)
    
          })

   });
          Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Your order has been processed',
          showConfirmButton: false,
          timer: 4000
        })
   localStorage.removeItem("cart")
   this.router.navigate(['/store']);

  }

  ngOnInit(): void {
    this.setCart()
  }



}
