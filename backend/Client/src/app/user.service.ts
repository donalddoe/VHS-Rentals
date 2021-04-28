import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {


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
  fetchUsers() {
    return this.http.get(this.url,  this.httpOptions)
  };
  
  deleteUser(id){
    return this.http.delete(this.url+id, this.httpOptions)
  }

  updateUser(id, data) {
    return this.http.put(this.url+id, data, this.httpOptions)
  }

  
}
