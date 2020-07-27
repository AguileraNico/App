import { Component, OnInit } from '@angular/core';
import { IPositions } from 'src/app/Core/domain/liga/liga';
import * as firebase from 'firebase';

@Component({
  selector: 'app-positions',
  templateUrl: './positions.component.html',
  styleUrls: ['./positions.component.scss']
})
export class PositionsComponent implements OnInit {
  headers: any = [{key: 'Equipo', value: 'Equipo'}, {key: 'Pts', value: 'Pts'},
  {key: 'PJ', value: 'PJ'},{key: 'PG', value: 'PG'}, {key: 'PE', value: 'PE'},
  {key: 'PP', value: 'PP'}, {key: 'GF', value: 'GF'}, {key: 'GC', value: 'GC'}, {key: 'DIF', value: 'DIF'}];
  rows: IPositions[] = [];
  
  constructor() { }
 
  ngOnInit(): void {
    this.getData();
  }

  private getData() {
    firebase.database().ref('Posiciones').once('value', resp => {
      this.rows = resp.val().filter(x => x.Equipo != undefined);
    });
  }

}
