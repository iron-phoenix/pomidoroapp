import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { ReactiveFormsModule, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms'
import { CustomValidators } from '../../validators/passwordValidator';


@Component({
  selector: 'login-page',
  templateUrl: './login-page.component.html',  
  styleUrls: ['./login-page.component.less']
})
export class LoginPageComponent implements OnInit {

  inProcess = false;
  loginForm: FormGroup;

  constructor(private postService: PostService, private fb: FormBuilder ) { }
  
  ngOnInit() { 
    this.loginForm = this.fb.group ({
      login: ["",
        [
          Validators.minLength(6),
          Validators.required
        ]
      ],
      password: ["",
        [
          Validators.minLength(6),
          Validators.required,
          CustomValidators.checkPassword
        ]],
    })        
  }
  sendLoginData(obj) {
    this.postService.sendLoginData(obj.login, obj.password) ? location.replace("") : confirm("Неверный логин или пароль");
  }

}
