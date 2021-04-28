import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RentalService {


  private url = "https://vhsrentals.herokuapp.com/api/rentals/";

  httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
      'x-auth-token':`${localStorage.getItem('token')}`

    })
  };
  constructor(private http: HttpClient) { }
  rent(movie) {
    return this.http.post(this.url, movie, this.httpOptions)
  }
}
