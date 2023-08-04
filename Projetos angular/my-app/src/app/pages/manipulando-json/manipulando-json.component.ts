import { Component, OnInit } from '@angular/core';
import studentsData from '../../../../student.json'
import { Router } from '@angular/router';

interface student{
  id:Number,
  name:String,
  email:String,
  gender:String;
}

@Component({
  selector: 'app-manipulando-json',
  templateUrl: './manipulando-json.component.html',
  styleUrls: ['./manipulando-json.component.css']
})
export class ManipulandoJsonComponent implements OnInit {
  
  students:student[] = studentsData;
  constructor(private router:Router){}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
    console.log(this.students)  
  }
  goToDetail(student:student){
    this.router.navigate(['detalhe',student.id]);
  }

}
