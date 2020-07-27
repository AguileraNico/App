import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { ProdeService } from 'src/app/Services/Prode/prode.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IUserProde } from 'src/app/Core/domain/prode/prode';
import * as firebase from 'firebase';

@Component({
  selector: 'app-prode-fixture',
  templateUrl: './prode-fixture.component.html',
  styleUrls: ['./prode-fixture.component.scss']
})
export class ProdeFixtureComponent implements OnInit {
  subscription: Subscription;
  headers: string[];
  rows: IUserProde[] = [];
  date: string;
  tournament = 1;
  fixture = JSON.parse(localStorage.getItem('user')).uid;

  constructor(private prodeService: ProdeService, private snackBar: MatSnackBar) {
    this.date = new Date().toISOString();
  }

  ngOnInit(): void {
    firebase.database().ref('FechaActual').once('value', async actual => {
      await firebase.database().ref(`Fecha/${actual.val().Fecha}`).once('value', value => {
        value.forEach(x => {
          let row: IUserProde = {
            MatchCd: null,
            DateTime: null,
            Editable: null,
            Dia: null,
            Hora: null,
            Local: null,
            LocalGol: null,
            VisitanteGol: null,
            Visitante: null
          };
          row.Local = x.val().Local;
          row.Visitante = x.val().Visitante;
          row.Editable = x.val().Editable;
          row.Dia = x.val().Dia;
          row.Hora = x.val().Hora;
          firebase.database().ref(`UserProde/${this.fixture}/${actual.val().Fecha}/${x.key}`).once('value', resp => {
            if (resp.hasChild('LocalGol')) {
              row.LocalGol = resp.val().LocalGol;
              row.VisitanteGol = resp.val().VisitanteGol;
            }
          });
          this.rows.push(row);
        });
      });
      this.headers = [...new Set<string>(this.rows.map((header) => header.Dia))];
    });
    /*
    this.prodeService.getUserFixture(1, 1, 1).subscribe(value => {
      this.rows = value;
      this.headers = [...new Set<string>(value.map((header) => header.Day))];
      this.rows.map(x => {
        if (new Date(x.DateTime).toISOString() < this.date) {
          x.Editable = 0;
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
          x.Editable = 0;
        } else {
          x.Editable = 1;
        }
      });
    });
    */
  }

  autoSave(row: IUserProde) {
    /*
      this.prodeService.saveMatch(this.tournament, row.MatchCd, row.LocalGoal, row.VisitorGoal)
      .subscribe((res) => {
        if (res.code === undefined) {
          this.snackBar.open('Partido guardado exitosamente!', null, {duration: 2000});
        } else {
          this.snackBar.open('Error al guardar el partido!', null, {duration: 2000});
          this.ngOnInit();
        }
      });
    */
  }

}
