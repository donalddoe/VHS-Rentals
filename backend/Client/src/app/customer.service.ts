import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private url = "https://vhsrentals.herokuapp.com/api/users/";

  httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
      'x-auth-token':`${localStorage.getItem('token')}`

    })
  };


  constructor(private http: HttpClient) { }


  viewUsers(): Observable <any> {
    return this.http.get(this.url, this.httpOptions)
  };

  deleteUser(id): Observable <any> {
    return this.http.delete(this.url+id, this.httpOptions)
  }

  updateUser(id, data): Observable <any> {
    return this.http.put(this.url+id, data, this.httpOptions)
  }

  
}
