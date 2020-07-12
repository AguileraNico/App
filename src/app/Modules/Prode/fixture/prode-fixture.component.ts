import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { ProdeService } from 'src/app/Services/Prode/prode.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IUserProde } from 'src/app/Core/domain/prode/prode';

@Component({
  selector: 'app-prode-fixture',
  templateUrl: './prode-fixture.component.html',
  styleUrls: ['./prode-fixture.component.scss']
})
export class ProdeFixtureComponent implements OnInit {
  subscription: Subscription;
  headers: string[];
  rows: IUserProde[];
  date: string;
  tournament = 1;

  constructor(private prodeService: ProdeService, private snackBar: MatSnackBar) {
    this.date = new Date().toISOString();
  }

  ngOnInit(): void {
    this.prodeService.getUserFixture(1, 1).subscribe(value => {
      this.rows = value;
      this.headers = [...new Set<string>(value.map((header) => header.Day))];
      this.rows.map(x => {
        if (new Date(x.DateTime).toISOString() < this.date) {
          x.Editable = 0; // este va en cero cuando termine de testear
        } else {
          x.Editable = 1;
        }
      });
    });
    const source = interval(30000);
    this.subscription = source.subscribe(val => {
      this.date = new Date().toISOString();
      this.rows.map(x => {
        if (new Date(x.DateTime).toISOString() < this.date) {
          x.Editable = 0; // este va en cero cuando termine de testear
        } else {
          x.Editable = 1;
        }
      });
    });
  }

  autoSave(row: IUserProde) {
      this.prodeService.saveMatch(this.tournament, row.MatchCd, row.LocalGoal, row.VisitorGoal)
      .subscribe((res) => {
        if (res.code === undefined) {
          this.snackBar.open('Partido guardado exitosamente!', null, {duration: 2000});
        } else {
          this.snackBar.open('Error al guardar el partido!', null, {duration: 2000});
          this.ngOnInit();
        }
      });
  }

}
