import { Component, OnInit,ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GetMoviesService } from '../get-movies.service';
import { LoaderService } from '../loader/loader.service';
import { RentalsService } from '../rentals.service';
import { UserService } from '../user.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ReturnService } from '../return.service';
import Swal from 'sweetalert2';

export interface RentalData {
  user: object
  movie: object
  _id: string
}

@Component({
  selector: 'app-returns',
  templateUrl: './returns.component.html',
  styleUrls: ['./returns.component.scss']
})

export class ReturnsComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  users
  allusers
  usersHashTable
  movies
  rentals
  renteeRentalArray
  rentedMovies=[]
  moviesHashTable
  constructor(    
    public loaderService: LoaderService,
    private getRentals: RentalsService,
    public dialog: MatDialog,
    private userservice: UserService,
    private moviesservice: GetMoviesService,
    private returnservie:ReturnService) { }

  ngOnInit(): void {
    this.userservice.fetchUsers().subscribe(response => {this.allusers = response; this.setUsersHashTable();this.setUpRenteeTable()})
    this.moviesservice.fetchMovies().subscribe(response => {this.movies = response; this.setMoviesHashTable()})
    // this.setUpTable()  
    
  }

  form = new FormGroup({
    userid: new FormControl('', [
      Validators.required,

    ]),

  })

  get userid() {
    return this.form.get('userid')
  }
  form2 = new FormGroup({
    selected: new FormControl('', [
      Validators.required,

    ]),

  })

  get selected() {
    return this.form.get('selected')
  }
  setRentalMovies(){
    console.log({"this.userid.value":this.userid.value})
    if(this.userid.value){
      this.rentedMovies=this.renteeRentalArray[this.userid.value]
    }else{
      this.rentedMovies=[]
    }
    this.setUpTable()  

    console.log({"this.rentedMovies":this.rentedMovies})
  }
  setUsersHashTable(){
    this.usersHashTable=[]
    this.allusers.forEach(element => {
      this.usersHashTable[element._id]=element.username  
    });
  }
  setUpRenteeTable() {
    this.getRentals.allRentals().subscribe(response => {
      this.rentals = response
      let rentee=[]
      this.users=[]
      this.renteeRentalArray=[]
      this.rentals.forEach(element => {
        if(rentee.includes(element.userid)){
          this.renteeRentalArray[element.userid].push(element)

        }else{
        this.renteeRentalArray[element.userid]=[element]
          this.users.push({"username":this.usersHashTable[element.userid],"_id":element.userid})
          rentee.push(element.userid)
        }
        });
    })
  }
  setUpTable() {
    this.rentedMovies.forEach(element => {
      element["username"]=this.usersHashTable[element.userid]
      element["title"]=this.moviesHashTable[element.movieid]["title"]
      element["dailyRentalRate"]=this.moviesHashTable[element.movieid]["dailyRentalRate"]
    });
    // this.getRentals.allRentals().subscribe(response => {
    //   this.rentals = response
    //   console.log({"response":this.rentals})
    //   this.rentals.forEach(element => {
    //     element["username"]=this.usersHashTable[element.userid]
    //     element["title"]=this.moviesHashTable[element.movieid]["title"]
    //     element["dailyRentalRate"]=this.moviesHashTable[element.movieid]["dailyRentalRate"]
    //   });
    console.log(this.rentedMovies)
      this.dataSource = new MatTableDataSource(this.rentedMovies);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    // })
  }
  setMoviesHashTable(){
    this.moviesHashTable=[]
    this.movies.forEach(element => {
      this.moviesHashTable[element._id]={"title":element.title,"dailyRentalRate":element.dailyRentalRate,"movieid":element._id}  
    });
  }
  displayedColumns: string[] = ['username', 'movie-title', 'dailyRentalRate', 'dateOut', 'return'];
  dataSource: MatTableDataSource<RentalData>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  onsubmit(id){
    console.log({"row":id})
    this.returnservie.returnMovie(

      {
        "userid":id.userid,
        "movieid": id.movieid
    }
    

    ).subscribe(response=>{
      
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Movie has been returned',
        showConfirmButton: false,
        timer: 4000
      })
      console.log(response)}, error=>{
        
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: error["error"],
          showConfirmButton: false,
          timer: 4000
        })
      })

  }
}
