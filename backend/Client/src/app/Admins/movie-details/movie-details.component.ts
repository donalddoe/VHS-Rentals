import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from 'src/app/movie.service';
import { LoaderService } from 'src/app/loader/loader.service';
import { MatDialog, MatDialogConfig, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';
import { EditMovieComponent } from 'src/app/edit-movie/edit-movie.component';
import { DeleteRecordComponent } from 'src/app/delete-record/delete-record.component';
import { DeleteMovieService } from 'src/app/delete-movie.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

  constructor(private router: Router,
    private route: ActivatedRoute,
    private getMovies: MovieService,
    private deleteMovies: DeleteMovieService,
    public loaderService: LoaderService,
    public dialog: MatDialog,
  ) { }


  confirmDelete() {

    let openDialog = this.dialog.open(DeleteRecordComponent)
    this.dialog.getDialogById(openDialog.id).afterClosed().subscribe(result => {
      if (result) {
        this.deleteMovies.deleteMovie(this.movie._id).subscribe(()=>
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Movie has been deleted',
            showConfirmButton: false,
            timer: 4000
          })
        )
        this.router.navigate(['/movies']);
     }
    })

  }
  editMovie(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = this.movie
    this.dialog.afterAllClosed.subscribe(() => { this.getMovie(this.movie._id) })
    this.dialog.open(EditMovieComponent, dialogConfig)
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get("id")
      this.getMovie(id)

    })
  }
  movie
  getMovie(id) {
    this.getMovies.fetchMovie(id).subscribe(response => { this.movie = response })
  }



}
