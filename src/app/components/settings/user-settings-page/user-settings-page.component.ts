import { Component, OnInit } from '@angular/core';
import { PostService } from '../../../services/post.service';
import { InfoMsg } from '../../../model/msg.model';
import { MsgService } from '../../../services/msg.servise';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../../model/user.model';

@Component({
  selector: 'app-user-settings-page',
  templateUrl: './user-settings-page.component.html',
  styleUrls: ['./user-settings-page.component.less']
})
export class UserSettingsPageComponent implements OnInit {

  userCollection;
  projectCollection;
  userId;  
  msg;  
  user;
  inputAvatar = false;
  constructor(private postService: PostService, private msgServise: MsgService, private route: ActivatedRoute) {    
   }
  ngOnInit() {
    this.route.paramMap.subscribe(params => {          
      this.userId = params.get('userId');     
    });
    if (this.userId !== null) {      
      if (this.userId === "new") {
        this.user = new User();                                    
      } else {
          this.postService.getUserById(this.userId).subscribe((data:User) => this.user = data); 
          this.projectCollection = this.postService.getProjectCollection();                       
      } 
    } else {
      this.userCollection = this.postService.getUserCollection();      
    } 
  }  
  createUser() {
    this.postService.createUser(this.user);
  }   
  saveUser() {
    this.postService.saveUser(this.user);
  }   
  showInputAvatar(){
    this.inputAvatar = !this.inputAvatar;
  }
}
