import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MsgService } from '../../../services/msg.servise';
import { PostService } from '../../../services/post.service';

@Component({
  selector: 'app-settings-page',
  templateUrl: './settings-page.component.html',
  styleUrls: ['./settings-page.component.less']
})
export class SettingsPageComponent implements OnInit {

  constructor(private router:Router, private ms: MsgService, private postService: PostService) { }

  ngOnInit() {
  }

  add() {    
    location.replace(this.getRoute() + '/new')
  }

  archiveMsg(){
    this.ms.setMsg(2, "Архивировать", "Уверены, что хотите перенести в архив эти объекты?", (() => {return this.archive.apply(this)}));
    this.ms.showMsg();

  }
 
  archive() {    
    let elements = document.querySelectorAll(".marked");
    for (let i = 0; i < elements.length; i++) {
      if (this.postService.archiveProject(elements[i].id))
        elements[i].remove();      
      ;
    }
    
    return;
    
  }
  edit() {
    location.replace(location.href + "/" + document.querySelector(".marked").id);

  }

  deleteMsg(){
    this.ms.setMsg(2, "Удалить", "Уверены, что хотите удалить эти объекты?", (() => {return this.delete.apply(this)}));
    this.ms.showMsg();

  }
  delete() {
    let elements = document.querySelectorAll(".marked");
    let delFunc;
    switch (this.getObject()){
      case 'project':  
        this.ms.setMsg(1, "Удалить", "Проекты удалять нельзя. Перенесите в архив", null);
        this.ms.showMsg();
        break;        
      case 'user': 
        for (let i = 0; i < elements.length; i++) {
          if (this.postService.deleteUser(elements[i].id))
            elements[i].remove();            
        }       
        break;
      case 'task': 
       // delFunc = this.postService.deleteTask();
        break; 
    }
    

  }
  
  getRoute(){             
    return this.router.url;
  }

  getObject(){
    switch(this.router.url) {
      case '/projectSettings':  
        return ('project')        
      case '/usersSettings': 
        return ('user')        
      case '/taskSettings': 
        return ('task')        
      default:
        return(null);
    }       
  }

  getMarked() {
    return document.querySelectorAll(".marked");
  }
}
