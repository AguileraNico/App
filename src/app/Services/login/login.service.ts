import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from 'src/app/Modules/Admin/login/login.component';
import { RegisterComponent } from 'src/app/Modules/Admin/register/register.component';
import { AuthService } from '../Auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private dialog: MatDialog, private auth: AuthService) { }

  login() {
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

  register(): void {
    const dialogRef = this.dialog.open(RegisterComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
         this.auth.register(result.user, result.pass);
      }
    });
   }
}
