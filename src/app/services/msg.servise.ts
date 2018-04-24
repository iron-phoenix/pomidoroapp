import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { InfoMsg } from '../model/msg.model';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class MsgService {

    msg: BehaviorSubject<InfoMsg> = new BehaviorSubject<InfoMsg>(new InfoMsg (1,null,null,null));

    setMsg(type: number, title: String, discription: String, func: Function) {
        this.msg.next(new InfoMsg(type,title,discription, func));        
    }

    getMsg() {
        return this.msg;
    }

    showMsg(){        
        document.querySelector("#msg").classList.remove("hidden");
    }

    hiddenMsg(){
        document.querySelector("#msg").classList.add("hidden")
    }

 }