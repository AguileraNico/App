import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-liga',
  templateUrl: './liga.component.html',
  styleUrls: ['./liga.component.scss']
})
export class LigaComponent implements OnInit {
  activeId = '';
  ligaCd: number;
  divisionCd: number;

  constructor(private router: Router, private route: ActivatedRoute) {
    router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.addClass(event.url);
      }
    });
  }

  ngOnInit(): void {
    this.addClass(this.router.url);
    this.ligaCd = parseInt(this.route.snapshot.queryParams.liga);
    this.divisionCd = parseInt(this.route.snapshot.queryParams.division);
  }

  addClass(url: string): void {
    switch (url.split('?')[0]) {
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
