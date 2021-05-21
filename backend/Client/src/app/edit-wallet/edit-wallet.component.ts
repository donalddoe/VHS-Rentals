import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { UserService } from '../user.service';
@Component({
  selector: 'app-edit-wallet',
  templateUrl: './edit-wallet.component.html',
  styleUrls: ['./edit-wallet.component.scss']
})
export class EditWalletComponent implements OnInit {

 
  constructor(
    public dialogRef:MatDialogRef<EditWalletComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private userservice:UserService  
  ) { }

  ngOnInit(): void {
    this.email.setValue(this.data.email)
    this.username.setValue(this.data.username)
    this.isAdmin.setValue(this.data.isAdmin)
    this.wallet.setValue(this.data.wallet)
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
    isAdmin: new FormControl('false', [
      Validators.required, 
    ]),
    wallet: new FormControl('false', [
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
  get isAdmin() {
    return this.form.get('isAdmin')
  }
  get wallet() {
    return this.form.get('wallet')
  }
  onUpdate(){
    this.userservice.updateUser(this.data._id,this.form.value).subscribe(response=>{
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Wallet has been updated',
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
