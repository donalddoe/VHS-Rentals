import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SaveMoviesService {
   private url = "https://vhsrentals.herokuapp.com/api/movies/add-movie";
 //private url = "localhost:4000/api/movies/add-movie";

  httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
      'x-auth-token':`${localStorage.getItem('token')}`

    })
  };
  constructor(private http: HttpClient) { }
  save(movie) {
    return this.http.post(this.url, movie, this.httpOptions)
  };
}
