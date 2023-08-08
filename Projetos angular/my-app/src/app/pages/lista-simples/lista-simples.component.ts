import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/services.service';
import { User } from '../models/user';

@Component({
  selector: 'app-lista-simples',
  templateUrl: './lista-simples.component.html',
  styleUrls: ['./lista-simples.component.css']
})
export class ListaSimplesComponent implements OnInit{

  constructor(private router:Router, public service:UserService){}
  users:User[] = [];
  
  ngOnInit(): void {
    this.getUsers()
  }
  
  goToDetail(user:User){
    this.router.navigate(['detalhe', user.id, user.phone])
  }
  getUsers():void{
    this.service.getUsers().subscribe(
      {
        next:(response) =>{
          console.log(response)
          this.users = response
        },
        error:(erro: any)=>{
          console.log('ocorreu um erro')
          console.log(erro)

        }
      }
    )
  }
}
