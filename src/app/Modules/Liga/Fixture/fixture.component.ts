import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fixture',
  templateUrl: './fixture.component.html',
  styleUrls: ['./fixture.component.scss']
})
export class FixtureComponent implements OnInit {
  rows: any[] = [
    {dia: '1', hora:'14:30', local:'Gimnasia y Esgrima La Plata', localGoal: null, visitorGoal: null, visitante:'boca'},
    {dia: '1', hora:'14:30', local:'Gimna y Esgrima La Plata', localGoal: null, visitorGoal: null, visitante:'boca'},
    {dia: '2', hora:'20:00', local:'River', localGoal: null, visitorGoal: null, visitante:'Racing'},
  ];
  editable = false;

  constructor() { }

  ngOnInit(): void {
  }

}
