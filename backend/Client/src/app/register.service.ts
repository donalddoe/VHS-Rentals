import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private url = "https://vhsrentals.herokuapp.com/api/users";
  //private url = "localhost:4000/api/users/";

  httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json'
    })
  };
  constructor(private http: HttpClient) { }
  register(data): Observable<any> {
    return this.http.post(this.url, data, this.httpOptions)
  };

}
