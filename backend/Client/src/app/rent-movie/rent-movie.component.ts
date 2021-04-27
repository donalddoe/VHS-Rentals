import { Component, OnInit,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-rent-movie',
  templateUrl: './rent-movie.component.html',
  styleUrls: ['./rent-movie.component.scss']
})
export class RentMovieComponent implements OnInit {

  constructor(

    @Inject(MAT_DIALOG_DATA) public data: any,
    private getMovie:MovieService
  ) { }
  movie
  ngOnInit(): void {
    this.movie=this.data
  }

}
