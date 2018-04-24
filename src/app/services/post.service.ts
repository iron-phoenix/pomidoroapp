import { Injectable } from '@angular/core';
import {Post} from '../model/post.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
//import './rxjs-operators';
import { environment } from './../../environments/environment';
import { helpData } from '../help.data';
import { HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Project} from '../model/project.model'
import { MsgService } from './msg.servise';
import { Response } from '@angular/http';
import { User } from '../model/user.model';
import { CacheService } from './cache.service';

@Injectable()
export class PostService { 

  //private serverUrl = 'http://192.168.1.243:5000/api/';
  private serverUrl = 'http://167.99.250.211:8000/api/';
  
  
  constructor(private http: HttpClient, private d: helpData, private ms: MsgService, private cS: CacheService) { }

  getHeaders(){
    return new HttpHeaders({'Authorization':'Bearer ' + localStorage.getItem("tfs18")});
  }

  createProject(project, users) {
    let result = this.http.post(this.serverUrl + "projects", 
    {"name": project.name, "id": project.id, "defaultSprintLengthSec": project.defaultSprintLengthSec, "archivedAt": null},
    {headers: this.getHeaders()})
    .toPromise()
    .then( res => { 
      for (let u of users) {
        this.createProjectUser(project.id, u)
      }      
      this.msg(1, "Проект успешно создан", null);
      location.replace("projectSettings/" + project.id)
    })
    .catch(err => { this.msg(3, "Ошибка создания прокта", err.message)
                console.log(err);
                return Promise.reject(err.message || 'Server error');
            });
    this.cS.updateProjectCollection();
  }

  saveProject(project){
    return this.http.put(this.serverUrl + "projects/" + project.id,
    {
      "name": project.name,
      "id": project.id,
      "defaultSprintLengthSec": project.defaultSprintLengthSec      
    },
    {headers: this.getHeaders()})
    .toPromise()
    .then( res => {this.msg(1, "Проект успешно сохранен", null); return null})//location.replace("projectSettings/" + project.id)})
    .catch(err => { this.msg(3, "Ошибка сохранения прокта", err.message)
                return Promise.reject(err.message || 'Server error');
            });
  }

  getProjectUsers(projectId){    
    return this.http.get(this.serverUrl + "projects/"+ projectId +"/participants",  
    {headers: this.getHeaders()});         
  }

  createProjectUser(project, user) {
    return this.http.post(this.serverUrl + "projects/" + project + "/participants/" + user.id,
        {},
        {headers: this.getHeaders()})
        .toPromise()
        .then(() =>  {return Promise.resolve})
        .catch(() => {return Promise.reject});
  }
  
  archiveProject(id) {
    return this.http.post(this.serverUrl + "projects/" + id + "/archive", 
    {"id": id},
    {headers: this.getHeaders()})
    .toPromise()
    .then( res => {this.msg(1, "Проект успешно перенесен в архив", null); return null})
    .catch(err => { this.msg(3, "Ошибка архивирования прокта", err.message)
                return Promise.reject(err.message || 'Server error');
            });
  }

  createUser(user) {
    return this.http.post(this.serverUrl + "users", 
    {"password": user.password, "id": "", "userName": user.userName,"email": user.email, "phoneNumber": user.phoneNumber,"avatarUri": user.avatarUri,"birthday": user.birthday,"firstName": user.firstName,"lastName": user.lastName},
    {headers: this.getHeaders()})
    .toPromise()
    .then( res => {this.msg(1, "пользователь успешно создан", null); return null})
    .catch(err => { this.msg(3, "Ошибка создания пользователя", err.message)
                return Promise.reject(err.message || 'Server error');
            });

  }

  saveUser(user){
    return this.http.put(this.serverUrl + "users/" + user.id, 
    {
      "password": user.password,
      "newPassword": user.newPassword,
      "id": user.id,
      "userName": user.userName,
      "email": user.email,
      "phoneNumber": user.phoneNumber,
      "avatarUri": user.avatarUri,
      "birthday": user.birthday,
      "firstName": user.firstName,
      "lastName": user.lastName
    },
    {headers: this.getHeaders()})
    .toPromise()
    .then( res => {this.msg(1, "пользователь успешно сохранен", null); return null})
    .catch(err => { this.msg(3, "Ошибка сохранения пользователя", err.message)
                return Promise.reject(err.message || 'Server error');
            });
  }
  
  deleteUser(id) {
    console.log(this);
    return this.http.delete(this.serverUrl + "users/" + id, {headers: this.getHeaders()})
    .toPromise()
    .then( res => {this.msg(1, "Пользователь успешно удален", null); return null})
    .catch(err => { this.msg(3, "Ошибка удаления пользователя", err.message)
                return Promise.reject(err.message || 'Server error');
            });
  }


  sendLoginData(login, password) {   
    return  this.http.post(this.serverUrl + "users/token", {"userName": login, "password": password})
    .subscribe(res => { res ? this.saveToken(res, login) : this.authError()});
  }
  
  saveToken(res, login) {    
    localStorage.setItem("tfs18", res);
    return true;
  }

  authError(){
    this.ms.setMsg(3, "Ошибка авторизации", "Неверный логин или пароль", null);
    this.ms.showMsg();
    return false;
  }

  msg(id, title, discription) {
    this.ms.setMsg(id, title, discription, null);
    this.ms.showMsg();
    return false;
  }
  // sendLoginData(login, password) {
  //  this.http.post(this.serverUrl + "users/token", {"userName": login, "password": password})
  //   .toPromise()
  //   .then( res => this.saveToken(res, login))
  //   .catch(err => {
  //               return Promise.reject(err.error || 'Server error');
  //           });
  // }
  
  getMe() {    
    return this.http.get(this.serverUrl + "users/me", {headers: this.getHeaders()}); 
  }
  
  getProjectCollection() {    
    return this.cS.getProjectCollection();        
  }
  getUserCollection(){
    return this.cS.getUserCollection();  
  }

  getAllUsers() {
    return this.http.get(this.serverUrl + 'users', {headers: this.getHeaders()});
  }
  
  getTasks() {
    return this.cS.getTaskCollection(); 
  }

  createTask(task) {
    return this.http.post(this.serverUrl + "tasks", 
    {
      "name": task.name,            
      "subject" : task.subject,
      "description" : task.description,
      "status" : task.status,
      "priority" : task.priority,
      "sprintId"  : task.sprintId,
      "projectId" : task.projectId,
      "estimateTimeSec" : task.estimateTimeSec,
      "executorId" : task.executorId      
    },
    {headers: this.getHeaders()})
    .toPromise()
    .then( res => {this.msg(1, "Таска успешно создана", null); return null})
    .catch(err => { this.msg(3, "Ошибка создания таски", err.message)
                return Promise.reject(err.message || 'Server error');
            });

  }

  saveTask(task) {

  }
  getProjectById(id) {
    return this.http.get(this.serverUrl + 'projects/' + id, {headers: this.getHeaders()});    
  }
  getUserById(id){
    return this.http.get(this.serverUrl + 'users/' + id, {headers: this.getHeaders()});
  }

  setTime(projectid, userId, hours){
    let req = this.serverUrl + projectid +'/' + 'participants/' + userId;
    this.http.get(req, {headers: this.getHeaders()})
    .toPromise()
    .then(data => 
          this.http.put(req, {"workTimeSec" : (hours*3600)},{headers: this.getHeaders()})
          .toPromise()
          .then( res => { return null })
          .catch(err => { this.msg(3, "Ошибка добавления времени", err.message)
                      return Promise.reject(err.message || 'Server error');
                  }))
    .catch(data => 
      this.http.post(req, {"workTimeSec" : (hours*3600)},{headers: this.getHeaders()})
      .toPromise()
      .then( res => { return null})
      .catch(err => { this.msg(3, "Ошибка добавления времени", err.message)
                  return Promise.reject(err.message || 'Server error');
              }))
  } 
}
