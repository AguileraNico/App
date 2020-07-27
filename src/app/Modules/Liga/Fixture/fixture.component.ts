import { Component, OnInit } from '@angular/core';
import { IFixture } from 'src/app/Core/domain/liga/liga';
import * as firebase from 'firebase';

@Component({
  selector: 'app-fixture',
  templateUrl: './fixture.component.html',
  styleUrls: ['./fixture.component.scss']
})
export class FixtureComponent implements OnInit {
  headers: string[];
  rows: IFixture[] = [];
  editable = false;
  selected: number;
  control: number;
  ligaCd: number;
  divisionCd: number;

  constructor() {
  }

  ngOnInit(): void {
    firebase.database().ref('FechaActual').once('value', resp => {
      this.selected = resp.val().Fecha;
      this.control = resp.val().Control;
      firebase.database().ref(`Fecha/${resp.val().Fecha}`).once('value', resp => {
        this.rows = resp.val().filter(x => x.Dia != undefined);
        this.headers = [...new Set<string>(this.rows.map((header) => header.Dia))];
      })
    })
  }

  onChanges(event: any) {
    firebase.database().ref(`Fecha/${event}`).once('value', resp => {
      this.rows = resp.val().filter(x => x.Dia != undefined);
      this.headers = [...new Set<string>(this.rows.map((header) => header.Dia))];
    })
  }

  array(i: number) {
    return new Array(i);
  }

  nextRound() {
    if (this.selected < this.control) {
      this.selected++;
      this.onChanges(this.selected);
    }
  }

  previousRound() {
    if (this.selected > 1) {
      this.selected--;
      this.onChanges(this.selected);
    }
  }
}
