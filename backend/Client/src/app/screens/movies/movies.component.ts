import { Component, OnInit } from '@angular/core';
import { GetMoviesService } from '../../get-movies.service';
import { Router } from '@angular/router';
import { PageEvent } from '@angular/material/paginator';
import { TooltipPosition } from '@angular/material/tooltip';
import { LoaderService } from 'src/app/loader/loader.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  constructor(private getMovies: GetMoviesService,
    public loaderService: LoaderService) { }

  ngOnInit(): void {
    this.getMovies.fetchMovies().subscribe(response => { this.movies = response, this.getList(0, 11) })
  }
  list=[]
  movies;
  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  pageEvent: PageEvent;
  positionOptions: TooltipPosition[] = ['below', 'above', 'left', 'right'];
  position = new FormControl(this.positionOptions[1]);
  onPageEvent(event: PageEvent) {
    const start = event.previousPageIndex * event.pageSize + 1
    const limit = event.pageSize
    this.getList(start, limit)
  }

  getList(start: number, limit: number) {
    let row = 1
    let col = 1
    let array = Object.values(this.movies)
    this.length = array.length
    this.list = []
    for (let index = start; index < array.length && index <= limit; index++) {
      this.list.push({ rows: row, cols: col, data: array[index] })
      if (index % 3 == 0) {
        row++
      }
      col = (col++) % 3
    }
  }
}
