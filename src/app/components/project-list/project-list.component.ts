import { Component, Input } from '@angular/core';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.less'],
  providers: [PostService]
})

export class ProjectListComponent { 

  isMarked=false;
  
  @Input() project; 
  taskCollection; 
  constructor (private postService: PostService) {    
  }

  ngOnInit(){
    this.taskCollection = [];
    this.taskCollection = this.postService.getTasks();
  }

  openProject(id) {
    location.replace(location.href + "/" + id);    
  }

  marked(){
    this.isMarked = !this.isMarked;
  }

  getProjectTasks(id){
    location.replace('tasks/' + id);
  }
}
