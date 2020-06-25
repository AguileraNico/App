import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/Services/Auth/auth.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  dataForm: FormGroup;
  error: string;

  constructor(private form: FormBuilder, private auth: AuthService, private dialogRef: MatDialogRef<RegisterComponent>) {}

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
      ],
      confirmPass: [
        '', [
          Validators.required
        ]
      ]
    },
    {
      validators: this.confirm()
    });
  }

  confirm() {
    return (formG: FormGroup) => {
      const pass = formG.controls.pass;
      const conf = formG.controls.confirmPass;
      if (pass.value !== conf.value) {
        conf.setErrors({confirm: true});
      } else {
        conf.setErrors(null);
      }
    };
  }

  register() {
    this.auth.register(this.dataForm.value.user, this.dataForm.value.pass)
    .catch(error => {
      switch (error.code) {
        case 'auth/email-already-in-use': {
          this.error = 'El mail introducido se encuentra en uso!';
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
