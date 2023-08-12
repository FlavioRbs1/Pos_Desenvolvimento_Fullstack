import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { LestarDataSource, LestarItem } from './lestar-datasource';
import { User } from '../models/user';
import { UserService } from 'src/app/service/services.service';

@Component({
  selector: 'app-lestar',
  templateUrl: './lestar.component.html',
  styleUrls: ['./lestar.component.css']
})
export class LestarComponent implements AfterViewInit, OnInit {
   
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable,{static: false}) table!: MatTable<User>;
  dataSource = new MatTableDataSource <User> ([]);
  
  users: User[] = [];
  constructor(public service:UserService){}

  displayedColumns =['id','name','email','phone','cpf']

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */


  ngAfterViewInit() {
  //  this.dataSource.sort = this.sort;
  //  this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers():void{
    this.service.getUsers().subscribe({
      next: (response) =>{
        this.dataSource = new MatTableDataSource <User> (response);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error:(erro:any)=>{
        console.log(erro)
        alert('Ocorreu um erro')
      }
    })
  }
}
