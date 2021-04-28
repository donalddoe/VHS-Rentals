import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/customer.service';

@Component({
  selector: 'app-all-customers',
  templateUrl: './all-customers.component.html',
  styleUrls: ['./all-customers.component.scss']
})
export class AllCustomersComponent implements OnInit {

  Users: any = [];

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.customerService.viewUsers().subscribe(
      res => {
        console.log(res)
        this.Users = res;
      });
  }

}
