import { Component, OnInit } from '@angular/core';
import { LoaderService } from 'src/app/loader/loader.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomerService } from 'src/app/customer.service';
import Swal from 'sweetalert2';
import { RegisterService } from 'src/app/register.service';


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
    private service:RegisterService,
    public loaderService: LoaderService,
    public fb: FormBuilder,
    ) { 
      this.form = this.fb.group({
        "username": ['',[Validators.required, Validators.minLength(5)]],
        "email": new FormControl(null,[Validators.required, this.emailChecked]),
      "password": new FormControl(null,[Validators.required, Validators.minLength(8),
       Validators.pattern(/((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]))/g)]),
      })
    }

    




emailChecked(control){
  if(control.value !=null){
    var regexp = new RegExp('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')
    if(regexp.test(control.value) !==true){
      return{
        emailValidity:true
      } 
    }
  }
}

get password() {
  return this.form.get('password')
}

get email() {
  return this.form.get('email')
}

    get username(){
      return this.form.get('username')
    }
 

  onSubmit(form){
    console.log(form)
    this.service.register(this.form.value).subscribe(
      response => {
        console.log(response)
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'User has been created',
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