import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { LoginService } from 'src/app/Services/login/login.service';

@Injectable({
  providedIn: 'root'
})
export class LoggedService implements CanActivate {

  constructor(private login: LoginService) { }

  canActivate(): boolean {
    if (localStorage.user == 'null') {
      this.login.login();
      return false;
    } else {
      return true;
    }
  }
}
