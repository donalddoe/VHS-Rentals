import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PageEvent } from '@angular/material/paginator';
import { TooltipPosition } from '@angular/material/tooltip';
import { LoaderService } from 'src/app/loader/loader.service';
import { FormControl } from '@angular/forms';
import { GetMoviesService } from '../get-movies.service';
import { MatDialog, MatDialogConfig, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RentMovieComponent } from '../rent-movie/rent-movie.component';
import Swal from 'sweetalert2';
import { MovieService } from '../movie.service';
import { UserService } from '../user.service';


@Component({
  selector: 'app-store-front',
  templateUrl: './store-front.component.html',
  styleUrls: ['./store-front.component.scss']
})
export class StoreFrontComponent implements OnInit {

  constructor(
    private getMovies: GetMoviesService,
    public loaderService: LoaderService,
    private router: Router,
    public dialog: MatDialog,
    private getMovie: MovieService,
    private userService:UserService
  ) { }


  ngOnInit(): void {
    this.userService.getCurrentUser().subscribe(response=>{localStorage.setItem("wallet",response["wallet"])})
    // this.userService.getCurrentUser().subscribe(response=>{console.log(response["wallet"])})
    this.getMovies.fetchMovies().subscribe(response => { this.movies = response, this.getList(0, 11) })
  }
  list = []
  movies;
  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  userHasEnoughFunds:boolean
  pageEvent: PageEvent;
  positionOptions: TooltipPosition[] = ['below', 'above', 'left', 'right'];
  position = new FormControl(this.positionOptions[1]);
  onPageEvent(event: PageEvent) {
    const start = event.previousPageIndex * event.pageSize + 1
    const limit = event.pageSize
    this.getList(start, limit)
  }

  hasEnoughFunds(price): boolean {
    let wallet:number=parseFloat(localStorage.getItem("wallet"))
    // this.userService.getCurrentUser().subscribe(response=>{wallet= response["wallet"]})
    if (wallet >= price) {
      return true;
    } else {
      return false;
    }
  }
  setDailyRentalDisplayClass(price):string{
    if(this.hasEnoughFunds(price)){
      return "footer-text";
    }else{
      return "footer-text-red";
    }
  }
  goToMovie(id) {
    let movie
    this.getMovie.fetchMovie(id).subscribe(response => {
      movie = response
      const dialogConfig = new MatDialogConfig();
      dialogConfig.data = movie
      let openDialog = this.dialog.open(RentMovieComponent, dialogConfig)
      this.dialog.getDialogById(openDialog.id).afterClosed().subscribe(result => {
        if (result) {
          // this.deleteMovies.deleteMovie(this.movie._id).subscribe(()=>
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Movie has been deleted',
            showConfirmButton: false,
            timer: 4000
          })

        }
      })

    })


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
