import { Component, OnInit } from '@angular/core';
import { PostService } from '../../../services/post.service';
import { InfoMsg } from '../../../model/msg.model';
import { MsgService } from '../../../services/msg.servise';
import { ActivatedRoute } from '@angular/router';
import { Task } from '../../../model/task.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from '../../../model/user.model';

@Component({
  selector: 'app-task-settings-page',
  templateUrl: './task-settings-page.component.html',
  styleUrls: ['./task-settings-page.component.less']
})
export class TaskSettingsComponent implements OnInit {

  taskCollection;
  projectId;
  taskId;  
  msg;   
  task; 
  form: FormGroup;
  userId;
  
  constructor(private postService: PostService, private msgServise: MsgService, private route: ActivatedRoute,
    private fb: FormBuilder) {    
      
   }
  ngOnInit() {    
    this.taskCollection = [];
    this.postService.getMe().subscribe((data:User) => this.userId = data.id)
    this.route.paramMap.subscribe(params => {          
      this.projectId = params.get('projectId');
      this.taskId = params.get('taskId'); ;     
    });
    if (this.taskId === "new") {
        this.task = new Task();      
    } else {            
      this.taskCollection = this.postService.getTasks();             
    } 
    this.form = this.createForm();
  }  
  createTask(task) {
    task.executorId = this.userId;
    this.postService.createTask(task);
  }   
  saveTask(task) {
    console.log(task);
    this.postService.saveTask(task);
  } 

  onSubmit() {
   // this.postService.saveTask();
  }

  private createForm(): FormGroup {
    return this.fb.group({
      name: [this.task.name, Validators.required],      
      id : [this.task.id],
      subject : [this.task.subject],
      description : [this.task.description],
      status : [this.task.status],
      priority : [this.task.priority],
      sprintId  : [this.task.sprintId],
      projectId : [this.projectId],
      estimateTimeSec : [this.task.estimateTimeSec],      
      executor : [this.task.executor.userName],
      creator : [this.task.creator.userName]
      // executor  : [{ 
      //           id: this.task.executor.id,
      //           userName: this.task.executor.userName,
      //           firstName: this.task.executor.firstName,
      //           lastName: this.task.executor.lastName,
      //           email: this.task.executor.email
      //         }],
      // creator : [{
      //           id: this.task.creator.id,
      //           userName: this.task.creator.userName,
      //           firstName: this.task.creator.firstName,
      //           lastName: this.task.creator.lastName,
      //           email: this.task.creator.email
      //         }]
    });
  }
}
