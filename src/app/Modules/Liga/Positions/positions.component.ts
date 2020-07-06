import { Component, OnInit } from '@angular/core';
import { LigaService } from 'src/app/Services/Liga/liga.service';
import { IPositions } from 'src/app/Core/domain/teams/liga';

@Component({
  selector: 'app-positions',
  templateUrl: './positions.component.html',
  styleUrls: ['./positions.component.scss']
})
export class PositionsComponent implements OnInit {
  headers: any = [{key: 'Equipo', value: 'Equipo'}, {key: 'Pts', value: 'Pts'},
  {key: 'Pj', value: 'PJ'},{key: 'Pg', value: 'PG'}, {key: 'Pe', value: 'PE'},
  {key: 'Pp', value: 'PP'}, {key: 'Gf', value: 'GF'}, {key: 'Gc', value: 'GC'}, {key: 'Dif', value: 'DIF'}];
  rows: IPositions[];
  
  constructor(private service: LigaService) { }

  ngOnInit(): void {
    this.service.getPositions(1).subscribe(value => {
      this.rows = value;
    })
  }

}
