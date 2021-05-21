import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { UserService } from '../user.service';
import { DeleteRecordComponent } from 'src/app/delete-record/delete-record.component';
import { MatDialog, MatDialogConfig, MAT_DIALOG_DATA } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { EditUserComponent } from '../edit-user/edit-user.component';
import { RegisterComponent } from '../screens/register/register.component';
import { AddUserComponent } from '../add-user/add-user.component';
import { LoaderService } from '../loader/loader.service';
import { EditWalletComponent } from '../edit-wallet/edit-wallet.component';

export interface UserData {
  username: string
  email: string
  date: string
  isAdmin: boolean
  _id: string
}


@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss']
})
export class WalletComponent implements OnInit {
  users
  ngOnInit(): void {
    this.setUpTable()
  }
  setUpTable() {
    this.userservice.fetchUsers().subscribe(response => {
      this.users = response
      this.dataSource = new MatTableDataSource(this.users);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }
  displayedColumns: string[] = ['username','wallet','edit'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private userservice: UserService,
    public dialog: MatDialog,
    public loaderService: LoaderService,

  ) {
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  deleteUser(id) {
    let openDialog = this.dialog.open(DeleteRecordComponent)
    this.dialog.getDialogById(openDialog.id).afterClosed().subscribe(result => {
      if (result) {
        this.userservice.deleteUser(id).subscribe(() =>
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'User has been deleted',
            showConfirmButton: false,
            timer: 4000
          })
        )
        this.setUpTable()
      }
    })
  }

  editUser(user) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = user
    this.dialog.afterAllClosed.subscribe(() => { this.setUpTable() })
    this.dialog.open(EditWalletComponent, dialogConfig)
  }
  onAddNew() {
    const dialogConfig = new MatDialogConfig();
    this.dialog.afterAllClosed.subscribe(() => { this.setUpTable() })
    this.dialog.open(AddUserComponent, dialogConfig)
  }

}
