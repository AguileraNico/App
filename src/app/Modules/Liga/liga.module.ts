import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LigaComponent } from '../liga/liga.component';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from '../Material/material.module';
import { SharedModule } from 'src/app/Shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: LigaComponent
  }
];

@NgModule({
  declarations: [
    LigaComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LigaModule { }
