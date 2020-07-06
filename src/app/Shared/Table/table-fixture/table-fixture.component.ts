import { Component, OnInit, Input } from '@angular/core';
import { IFixture } from 'src/app/Core/domain/teams/liga';

@Component({
  selector: 'app-table-fixture',
  templateUrl: './table-fixture.component.html',
  styleUrls: ['./table-fixture.component.scss']
})
export class TableFixtureComponent implements OnInit {
  @Input() headers: string[];
  @Input() rows: IFixture[];
  @Input() editable: boolean;

  constructor() {}

  ngOnInit(): void {
  }

}
