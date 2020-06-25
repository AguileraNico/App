import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fixture',
  templateUrl: './fixture.component.html',
  styleUrls: ['./fixture.component.scss']
})
export class FixtureComponent implements OnInit {
  keys: string[] = ['hora', 'local', 'visitante'];
  rows: any = [
    {hora:'14:30', local:'Gimnasia y Esgrima La Plata', visitante:'boca'},
    {hora:'20:00', local:'River', visitante:'Racing'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

  readProperties(obj, path): string {
    return path.split('.').reduce((acc, part) => acc && acc[part], obj);
  }
}
