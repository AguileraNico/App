import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IFixture } from 'src/app/Core/domain/liga/liga';

@Component({
  selector: 'app-table-fixture',
  templateUrl: './table-fixture.component.html',
  styleUrls: ['./table-fixture.component.scss']
})
export class TableFixtureComponent implements OnInit {
  @Input() headers: string[];
  @Input() rows: IFixture[];
  @Input() tournamentCd: number;
  @Output() save: EventEmitter<IFixture>;

  constructor() {
    this.save = new EventEmitter;
  }

  ngOnInit(): void {
  }

  autoSave(row:IFixture) {
    if (row.LocalGoal != null && row.VisitorGoal != null) {
    this.save.emit(row);
    }
  }

}
