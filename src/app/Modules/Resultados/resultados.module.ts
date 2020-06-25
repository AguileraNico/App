import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultadosComponent } from '../resultados/resultados.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/Shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: ResultadosComponent
  }
];

@NgModule({
  declarations: [ResultadosComponent],
  imports: [
    SharedModule,
    CommonModule,
    RouterModule.forChild(routes)
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ResultadosModule { }
