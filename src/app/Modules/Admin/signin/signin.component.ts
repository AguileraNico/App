import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/Auth/auth.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  constructor(private auth: AuthService, private dialogRef: MatDialogRef<SigninComponent>) { }

  ngOnInit(): void {
  }

  async login(method: string) {
    switch (method) {
      case 'Google': {
        await this.auth.loginWithGoogle();
        break;
      }
      case 'Facebook': {
        await this.auth.loginWithFacebook();
        break;
      }
      case 'Twitter': {
        await this.auth.loginWithTwitter();
        break;
      }
    }
    this.dialogRef.close();
  }

}
