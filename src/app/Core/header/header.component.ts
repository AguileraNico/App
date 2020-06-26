import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/Auth/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from 'src/app/Modules/Admin/login/login.component';
import { RegisterComponent } from 'src/app/Modules/Admin/register/register.component';
import { LoginService } from 'src/app/Services/login/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  notCount: number;

  constructor(private auth: AuthService, public dialog: MatDialog,
              private service: LoginService) { }

  ngOnInit(): void {
  }

  isLogged(): boolean {
    return this.auth.isLoggedIn();
  }

  setLogin(): void {
    this.service.login();
  }

  logout(): void {
    this.auth.logout();
  }

  register(): void {
   this.service.register();
  }
}
