import { Component, OnInit, Input, OnChanges, SimpleChanges, DoCheck } from '@angular/core';
import { IFixture } from 'src/app/Core/domain/liga/liga';
import { ProdeService } from 'src/app/Services/Prode/prode.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-table-fixture',
  templateUrl: './table-fixture.component.html',
  styleUrls: ['./table-fixture.component.scss']
})
export class TableFixtureComponent implements OnInit {
  @Input() headers: string[];
  @Input() rows: IFixture[];
  @Input() tournamentCd: number;

  constructor(private service: ProdeService, private snackBar: MatSnackBar) {}

  ngOnInit(): void {
  }

  autoSave(row: IFixture) {
    if (row.LocalGoal != null && row.VisitorGoal != null) {
      this.service.saveMatch(this.tournamentCd, row.MatchCd, row.LocalGoal, row.VisitorGoal)
      .subscribe((res) => this.snackBar.open('Partido guardado exitosamente!', null, {duration: 2000}));
    }
  }

}
