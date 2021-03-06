import { Component, OnInit } from '@angular/core';
import { PostService } from '../../../services/post.service';
import { ActivatedRoute } from '@angular/router';
import { Project } from '../../../model/project.model';
import { User } from '../../../model/user.model';

@Component({
  selector: 'app-project-settings-page',
  templateUrl: './project-settings-page.component.html',
  styleUrls: ['./project-settings-page.component.less'],

})
export class ProjectSettingsPageComponent implements OnInit {

  projectCollection;
  projectUsersCollection;
  projectId;  
  project = new Project();
  allUsers;
  addUser = false;
  user;   
  
  constructor(private postService: PostService, private route: ActivatedRoute) { }
  
  ngOnInit() {
    this.projectUsersCollection = [];
    this.route.paramMap.subscribe(params => {          
      this.projectId = params.get('projectId');     
    }) 
    if (this.projectId !== null) {
      if (this.projectId === "new") {
        this.project = new Project();        
        this.postService.getMe().subscribe((data:User) => this.projectUsersCollection.push(data));                    
      } else {
          this.postService.getProjectById(this.projectId).subscribe((data:Project) => this.project = data);
          this.postService.getProjectUsers(this.projectId).subscribe((data:any) => this.projectUsersCollection = data.map(res => {return res.user}));;                   
      } 
    } else {
      this.projectCollection = this.postService.getProjectCollection();
      console.log(this.projectCollection);
    }  
  }
  selectUser() {    
    this.postService.getAllUsers().subscribe(users => { this.allUsers = users; this.addUser = true;});
    
  }
  addUserToProject(event) {
    this.projectUsersCollection.push(event);
    this.selectUser();
  }
  setSprint(sec) {
    this.project.defaultSprintLengthSec = sec;
  }

   createProject() {
   this.postService.createProject(this.project, this.projectUsersCollection);   
  }
   saveProject() {
    this.postService.saveProject(this.project);
  }

  
}
