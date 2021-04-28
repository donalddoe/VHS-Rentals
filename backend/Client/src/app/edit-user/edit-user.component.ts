import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { UserService } from '../user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

  constructor(
    public dialogRef:MatDialogRef<EditUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private userservice:UserService  
  ) { }

  ngOnInit(): void {
    this.email.setValue(this.data.email)
    this.username.setValue(this.data.username)
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
 
  })

  get email() {
    return this.form.get('email')
  }
  get username() {
    return this.form.get('username')
  }
  onUpdate(){
    this.userservice.updateUser(this.data._id,this.form.value).subscribe(response=>{
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'User details have been edited',
        showConfirmButton: false,
        timer: 4000
        })
    
    })
    this.form.reset() 
    this.onClose()
  }
  onClose(){
    this.form.reset()
    this.dialogRef.close()
  }
}
