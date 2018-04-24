import { Component, OnInit, Input } from '@angular/core';
import { UsersService } from '../../users.service';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.less'],
  providers: [PostService]
})
export class HomePageComponent implements OnInit {
  
  @Input() project;  
 
  taskCollection;
  constructor (private postService: PostService) { }
  
  ngOnInit() {
    this.taskCollection = [];
    this.taskCollection = this.postService.getTasks();    
  }

  //users = [];
  //searchStr = "";
  //constructor (private usersService: UsersService) { } // здесь происходит Ingect, так он выглядит 

    
    // this.usersService.getUsers().subscribe(users => {
    //   this.users = users
    // });
  
}
