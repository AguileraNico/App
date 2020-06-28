import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-positions',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  headers: any = [{key:'pos', value:'#'}, {key:'name', value:'Equipo'}, {key:'pts', value:'Pts'}, {key:'PJ', value:'PJ'}, {key:'PG', value:'PG'}, {key:'PE', value:'PE'}, {key:'PP', value:'PP'}, {key:'GF', value:'GF'}, {key:'GC', value:'GC'}, {key:'DIF', value:'DIF'}];
  keys: string[];
  rows: any = [
    {pos:'1', name:'Gimnasia y Esgrima La Plata', pts:'30', PJ:'12', PG:'9', PE:'3', PP:'0', GF:'18', GC:'5', DIF:'13'},
    {pos:'2', name:'Boca', pts:'27', PJ:'12', PG:'9', PE:'0', PP:'3', GF:'15', GC:'5', DIF:'10'},
  ]

  constructor() { }

  ngOnInit(): void {
    this.keys = this.headers.map(x => x.key);
  }

  readProperties(obj, path): string {
    return path.split('.').reduce((acc, part) => acc && acc[part], obj);
  }

}
