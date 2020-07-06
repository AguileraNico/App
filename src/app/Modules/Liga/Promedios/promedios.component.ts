import { Component, OnInit } from '@angular/core';
import { LigaService } from 'src/app/Services/Liga/liga.service';
import { IPromedios } from 'src/app/Core/domain/teams/liga';

@Component({
  selector: 'app-promedios',
  templateUrl: './promedios.component.html',
  styleUrls: ['./promedios.component.scss']
})
export class PromediosComponent implements OnInit {
  headers: any = [{key: 'Equipo', value: 'Equipo'}, {key: 'Tercero', value: 'Tercero'}, {key: 'Segundo', value: 'Segundo'},
   {key: 'Primero', value: 'Primero'}, {key: 'Pts', value: 'Pts'}, {key: 'Pj', value: 'PJ'}, {key: 'Prom', value: 'Prom'}];
  rows: IPromedios[];

  constructor(private service: LigaService) { }

  ngOnInit(): void {
    this.service.getPromedios(1).subscribe(value => {
      this.rows = value;
    })
  }

}
