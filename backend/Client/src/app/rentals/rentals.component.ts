import { Component, OnInit } from '@angular/core';
import { RentalsService } from '../rentals.service';

@Component({
  selector: 'app-rentals',
  templateUrl: './rentals.component.html',
  styleUrls: ['./rentals.component.scss']
})
export class RentalsComponent implements OnInit {

  rentals
  constructor(private getRentals:RentalsService) { }

  ngOnInit(): void {
    this.getRentals.allRentals().subscribe(response=>{this.rentals=response}
      )

      console.log(this.rentals)
        }

}
