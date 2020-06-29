import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablePositionsComponent } from './Table/table-positions/table-positions.component';
import { MaterialModule } from '../Modules/Material/material.module';
import { TableFixtureComponent } from './Table/table-fixture/table-fixture.component';



@NgModule({
  declarations: [TablePositionsComponent, TableFixtureComponent],
  imports: [
    MaterialModule,
    CommonModule
  ],
  exports: [
    TablePositionsComponent,
    TableFixtureComponent
  ]
})

export class SharedModule { }
