import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.less']
})
export class UserListComponent implements OnInit {

  @Input() user;
  usersSettingsWindow;  
  isMarked = false;
  constructor(private router:Router) { }

  ngOnInit() {
    this.router.url == '/usersSettings' ? this.usersSettingsWindow = true : this.usersSettingsWindow = false;
  }
  openUser(id){
    location.replace(location.href + "/" + id);
  }
  
  marked(){
    this.isMarked = !this.isMarked;
  }
}
