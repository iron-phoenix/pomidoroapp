import { Component } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [UsersService]
})
export class AppComponent { 
  
  isAuth;

  ngOnInit(){
    localStorage.getItem('tfs18') ? this.isAuth = true : this.isAuth = false;
  }
  showDroprown() {
    document.querySelector('#dropdown1').setAttribute('style','display: block') ;
    console.log('!');
  }
  
  hiddenDropDown(){
    document.querySelector('#dropdown1').setAttribute('style','display: none');
  }

}
