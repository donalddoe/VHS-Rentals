import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AddRentalComponent } from 'src/app/add-rental/add-rental.component';
import { DeleteRecordComponent } from 'src/app/delete-record/delete-record.component';
import { EditRentalComponent } from 'src/app/edit-rental/edit-rental.component';
import { GetMoviesService } from 'src/app/get-movies.service';
import { LoaderService } from 'src/app/loader/loader.service';
import { RentalsService } from 'src/app/rentals.service';
import { UserService } from 'src/app/user.service';
import Swal from 'sweetalert2';

export interface RentalData {
  user: object
  movie: object
  _id: string
}

@Component({
  selector: 'app-rentals',
  templateUrl: './rentals.component.html',
  styleUrls: ['./rentals.component.scss']
})
export class RentalsComponent implements OnInit {

  ngOnInit(): void {
    this.userservice.fetchUsers().subscribe(response => {this.users = response; this.setUsersHashTable()})
    this.moviesservice.fetchMovies().subscribe(response => {this.movies = response; this.setMoviesHashTable()})
    this.setUpTable()
    this.getRentals.allRentals().subscribe(response => { this.rentals = response })

  }
  users
  movies
  usersHashTable=[]
  moviesHashTable=[]
  setUsersHashTable(){
    this.usersHashTable=[]
    this.users.forEach(element => {
      this.usersHashTable[element._id]=element.username  
    });
  }
  setMoviesHashTable(){
    this.moviesHashTable=[]
    this.movies.forEach(element => {
      this.moviesHashTable[element._id]={"title":element.title,"dailyRentalRate":element.dailyRentalRate}  
    });
  }
  setUpTable() {
    this.getRentals.allRentals().subscribe(response => {
      this.rentals = response
      console.log(this.rentals)
      this.rentals.forEach(element => {
        element["username"]=this.usersHashTable[element.userid]
        element["title"]=this.moviesHashTable[element.movieid]["title"]
        element["dailyRentalRate"]=this.moviesHashTable[element.movieid]["dailyRentalRate"]
      });
      this.dataSource = new MatTableDataSource(this.rentals);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }
  
  displayedColumns: string[] = ['username', 'movie-title', 'dailyRentalRate', 'dateOut', 'delete'];
  dataSource: MatTableDataSource<RentalData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(
    public loaderService: LoaderService,
    private getRentals: RentalsService,
    public dialog: MatDialog,
    private userservice: UserService,
    private moviesservice: GetMoviesService,
  ) { }


  rentals


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  deleteRental(id) {
    let openDialog = this.dialog.open(DeleteRecordComponent)
    this.dialog.getDialogById(openDialog.id).afterClosed().subscribe(result => {
      if (result) {
         this.getRentals.deleteRental(id).subscribe(() =>
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Record has been deleted',
            showConfirmButton: false,
            timer: 4000
          })
        )
        this.setUpTable()
      }
    })
  }

  editRental(rental) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = rental
    this.dialog.afterAllClosed.subscribe(() => { this.setUpTable() })
    this.dialog.open(EditRentalComponent, dialogConfig)
  }
  onAddRental() {
    const dialogConfig = new MatDialogConfig();
    this.dialog.afterAllClosed.subscribe(() => { this.setUpTable() })
    this.dialog.open(AddRentalComponent, dialogConfig)
  }



}
