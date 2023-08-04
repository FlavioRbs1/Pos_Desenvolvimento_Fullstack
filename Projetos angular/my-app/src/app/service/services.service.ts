import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../pages/models/user';

const httpOptions = {
  headers:new HttpHeaders({'Content-Type': 'application/json'})
}


@Injectable({
  providedIn: 'root'
})
export class UserService {

  BASE_URL:string='http://localhost:3000';

  constructor(private http:HttpClient) { }

  getUsers():Observable<User[]>{
    return this.http.get<User[]>(this.BASE_URL + 'users',httpOptions)
  } 
  
  addUsers(user:any): Observable<User>{
    return this.http.post<User>(this.BASE_URL + 'users',user,httpOptions)
  }
  editUsers(user:any): Observable<User>{
    let url = this.BASE_URL +'users'+user.id;
    return this.http.post<User>(url,user,httpOptions)
  }
  deleteUsers(user:any): Observable<User>{
    let url = this.BASE_URL +'users'+user.id;
    return this.http.post<User>(url,httpOptions)
  }
}
