import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table-fixture',
  templateUrl: './table-fixture.component.html',
  styleUrls: ['./table-fixture.component.scss']
})
export class TableFixtureComponent implements OnInit {
  keys: string[];
  @Input() rows: any[];
  @Input() editable: boolean;

  constructor() { }

  ngOnInit(): void {
    // tslint:disable-next-line: only-arrow-functions
    this.keys = [...new Set<string>(this.rows.map( function(value) {return value.dia; }))];
  }
}
