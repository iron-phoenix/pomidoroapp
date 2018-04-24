import { Component, Input } from '@angular/core';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.less']
})
export class TaskListComponent {

  @Input() task;
  taskCollection;
  constructor(private postService: PostService) { }
  
  ngOnInit(){
    this.taskCollection = this.postService.getTasks();
  }
  
}
