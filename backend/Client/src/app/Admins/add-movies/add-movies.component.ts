import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {OmdbapiService} from '../../omdbapi.service';
import Swal from 'sweetalert2'
import { LoaderService } from 'src/app/loader/loader.service';
import {SaveMoviesService} from '../../save-movies.service';
interface MovieDetails{
  Title:string,
  genre:string,
  plot:string,
  year:string,
  poster:string,
}
@Component({
  selector: 'app-add-movies',
  templateUrl: './add-movies.component.html',
  styleUrls: ['./add-movies.component.scss']
})

export class AddMoviesComponent implements OnInit {

  constructor(private omdbLookupservice:OmdbapiService,
    private saveMoviesService:SaveMoviesService,
    public loaderService: LoaderService) {  }

  ngOnInit(): void {
  }
  lookupOmdb(){
     this.omdbLookupservice.find(this.searchTitle.value).subscribe(
      response => {
      this.movieDetails={...response}
      this.title.setValue(this.movieDetails.Title)
      this.genre.setValue(this.movieDetails.Genre)
      this.plot.setValue(this.movieDetails.Plot)
      this.year.setValue(this.movieDetails.Year)
      this.poster.setValue(this.movieDetails.Poster)
      this.searchForm.reset()
    })
  }
onSubmit(){
  console.log(this.form.value)
  this.saveMoviesService.save(this.form.value).subscribe(response=>{
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Movie has been added',
      showConfirmButton: false,
      timer: 4000
    })
  this.form.reset()
  })
}
  searchForm = new FormGroup({
    searchTitle: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
    ]),
  }
  )
 
   movieDetails:any
  form = new FormGroup({
    title: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
    ]),
    genre: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
    ]),
    plot: new FormControl('', [
       Validators.required,
       Validators.minLength(2),
    ]),
    year: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
    ]),
    poster: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
    ]),
    numberInStock: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
    ]),
    dailyRentalRate: new FormControl('', [
      Validators.required,
      Validators.min(1),
    ]),
  }
  )
  

  get searchTitle() {
    return this.searchForm.get('searchTitle')
  }
  //form
  get genre() {
    return this.form.get('genre')
  }
  get plot() {
    return this.form.get('plot')
  }
  get year() {
    return this.form.get('year')
  }
  get poster() {
    return this.form.get('poster')
  }
  get numberInStock() {
    return this.form.get('numberInStock')
  }
  get dailyRentalRate() {
    return this.form.get('dailyRentalRate')
  }
  get title() {
    return this.form.get('title')
  }
}


//j


// Actors: "Mike Myers, Eddie Murphy, Cameron Diaz, John Lithgow"
// Awards: "Won 1 Oscar. Another 39 wins & 60 nominations."
// BoxOffice: "$267,665,011"
// Country: "USA, Japan"
// DVD: "25 Nov 2015"
// Director: "Andrew Adamson, Vicky Jenson"
// Genre: "Animation, Adventure, Comedy, Family, Fantasy"
// Language: "English"
// Metascore: "84"
// Plot: "A mean lord exiles fairytale creatures to the swamp of a grumpy ogre, who must go on a quest and rescue a princess for the lord in order to get his land back."
// Poster: "https://m.media-amazon.com/images/M/MV5BOGZhM2FhNTItODAzNi00YjA0LWEyN2UtNjJlYWQzYzU1MDg5L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
// Production: "DreamWorks SKG, Pacific Data Images (PDI)"
// Rated: "PG"
// Ratings: (3) [{…}, {…}, {…}]
// Released: "18 May 2001"
// Response: "True"
// Runtime: "90 min"
// Title: "Shrek"
// Type: "movie"
// Website: "N/A"
// Writer: "William Steig (based upon the book by), Ted Elliott, Terry Rossio, Joe Stillman, Roger S.H. Schulman, Cody Cameron (additional dialogue), Chris Miller (additional dialogue), Conrad Vernon (additional dialogue)"
// Year: "2001"
// imdbID: "tt0126029"
// imdbRating: "7.8"
// imdbVotes: "620,107"