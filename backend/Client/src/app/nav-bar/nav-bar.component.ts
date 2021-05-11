import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor() { }
  
  getNumberOfItemsInCart() {
    let cart=[]
    if(localStorage.getItem("cart")){
      cart = JSON.parse(localStorage.getItem("cart"))

    }
    return cart.length
  }

  ngOnInit(): void {
  }

}
