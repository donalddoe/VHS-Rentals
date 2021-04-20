import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
 
  constructor(private router: Router
    , private LoginService: LoginService) {}

  canActivate() {
    // Check to see if a user has a valid token
    if (this.LoginService.isAuthenticated()) {
        // If they do, return true and allow the user to load app
        return true;
    }

    // If not, they redirect them to the login page
    this.router.navigate(['/login']);
    return false;
}

}
