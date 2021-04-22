import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeleteMovieService {
  private url ="https://vhsrentals.herokuapp.com/api/movies/delete-movie/"
  httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
      'x-auth-token':`${localStorage.getItem('token')}`
  
    })
  };
  constructor(private http: HttpClient) { }
  deleteMovie(id) {
    return this.http.delete(this.url+id,this.httpOptions,)
  };
  }
  