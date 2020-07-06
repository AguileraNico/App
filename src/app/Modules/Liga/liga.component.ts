import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liga',
  templateUrl: './liga.component.html',
  styleUrls: ['./liga.component.scss']
})
export class LigaComponent implements OnInit {
  activeId = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.addClass(this.router.url);
  }

  addClass(url: string): void {
    switch (url) {
      case '/liga/positions':
        this.activeId = 'positions';
        break;
      case '/liga/fixture':
        this.activeId = 'fixture';
        break;
      case '/liga/promedios':
        this.activeId = 'promedios';
        break;
      case '/liga/teams':
        this.activeId = 'teams';
        break;

    }
  }

}
