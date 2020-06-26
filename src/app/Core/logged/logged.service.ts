import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { LoginService } from 'src/app/Services/login/login.service';

@Injectable({
  providedIn: 'root'
})
export class LoggedService implements CanActivate {

  constructor(private login: LoginService) { }

  canActivate(): boolean {
    if (localStorage.getItem('user') !== null) {
      this.login.login();
      return false;
    } else {
      return false;
    }
  }
}
