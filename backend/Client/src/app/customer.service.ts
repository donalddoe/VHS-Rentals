import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private url = "https://vhsrentals.herokuapp.com/api/customers/";

  httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
      'x-auth-token':`${localStorage.getItem('token')}`

    })
  };


  constructor(private http: HttpClient) { }


  addCustomer(data): Observable <any> {
    return this.http.post(this.url, data, this.httpOptions)
  };

  
}
