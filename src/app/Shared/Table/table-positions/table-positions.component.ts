import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table-positions',
  templateUrl: './table-positions.component.html',
  styleUrls: ['./table-positions.component.scss']
})
export class TablePositionsComponent implements OnInit {

  @Input() headers: any[];
  keys: string[];
  @Input() rows: any[];

  constructor() { }

  ngOnInit(): void {
    this.keys = this.headers.map(x => x.key);
  }

  readProperties(obj, path): string {
    return path.split('.').reduce((acc, part) => acc && acc[part], obj);
  }

}
