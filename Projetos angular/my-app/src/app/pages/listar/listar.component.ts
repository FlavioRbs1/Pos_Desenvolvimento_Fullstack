import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  
  users: User[] = [];
  constructor(public service:UserService){}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers():void{
    this.service.getUsers().subscribe({
      next: (response) =>{
        this.users = response
      },
      error:(erro:any)=>{
        console.log(erro)
        alert('Ocorreu um erro')
      }
    })
  }
}
