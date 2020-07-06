import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LigaComponent } from '../liga/liga.component';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from '../Material/material.module';
import { SharedModule } from 'src/app/Shared/shared.module';
import { LigaService } from 'src/app/Services/Liga/liga.service';
import { PositionsComponent } from './positions/positions.component';
import { FixtureComponent } from './fixture/fixture.component';
import { PromediosComponent } from './promedios/promedios.component';
import { TeamsComponent } from './teams/teams.component';

const routes: Routes = [
  {
    path: '',
    component: LigaComponent,
    children: [
      {
        path: '',
        redirectTo: 'positions',
        pathMatch: 'full'
      },
      {
        path: 'positions',
        component: PositionsComponent
      },
      {
        path: 'fixture',
        component: FixtureComponent
      },
      {
        path: 'promedios',
        component: PromediosComponent
      },
      {
        path: 'teams',
        component: TeamsComponent
      }
    ]
  }
];

@NgModule({
  declarations: [
    PositionsComponent,
    LigaComponent,
    FixtureComponent,
    PromediosComponent,
    TeamsComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ],
  providers: [LigaService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LigaModule { }
