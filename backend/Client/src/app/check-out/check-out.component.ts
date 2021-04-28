import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { RentalService } from '../rental.service';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.scss']
})
export class CheckOutComponent implements OnInit {

  constructor(private rent:RentalService) {}
  

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
    alert()
    this.cart.forEach(element => {
      let id=localStorage.getItem("id")
      let movieId:string=element._id+""
      //TODO change backend 
      // this.rent.rent({movie:{...element},customer:{...this.form.value},customerId:id,movieId:movieId}).subscribe(response=>{
        this.rent.rent({userId:id,movieId:movieId}).subscribe(response=>{
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: element.title+' has been rented',
          showConfirmButton: false,
          timer: 4000
        })
      }

      )
   });
  }

  ngOnInit(): void {
    this.setCart()
  }



}
