import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-detalhe',
  templateUrl: './detalhe.component.html',
  styleUrls: ['./detalhe.component.css']
})
export class DetalheComponent implements OnInit{
  constructor(private route:ActivatedRoute){}
    indentificador: number = 0;  
    phone: string=''
  ngOnInit(): void {
    this.route.params.forEach((params:Params) => {
      if(params['id'] !== undefined){
        this.indentificador = +params['id'];
        console.log(this.indentificador);
      }
      if(params['phone'] !== undefined){
        this.phone = params['phone'];
        console.log(this.phone);
      }
      
    });
  }

}
