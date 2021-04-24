import { Component, OnInit } from '@angular/core';
import { LoaderService } from 'src/app/loader/loader.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomerService } from 'src/app/customer.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  form:FormGroup = new FormGroup({});
  ngOnInit(): void {
  }
  constructor(
    private customerService: CustomerService,
    public loaderService: LoaderService,
    public fb: FormBuilder,
    ) { 
      this.form = this.fb.group({
        "name": ['',[Validators.required, Validators.minLength(5)]],
        "phone": ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
      })
    }

    get phone(){
      return this.form.get('phone');
    }
    get name(){
      return this.form.get('name')
    }
 

  onSubmit(form){
    console.log(form)
    this.customerService.addCustomer(this.form.value).subscribe(
      response => {
        console.log(response)
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Customer has been created',
          showConfirmButton: false,
          timer: 4000
        });
        setTimeout(() => {
          this.form.reset();
        }, 5000);
      }
    )
  }
}