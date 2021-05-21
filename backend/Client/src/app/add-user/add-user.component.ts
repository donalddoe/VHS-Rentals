import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  constructor(private service:RegisterService,
    public dialogRef:MatDialogRef<AddUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

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
          title: 'New user added',
          showConfirmButton: false,
          timer: 1500
        })
       
       
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
      this.form.reset() 
      this.onClose()
  }
  onClose(){
    this.form.reset()
    this.dialogRef.close()
  }
  disableConfirmPassword() {
    this.form.get('confirmpassword').disable({ onlySelf: true });
    this.form.updateValueAndValidity();
  }
  form = new FormGroup({
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
    isAdmin: new FormControl('true', [
      Validators.required,
    ]),
    wallet: new FormControl('true', [
      Validators.required,
      Validators.min(0)
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
  get isAdmin() {
    return this.form.get('isAdmin')
  }
  get wallet() {
    return this.form.get('wallet')
  }
}
