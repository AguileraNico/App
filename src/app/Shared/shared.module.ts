import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './Table/positions/table.component';
import { MaterialModule } from '../Modules/Material/material.module';
import { FixtureComponent } from './table/fixture/fixture.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';



@NgModule({
  declarations: [TableComponent, FixtureComponent],
  imports: [
    MaterialModule,
    CommonModule
  ],
  exports: [
    TableComponent,
    FixtureComponent
  ]
})

export class SharedModule { }
