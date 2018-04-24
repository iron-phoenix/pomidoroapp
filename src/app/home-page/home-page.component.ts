import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.less']
})
export class HomePageComponent implements OnInit {

  users = [];
  searchStr = "";
  constructor (private usersService: UsersService) { } // здесь происходит Ingect, так он выглядит

  ngOnInit() {
    //this.users = this.usersService.users
    this.usersService.getUsers().subscribe(users => {
      this.users = users
    });
  }
}
