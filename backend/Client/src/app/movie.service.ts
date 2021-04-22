import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private url = "https://vhsrentals.herokuapp.com/api/movies/single-movie/";

  httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
      'x-auth-token':`${localStorage.getItem('token')}`

    })
  };
  constructor(private http: HttpClient) { }
  fetchMovie(id) {
    return this.http.get(this.url+id,  this.httpOptions)
  };
}

