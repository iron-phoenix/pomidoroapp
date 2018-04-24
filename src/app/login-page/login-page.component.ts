import { Component, Input } from "@angular/core";

@Component ({
    selector: 'app-auth-page',
    templateUrl: './login-page.component.html'
})

export class LoginPageComponent {
    @Input() login;
    @Input() password;
}