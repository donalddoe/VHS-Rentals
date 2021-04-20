import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url = "http://localhost:4000/api/auth";
  httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient, private router : Router) { }

  

  userLogin(data): Observable<any> {
    return this.http.post(this.url, data, this.httpOptions)
  };

  
  isAuthenticated() {
    // get the auth token from localStorage
    let users = localStorage.getItem('token');
    
    // check if token is set, then...
    if (users) {
        return true;   
    }
    return false;

    
}
}
