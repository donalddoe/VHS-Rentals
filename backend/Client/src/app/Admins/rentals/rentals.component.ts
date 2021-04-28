import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AddRentalComponent } from 'src/app/add-rental/add-rental.component';
import { DeleteRecordComponent } from 'src/app/delete-record/delete-record.component';
import { EditRentalComponent } from 'src/app/edit-rental/edit-rental.component';
import { LoaderService } from 'src/app/loader/loader.service';
import { RentalsService } from 'src/app/rentals.service';

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
    this.setUpTable()
    this.getRentals.allRentals().subscribe(response => { this.rentals = response })

  }
  setUpTable() {
    this.getRentals.allRentals().subscribe(response => {
      this.rentals = response
      this.dataSource = new MatTableDataSource(this.rentals);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })

    // this.userservice.fetchUsers().subscribe(response => {
    //   this.users = response
    //   this.dataSource = new MatTableDataSource(this.users);
    //   this.dataSource.paginator = this.paginator;
    //   this.dataSource.sort = this.sort;
    // })
  }
  // [ { "_id": "608928553f1dd300049cae09", "user": { "_id": "607deea316fb5419a848c72b" }, "movie": { "_id": "608173c8c18f36001558c8d5", "title": "Batman Begins", "dailyRentalRate": 2 }, "dateOut": "2021-04-28T09:18:13.609Z" } ]

  displayedColumns: string[] = ['username', 'movie-title', 'dailyRentalRate', 'dateOut', 'daysBooked', 'delete', 'edit'];
  dataSource: MatTableDataSource<RentalData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(
    public loaderService: LoaderService,
    private getRentals: RentalsService,
    public dialog: MatDialog


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
        // this.userservice.deleteUser(id).subscribe(() =>
        //   Swal.fire({
        //     position: 'center',
        //     icon: 'success',
        //     title: 'User has been deleted',
        //     showConfirmButton: false,
        //     timer: 4000
        //   })
        // )
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
