import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultsComponent } from './results.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/Shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: ResultsComponent
  }
];

@NgModule({
  declarations: [ResultsComponent],
  imports: [
    SharedModule,
    CommonModule,
    RouterModule.forChild(routes)
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ResultsModule { }
