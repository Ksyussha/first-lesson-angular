import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from './users.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[] = []

  constructor (private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('https://reqres.in/api/users?page=2').subscribe((data:any) => {
      this.users = data.data
      
    });
  }
}
