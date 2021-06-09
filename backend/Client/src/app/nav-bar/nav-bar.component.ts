import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { NavigationEnd, Router } from '@angular/router';
// import { LoginService } from 'src/app/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  wallet = null;
  constructor(
    // private auth: AuthService, 
    private router: Router
  ) {
    this.router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        // const userCredential = localStorage.getItem('wallet');
        // if(userCredential) {
        //   const wallet = userCredential;
        //   this.wallet = wallet;
        // }
      }
    })
  }

  getWallet() {
    if (localStorage.getItem("wallet")) {
      return localStorage.getItem("wallet")
    }
    return 0
  }

  getNumberOfItemsInCart() {
    let cart = []
    if (localStorage.getItem("cart")) {
      cart = JSON.parse(localStorage.getItem("cart"))

    }
    return cart.length
  }


  ngOnInit(): void {
  }

}
