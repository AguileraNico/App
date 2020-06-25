import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/Auth/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from 'src/app/Modules/Admin/login/login.component';
import { RegisterComponent } from 'src/app/Modules/Admin/register/register.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  notCount: number;

  constructor(private auth: AuthService, public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  isLogged(): boolean {
    return this.auth.isLoggedIn();
  }

  setLogin(): void {
    const dialogRef = this.dialog.open(LoginComponent);
    dialogRef.afterClosed().subscribe(result => {
      switch (result) {
        case false: {
          this.register();
          break;
        }
        case undefined: break;
      }
    });
  }

  logout(): void {
    this.auth.logout();
  }

  register(): void {
   const dialogRef = this.dialog.open(RegisterComponent);
   dialogRef.afterClosed().subscribe(result => {
     if (result) {
        this.auth.register(result.user, result.pass);
     }
   });
  }
}
