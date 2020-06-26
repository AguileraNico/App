import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { ProfileComponent } from './profile.component';

const ROUTES: Routes = [
  {
    path: '',
    component: ProfileComponent
  }
]

@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProfileModule { }
