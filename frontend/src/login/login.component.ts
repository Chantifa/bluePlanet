import {Component} from '@angular/core';
import {LoginService} from "./login.service";

@Component({
  selector: 'login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  username: string;
  password: string;
  hide = true;
  constructor(private loginService: LoginService) {
    this.username = "";
    this.password = "";
  }

  onLogin(): void {
    this.loginService.login(this.username, this.password);
  }
}


