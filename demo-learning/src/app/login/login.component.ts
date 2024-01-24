import { Component } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ss-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(
    private authenticationSvc: AuthenticationService,
    private router: Router
  ) {}

  authenticate() {
    debugger;
    this.authenticationSvc
      .login({ username: this.username, password: this.password })
      .subscribe((resp: any) => {
        sessionStorage.setItem('token', resp.token);
        this.authenticationSvc.isLoggedIn = true;
        this.router.navigate(['/products']);
      });
  }
}
