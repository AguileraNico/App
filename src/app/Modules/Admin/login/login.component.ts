import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder} from '@angular/forms';

import { AuthService } from 'src/app/Services/Auth/auth.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  dataForm: FormGroup;
  error: string;

  constructor(private auth: AuthService, private form: FormBuilder, private dialogRef: MatDialogRef<LoginComponent>) { }

  ngOnInit(): void {
    this.dataForm = this.form.group({
      user: [
        '', [
          Validators.email,
          Validators.required
        ]
      ],
      pass: [
        '', [
          Validators.required
        ]
      ]
    });
  }

  resetPassword() {

  }

  async login() {
    if (this.dataForm.valid) {
      await this.auth.login(this.dataForm.value.user, this.dataForm.value.pass)
      .catch(error => {
        switch (error.code) {
          case 'auth/wrong-password': {
            this.error = 'Contraseña incorrecta';
            this.dataForm.controls.pass.setErrors({pass: true});
            break;
          }
          case 'auth/too-many-requests': {
            this.error = 'Demasiados intentos fallidos, intente en unos minutos';
            this.dataForm.controls.user.setErrors({email: true});
            break;
          }
          case 'auth/user-not-found': {
            this.error = 'El usuario no fue encontrado';
            this.dataForm.controls.user.setErrors({email: true});
            break;
          }
        }
      });
      if (this.auth.user !== null || this.auth.user !== undefined) {
        this.dialogRef.close();
      }
    }
  }
}
