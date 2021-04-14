import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private url = "http://localhost:4000/api/users";
  httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json'
    })
  };
  constructor(private http: HttpClient) { }
  register(data) {
    return this.http.post(this.url, data, this.httpOptions)
  };
}
