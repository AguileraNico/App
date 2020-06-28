import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { LoginService } from 'src/app/Services/login/login.service';
import { AuthService } from 'src/app/Services/Auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoggedService implements CanActivate {

  constructor(private login: LoginService, private auth: AuthService) { }

  canActivate(): boolean {
    if (this.auth.user === null) {
      this.login.login();
      return false;
    } else {
      return true;
    }
  }
}
