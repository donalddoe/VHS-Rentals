import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoaderService } from 'src/app/loader/loader.service';
import {RegisterService} from '../../register.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  hide = true;

  constructor(
    private router: Router,
    private service:RegisterService,
    public loaderService: LoaderService
  ) { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.disableConfirmPassword()
    // let data = this.formatDataForEndPoint();
    this.service.register(this.form.value).subscribe(
      response => {
        // this.openDialog()
        console.log(response)
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Registration successfull',
          showConfirmButton: false,
          timer: 1500
        })
        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 5000)
       
      }, (error: Response) => {
        // this.dialog.open(FormErrorComponent,{data:{message:"test"}})
        if (error.status === 404) {
          alert("Signup unsuccessful ")
        } else {
          if (error.status === 201) {
            this.form.setErrors(error.json())
          } else {
            alert('An unexpected error occurred:' + error)
          }
        }

      })

  }
  disableConfirmPassword() {
    this.form.get('confirmpassword').disable({ onlySelf: true });
    this.form.updateValueAndValidity();
  }
  form = new FormGroup({
    wallet: new FormControl('200'),
    email: new FormControl('', [
      Validators.required,
      Validators.email,
      Validators.minLength(5)
    ]),
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(5)
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.pattern(/((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]))/g)
      //at least 1 digit ,at least one lowercase char , at lease 1 uppercase char and one special char
    ]),
    confirmpassword: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.pattern(/((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]))/g)
      //at least 1 digit ,at least one lowercase char , at lease 1 uppercase char and one special char
    ]),
  })

  get email() {
    return this.form.get('email')
  }
  get username() {
    return this.form.get('username')
  }
  get password() {
    return this.form.get('password')
  }
  get confirmpassword() {
    return this.form.get('confirmpassword')
  }
}
