import {Component} from '@angular/core';
import {LoginService} from "./login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  username: string;
  password: string;
  hide = true;
  constructor(private loginService: LoginService, private router: Router) {
    this.username = "";
    this.password = "";
  }

  onLogin(): void {
    this.loginService.login(this.username, this.password);
    this.router.navigate(['/schulinfo']);
  }
}


