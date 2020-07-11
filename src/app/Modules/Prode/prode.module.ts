import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdeComponent } from './prode.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/Shared/shared.module';
import { ProdeFixtureComponent } from './fixture/prode-fixture.component';
import { HistoryComponent } from './history/history.component';
import { ProdePositionsComponent } from './positions/prode-positions.component';
import { MaterialModule } from '../Material/material.module';

const routes: Routes = [
  {
    path: '',
    component: ProdeComponent,
    children: [
      {
        path: '',
        redirectTo: 'fixture',
        pathMatch: 'full'
      },
      {
        path: 'fixture',
        component: ProdeFixtureComponent
      },
      {
        path: 'history',
        component: HistoryComponent
      },
      {
        path: 'positions',
        component: ProdePositionsComponent
      }
    ]
  }
];

@NgModule({
  declarations: [ProdeComponent, ProdeFixtureComponent, HistoryComponent, ProdePositionsComponent],
  imports: [
    MaterialModule,
    SharedModule,
    CommonModule,
    RouterModule.forChild(routes)
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProdeModule { }
