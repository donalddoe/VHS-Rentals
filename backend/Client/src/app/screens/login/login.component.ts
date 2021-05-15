import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from '../../login.service'
import Swal from 'sweetalert2'
import { LoaderService } from 'src/app/loader/loader.service';
import { JwtHelperService } from "@auth0/angular-jwt";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  reactiveForm:FormGroup;
  hide = true;
 
  constructor(
    private LoginService: LoginService,
    private router: Router,
    private route: ActivatedRoute,
    public fb: FormBuilder,
    public loaderService: LoaderService
  ) { 
    this.reactiveForm = this.fb.group({
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
    return this.reactiveForm.get('password')
  }

  get email() {
    return this.reactiveForm.get('email')
  }

  ngOnInit(): void {
  this.signOut()
  }
  signOut(){
    if(localStorage.getItem("token")){
      localStorage.removeItem("token")
    }
    if(localStorage.getItem("id")){
      localStorage.removeItem("id")
    }
    if(localStorage.getItem("email")){
      localStorage.removeItem("email")
    }
    if(localStorage.getItem("username")){
      localStorage.removeItem("username")
    }
    if(localStorage.getItem("isAdmin")){
      localStorage.removeItem("isAdmin")
    }
    if(localStorage.getItem("wallet")){
      localStorage.removeItem("wallet")
    }
  }

  private helper = new JwtHelperService();


  private getToken() {
    return localStorage.getItem('token');
  }

  private decodeToken() {
    return this.getToken() ? this.helper.decodeToken(this.getToken()) : null;
  }

  userData(): boolean {
    if (!this.decodeToken()) return null;
    const { isAdmin} = this.decodeToken();
    return isAdmin as boolean;
    
  }
 upLoad(reactiveForm){
   if (reactiveForm.valid){
    this.LoginService.userLogin(this.reactiveForm.value).subscribe(
      response => {
   if (response.hasOwnProperty("token")) {
  localStorage.setItem("token", response['token']);
  localStorage.setItem("id", response["id"]);
  localStorage.setItem('email',response['email']);
  localStorage.setItem('username',response['username']);
  localStorage.setItem('isAdmin', this.userData().toString());
  localStorage.setItem('wallet', response['wallet']);


console.log(response)
  Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'Login is successful, Welcome!!',
    showConfirmButton: false,
    timer:2000
  }),
  setTimeout(() => {
    this.reactiveForm.reset();
    // console.log(this.userData());
    if(this.userData() == true){
    this.router.navigate(['/admin']);
    }else 
   {this.router.navigate(['/store']);}
  }, 2000);
};
    },
      err => {
        console.log(err)
        if (err.error) {
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Something went wrong or Incorrect Password or Email',
            showConfirmButton: false,
            timer: 3000
          })
        }
      }
    )
   }
 }

}
