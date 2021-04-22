import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EditMovieService {
private url ="https://vhsrentals.herokuapp.com/api/movies/update-movie/"
httpOptions = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`,
    'x-auth-token':`${localStorage.getItem('token')}`

  })
};
constructor(private http: HttpClient) { }
editMovies(id,formData) {
  return this.http.put(this.url+id,formData,this.httpOptions,)
};
}
