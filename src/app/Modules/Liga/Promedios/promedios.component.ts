import { Component, OnInit } from '@angular/core';
import { LigaService } from 'src/app/Services/Liga/liga.service';
import { IPromedios } from 'src/app/Core/domain/liga/liga';
import * as firebase from 'firebase';

@Component({
  selector: 'app-promedios',
  templateUrl: './promedios.component.html',
  styleUrls: ['./promedios.component.scss']
})
export class PromediosComponent implements OnInit {
  headers: any;
  rows: IPromedios[] = [];

  constructor(private service: LigaService) { }

  ngOnInit(): void {
    this.getData();
  }

  private getData() {
    firebase.database().ref('PromColumnas').once('value', resp => {
      this.headers = [{key: 'Equipo', value: 'Equipo'}, {key: 'Primera', value: resp.val().Primera}, {key: 'Segunda', value: resp.val().Segunda},
      {key: 'Tercera', value: resp.val().Tercera}, {key: 'Pts', value: 'Pts'}, {key: 'PJ', value: 'PJ'}, {key: 'Prom', value: 'Prom'}];
    });
    firebase.database().ref('Promedios').once('value', resp => {
      this.rows = resp.val().filter(x => x.Equipo != undefined);
    });
  }

}
