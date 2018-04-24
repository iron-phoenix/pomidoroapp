import { Component, OnInit, Input } from '@angular/core';
import { MsgService } from '../../services/msg.servise';

@Component({
  selector: 'app-info-message',
  templateUrl: './info-message.component.html',
  styleUrls: ['./info-message.component.less']
})
export class InfoMessageComponent implements OnInit {
  
  msg;

  constructor(private msgService: MsgService) {
    this.msg = this.msgService.getMsg();
   }  

  ngOnInit() {
    this.msg = this.msgService.msg.subscribe(() => {this.msg = this.msgService.getMsg().getValue()});
  }
}
