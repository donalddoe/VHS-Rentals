import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OmdbapiService {
  private url = "http://www.omdbapi.com/?t=";
  httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json'
    })
  };
  constructor(private http: HttpClient) { }
  find(movieTitle): Observable<any> {
    return this.http.get(this.url+ movieTitle+"&apikey=5ccdc80e&plot=full")
  };

}

