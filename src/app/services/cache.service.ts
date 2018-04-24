import { Injectable } from '@angular/core';
import { MsgService } from './msg.servise';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class CacheService {
    userCollection;
    projectCollection;
    taskCollection;
    private serverUrl = 'http://167.99.250.211:8000/api/';

    constructor ( private http: HttpClient, private ms: MsgService) {

    }

    ngOnInit(){
        this.http.get(this.serverUrl + 'projects', {headers: this.getHeaders()}).subscribe( data => { this.projectCollection = data});
    }

    started(){        
        if (!this.projectCollection || !this.userCollection || !this.taskCollection){
            this.updateProjectCollection();            
            this.updateUserCollection();
            this.updateTaskCollection();                                          
        } else {
            return Promise.resolve();
        }
    }
    
    getHeaders(){
        return new HttpHeaders({'Authorization':'Bearer ' + localStorage.getItem("tfs18")});
    }

    getUserCollection(){
        return (this.userCollection);
    }
    updateUserCollection(){
        this.http.get(this.serverUrl + 'users', {headers: this.getHeaders()})
        .toPromise()
        .then(data => { this.userCollection = data; return Promise.resolve()})
        .catch(err => {return Promise.reject(err.message || 'Server error');})
    }

    getProjectCollection(){
        return (this.projectCollection);
    }
    updateProjectCollection(){
        return this.http.get(this.serverUrl + 'projects', {headers: this.getHeaders()})
        .toPromise()
        .then(data => { this.projectCollection = data; return Promise.resolve()})
        .catch(err => {return Promise.reject(err.message || 'Server error');})
    }
    getTaskCollection(){
        return (this.taskCollection);
    }    
    updateTaskCollection(){
        this.http.get(this.serverUrl + 'tasks', {headers: this.getHeaders()})
        .toPromise()
        .then(data => { this.taskCollection = data; return Promise.resolve()})
        .catch(err => {return Promise.reject(err.message || 'Server error');});    
    }
    
 }

